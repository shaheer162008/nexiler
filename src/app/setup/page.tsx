"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

interface SetupStatus {
  step: number;
  message: string;
  type: "info" | "success" | "error";
}

const SetupDashboard = () => {
  const [step, setStep] = useState(0); // 0: Input, 1: Processing, 2: Complete

  const [firebaseConfig, setFirebaseConfig] = useState<FirebaseConfig>({
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: "",
  });

  const [adminEmail, setAdminEmail] = useState("admin@example.com");
  const [adminPassword, setAdminPassword] = useState("Admin@1234");
  const [setupPassword, setSetupPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [statuses, setStatuses] = useState<SetupStatus[]>([]);
  const [completed, setCompleted] = useState(false);

  const addStatus = (message: string, type: "info" | "success" | "error" = "info") => {
    setStatuses((prev) => [...prev, { step: prev.length + 1, message, type }]);
  };

  const handleConfigChange = (field: keyof FirebaseConfig, value: string) => {
    setFirebaseConfig((prev) => ({ ...prev, [field]: value }));
  };

  const validateInputs = (): boolean => {
    if (
      !firebaseConfig.apiKey ||
      !firebaseConfig.authDomain ||
      !firebaseConfig.projectId
    ) {
      addStatus("❌ Firebase config is incomplete!", "error");
      return false;
    }

    if (!adminEmail.includes("@")) {
      addStatus("❌ Invalid admin email!", "error");
      return false;
    }

    if (adminPassword.length < 6) {
      addStatus("❌ Password must be at least 6 characters!", "error");
      return false;
    }

    return true;
  };

  const handleStartSetup = async () => {
    if (!validateInputs()) return;

    setIsLoading(true);
    setStep(1);
    setStatuses([]);

    try {
      addStatus("📝 Starting setup process...", "info");

      // Step 1: Create Admin User
      addStatus("👤 Creating admin user...", "info");
      const adminResponse = await fetch("/api/admin/create-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: adminEmail,
          password: adminPassword,
          setupPassword: setupPassword || "default-setup-password",
        }),
      });

      if (!adminResponse.ok) {
        const error = await adminResponse.json();
        addStatus(`❌ Admin creation failed: ${error.error}`, "error");
        setIsLoading(false);
        return;
      }

      const adminData = await adminResponse.json();
      addStatus(`✅ Admin user created: ${adminEmail}`, "success");

      // Step 2: Setup Sample Data
      addStatus("📚 Populating sample data...", "info");
      const sampleResponse = await fetch("/api/setup-sample-data?password=virtuo-edge-setup-2026");

      if (sampleResponse.ok) {
        const sampleData = await sampleResponse.json();
        addStatus("✅ Sample data created successfully!", "success");
        addStatus(`   - Blog ID: ${sampleData.data.blog.id}`, "info");
        addStatus(`   - Newsletter: ${sampleData.data.newsletter.email}`, "info");
      } else {
        addStatus("⚠️ Sample data setup skipped (optional)", "info");
      }

      // Step 3: Complete
      addStatus("🎉 Setup complete! Your website is ready!", "success");
      addStatus(
        `📧 Login with: ${adminEmail} at /admin`,
        "info"
      );

      setCompleted(true);
      setStep(2);
    } catch (error: any) {
      addStatus(`❌ Error: ${error.message}`, "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              🚀 Website Setup Dashboard
            </h1>
            <p className="text-xl text-gray-600">
              Configure Firebase and initialize your website in 2 minutes
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Input Form */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Firebase Configuration
                </h2>

                {/* Firebase Config Fields */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      API Key
                    </label>
                    <input
                      type="text"
                      value={firebaseConfig.apiKey}
                      onChange={(e) => handleConfigChange("apiKey", e.target.value)}
                      placeholder="AIzaSy..."
                      className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Auth Domain
                    </label>
                    <input
                      type="text"
                      value={firebaseConfig.authDomain}
                      onChange={(e) => handleConfigChange("authDomain", e.target.value)}
                      placeholder="project-name.firebaseapp.com"
                      className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Project ID
                    </label>
                    <input
                      type="text"
                      value={firebaseConfig.projectId}
                      onChange={(e) => handleConfigChange("projectId", e.target.value)}
                      placeholder="project-name"
                      className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Storage Bucket
                    </label>
                    <input
                      type="text"
                      value={firebaseConfig.storageBucket}
                      onChange={(e) => handleConfigChange("storageBucket", e.target.value)}
                      placeholder="project-name.appspot.com"
                      className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Messaging Sender ID
                    </label>
                    <input
                      type="text"
                      value={firebaseConfig.messagingSenderId}
                      onChange={(e) => handleConfigChange("messagingSenderId", e.target.value)}
                      placeholder="123456789"
                      className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      App ID
                    </label>
                    <input
                      type="text"
                      value={firebaseConfig.appId}
                      onChange={(e) => handleConfigChange("appId", e.target.value)}
                      placeholder="1:123456789:web:abcd..."
                      className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Measurement ID
                    </label>
                    <input
                      type="text"
                      value={firebaseConfig.measurementId}
                      onChange={(e) => handleConfigChange("measurementId", e.target.value)}
                      placeholder="G-XXXXXXXXXX"
                      className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* Admin Credentials */}
                <div className="mt-8 pt-8 border-t border-gray-200 space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Admin Credentials</h3>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Admin Email
                    </label>
                    <input
                      type="email"
                      value={adminEmail}
                      onChange={(e) => setAdminEmail(e.target.value)}
                      placeholder="admin@example.com"
                      className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Admin Password
                    </label>
                    <input
                      type="password"
                      value={adminPassword}
                      onChange={(e) => setAdminPassword(e.target.value)}
                      placeholder="Strong password"
                      className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Setup Password (Optional)
                    </label>
                    <input
                      type="password"
                      value={setupPassword}
                      onChange={(e) => setSetupPassword(e.target.value)}
                      placeholder="Leave blank for default"
                      className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* Start Button */}
                {!completed && (
                  <button
                    onClick={handleStartSetup}
                    disabled={isLoading}
                    className="w-full mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="animate-spin w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        </svg>
                        Setting up...
                      </>
                    ) : (
                      <>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2v20m10-10H2" />
                        </svg>
                        Start Setup
                      </>
                    )}
                  </button>
                )}

                {completed && (
                  <div className="mt-8 p-6 bg-green-50 border-2 border-green-200 rounded-lg text-center">
                    <div className="text-4xl mb-2">✅</div>
                    <h3 className="text-lg font-bold text-green-900 mb-2">Setup Complete!</h3>
                    <p className="text-green-700 mb-4">Your website is ready to use</p>
                    <a
                      href="/admin"
                      className="inline-block px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
                    >
                      Go to Admin Dashboard →
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Status Log */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Setup Progress</h2>

              {statuses.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mx-auto mb-4 opacity-50">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <p>Setup logs will appear here</p>
                </div>
              ) : (
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {statuses.map((status) => (
                    <div
                      key={status.step}
                      className={`p-4 rounded-lg flex gap-3 ${
                        status.type === "success"
                          ? "bg-green-50 text-green-800 border border-green-200"
                          : status.type === "error"
                          ? "bg-red-50 text-red-800 border border-red-200"
                          : "bg-blue-50 text-blue-800 border border-blue-200"
                      }`}
                    >
                      <span className="font-semibold min-w-fit">{status.step}.</span>
                      <span className="text-sm break-words">{status.message}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Info Box */}
              <div className="mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <h3 className="font-semibold text-yellow-900 mb-2">📝 How to Get Firebase Config:</h3>
                <ol className="text-sm text-yellow-800 space-y-2 list-decimal list-inside">
                  <li>Go to Firebase Console → Your Project</li>
                  <li>Click Settings (⚙️) → Project Settings</li>
                  <li>Scroll to "Your apps" → Web app</li>
                  <li>Copy the entire config object</li>
                  <li>Paste each field above</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="font-bold text-gray-900 mb-2">Firebase Setup</h3>
              <p className="text-gray-600 text-sm">Connect your Firebase project in seconds</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-4">👤</div>
              <h3 className="font-bold text-gray-900 mb-2">Admin User</h3>
              <p className="text-gray-600 text-sm">Automatic admin account creation</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-bold text-gray-900 mb-2">Sample Data</h3>
              <p className="text-gray-600 text-sm">Get started with demo content</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default SetupDashboard;
