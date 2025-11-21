"use client";

import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../../firebase/init";
import { useRouter } from "next/navigation";
import Link from "next/link";

const page = () => {
  const router = useRouter();
  const signout = () => {
    const auth = getAuth(app);
    signOut(auth)
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-green-50 to-white border border-gray-100 flex items-center justify-center text-2xl font-bold text-nexiler">
              {/* {user?.displayName?.[0]?.toUpperCase() ?? user?.email?.[0]?.toUpperCase() ?? 'U'} */}
            </div>

            <div className="flex-1">
              <h1 className="text-xl font-semibold text-black">
                Welcome,
                {/* {user?.displayName ?? user?.email ?? 'User'} */}
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Access your console to manage projects, billing and settings.
              </p>
            </div>

            <div className="ml-auto hidden sm:flex gap-2">
              <Link
                href="/"
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm hover:border-nexiler transition"
              >
                Visit website
              </Link>

              <button
                onClick={signout}
                className="px-4 cursor-pointer py-2 bg-nexiler text-white rounded-lg text-sm disabled:opacity-60 transition"
              >
                {/* {loading ? 'Signing out...' : 'Logout'} */}
                Logout
              </button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/console/projects"
              className="p-4 bg-gray-50 border border-gray-100 rounded-lg hover:shadow-sm transition"
            >
              <h3 className="font-medium text-black">Projects</h3>
              <p className="text-xs text-gray-500 mt-1">
                View and manage your projects.
              </p>
            </Link>

            <Link
              href="/console/billing"
              className="p-4 bg-gray-50 border border-gray-100 rounded-lg hover:shadow-sm transition"
            >
              <h3 className="font-medium text-black">Billing</h3>
              <p className="text-xs text-gray-500 mt-1">
                Manage subscriptions and invoices.
              </p>
            </Link>

            <Link
              href="/console/settings"
              className="p-4 bg-gray-50 border border-gray-100 rounded-lg hover:shadow-sm transition"
            >
              <h3 className="font-medium text-black">Settings</h3>
              <p className="text-xs text-gray-500 mt-1">
                Update account preferences.
              </p>
            </Link>
          </div>

          <div className="sm:hidden mt-6 flex gap-3">
            <Link
              href="/"
              className="flex-1 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-center"
            >
              Visit website
            </Link>

            <button
              onClick={signout}
              className="flex-1 px-4 py-2 bg-nexiler text-white rounded-lg text-sm"
            >
              Logout
              {/* {loading ? 'Signing out...' : 'Logout'} */}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
