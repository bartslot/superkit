"use client";

import Image from "next/image";
import { login, loginAnonymously } from "@/app/login/actions";
import { useState, useEffect } from "react";
import { AuthenticationForm } from "@/components/authentication/AuthenticationForm";
import Link from "next/link";

interface LoginFormProps {
  hideSignUpLink?: boolean;
}

export function LoginForm({ hideSignUpLink = false }: LoginFormProps) {
  // form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // toast state
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastVariant, setToastVariant] = useState<"default" | "destructive">("default");
  
  // auto-dismiss toast after 3s
  useEffect(() => {
    if (toastMessage) {
      const id = setTimeout(() => setToastMessage(null), 3000);
      return () => clearTimeout(id);
    }
  }, [toastMessage]);
  
  // handlers
  async function handleLogin() {
    const res = await login({ email, password });
    if (res?.error) {
      setToastVariant("destructive");
      setToastMessage("Invalid email or password");
    }
  }
  
  async function handleAnonymousLogin() {
    const res = await loginAnonymously();
    if (res?.error) {
      setToastVariant("destructive");
      setToastMessage("Something went wrong. Please try again");
    }
  }
  
  return (
    <div className="w-full">
      <div className="w-full rounded-lg overflow-hidden flex flex-col">
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 pb-10 relative shrink-0">
          <div className="absolute w-full left-0 bottom-0">
            <svg viewBox="0 0 1440 120" className="text-background" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,0 C240,60 480,100 720,100 C960,100 1200,60 1440,0 L1440,120 L0,120 Z"></path>
            </svg>
          </div>
          <div className="flex flex-col items-center relative z-10">
            <Image
              src="/assets/icons/logo/aeroedit-icon.svg"
              alt="AeroEdit"
              width={60}
              height={60}
              className="mb-1"
            />
            <h1 className="text-2xl font-semibold tracking-tight text-foreground">
              Welcome back
            </h1>
            <p className="text-muted-foreground mt-1 text-center text-sm">
              Log in to your account to continue your workflow
            </p>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
          className="relative px-6 py-4 bg-background"
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

          {/* Guest Login Button */}
          <button
            type="button"
            onClick={handleAnonymousLogin}
            className="w-full flex items-center justify-center px-4 py-2 bg-background border border-border rounded-md hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 mb-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Log in as Guest
          </button>

          {/* Separator */}
          <div className="relative flex items-center justify-center w-full mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative z-10 px-3 bg-background">
              <span className="text-xs text-muted-foreground">or with email</span>
            </div>
          </div>

          {/* Email & Password Form */}
          <AuthenticationForm
            email={email}
            onEmailChange={setEmail}
            password={password}
            onPasswordChange={setPassword}
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full px-4 py-2 mt-10 bg-primary text-black rounded-md hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 font-medium"
          >
            Log in
          </button>

        </form>
      </div>
    </div>
  );
}