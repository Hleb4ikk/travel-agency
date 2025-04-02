import { drizzle } from 'drizzle-orm/postgres-js';

import * as Schema from '@/db/schema';


import postgres from 'postgres';

const client = postgres(process.env.DATABASE_URL!, {idle_timeout: 30});
export const db = drizzle(client, { schema: Schema, logger: true });
