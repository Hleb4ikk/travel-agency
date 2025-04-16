'use client';

import { Input } from '@/components/ui/input';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function Search() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');

    if (query !== null) {
      if (inputRef.current) {
        inputRef.current.value = query;
      }
    }
  }, []);

  useEffect(() => {
    const currentInput = inputRef.current;

    async function handleInput() {
      const params = new URLSearchParams(searchParams);
      if (timerId !== null) {
        clearTimeout(timerId);
      }
      setTimerId(
        setTimeout(() => {
          if (currentInput?.value !== '' && currentInput?.value !== undefined) {
            params.set('query', currentInput?.value);
          } else {
            params.delete('query');
          }
          router.replace(`${pathname}?${params.toString()}`);
        }, 800),
      ); // Use the saved ref value
    }

    currentInput?.addEventListener('input', handleInput);
    return () => {
      currentInput?.removeEventListener('input', handleInput);
    };
  }, [pathname, router, searchParams, timerId]);

  return (
    <Input
      ref={inputRef}
      className="max-w-[300px] border-2 border-[#bbbbbb] shadow-sm shadow-[#bbbbbb] focus-visible:ring-2 focus-visible:ring-offset-0"
    />
  );
}
