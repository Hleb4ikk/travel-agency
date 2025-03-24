import Logo from '../logo/logo';

export default function Footer() {
  return (
    <footer className="w-full bg-[#04b2b1]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 justify-center p-4">
        <div>
          <Logo className="size-24" />
          <h1 className="font-bold">Adventure Belarus</h1>
          <p className="w-[300px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, temporibus!</p>
        </div>
        <div>sec3</div>
      </div>
      <div className="mx-auto max-w-[1440px] p-4">level2</div>
      <div className="mx-auto max-w-[1440px] p-4">level3</div>
    </footer>
  );
}
