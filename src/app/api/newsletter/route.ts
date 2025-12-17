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
        { message: "Email already subscribed" },
        { status: 409 }
      );
    }

    // Save email to Firestore
    await admindb.collection("newsletterEmails").add({
      email,
      subscribedAt: new Date(),
      source: "website-newsletter",
    });

    // ---- SEND PROMOTIONAL EMAIL ----
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_ADRESS,
      pass: process.env.PASSWORD,
    },
  });

    await transporter.sendMail({
      from: "no-reply@nexiler.tech",
      to: email,
      subject: "Welcome to Our Newsletter 🚀",
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6">
          <h2>Thanks for subscribing! 🎉</h2>
          <p>
            You'll now receive updates on:
          </p>
          <ul>
            <li>AI automation solutions</li>
            <li>Web & app development tips</li>
            <li>Exclusive offers & insights</li>
          </ul>
          <p>
            If you’re looking to automate or scale your business,
            feel free to reply to this email.
          </p>
          <br/>
          <strong>— Your Team</strong>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Subscribed successfully" },
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
