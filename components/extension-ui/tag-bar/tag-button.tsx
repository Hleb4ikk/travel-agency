'use client';

import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export default function TagButton({ className, children, ...props }: ButtonProps) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Button
      {...props}
      className={cn(className, `${isClicked ? 'bg-[#aaaaaa]' : 'bg-[#dddddd]'} rounded-full px-2 py-1`)}
      onClick={() => setIsClicked(!isClicked)}
    >
      {children}
    </Button>
  );
}
