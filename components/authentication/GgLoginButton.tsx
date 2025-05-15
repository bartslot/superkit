'use client';

import { useState } from 'react';
import Image from 'next/image';
import { signInWithGoogle } from '@/app/login/actions';

interface Props {
  label: string;
  className?: string;
}

export function GgLoginButton({ label, className }: Props) {
  const [isHovering, setIsHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  
  return (
    <div className={`mx-auto w-full max-w-[343px] md:max-w-[488px] bg-background/80 backdrop-blur-md px-4 sm:px-6 md:px-16 py-6 md:py-8 rounded-lg shadow-sm flex flex-col items-center space-y-6 ${className}`}>
      {/* Native Separator */}
      <div className="flex w-full items-center text-muted-foreground text-xs font-medium">
        <div className="flex-1 h-px bg-border" />
        <span className="px-3 md:px-4">or continue with</span>
        <div className="flex-1 h-px bg-border" />
      </div>
      
      <button
        onClick={() => signInWithGoogle()}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false);
          setIsPressed(false);
        }}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        className={`flex items-center justify-center w-full gap-2 border border-border bg-background/70 py-2 md:py-3 px-4 rounded-md transition-all duration-200
          ${isHovering ? 'bg-gray-400/90' : 'bg-background/70'} 
          ${isPressed ? 'scale-98 shadow-inner' : 'shadow-sm hover:shadow'}
          focus:outline-none focus:ring-2 focus:ring-primary/30`}
      >
        <Image 
          height={20} 
          width={20} 
          src="https://cdn.simpleicons.org/google/4285F4" 
          alt="Google logo" 
          className="mr-1"
          unoptimized 
        />
        <span className="text-sm font-medium md:text-base">{label}</span>
      </button>
    </div>
  );
}