import { DemosList } from '@/components/sections/DemosList';
import { CTA } from '@/components/sections/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Şablon ve Bileşen Galerisi',
  description: 'PeyZeDex tasarım ekibinin hazırladığı modern web arayüz şablonlarını, dönüşüm odaklı hero kısımlarını ve gelişmiş UI bileşenlerini inceleyin.',
};

export default function DemosPage() {
  return (
    <main className="flex-1 pt-24">
      <DemosList />
      <CTA />
    </main>
  );
}
