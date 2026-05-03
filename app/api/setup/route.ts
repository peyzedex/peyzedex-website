import { NextResponse } from 'next/server';
import { getDb } from '@/lib/neon';

export async function GET() {
  try {
    const sql = getDb() as any;
    
    // Create projects table
    await sql`
      CREATE TABLE IF NOT EXISTS projects (
          id SERIAL PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          description TEXT NOT NULL,
          category VARCHAR(100) NOT NULL,
          image_url TEXT NOT NULL,
          link_url TEXT NOT NULL,
          is_featured BOOLEAN DEFAULT FALSE,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // Create demos table
    await sql`
      CREATE TABLE IF NOT EXISTS demos (
          id SERIAL PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          description TEXT NOT NULL,
          category VARCHAR(100) NOT NULL,
          image_url TEXT NOT NULL,
          link_url TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    return NextResponse.json({ message: 'Tablolar veritabanında başarıyla oluşturuldu/kontrol edildi.' });
  } catch (error: any) {
    console.error('Setup Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
