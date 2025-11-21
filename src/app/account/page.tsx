'use client';

import React, { FormEvent, useState } from 'react';
import Link from 'next/link';
import { getAuth, GoogleAuthProvider, sendSignInLinkToEmail, signInWithPopup } from "firebase/auth";
import { app } from '../../../firebase/init';
import { useRouter } from 'next/navigation';


const Account = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sent' | 'error'>('idle');

  const router = useRouter();

  const provider = new GoogleAuthProvider()


  const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: 'https://nexiler.vercel.app/welcome',
  // This must be true.
  handleCodeInApp: true,
  // The domain must be configured in Firebase Hosting and owned by the project.
  // linkDomain: 'nexiler.aisolutionpk.com',
};
  const auth = getAuth(app);

  const signInWithLink=(e:FormEvent) =>{
    e.preventDefault();
      sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
          setStatus('sent');
          // Save the email locally so you don't need to ask the user for it again
          // if they open the link on the same device.
          localStorage.setItem('emailForSignIn', email);
    // ...
})
.catch((error) => {
    setStatus('error');
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
});
}

const signInWithGoogle=(e:FormEvent)=>{
  e.preventDefault();
signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    if (!credential) {
      console.log("No credential or access token");
      return
    };
    // const token = credential.accessToken;
    // const user = result.user;
    router.push('/welcome')
    // ...
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Error code:", errorCode);
    console.log("Error message:", errorMessage);
    // const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log("Credential:", credential);
    // ...
  });
}

  return (
    <main className="min-h-[115vh] flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
        <h1 className="text-2xl font-bold text-black mb-2">Create or login in existing account</h1>
        <p className="text-sm text-gray-600 mb-6">Enter your email and we'll send a sign-in link. No password required.</p>

        <form 
        onSubmit={(e)=>signInWithLink(e)}
         className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nexiler focus:border-nexiler transition"
            />
          </label>

          <button
            type="submit"
            className="w-full cursor-pointer px-4 py-2.5 bg-nexiler text-white rounded-lg font-semibold hover:shadow-[0_0_16px_rgba(135,237,130,0.25)] transition"
          >
            Send link on email
          </button>

          {status === 'error' && (
            <p className="text-sm text-red-600">Please enter a valid email address.</p>
          )}
          {status === 'sent' && (
            <p className="text-sm text-green-600">Sign-in link sent. Check your inbox.</p>
          )}
        </form>

        <div className="mt-6 flex items-center">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="px-3 text-sm text-gray-500">or</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <button
          onClick={(e)=>signInWithGoogle(e)}
          className="mt-6 w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg px-4 py-2 hover:shadow-sm transition"
        >
          <span className="w-5 h-5 relative">
            {/* Inline Google SVG */}
            <svg viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M533.5 278.4c0-18.2-1.6-36-4.7-53.2H272v100.8h146.9c-6.3 34.1-25.5 62.9-54.6 82v67h88.2c51.6-47.5 81-117.7 81-196.6z" fill="#4285f4"/>
              <path d="M272 544.3c73.7 0 135.6-24.5 180.8-66.5l-88.2-67c-24.5 16.5-55.8 26.2-92.6 26.2-71 0-131.2-47.9-152.6-112.2H30.3v70.6C75.8 487.2 168.6 544.3 272 544.3z" fill="#34a853"/>
              <path d="M119.4 321.3c-10.9-32.9-10.9-68.8 0-101.7V149H30.3c-39.7 79.3-39.7 173.1 0 252.4l89.1-80.1z" fill="#fbbc04"/>
              <path d="M272 107.7c39.9 0 75.8 13.7 104 40.6l78-78C407.6 22.6 345.7 0 272 0 168.6 0 75.8 57.1 30.3 149l89.1 70.6C140.8 155.6 201 107.7 272 107.7z" fill="#ea4335"/>
            </svg>
          </span>
          <span className="text-sm font-medium text-black">Sign in with Google</span>
        </button>

        <p className="text-xs text-gray-500 mt-4 text-center">
          By continuing you agree to our <Link href="/terms" className="text-nexiler font-medium">Terms</Link> and <Link href="/privacy" className="text-nexiler font-medium">Privacy Policy</Link>.
        </p>
      </div>
    </main>
  );
};

export default Account;