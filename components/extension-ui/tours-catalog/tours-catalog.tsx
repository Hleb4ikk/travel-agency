'use client';

import TourCard, { Tour } from '@/components/extension-ui/tours-catalog/tour-card/tour-card';
import { useEffect, useState } from 'react';
import { fetchTours } from '@/db/utils';
import TourCardSkeleton from './tour-card/skeleton';
import { useSearchParams } from 'next/navigation';

export default function ToursCatalog({ callback }: { callback: (arr: Array<Tour> | null) => void }) {
  const [toursCardInfo, setToursCardInfo] = useState<Array<Tour> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const query = useSearchParams().get('query');
  const [filteredTours, setFilteredTours] = useState<Array<Tour> | undefined>(undefined);

  useEffect(() => {
    setFilteredTours(toursCardInfo?.filter((tour) => tour.title.toLowerCase().includes(query?.toLowerCase() ?? '')));
  }, [toursCardInfo, query]);

  useEffect(() => {
    callback(filteredTours ?? null);
  }, [callback, filteredTours]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchTours();
        setToursCardInfo(result);
      } catch (error) {
        console.error('Failed to fetch tours:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="flex flex-wrap items-center gap-6">
      {isLoading && (
        <>
          <TourCardSkeleton />
          <TourCardSkeleton />
          <TourCardSkeleton />
          <TourCardSkeleton />
          <TourCardSkeleton />
          <TourCardSkeleton />
          <TourCardSkeleton />
          <TourCardSkeleton />
          <TourCardSkeleton />
          <TourCardSkeleton />
        </>
      )}
      {filteredTours &&
        filteredTours.length != 0 &&
        filteredTours.map((tour) => (
          <TourCard
            key={tour.id}
            title={tour.title}
            description={tour.description}
          />
        ))}
    </section>
  );
}
