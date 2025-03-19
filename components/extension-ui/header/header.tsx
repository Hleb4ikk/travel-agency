import TopBar from './top-bar/top-bar';
import NavigationMenu from './navigation-menu/navigation-menu';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex w-full flex-col shadow-xl">
      <TopBar />
      <NavigationMenu />
    </header>
  );
}
