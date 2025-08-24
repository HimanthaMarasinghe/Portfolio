"use client";
import { useState, useEffect } from "react";

export default function LandingPage() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false); // loading finished
          return 100;
        }
        return prev + 2; // increment progress
      });
    }, 40); // adjust speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-full w-full text-white flex-col">
      {loading ? (
        <div className="w-full lg:w-1/2">
          <div className="h-4 w-full bg-transparent border border-[#00f5d4] p-1 overflow-hidden">
            <div
              className="h-full bg-[#00f5d4] transition-all duration-40"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="mt-4 text-center">Loading...</p>
        </div>
      ) : (
        <div className="text-center animate-fadeIn">
          <h1 className="text-7xl lg:text-9xl font-bold mb-2">Welcome</h1>
          <p className="text-[#cdcdcd] lg:hidden"  style={{ fontFamily: 'var(--font-geist-sans)' }}>
            Select a tab from the bottom tab bar.
          </p>
          <p className="text-[#cdcdcd] hidden lg:block text-xl"  style={{ fontFamily: 'var(--font-geist-sans)' }}>
            Select a tab from the left tab bar.
          </p>
        </div>
      )}
    </div>
  );
}