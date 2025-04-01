import { varchar } from 'drizzle-orm/pg-core';
import { uuid } from 'drizzle-orm/pg-core';
import { pgTable } from 'drizzle-orm/pg-core';

export const usersCredentialsTable = pgTable('usersCredentials', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: varchar('email', {length: 128}).notNull(),
  hashedPassword: varchar('hashedPassword', {length: 128}).notNull(),
});