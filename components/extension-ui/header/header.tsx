import Logo from "../logo/logo";

import NavigationMenu from "../navigation-menu/navigation-menu";
export default function Header() {
  return (
    <header className="p-2 border-bottom border-dashed border-b-2 border-slate-400 sticky flex items-center justify-center w-full h-32 bg-[#dbb40f]">
      <Logo className="size-28" />
      <NavigationMenu />
    </header>
  );
}
