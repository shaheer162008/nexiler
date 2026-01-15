import * as admin from "firebase-admin";

// Validate environment variables
if (!process.env.PROJECT_ID || !process.env.CLIENT_EMAIL || !process.env.PRIVATE_KEY) {
  throw new Error("❌ Missing Firebase admin environment variables! Check .env file.");
}

// Initialize Firebase Admin
if (!admin.apps.length) {
  const privateKey = process.env.PRIVATE_KEY
    ? process.env.PRIVATE_KEY.replace(/\\n/g, '\n')
    : undefined;

  if (!privateKey) {
    throw new Error("❌ PRIVATE_KEY is empty or invalid in .env!");
  }

  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.PROJECT_ID,
        clientEmail: process.env.CLIENT_EMAIL,
        privateKey: privateKey,
      }),
    });
    console.log("✅ Firebase Admin SDK initialized successfully");
  } catch (error: any) {
    console.error("❌ Firebase Admin initialization error:", error.message);
    throw error;
  }
}

export const admindb = admin.firestore();
