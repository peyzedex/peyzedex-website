'use client';

import { motion } from 'motion/react';
import { Search, PenTool, Code, Send } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'İhtiyaç Analizi',
    description: 'Markanızın hedeflerini dinliyor, sektörünüzü ve rakiplerinizi inceleyerek en uygun stratejiyi oluşturuyoruz.',
    icon: Search
  },
  {
    num: '02',
    title: 'Tasarım Planı',
    description: 'Kullanıcı deneyimi (UX) esaslarına göre site mimarisini kuruyor ve arayüz (UI) tasarımlarını çiziyoruz.',
    icon: PenTool
  },
  {
    num: '03',
    title: 'Geliştirme',
    description: 'Onaylanan tasarımları modern web teknolojileri ile pixel-perfect ve mobil uyumlu olarak kodluyoruz.',
    icon: Code
  },
  {
    num: '04',
    title: 'Teslim & Revize',
    description: 'Demoyu sunuyoruz. Gerekli revizyonlar yapıldıktan sonra sitenizi yayına hazır bir şekilde teslim ediyoruz.',
    icon: Send
  }
];

export function Process() {
  return (
    <section id="surec" className="py-24 relative overflow-hidden bg-white/5 border-y border-card-border">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent hidden md:block" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Nasıl <span className="text-gradient">Çalışıyoruz?</span>
          </h2>
          <p className="text-muted text-lg">
            Fikrinizin hayata geçme sürecini şeffaf, hızlı ve profesyonel bir şekilde yönetiyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative"
            >
              <div className="mb-6 relative">
                <span className="text-6xl font-display font-black text-white/5 absolute -top-8 -left-4">
                  {step.num}
                </span>
                <div className="w-16 h-16 rounded-2xl bg-card border border-card-border flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                  <step.icon className="text-secondary" size={28} />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-muted leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
