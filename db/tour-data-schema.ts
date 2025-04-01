import { uuid, varchar } from 'drizzle-orm/pg-core';
import { pgTable } from 'drizzle-orm/pg-core';

export const tourDataTable = pgTable('tourData', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: varchar('title', { length: 128 }).notNull(),
  description: varchar('description', {length: 128}).notNull(),
  
});
