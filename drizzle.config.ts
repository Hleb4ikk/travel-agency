import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  out: './drizzle',
  schema: [
    './db/UserCredentialsSchema.ts',
    './db/UserDataSchema.ts',
    './db/TourPublicDataSchema.ts',
    './db/TourPrivateDataSchema.ts',
  ],
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
