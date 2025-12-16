"use client";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TimezoneTestPage() {
  const [timezoneInfo, setTimezoneInfo] = useState<any>(null);

  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const now = new Date();
    
    setTimezoneInfo({
      timezone: tz,
      localTime: now.toLocaleString(),
      utcTime: now.toUTCString(),
      offset: -now.getTimezoneOffset() / 60,
      country: tz.split('/')[0],
      city: tz.split('/')[1],
    });
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-white mb-8">🌍 Timezone Test</h1>
          
          {timezoneInfo && (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-white/60">Browser Timezone:</div>
                <div className="text-white font-bold">{timezoneInfo.timezone}</div>
                
                <div className="text-white/60">Country/Region:</div>
                <div className="text-white font-bold">{timezoneInfo.country}</div>
                
                <div className="text-white/60">City:</div>
                <div className="text-white font-bold">{timezoneInfo.city}</div>
                
                <div className="text-white/60">UTC Offset:</div>
                <div className="text-white font-bold">UTC {timezoneInfo.offset > 0 ? '+' : ''}{timezoneInfo.offset}</div>
                
                <div className="text-white/60">Your Local Time:</div>
                <div className="text-white font-bold">{timezoneInfo.localTime}</div>
                
                <div className="text-white/60">UTC Time:</div>
                <div className="text-white font-bold">{timezoneInfo.utcTime}</div>
              </div>
              
              <div className="mt-8 p-4 bg-primary/10 border border-primary/30 rounded-xl">
                <p className="text-white/80 text-sm">
                  ✅ <strong>Testing Instructions:</strong>
                </p>
                <ul className="text-white/60 text-sm mt-2 space-y-1 ml-4">
                  <li>• Open browser DevTools (F12)</li>
                  <li>• Go to Console tab</li>
                  <li>• You'll see timezone detection logs</li>
                  <li>• Fill the consultation form and submit</li>
                  <li>• Check console for submitted data</li>
                </ul>
              </div>

              <div className="mt-6 p-4 bg-white/5 rounded-xl">
                <p className="text-white/80 text-sm font-bold mb-2">
                  🧪 Change Timezone for Testing:
                </p>
                <ol className="text-white/60 text-sm space-y-2 ml-4">
                  <li>1. Open DevTools (F12)</li>
                  <li>2. Press Ctrl+Shift+P (Cmd+Shift+P on Mac)</li>
                  <li>3. Type "timezone" and select "Show Sensors"</li>
                  <li>4. Choose different timezone from dropdown</li>
                  <li>5. Refresh page to see new timezone</li>
                </ol>
              </div>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
