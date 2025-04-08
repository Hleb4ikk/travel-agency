'use client';

import { Tour } from '@/components/extension-ui/tours-catalog/tour-card/tour-card';
import { useState } from 'react';
import TagBar from '@/components/extension-ui/tag-bar';
import Search from '@/components/extension-ui/search';
import ToursCatalog from '@/components/extension-ui/tours-catalog/tours-catalog';

export default function Tours() {
  const [tours, setTours] = useState<Array<Tour> | null>(null);

  function formatNumberString(n: number) {
    const mod10 = n % 10;
    const mod100 = n % 100;

    if (mod10 === 1 && mod100 !== 11) {
      return `Найден ${n} тур`;
    } else if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) {
      return `Найдено ${n} тура`;
    } else {
      return `Найдено ${n} туров`;
    }
  }

  return (
    <div>
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 p-4">
        <section>
          <h1 className="text-4xl font-bold">Поиск туров по Беларуси</h1>
        </section>
        <TagBar />
        <section className="flex items-center">
          <Search />
          <div className="flex flex-grow justify-end">
            {tours && tours?.length != 0 ? <p>{formatNumberString(tours.length)}</p> : <p>Туры не найдены</p>}
          </div>
        </section>
        <ToursCatalog callback={setTours} />
      </div>
    </div>
  );
}
