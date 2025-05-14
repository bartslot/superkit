'use client';

import Image from 'next/image';
import { login, loginAnonymously } from '@/app/login/actions';
import { useState, useEffect } from 'react';
import { AuthenticationForm } from '@/components/authentication/authentication-form';

export function LoginForm() {
  // form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // toast state
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastVariant, setToastVariant] = useState<'default' | 'destructive'>('default');

  // auto‑dismiss toast after 3s
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
      setToastVariant('destructive');
      setToastMessage('Invalid email or password');
    }
  }

  async function handleAnonymousLogin() {
    const res = await loginAnonymously();
    if (res?.error) {
      setToastVariant('destructive');
      setToastMessage('Something went wrong. Please try again');
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin();
      }}
      className="
        relative
        px-6 md:px-16 pb-6 py-8 gap-6
        flex flex-col items-center justify-center
      "
    >
      {/* Toast */}
      {toastMessage && (
        <div
          className={`
            absolute top-4 left-1/2 transform -translate-x-1/2
            px-4 py-2 rounded-md shadow-md
            ${toastVariant === 'destructive'
              ? 'bg-red-600 text-white'
              : 'bg-gray-800 text-white'}
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
        Log in to your account
      </div>

      {/* Guest & Login Buttons */}
      <button
        type="button"
        onClick={handleAnonymousLogin}
        className="
          w-full mt-6
          px-4 py-2
          border border-border
          rounded-md
          bg-background/80 backdrop-blur
          hover:opacity-90
          transition
        "
      >
        Log in as Guest
      </button>

      {/* Separator */}
      <div className="flex w-full items-center justify-center">
        <div className="flex-1 h-px bg-border" />
        <span className="px-4 text-xs text-border font-medium">or</span>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Email/Password Form */}
      <AuthenticationForm
        email={email}
        onEmailChange={setEmail}
        password={password}
        onPasswordChange={setPassword}
      />

      {/* Submit */}
      <button
        type="submit"
        className="
          w-full
          px-4 py-2
          border border-border
          rounded-md
          bg-background/80 backdrop-blur
          hover:opacity-90
          transition
        "
      >
        Log in
      </button>
    </form>
  );
}
