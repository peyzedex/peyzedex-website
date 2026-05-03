import { Process } from '@/components/sections/Process';
import { CTA } from '@/components/sections/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Çalışma Sürecimiz',
  description: 'PeyZeDex olarak uyguladığımız kanıtlanmış web tasarım ve geliştirme sürecimizi, adım adım nasıl projeler ürettiğimizi öğrenin.',
};

export default function ProcessPage() {
  return (
    <main className="flex-1 pt-24">
      <Process />
      <CTA />
    </main>
  );
}
