import Logo from '../logo/logo';

import { Telegram, Instagram, X, Youtube } from '@/components/extension-ui/icons/icons';
export default function Footer() {
  return (
    <footer className="w-full bg-[#04b2b1]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 p-4">
        <div>
          <Logo className="size-24" />
          <h1 className="font-bold">Adventure Belarus</h1>
          <p className="w-[300px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, temporibus!</p>
        </div>
        <div className="flex gap-32 justify-self-end">
          <div>
            <h1 className="border-b-[1px] border-black pb-1 font-bold">Services</h1>
            <div className="pt-3">
              <ul className="">
                <li>Tours</li>
                <li>Excursions</li>
                <li>Interesting Places</li>
                <li>About Project</li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="border-b-[1px] border-black pb-1 font-bold">Social Media</h1>
            <div className="pt-3">
              <ul>
                <li>Instagram</li>
                <li>X</li>
                <li>Telegram</li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="border-b-[1px] border-black pb-1 font-bold">Contacts</h1>
            <div className="pt-3">
              <ul>
                <li>+375 29 101-11-21</li>
                <li>adv.bel@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1440px] p-4">
        <div className="flex items-center gap-10">
          <a
            className="transition-colors hover:fill-white"
            href="https://www.instagram.com/adventurebelarus/"
          >
            <Instagram className="size-8" />
          </a>
          <a
            className="transition-colors hover:fill-white"
            href=""
          >
            <X className="size-8" />
          </a>
          <a
            className="transition-colors hover:fill-white"
            href=""
          >
            <Telegram className="size-8" />
          </a>
          <a
            className="transition-colors hover:fill-white"
            href=""
          >
            <Youtube className="size-8" />
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-[1440px] p-4">
        <div className="flex gap-20">
          <div>© 2025 Adventure Belarus</div>
          <div>Пользовательское соглашение</div>
          <div>Политика конфиденциальности</div>
        </div>
      </div>
    </footer>
  );
}
