'use client';

import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { Check, Info, Clock, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function Pricing() {
  return (
    <section id="paketler" className="py-24 relative">
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Size Uygun <span className="text-gradient">Paketi Seçin</span>
          </h2>
          <p className="text-muted text-lg mb-8">
            Her işletmenin ihtiyacına uygun, ölçeklenebilir ve dönüşüm odaklı web tasarım paketleri.
          </p>
          
          <div className="inline-flex items-start gap-4 px-6 py-4 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-200 text-sm max-w-2xl mx-auto text-left backdrop-blur-sm">
            <Info className="shrink-0 text-orange-400 mt-0.5" size={24} />
            <p className="leading-relaxed">
              <strong>Önemli Bilgi:</strong> PeyZeDex sadece web tasarım ve arayüz geliştirme hizmeti sunar. Domain, hosting ve kurumsal e-posta hizmetleri paket fiyatlarına <strong>dahil değildir.</strong>
            </p>
          </div>
        </div>

        <div className="space-y-24">
          {/* SECTION 1: Bireysel & Girişim */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <h3 className="text-2xl font-bold">Bireysel & Girişim</h3>
              <div className="h-[1px] flex-1 bg-card-border" />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass-panel p-8 md:p-12 rounded-3xl group relative overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(124,92,255,0.15)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex flex-col lg:flex-row gap-12 relative z-10">
                <div className="lg:w-1/3 flex flex-col items-start">
                  <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/20">
                    Başlangıç
                  </span>
                  <h4 className="text-3xl font-bold mb-3 group-hover:text-primary transition-colors">Tek Sayfa</h4>
                  <p className="text-muted mb-8 leading-relaxed">İlk web sitesini kurmak isteyen girişimciler için.</p>
                  <div className="text-4xl font-display font-bold mb-8">4.999₺</div>
                  <Link href="/demo-talep" className="w-full mt-auto">
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                      Paketi Seç
                    </Button>
                  </Link>
                </div>
                
                <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8 lg:border-l lg:border-card-border lg:pl-12">
                  <div className="space-y-4">
                    <h5 className="font-semibold text-white/80 mb-4">Öne Çıkan Özellikler</h5>
                    {[
                      'Tek sayfa modern tasarım',
                      'Mobil uyumlu yapı',
                      'Hero / hizmet / iletişim bölümleri',
                      'CTA alanları',
                      'Akıcı geçiş animasyonları'
                    ].map((feature, idx) => (
                      <div key={idx} className="flex gap-3">
                        <Check size={18} className="text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-6">
                    <h5 className="font-semibold text-white/80 mb-4">Süreç Bilgisi</h5>
                    <div className="glass-panel bg-white/5 p-4 rounded-xl flex items-center gap-4">
                      <div className="bg-primary/20 p-2 rounded-lg text-primary">
                        <Clock size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-muted mb-1">Teslimat Süresi</p>
                        <p className="font-medium text-sm">3–5 gün</p>
                      </div>
                    </div>
                    <div className="glass-panel bg-white/5 p-4 rounded-xl flex items-center gap-4">
                      <div className="bg-secondary/20 p-2 rounded-lg text-secondary">
                        <RefreshCw size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-muted mb-1">Revize Hakkı</p>
                        <p className="font-medium text-sm">1 revize</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* SECTION 2: KOBİ & Kurumsal */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <h3 className="text-2xl font-bold">KOBİ & Kurumsal</h3>
              <div className="h-[1px] flex-1 bg-card-border" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Card A */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass-panel p-8 rounded-3xl flex flex-col group relative transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(124,92,255,0.1)] hover:-translate-y-2"
              >
                <div className="mb-6">
                  <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Kurumsal Başlangıç</h4>
                  <p className="text-sm text-muted min-h-[40px]">Küçük işletmeler için profesyonel kurumsal web sitesi</p>
                </div>
                <div className="text-3xl font-display font-bold mb-8">9.999₺</div>
                
                <div className="flex items-center gap-4 mb-8 text-sm text-muted border-b border-card-border pb-6">
                  <div className="flex items-center gap-1.5"><Clock size={16} className="text-white/40" /> 5–7 gün</div>
                  <div className="flex items-center gap-1.5"><RefreshCw size={16} className="text-white/40" /> 2 revize</div>
                </div>

                <div className="space-y-4 mb-8 flex-1">
                  {[
                    '3–5 sayfa tasarım',
                    'Ana sayfa, hakkımızda, hizmetler vb.',
                    'Mobil uyumlu tasarım',
                    'SEO uyumlu temel yapı',
                    'WhatsApp iletişim butonu'
                  ].map((f, i) => (
                    <div key={i} className="flex gap-3">
                      <Check size={18} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">{f}</span>
                    </div>
                  ))}
                </div>
                <Link href="/demo-talep" className="w-full mt-auto mt-8">
                  <Button variant="outline" className="w-full">Paketi Seç</Button>
                </Link>
              </motion.div>

              {/* Card B - FEATURED */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-b from-primary/10 to-card-bg border-2 border-primary/50 shadow-[0_0_30px_rgba(124,92,255,0.15)] p-8 rounded-3xl flex flex-col relative transform lg:-translate-y-4 transition-all duration-500 hover:shadow-[0_0_50px_rgba(124,92,255,0.25)] hover:-translate-y-6"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase z-10 whitespace-nowrap shadow-lg">
                  En Çok Tercih Edilen
                </div>
                
                <div className="mb-6 pt-2">
                  <h4 className="text-2xl font-bold mb-2">Profesyonel Kurumsal</h4>
                  <p className="text-sm text-blue-200/70 min-h-[40px]">Daha güçlü marka algısı ve detaylı içerik isteyen işletmeler için</p>
                </div>
                <div className="text-4xl font-display font-bold mb-8">17.499₺</div>

                <div className="flex items-center gap-4 mb-8 text-sm text-muted border-b border-white/10 pb-6">
                  <div className="flex items-center gap-1.5"><Clock size={16} className="text-primary/70" /> 7–10 gün</div>
                  <div className="flex items-center gap-1.5"><RefreshCw size={16} className="text-primary/70" /> 3 revize</div>
                </div>

                <div className="space-y-4 mb-8 flex-1">
                  {[
                    '5–8 sayfa tasarım',
                    'Gelişmiş UI/UX tasarım',
                    'Hizmet detay sayfaları',
                    'Proje/portfolyo alanı',
                    'SEO dostu sayfa yapısı',
                    'Form ve etkileşim bileşenleri'
                  ].map((f, i) => (
                    <div key={i} className="flex gap-3">
                      <Check size={18} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-200">{f}</span>
                    </div>
                  ))}
                </div>
                <Link href="/demo-talep" className="w-full mt-auto mt-8">
                  <Button variant="primary" className="w-full shadow-[0_0_20px_rgba(124,92,255,0.4)]">Paketi Seç</Button>
                </Link>
              </motion.div>

              {/* Card C */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="glass-panel p-8 rounded-3xl flex flex-col group relative transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(124,92,255,0.1)] hover:-translate-y-2"
              >
                <div className="mb-6 mb-6">
                  <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Premium Marka Sitesi</h4>
                  <p className="text-sm text-muted min-h-[40px]">Prestijli ve yüksek kaliteli dijital vitrin isteyen markalar için</p>
                </div>
                <div className="text-3xl font-display font-bold mb-8">24.999₺</div>

                <div className="flex items-center gap-4 mb-8 text-sm text-muted border-b border-card-border pb-6">
                  <div className="flex items-center gap-1.5"><Clock size={16} className="text-white/40" /> 10–14 gün</div>
                  <div className="flex items-center gap-1.5"><RefreshCw size={16} className="text-white/40" /> 4 revize</div>
                </div>

                <div className="space-y-4 mb-8 flex-1">
                  {[
                    'Özel arayüz tasarımı',
                    '8–12 sayfa yapı',
                    'Premium animasyonlar',
                    'Gelişmiş bölüm tasarımları',
                    'Blog veya içerik alanı',
                    'Detaylı marka odaklı tasarım dili'
                  ].map((f, i) => (
                    <div key={i} className="flex gap-3">
                      <Check size={18} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">{f}</span>
                    </div>
                  ))}
                </div>
                <Link href="/demo-talep" className="w-full mt-auto mt-8">
                  <Button variant="outline" className="w-full">Paketi Seç</Button>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* SECTION 3: Tam Kapsamlı */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <h3 className="text-2xl font-bold">Tam Kapsamlı</h3>
              <div className="h-[1px] flex-1 bg-card-border" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass-panel p-8 md:p-12 rounded-3xl group relative overflow-hidden transition-all duration-500 hover:border-orange-500/50 hover:shadow-[0_0_40px_rgba(249,115,22,0.15)]"
            >
              <div className="absolute inset-0 bg-gradient-to-l from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex flex-col lg:flex-row gap-12 relative z-10">
                <div className="lg:w-2/3 flex flex-col items-start pr-0 lg:pr-12">
                  <span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-amber-500/20">
                    Özel
                  </span>
                  <div className="flex flex-col sm:flex-row gap-6 sm:items-end justify-between w-full mb-8">
                    <div>
                      <h4 className="text-3xl font-bold mb-3 group-hover:text-orange-400 transition-colors">Özel Proje</h4>
                      <p className="text-muted leading-relaxed max-w-lg">Kapsamı özel belirlenen, rakiplerden net ayrışmak isteyen markalar için</p>
                    </div>
                    <div className="text-4xl font-display font-bold text-orange-400">Teklif Alın</div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4 w-full">
                    {[
                      'İhtiyaca özel sayfa yapısı',
                      'Özel component tasarımları',
                      'Gelişmiş entegrasyon alanları',
                      'Çok adımlı formlar',
                      'E-ticaret arayüzü',
                      'Proje bazlı tekliflendirme'
                    ].map((feature, idx) => (
                      <div key={idx} className="flex gap-3">
                        <Check size={18} className="text-orange-400 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="lg:w-1/3 flex flex-col space-y-6 lg:border-l lg:border-card-border lg:pl-12">
                  <h5 className="font-semibold text-white/80 mb-2">Proje Koşulları</h5>
                  <div className="glass-panel bg-white/5 p-4 rounded-xl flex items-center gap-4">
                    <div className="bg-orange-500/20 p-2 rounded-lg text-orange-400">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-muted mb-1">Teslimat Süresi</p>
                      <p className="font-medium text-sm">Proje Bazlı</p>
                    </div>
                  </div>
                  <div className="glass-panel bg-white/5 p-4 rounded-xl flex items-center gap-4">
                    <div className="bg-secondary/20 p-2 rounded-lg text-secondary">
                      <RefreshCw size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-muted mb-1">Revize Hakkı</p>
                      <p className="font-medium text-sm">Sınırsız <span className="text-muted text-xs font-normal">(Kapsam dahilinde)</span></p>
                    </div>
                  </div>
                  
                  <Link href="/iletisim" className="w-full mt-auto pt-4">
                    <Button variant="outline" className="w-full group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300">
                      İletişime Geç
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ADDITIONAL SECTION: Ek Hizmetler */}
          <div className="space-y-8 pt-8 border-t border-card-border">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold mb-4">Ek Hizmetler <span className="text-muted font-normal text-lg">(İsteğe Bağlı)</span></h3>
              <p className="text-muted">Web sitenizi daha da güçlendirecek tamamlayıcı çözümler.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'İçerik Girişi', desc: 'Metin ve görselleri siteye yerleştirme hizmeti.', price: 'Görüşmeye göre' },
                { title: 'SEO Altyapısı', desc: 'Teknik SEO, meta etiketler, sayfa hızı optimizasyonu.', price: "2.500₺'den başlar" },
                { title: 'Logo & Marka Tasarımı', desc: 'Web sitenizle uyumlu logo ve kurumsal kimlik.', price: 'Görüşmeye göre' }
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-panel p-6 rounded-2xl flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-bold text-lg mb-2">{service.title}</h4>
                    <p className="text-sm text-muted mb-6">{service.desc}</p>
                  </div>
                  <div className="text-sm font-medium text-primary bg-primary/10 w-fit px-3 py-1.5 rounded-lg">
                    {service.price}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
