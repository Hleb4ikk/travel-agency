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

export const tags = pgTable('tags', {
  id: serial('id').primaryKey(),
  tag: varchar('tag', { length: 128 }).unique().notNull(),
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

export const tourTags = pgTable('tour_tags', {
  id: serial('id').primaryKey(),
  tourId: uuid('tour_id').references(() => tours.id),
  tagId: serial('tag_id').references(() => tags.id),
});

export const tourTagsRelations = relations(tourTags, ({ one }) => ({
  tour: one(tours, {
    fields: [tourTags.tourId],
    references: [tours.id],
  }),
  tag: one(tags, {
    fields: [tourTags.tagId],
    references: [tags.id],
  }),
}));
