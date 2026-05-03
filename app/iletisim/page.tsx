import { CTA } from '@/components/sections/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'Projenizi hayata geçirmek için bizimle iletişime geçin. Web tasarım teklifi alın, markanızı birlikte büyütelim.',
};

export default function ContactPage() {
  return (
    <main className="flex-1 pt-24 text-center min-h-[70vh] flex flex-col justify-center">
      <CTA />
    </main>
  );
}
