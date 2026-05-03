import { DemoRequestForm } from '@/components/sections/DemoRequestForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Teklif ve Demo Talebi',
  description: 'Projeniz için ücretsiz demo ve fiyat teklifi oluşturun. Sizi en kısa sürede arayalım.',
};

export default function DemoRequestPage() {
  return (
    <main className="flex-1 pt-12">
      <DemoRequestForm />
    </main>
  );
}
