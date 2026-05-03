import { Hero } from '@/components/sections/Hero';
import { WhyUs } from '@/components/sections/WhyUs';
import { Services } from '@/components/sections/Services';
import { Projects } from '@/components/sections/Projects';
import { CTA } from '@/components/sections/CTA';

export default function Home() {
  return (
    <main className="flex-1 pt-10">
      <Hero />
      <WhyUs />
      <Services />
      <Projects />
      <CTA />
    </main>
  );
}
