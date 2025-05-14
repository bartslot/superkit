'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signup } from '@/app/signup/actions';
import { AuthenticationForm } from '@/components/authentication/authentication-form';

export function SignupForm() {
  // form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // toast state
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastVariant, setToastVariant] = useState<'default' | 'destructive'>('default');

  // auto‑dismiss toast after 3 seconds
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
      setToastVariant('destructive');
      setToastMessage('Something went wrong. Please try again');
    }
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleSignup();
      }}
      className="
        relative
        px-6 md:px-16
        pb-6 py-8
        gap-6
        flex flex-col items-center justify-center
      "
    >
      {/* Toast */}
      {toastMessage && (
        <div
          className={`
            absolute top-4 left-1/2 transform -translate-x-1/2
            px-4 py-2 rounded-md shadow-md
            ${toastVariant === 'destructive' ? 'bg-red-600 text-white' : 'bg-gray-800 text-white'}
          `}
        >
          {toastMessage}
        </div>
      )}

      {/* Logo */}
      <Image
        src="/assets/icons/logo/aeroedit-icon.svg"
        alt="AeroEdit"
        width={80}
        height={80}
      />

      {/* Heading */}
      <div className="text-[30px] leading-[36px] font-medium tracking-[-0.6px] text-center">
        Create an account
      </div>

      {/* Email & Password Fields */}
      <AuthenticationForm
        email={email}
        onEmailChange={setEmail}
        password={password}
        onPasswordChange={setPassword}
      />

      {/* Sign Up Button */}
      <button
        type="submit"
        className="
          w-full
          px-4 py-2
          border border-border
          rounded-md
          bg-background/80 backdrop-blur
          hover:opacity-90 transition
        "
      >
        Sign up
      </button>
    </form>
  );
}
