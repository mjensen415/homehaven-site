import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface WalkthroughRequest {
  name: string;
  email: string;
  phone: string;
  address: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  description: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: WalkthroughRequest = await req.json();
    console.log("Received walkthrough request:", { name: formData.name, email: formData.email });

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Store submission in database
    const { error: dbError } = await supabase
      .from("walkthrough_submissions")
      .insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        service_type: formData.serviceType,
        preferred_date: formData.preferredDate,
        preferred_time: formData.preferredTime,
        description: formData.description,
      });

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error(`Failed to store submission: ${dbError.message}`);
    }

    console.log("Submission stored successfully");

    // Send email notification - REPLACE WITH YOUR EMAIL
    const emailResponse = await resend.emails.send({
      from: "GV House <onboarding@resend.dev>",
      to: ["info@gvhouse.com"],
      subject: `New Home Assessment Request from ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333;">New Home Assessment Request</h1>
          
          <h2 style="color: #666;">Contact Information</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Address:</strong> ${formData.address}</p>
          
          <h2 style="color: #666;">Service Details</h2>
          <p><strong>Service Type:</strong> ${formData.serviceType || "Not specified"}</p>
          <p><strong>Preferred Date:</strong> ${formData.preferredDate || "Not specified"}</p>
          <p><strong>Preferred Time:</strong> ${formData.preferredTime || "Not specified"}</p>
          
          ${formData.description ? `
            <h2 style="color: #666;">Additional Details</h2>
            <p>${formData.description}</p>
          ` : ''}
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
          <p style="color: #999; font-size: 12px;">
            This email was sent from your GV House website walkthrough form.
          </p>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ success: true, message: "Walkthrough request submitted successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-walkthrough-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
