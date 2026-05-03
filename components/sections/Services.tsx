'use client';

import { motion } from 'motion/react';
import { Monitor, Smartphone, ShoppingCart, PenTool, LayoutTemplate, RefreshCcw } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Kurumsal Web Tasarım',
    description: 'Markanızı en iyi şekilde yansıtan, güven veren ve profesyonel kurumsal kimlik siteleri tasarlıyoruz.',
  },
  {
    icon: LayoutTemplate,
    title: 'Landing Page Tasarımı',
    description: 'Reklam kampanyalarınız için yüksek dönüşüm odaklı, hızlı ve etkili tek sayfalık siteler.',
  },
  {
    icon: ShoppingCart,
    title: 'E-Ticaret Arayüz Tasarımı',
    description: 'Kullanıcı dostu, satış artırıcı ve modern e-ticaret arayüzleri ile müşterilerinize harika bir alışveriş deneyimi sunun.',
  },
  {
    icon: Smartphone,
    title: 'Mobil Uyumlu Tasarım',
    description: 'Tüm cihazlarda kusursuz çalışan, mobil öncelikli (mobile-first) tasarım anlayışıyla geliştirilmiş siteler.',
  },
  {
    icon: PenTool,
    title: 'UI/UX İyileştirme',
    description: 'Ziyaretçilerinizin sitenizde daha uzun süre kalmasını ve kolayca gezinmesini sağlayan deneyim odaklı iyileştirmeler.',
  },
  {
    icon: RefreshCcw,
    title: 'Web Site Yenileme',
    description: 'Eski ve yavaş web sitenizi modern teknolojilerle, yeni nesil tasarım trendlerine uygun olarak baştan yaratıyoruz.',
  },
];

export function Services() {
  return (
    <section id="hizmetler" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Neler <span className="text-gradient">Yapıyoruz?</span>
          </h2>
          <p className="text-muted text-lg">
            Sadece web sitesi tasarımı ve geliştirme hizmeti veriyoruz. Modern teknolojilerle hızlı ve etkileyici dijital deneyimler oluşturuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-panel p-8 rounded-2xl group transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
