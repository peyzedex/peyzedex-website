import { AllProjects } from '@/components/sections/AllProjects';
import { CTA } from '@/components/sections/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projelerimiz ve Referanslar',
  description: 'PeyZeDex olarak geliştirdiğimiz modern, hızlı ve kurumsal web tasarım projelerini ve referanslarımızı inceleyin.',
};

export default function ProjectsPage() {
  return (
    <main className="flex-1 pt-24">
      <AllProjects />
      <CTA />
    </main>
  );
}
