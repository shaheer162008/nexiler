import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { admindb } from "../../../../firebase/firebase-admin";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // Basic validation
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { message: "Invalid email" },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existing = await admindb
      .collection("newsletterEmails")
      .where("email", "==", email)
      .limit(1)
      .get();

    if (!existing.empty) {
      return NextResponse.json(
        { 
          message: "You're already subscribed to our newsletter! 🎉",
          success: true,
          alreadySubscribed: true
        },
        { status: 200 }
      );
    }

    // Save email to Firestore
    await admindb.collection("newsletterEmails").add({
      email,
      subscribedAt: new Date(),
      source: "website-newsletter",
    });

    // ---- SEND PROMOTIONAL EMAIL ----
    try {
      // Validate email credentials exist
      if (!process.env.EMAIL_ADRESS || !process.env.PASSWORD) {
        console.warn("⚠️ Email credentials missing - skipping email send");
      } else {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_ADRESS,
            pass: process.env.PASSWORD,
          },
        });

        // Verify connection
        await transporter.verify();

        await transporter.sendMail({
          from: `"Virtuo Edge" <${process.env.EMAIL_ADRESS}>`,
          to: email,
          subject: "Welcome to Our Newsletter 🚀",
          html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px;">
          <!-- Header with Logo -->
          <div style="background: linear-gradient(135deg, #33BBCF, #1a8a9a); padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 700;">Virtuo Edge</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0 0; font-size: 14px;">Digital Innovation & Growth</p>
          </div>

          <!-- Main Content -->
          <div style="background: white; padding: 40px 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #333; font-size: 20px; margin-top: 0;">Thanks for subscribing! 🎉</h2>
            
            <p style="color: #555; font-size: 15px; line-height: 1.6;">
              You'll now receive updates on:
            </p>
            
            <ul style="color: #666; font-size: 15px; line-height: 2;">
              <li>✨ AI automation solutions</li>
              <li>💻 Web & app development tips</li>
              <li>🎯 Exclusive offers & insights</li>
            </ul>
            
            <p style="color: #555; font-size: 15px; line-height: 1.6;">
              If you're looking to automate or scale your business, feel free to reply to this email.
            </p>

            <div style="border-top: 2px solid #f0f0f0; padding-top: 20px; margin-top: 30px; text-align: center;">
              <p style="color: #666; font-size: 14px; margin: 0;">
                <strong style="color: #33BBCF;">— Team Virtuo Edge</strong>
              </p>
              <p style="color: #999; font-size: 12px; margin-top: 15px;">
                © 2026 Virtuo Edge. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      `,
        });

        console.log("✅ Newsletter email sent successfully to:", email);
      }
    } catch (emailError: any) {
      console.error("⚠️ Email sending error:", emailError.message);
      // Don't fail the request if email fails - subscription is still saved
    }

    return NextResponse.json(
      { 
        message: "Subscribed successfully! Check your inbox for confirmation.",
        success: true,
        email: email
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter API error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
