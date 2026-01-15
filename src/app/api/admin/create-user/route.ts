import { NextRequest, NextResponse } from "next/server";
import * as admin from "firebase-admin";

// Initialize Firebase Admin SDK if not already initialized
if (!admin.apps.length) {
  const privateKey = process.env.PRIVATE_KEY?.replace(/\\n/g, "\n");

  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.PROJECT_ID,
      clientEmail: process.env.CLIENT_EMAIL,
      privateKey: privateKey,
    }),
  });
}

export async function POST(request: NextRequest) {
  try {
    const { email, password, setupPassword } = await request.json();

    // Security: Require setup password
    if (setupPassword !== process.env.SETUP_PASSWORD || !process.env.SETUP_PASSWORD) {
      return NextResponse.json(
        { error: "Invalid setup password" },
        { status: 401 }
      );
    }

    // Validation
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters" },
        { status: 400 }
      );
    }

    // Create user in Firebase Authentication
    const userRecord = await admin.auth().createUser({
      email: email,
      password: password,
      displayName: "Admin User",
      emailVerified: true,
    });

    // Set custom claims for admin role
    await admin.auth().setCustomUserClaims(userRecord.uid, { admin: true });

    return NextResponse.json(
      {
        success: true,
        message: `Admin user created successfully!`,
        user: {
          uid: userRecord.uid,
          email: userRecord.email,
          displayName: userRecord.displayName,
        },
        instructions: [
          "✅ Admin user created successfully!",
          `📧 Email: ${email}`,
          "🔐 Use the password you provided to login at /admin",
          "⚠️ This endpoint should be disabled after use",
        ],
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating admin user:", error);

    // Handle specific Firebase errors
    if (error.code === "auth/email-already-exists") {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 409 }
      );
    }

    if (error.code === "auth/invalid-email") {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: error.message || "Failed to create admin user" },
      { status: 500 }
    );
  }
}

// GET endpoint to check if admin exists (optional)
export async function GET(request: NextRequest) {
  try {
    const setupPassword = request.nextUrl.searchParams.get("password");

    if (setupPassword !== process.env.SETUP_PASSWORD || !process.env.SETUP_PASSWORD) {
      return NextResponse.json(
        { error: "Invalid setup password" },
        { status: 401 }
      );
    }

    const adminUser = await admin.auth().getUserByEmail("admin@virtuoedge.tech");

    return NextResponse.json({
      exists: true,
      message: "Admin user already exists",
      email: adminUser.email,
    });
  } catch (error: any) {
    if (error.code === "auth/user-not-found") {
      return NextResponse.json({
        exists: false,
        message: "Admin user does not exist. Create one with POST request.",
      });
    }

    return NextResponse.json(
      { error: error.message || "Error checking admin user" },
      { status: 500 }
    );
  }
}
