'use client';

import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { ArrowRight, CheckCircle2, Layout, Zap, Smartphone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const trustElements = [
  { icon: Smartphone, text: 'Mobil Uyumlu' },
  { icon: Zap, text: 'Hızlı Teslim' },
  { icon: Layout, text: 'Modern UI/UX' },
  { icon: CheckCircle2, text: 'SEO Uyumlu' },
];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Abstract Background Glows */}
      <div className="absolute top-1/4 -left-[20%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-sm text-primary mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Sadece Web Tasarım ve Geliştirme Ajansınız
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              Markanız İçin <br />
              <span className="text-gradient">Modern, Hızlı ve Profesyonel</span> <br />
              Web Siteleri
            </h1>
            
            <p className="text-lg lg:text-xl text-muted max-w-xl mb-10 leading-relaxed">
              PeyZeDex olarak işletmenize özel, mobil uyumlu, şık ve dönüşüm odaklı web siteleri tasarlıyoruz. Dijital vitrininizi bir üst seviyeye taşıyın.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto">
              <Link href="/demo-talep" className="w-full sm:w-auto block">
                <Button size="lg" className="gap-2 w-full group">
                  Demo Talep Et
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/paketler" className="w-full sm:w-auto block">
                <Button size="lg" variant="outline" className="w-full">
                  Paketleri İncele
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-card-border w-full">
              {trustElements.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                  className="flex flex-col gap-2 text-sm text-muted"
                >
                  <item.icon size={20} className="text-secondary" />
                  <span className="font-medium text-white/80">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image/Mockup Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:h-[600px] flex justify-center lg:justify-end items-center mt-12 lg:mt-0"
          >
            <div className="relative w-full max-w-[600px] aspect-square lg:aspect-auto lg:h-[90%] rounded-2xl glass-panel p-2 overflow-hidden transform lg:rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              {/* Fake browser UI */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-card-border bg-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>
                <div className="mx-auto w-1/2 h-5 rounded bg-white/10" />
              </div>
              {/* Dashboard Content Mock */}
              <div className="relative w-full h-[calc(100%-45px)] bg-[#0A0D14]">
                <Image 
                  src="https://picsum.photos/seed/dashboard/1200/800" 
                  alt="Modern Dashboard Prototype" 
                  fill
                  className="object-cover opacity-80 mix-blend-screen"
                  referrerPolicy="no-referrer"
                />
                {/* Foreground Floating Cards */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -right-6 top-1/4 p-4 glass-panel rounded-xl shadow-2xl hidden md:block"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Zap size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">Performans Skoru</div>
                      <div className="text-2xl font-display text-primary">99/100</div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="absolute -left-6 bottom-1/4 p-4 glass-panel rounded-xl shadow-2xl hidden md:block"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded shrink-0 bg-secondary/20 flex items-center justify-center">
                      <Layout size={16} className="text-secondary" />
                    </div>
                    <div className="h-4 w-24 rounded bg-white/20" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-32 rounded bg-white/10" />
                    <div className="h-2 w-20 rounded bg-white/10" />
                  </div>
                </motion.div>

              </div>
            </div>
            
            {/* Background decorative ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square border-[1px] border-dashed border-primary/20 rounded-full -z-10 animate-[spin_60s_linear_infinite]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
