import { uuid, varchar, pgTable, serial } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: varchar('email', { length: 128 }).notNull(),
  hashedPassword: varchar('hashedPassword', { length: 128 }).notNull(),
});

export const tours = pgTable('tours', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: varchar('title', { length: 128 }).notNull(),
  description: varchar('description', { length: 512 }).notNull(),
});

export const userTours = pgTable('user_tours', {
  id: serial('id').primaryKey(),
  userId: uuid('user_id').references(() => users.id),
  tourId: uuid('product_id').references(() => tours.id),
});

export const userProductsRelations = relations(userTours, ({ one }) => ({
  user: one(users, {
    fields: [userTours.userId],
    references: [users.id],
  }),
  tour: one(tours, {
    fields: [userTours.tourId],
    references: [tours.id],
  }),
}));