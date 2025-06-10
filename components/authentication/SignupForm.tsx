"use client";

import { useState, useEffect } from "react";
import { signup } from "@/app/signup/actions";
import { AuthenticationForm } from "@/components/authentication/AuthenticationForm";

export function SignupForm() {
  // form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // toast state
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastVariant, setToastVariant] = useState<"default" | "destructive">("default");
  
  // auto-dismiss toast after 3 seconds
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);
  
  // handlers
  async function handleSignup() {
    const res = await signup({ email, password });
    if (res?.error) {
      setToastVariant("destructive");
      setToastMessage("Something went wrong. Please try again");
    }
  }
  
  return (
    <div className="w-full max-w-md mx-auto rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 pb-14 relative">
        <div className="absolute w-full left-0 bottom-0">
          <svg viewBox="0 0 1440 120" className="text-background" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 C240,60 480,100 720,100 C960,100 1200,60 1440,0 L1440,120 L0,120 Z"></path>
          </svg>
        </div>
        <div className="flex flex-col items-center relative">
        <h1 className="text-bold text-2xl">⚡uperKit</h1>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Join Drift
          </h1>
          <p className="text-muted-foreground mt-2 text-center">
            Create an account to start your journey
          </p>
        </div>
      </div>

      <form
        onSubmit={e => {
          e.preventDefault();
          handleSignup();
        }}
        className="relative px-8 py-6 bg-background"
      >
        {/* Toast */}
        {toastMessage && (
          <div
            className={`
              absolute top-2 left-1/2 transform -translate-x-1/2
              px-4 py-2 rounded-md shadow-md text-sm font-medium
              flex items-center gap-2 z-50 animate-fade-in
              ${toastVariant === "destructive" ? "bg-red-600 text-white" : "bg-gray-800 text-white"}
            `}
          >
            {toastVariant === "destructive" && (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            )}
            {toastMessage}
          </div>
        )}

        {/* Email & Password Fields */}
        <div className="my-4">
          <AuthenticationForm
            email={email}
            onEmailChange={setEmail}
            password={password}
            onPasswordChange={setPassword}
          />
        </div>


        {/* Sign Up Button */}
        <button
          type="submit"
          className="w-full px-4 py-2.5 bg-primary text-black rounded-md hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 font-medium"
        >
          Create Account
        </button>

      </form>
    </div>
  );
}