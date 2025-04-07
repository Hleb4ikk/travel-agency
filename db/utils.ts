'use server';
import { db } from './db';
import { tours } from './schema';

// Утилита для создания задержки

export async function fetchTours() {
  try {
    return await db.select({ id: tours.id, title: tours.title, description: tours.description }).from(tours);
  } catch (error) {
    console.error('Failed to fetch tours:', error);
    return null;
  }
}
