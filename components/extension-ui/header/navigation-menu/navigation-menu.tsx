import Logo from '../../logo/logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import PullOutMenu from '@/components/extension-ui/header/pull-out-menu/pull-out-menu'

export default function NavigationMenu() {
  return (
    <div className="bg-[#04b2b1]">
      <div className="mx-auto flex max-w-[1440px] items-center justify-center px-4 pb-1 text-[1.5em] max-[923px]:gap-8">
        <Logo className="mr-auto size-24 lg:size-28" />
        <nav className="mx-auto mr-auto hidden min-[924px]:flex">
          <ul className="flex gap-10">
            <li>
              <Link
                className="transition-colors hover:text-white active:text-[#dddddd]"
                href="/tours"
              >
                Туры
              </Link>
            </li>
            <li>
              <Link
                className="transition-colors hover:text-white active:text-[#dddddd]"
                href="/excursions"
              >
                Экскурсии
              </Link>
            </li>
            <li className="whitespace-nowrap">
              <Link
                className="transition-colors hover:text-white active:text-[#dddddd]"
                href="/interesting_places"
              >
                Интересные места
              </Link>
            </li>
            <li>
              <Link
                className="transition-colors hover:text-white active:text-[#dddddd]"
                href="/contacts"
              >
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
        <Button className="ml-auto whitespace-nowrap rounded-full border-[1px] border-black py-6 text-[0.9em] font-semibold hover:bg-black hover:text-white active:text-[#aaaaaa]">
          Выбрать <span className="inline-block min-[924px]:hidden lg:inline-block">тур</span>
        </Button>
        <div className="hidden max-[923px]:block">
          <PullOutMenu/>
        </div>
      </div>
    </div>
  );
}
