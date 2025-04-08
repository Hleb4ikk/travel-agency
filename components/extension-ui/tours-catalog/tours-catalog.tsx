'use client';

import TourCard, { Tour } from '@/components/extension-ui/tours-catalog/tour-card/tour-card';
import { useEffect, useState } from 'react';
import { fetchTours } from '@/db/utils';
import TourCardSkeleton from './tour-card/skeleton';

export default function ToursCatalog({ callback }: { callback: (arr: Array<Tour> | null) => void }) {
  const [toursCardInfo, setToursCardInfo] = useState<Array<Tour> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchTours();
        setToursCardInfo(result);
        callback(result);
      } catch (error) {
        console.error('Failed to fetch tours:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [callback]);

  return (
    <section className="flex flex-wrap items-center gap-6">
      {isLoading && <TourCardSkeleton />}
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
