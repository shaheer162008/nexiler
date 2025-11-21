"use client";

import React, { use, useEffect, useState } from "react";
import Link from "next/link";
import {
  getAdditionalUserInfo,
  getAuth,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";
import { app } from "../../../firebase/init";

const WelcomePage = () => {
  // set this to true from your logic when the box content should appear
  const [contentReady, setContentReady] = useState(false);

  // Confirm the link is a sign-in with email link.
  const auth = getAuth(app);
  useEffect(() => {
    if (auth.currentUser !== null) {
      setContentReady(true);
      return;
    }
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = localStorage.getItem("emailForSignIn");
      if (!email) {
        email = window.prompt("Please provide your email for confirmation");
      }
      if (!email) return;
      signInWithEmailLink(auth, email, window.location.href)
        .then((result) => {
          setContentReady(true);
          localStorage.removeItem("emailForSignIn");
          console.log(getAdditionalUserInfo(result));
          console.log(getAdditionalUserInfo(result)?.isNewUser);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [auth]);

  //   useEffect(() => {
  //     // placeholder: remove or replace with your actual logic to setContentReady(true)
  //     const t = setTimeout(() => setContentReady(true), 1600);
  //     return () => clearTimeout(t);
  //   }, []);

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-4xl">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 md:p-12">
          {/* When content is not ready show a single large box with green loader.
              When ready, render the full welcome layout. */}
          {!contentReady ? (
            <div
              className="w-full rounded-2xl h-72 md:h-80 border border-gray-100 bg-linear-to-br from-green-50 to-white flex items-center justify-center"
              role="status"
              aria-live="polite"
            >
              <div className="flex flex-col items-center gap-3 px-4 text-center">
                <div className="w-14 h-14 rounded-full border-4 border-nexiler border-t-transparent animate-spin" />
                <div className="text-sm text-nexiler font-medium">
                  Preparing your account…
                </div>
                <p className="text-xs text-gray-500 mt-2 max-w-xs">
                  Finalizing checks and setting up your session. This may take a
                  few seconds.
                </p>
                <p className="sr-only">Preparing your account. Please wait.</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Left: welcome text */}
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-black">
                  Welcome back!
                </h2>
                <p className="mt-3 text-sm md:text-base text-gray-600 max-w-xl">
                  Your account is ready. Choose where you'd like to go next —
                  jump into the app console to manage your resources or continue
                  to the public website.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <Link
                    href="/console"
                    className="inline-flex items-center justify-center px-5 py-3 bg-nexiler text-white rounded-lg font-semibold text-sm shadow hover:shadow-[0_0_16px_rgba(135,237,130,0.25)] transition"
                    aria-label="Continue to console"
                  >
                    Continue to Console
                  </Link>

                  <Link
                    href="/"
                    className="inline-flex items-center justify-center px-5 py-3 bg-white border border-gray-300 text-black rounded-lg font-semibold text-sm hover:border-nexiler transition"
                    aria-label="Continue to website"
                  >
                    Continue to Website
                  </Link>
                </div>

                <p className="text-xs text-gray-500 mt-4">
                  You can always switch between the console and website later
                  from the top-right menu.
                </p>
              </div>

              {/* Right: big square/rectangle accent */}
              <div className="w-full md:w-80 h-44 md:h-56 bg-linear-to-br from-green-50 to-white border border-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center px-4">
                  <div className="text-sm text-gray-500">Account</div>
                  <div className="mt-2 text-lg font-semibold text-black">
                    Good to see you 👋
                  </div>
                  <div className="mt-3 text-xs text-gray-500">
                    Member since 2024
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default WelcomePage;
