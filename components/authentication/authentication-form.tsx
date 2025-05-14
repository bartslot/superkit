'use client';

import React from 'react';

interface Props {
  email: string;
  password: string;
  onEmailChange: (email: string) => void;
  onPasswordChange: (password: string) => void;
}

export function AuthenticationForm({
  email,
  onEmailChange,
  onPasswordChange,
  password,
}: Props) {
  return (
    <>
      {/* Email Field */}
      <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
        <label
          htmlFor="email"
          className="text-muted-foreground leading-5 text-sm font-medium"
        >
          Email address
        </label>
        <input
          id="email"
          type="email"
          autoComplete="username"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          className="
            w-full
            px-3 py-2
            border border-border
            rounded-xs
            bg-background
            focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-accent
          "
        />
      </div>

      {/* Password Field */}
      <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
        <label
          htmlFor="password"
          className="text-muted-foreground leading-5 text-sm font-medium"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => onPasswordChange(e.target.value)}
          className="
            w-full
            px-3 py-2
            border border-border
            rounded-xs
            bg-background
            focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-accent
          "
        />
      </div>
    </>
  );
}
