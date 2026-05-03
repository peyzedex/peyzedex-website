import { NextResponse } from 'next/server';
import { getDb } from '@/lib/neon';

export async function GET() {
  try {
    const sql = getDb() as any;
    const rows = await sql`SELECT * FROM settings;`;

    const settings: Record<string, string> = {};
    rows.forEach((r: any) => {
      settings[r.key] = r.value;
    });

    return NextResponse.json(settings);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const sql = getDb() as any;
    const body = await req.json();
    const { key, value } = body;

    if (!key) {
      return NextResponse.json({ error: 'Key is required' }, { status: 400 });
    }

    await sql`
      INSERT INTO settings (key, value)
      VALUES (${key}, ${value})
      ON CONFLICT (key) DO UPDATE SET value = ${value}, updated_at = CURRENT_TIMESTAMP;
    `;
    
    return NextResponse.json({ success: true, key, value });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
