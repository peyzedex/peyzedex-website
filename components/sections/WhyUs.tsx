'use client';

import { motion } from 'motion/react';
import { Target, Zap, ShieldCheck, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    title: 'Modern ve Özgün Tasarım',
    description: 'Şablonlardan uzak, tamamen markanızın kimliğine uygun özel tasarım dilleri.'
  },
  {
    title: 'Mobil Öncelikli Yaklaşım',
    description: 'Kullanıcıların büyük çoğunluğunun mobilden geldiğini bilerek tasarlıyoruz.'
  },
  {
    title: 'Hız ve Performans',
    description: 'Arama motorları ve kullanıcılar için optimize edilmiş ışık hızında altyapı.'
  },
  {
    title: 'Satış Odaklı Kurgu',
    description: 'Sadece güzel görünen değil, ziyaretçiyi müşteriye dönüştüren UI/UX mimarisi.'
  }
];

export function WhyUs() {
  return (
    <section className="py-24 relative overflow-hidden bg-white/5 border-y border-card-border">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -z-10 translate-x-1/3 -translate-y-1/2" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-sm text-secondary mb-6">
              <ShieldCheck size={16} /> Farkımız
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Neden <span className="text-gradient">PeyZeDex?</span>
            </h2>
            <p className="text-lg text-muted mb-8 leading-relaxed max-w-lg">
              Sıradan, birbirinin aynısı web siteleri yerine markanıza değer katan dijital varlıklar üretiyoruz. Hem göze hitap eden hem de işleyen sistemler kuruyoruz.
            </p>

            <div className="space-y-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <CheckCircle size={14} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{feature.title}</h4>
                    <p className="text-muted">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-3xl overflow-hidden glass-panel border border-card-border"
          >
            <Image 
              src="https://picsum.photos/seed/agency/1000/1200"
              alt="PeyZeDex Design Agency"
              fill
              className="object-cover opacity-60 mix-blend-luminosity"
              referrerPolicy="no-referrer"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            
            <div className="absolute bottom-10 left-10 p-6 glass-panel rounded-2xl max-w-sm backdrop-blur-xl bg-black/40">
              <div className="flex items-center gap-4 mb-3">
                <Target className="text-primary w-8 h-8" />
                <h4 className="font-bold text-xl">Dönüşüm Odaklı</h4>
              </div>
              <p className="text-sm text-gray-300">Tasarımlarımız estetik olmanın ötesinde, ziyaretçiyi müşteriye çevirecek stratejilerle örülür.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
