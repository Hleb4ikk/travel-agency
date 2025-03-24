import Logo from '../logo/logo';

import { Telegram, Instagram, X, Youtube } from '@/components/extension-ui/icons/icons';
export default function Footer() {
  return (
    <footer className="w-full bg-[#04b2b1] shadow-sm">
      <div className="mx-auto grid max-w-[1440px] gap-3 p-4 lg:grid-cols-2">
        <div className="flex flex-col items-center lg:items-stretch">
          <Logo className="size-24" />
          <h1 className="font-bold">Adventure Belarus</h1>
          <p className="w-[300px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, temporibus!</p>
        </div>
        <div className="flex flex-wrap justify-center gap-16 lg:flex-nowrap lg:gap-32 lg:justify-self-end">
          <div>
            <h1 className="border-b-[1px] border-black pb-1 font-bold">Услуги</h1>
            <div className="pt-3">
              <ul>
                <li>Туры</li>
                <li>Экскурсии</li>
                <li>Интересные места</li>
                <li>О проекте</li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="whitespace-nowrap border-b-[1px] border-black pb-1 font-bold">Социальные сети</h1>
            <div className="pt-3">
              <ul>
                <li>Instagram</li>
                <li>X</li>
                <li>Telegram</li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="border-b-[1px] border-black pb-1 font-bold">Контакты</h1>
            <div className="pt-3">
              <ul>
                <li>+375 29 101-11-21</li>
                <li>adv.bel@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="flex items-center justify-center gap-10 lg:justify-stretch">
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
        <div className="lg:items-none flex flex-col items-center whitespace-nowrap lg:flex-row lg:gap-20">
          <div className="order-3 lg:order-none">© 2025 Adventure Belarus</div>
          <div>Пользовательское соглашение</div>
          <div>Политика конфиденциальности</div>
        </div>
      </div>
    </footer>
  );
}
