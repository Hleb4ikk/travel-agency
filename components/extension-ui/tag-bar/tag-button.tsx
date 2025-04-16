'use client';

import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export default function TagButton({ className, children, ...props }: ButtonProps) {
  return (
    <Button
      {...props}
      className={cn('rounded-full bg-[#dddddd] px-2 py-1 transition-colors', className)}
    >
      {children}
    </Button>
  );
}
