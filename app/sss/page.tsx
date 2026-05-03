import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sık Sorulan Sorular',
  description: 'Web tasarım, paket fiyatları, geliştirme süreleri ve diğer hizmet detayları hakkında merak edilen genel sorular ve cevapları.',
};

export default function FAQPage() {
  return (
    <main className="flex-1 pt-24">
      <FAQ />
      <CTA />
    </main>
  );
}
