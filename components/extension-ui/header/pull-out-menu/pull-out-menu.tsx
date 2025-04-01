'use client';

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
export default function PullOutMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 923) {
        setIsOpen(false);
      }
      console.log('resize');
    }
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Sheet
      onOpenChange={() => setIsOpen(!isOpen)}
      open={isOpen}
    >
      <SheetTrigger>
        <Menu className="size-6" />
      </SheetTrigger>
      <SheetContent className="w-full border-none bg-[#04b2b1] sm:max-w-full">
        <SheetTitle>
          <Link
            className="transition-colors hover:text-white active:text-[#dddddd]"
            onClick={() => setIsOpen(false)}
            href={'/tours'}
          >
            Туры
          </Link>
        </SheetTitle>
        <SheetTitle>
          <Link
            className="transition-colors hover:text-white active:text-[#dddddd]"
            onClick={() => setIsOpen(false)}
            href={'/excurtions'}
          >
            Экскурсии
          </Link>
        </SheetTitle>
        <SheetTitle>
          <Link
            className="whitespace-nowrap transition-colors hover:text-white active:text-[#dddddd]"
            onClick={() => setIsOpen(false)}
            href={'/interesting_places'}
          >
            Интересные места
          </Link>
        </SheetTitle>
        <SheetTitle>
          <Link
            className="transition-colors hover:text-white active:text-[#dddddd]"
            onClick={() => setIsOpen(false)}
            href={'/contacts'}
          >
            Контакты
          </Link>
        </SheetTitle>
      </SheetContent>
    </Sheet>
  );
}
