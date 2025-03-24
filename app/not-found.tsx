import Link from 'next/link';


export default function NotFound() {
  return (
    <div className="flex flex-grow flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-2xl">Страница не найдена</p>
      <Link
        href="/"
        className="text-xl text-blue-500 hover:text-blue-700 hover:underline active:text-blue-800"
      >
        Вернуться на главную
      </Link>
    </div>
  );
}
