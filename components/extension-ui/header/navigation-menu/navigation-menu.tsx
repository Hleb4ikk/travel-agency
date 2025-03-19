import Logo from '../../logo/logo';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

export default function NavigationMenu() {
  return (
    <div className="bg-[#04b2b1]">
      <div className="mx-auto flex max-w-[1440px] items-center justify-center px-4 pb-1 text-[1.5em] max-[878px]:gap-8">
        <Logo className="mr-auto size-24 lg:size-28" />
        <nav className="mx-auto mr-auto hidden min-[878px]:flex">
          <ul className="flex gap-10">
            <li>Tours</li>
            <li>Excursions</li>
            <li className="whitespace-nowrap">Interesting Places</li>
            <li>Contacts</li>
          </ul>
        </nav>
        <Button className="ml-auto whitespace-nowrap rounded-full border-[1px] border-black py-6 text-[0.9em] font-semibold hover:bg-black hover:text-white active:text-[#aaaaaa]">
          Choose <span className="inline-block min-[878px]:hidden lg:inline-block">tour</span>
        </Button>
        <div className="hidden max-[878px]:block">
          <Menu className="size-6" />
        </div>
      </div>
    </div>
  );
}
