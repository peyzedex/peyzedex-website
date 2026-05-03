import { NextResponse } from 'next/server';
import { getDb } from '@/lib/neon';

export async function GET(req: Request, { params }: { params: Promise<{ type: string }> }) {
  const p = await params;
  const { type } = p;
  
  if (type !== 'projects' && type !== 'demos') {
    return NextResponse.json({ error: 'Geçersiz parametre' }, { status: 400 });
  }

  try {
    const sql = getDb() as any;
    const rows = type === 'projects' 
      ? await sql`SELECT * FROM projects ORDER BY created_at DESC;`
      : await sql`SELECT * FROM demos ORDER BY created_at DESC;`;

    const formatted = rows.map((r: any) => ({
      id: String(r.id),
      title: r.title,
      description: r.description,
      category: r.category,
      imageUrl: r.image_url,
      linkUrl: r.link_url,
      isFeatured: r.is_featured,
      createdAt: r.created_at
    }));

    return NextResponse.json(formatted);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message, data: [] }, { status: 500 });
  }
}

export async function POST(req: Request, { params }: { params: Promise<{ type: string }> }) {
  const p = await params;
  const { type } = p;
  
  if (type !== 'projects' && type !== 'demos') {
    return NextResponse.json({ error: 'Geçersiz parametre' }, { status: 400 });
  }

  try {
    const sql = getDb() as any;
    const body = await req.json();
    const { title, description, category, imageUrl, linkUrl, isFeatured } = body;

    let result;
    if (type === 'projects') {
      result = await sql`
        INSERT INTO projects (title, description, category, image_url, link_url, is_featured)
        VALUES (${title}, ${description}, ${category}, ${imageUrl}, ${linkUrl}, ${isFeatured || false})
        RETURNING *;
      `;
    } else {
      result = await sql`
        INSERT INTO demos (title, description, category, image_url, link_url)
        VALUES (${title}, ${description}, ${category}, ${imageUrl}, ${linkUrl})
        RETURNING *;
      `;
    }
    
    return NextResponse.json(result[0]);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
