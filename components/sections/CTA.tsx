'use client';

import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { MessageCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function CTA() {
  return (
    <section id="iletisim" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[200px] pointer-events-none -z-10" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-12 md:p-20 rounded-[3rem] border border-primary/30 text-center max-w-5xl mx-auto shadow-[0_0_50px_rgba(124,92,255,0.1)] relative overflow-hidden"
        >
          {/* Subtle noise/texture overlay could go here */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Markanı Dijitalde <br className="hidden md:block"/>
              <span className="text-gradient hover:animate-pulse">Daha Güçlü Gösterelim</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              PeyZeDex ile modern, hızlı ve profesyonel web siteni birlikte oluşturalım. Sıradanlıktan kurtulun ve rakiplerinizin önüne geçin.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" className="w-full sm:w-auto gap-2 bg-[#25D366] hover:bg-[#20BE5A] shadow-[0_0_20px_rgba(37,211,102,0.3)] border-[#25D366]/50">
                <MessageCircle size={20} />
                WhatsApp&apos;tan Yaz
              </Button>
              <Link href="/demo-talep" className="w-full sm:w-auto block">
                <Button size="lg" variant="primary" className="w-full gap-2">
                  Demo Talep Et
                  <ArrowRight size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
