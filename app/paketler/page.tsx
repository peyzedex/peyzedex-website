import { Pricing } from '@/components/sections/Pricing';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Paketler ve Fiyatlandırma',
  description: 'İşletmenizin ihtiyacına uygun web tasarım, landing page ve kurumsal site paketlerimiz ile fiyat avantajlarımızı inceleyin.',
};

export default function PricingPage() {
  return (
    <main className="flex-1 pt-24 pb-24">
      <Pricing />
    </main>
  );
}
