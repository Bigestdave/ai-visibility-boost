import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, website, category, competitors, notes } =
      await req.json();

    // Validate required fields
    if (!name || !email || !company || !website) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Save to database
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error: dbError } = await supabase.from("form_submissions").insert({
      name,
      email,
      company,
      website,
      category: category || null,
      competitors: competitors || null,
      notes: notes || null,
    });

    if (dbError) {
      console.error("DB insert error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save submission" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send email notification via Resend
    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (resendKey) {
      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Citeable <onboarding@resend.dev>",
          to: ["francolabowale@gmail.com"],
          subject: `New AI Visibility Request: ${company}`,
          html: `
            <h2>New Form Submission</h2>
            <table style="border-collapse:collapse;width:100%;max-width:600px;">
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ddd;">${name}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${email}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Company</td><td style="padding:8px;border:1px solid #ddd;">${company}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Website</td><td style="padding:8px;border:1px solid #ddd;">${website}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Category</td><td style="padding:8px;border:1px solid #ddd;">${category || "N/A"}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Competitors</td><td style="padding:8px;border:1px solid #ddd;">${competitors || "N/A"}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Notes</td><td style="padding:8px;border:1px solid #ddd;">${notes || "N/A"}</td></tr>
            </table>
          `,
        }),
      });

      if (!emailRes.ok) {
        const errBody = await emailRes.text();
        console.error("Resend error:", emailRes.status, errBody);
      }
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
