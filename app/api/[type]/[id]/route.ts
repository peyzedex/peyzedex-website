import { NextResponse } from 'next/server';
import { getDb } from '@/lib/neon';

export async function DELETE(req: Request, { params }: { params: Promise<{ type: string, id: string }> }) {
  const p = await params;
  const { type, id } = p;
  
  if (type !== 'projects' && type !== 'demos') {
    return NextResponse.json({ error: 'Geçersiz parametre' }, { status: 400 });
  }

  try {
    const sql = getDb() as any;
    const numericId = parseInt(id, 10);
    
    if (type === 'projects') {
      await sql`DELETE FROM projects WHERE id = ${numericId};`;
    } else {
      await sql`DELETE FROM demos WHERE id = ${numericId};`;
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
