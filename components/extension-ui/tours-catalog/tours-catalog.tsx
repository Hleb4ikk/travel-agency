'use client';

import TourCard, { Tour } from '@/components/extension-ui/tours-catalog/tour-card/tour-card';
import { useEffect, useState } from 'react';
import { fetchTours } from '@/db/utils';
export default function ToursCatalog({ ref }: { ref: React.RefObject<Array<Tour> | null> }) {
  const [toursCardInfo, setToursCardInfo] = useState<Array<Tour> | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchTours();
        ref.current = result;
        setToursCardInfo(result);
      } catch (error) {
        console.error('Failed to fetch tours:', error);
      }
    };

    fetchData();
  }, [ref]);

  return (
    <section className="flex flex-wrap items-center gap-6">
      {toursCardInfo &&
        toursCardInfo.length != 0 &&
        toursCardInfo.map((tour) => (
          <TourCard
            key={tour.id}
            title={tour.title}
            description={tour.description}
          />
        ))}
    </section>
  );
}
