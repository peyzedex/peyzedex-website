import { neon } from '@neondatabase/serverless';

export function getDb() {
  if (!process.env.DATABASE_URL) {
    console.warn('DATABASE_URL environment variable is missing.');
    // Fallback dummy database function to prevent hard crash if not set yet
    return (strings: TemplateStringsArray, ...values: any[]) => Promise.resolve([]);
  }
  return neon(process.env.DATABASE_URL);
}
