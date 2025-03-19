import { Mail, Phone, MapPin, CircleUser } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TopBar() {
  return (
    <div className="bg-black">
      <div className="mx-auto flex max-w-[1440px] items-center px-4 text-[0.95em] text-[#bbbbbb]">
        <ul className="flex h-10 w-full items-center">
          <li className="after:mx-3 after:content-['|']">en</li>
          <li className="hidden items-center gap-1 after:mx-3 after:content-['|'] md:flex">
            <Mail size={20} />
            adv.bel@gmail.com
          </li>
          <li className="flex items-center gap-1 after:mx-3 md:after:content-['|']">
            <Phone size={20} />
            <a
              className="whitespace-nowrap hover:text-[#5898fc] active:text-[#4287f5]"
              href="tel:1234567890"
            >
              +375 29 101-11-21
            </a>
          </li>
          <li className="hidden items-center gap-1 md:flex">
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
  );
}
