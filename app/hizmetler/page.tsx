import { Services } from '@/components/sections/Services';
import { CTA } from '@/components/sections/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz',
  description: 'Müşterilerimiz için sunduğumuz profesyonel UI/UX tasarım, kurumsal web geliştirme, landing page ve e-ticaret çözümlerini keşfedin.',
};

export default function ServicesPage() {
  return (
    <main className="flex-1 pt-24">
      <Services />
      <CTA />
    </main>
  );
}
