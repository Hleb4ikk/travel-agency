import Logo from '../logo/logo';
import { MapPin } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
import { CircleUser } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="border-bottom sticky flex w-full flex-col border-b-2 border-dashed border-slate-400">
      <div className="bg-black">
        <div className="mx-auto flex max-w-[1440px] items-center px-4 text-[0.95em] text-[#bbbbbb]">
          <ul className="flex h-10 w-full items-center">
            <li className="after:mx-3 after:content-['|']">en</li>
            <li className="flex items-center gap-1 after:mx-3 after:content-['|']">
              <Mail size={20} />
              adv.bel@gmail.com
            </li>
            <li className="flex items-center gap-1 after:mx-3 after:content-['|']">
              <Phone size={20} />
              +375 29 101-11-21
            </li>
            <li className="flex items-center gap-1">
              <MapPin size={20} />
              Grodno, Belarus
            </li>
          </ul>
          <Button className="ml-auto flex items-center justify-center gap-1 text-[1em] shadow-none hover:text-[#5898fc] active:text-[#4287f5]">
            <CircleUser size={20} />
            <span className="whitespace-nowrap">My account</span>
          </Button>
        </div>
      </div>
      <div className="bg-[#dbb40f]">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-center px-4 text-[1.5em] lg:h-auto">
          <Logo className="mr-auto hidden size-28 lg:block" />
          <nav className="mr-auto lg:mr-0">
            <ul className="flex gap-10">
              <li>Tours</li>
              <li>Excursions</li>
              <li className="whitespace-nowrap">Interesting Places</li>
              <li>Contacts</li>
            </ul>
          </nav>
          <Button className="ml-auto whitespace-nowrap rounded-full border-[1px] border-black py-6 text-[0.9em] font-semibold hover:bg-black hover:text-white active:text-[#aaaaaa]">
            Choose tour
          </Button>
        </div>
      </div>
    </header>
  );
}
