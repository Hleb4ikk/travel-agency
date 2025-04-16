'use server';

import { db } from './db';
import { tours, tags, tourTags } from './schema';
import { Tour } from '@/components/extension-ui/tours-catalog/tour-card/tour-card';
import { eq } from 'drizzle-orm';

export async function fetchTours() {
  try {
    return await db.select({ id: tours.id, title: tours.title, description: tours.description }).from(tours);
  } catch (error) {
    console.error('Failed to fetch tours:', error);
    return null;
  }
}

export async function fetchTags(tour: Tour) {
  return await db
    .select({ tagName: tags.tag })
    .from(tourTags)
    .innerJoin(tags, eq(tourTags.tagId, tags.id))
    .where(eq(tourTags.tourId, tour.id));
}
