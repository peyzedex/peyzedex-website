'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { ExternalLink, Loader2, LayoutGrid, Filter, X } from 'lucide-react';
import Link from 'next/link';
import { useDemos } from '@/lib/useDemos';

const categories = [
  'Tümü',
  'Tam Sayfa Şablonlar',
  'Header / Menü',
  'Hero / Karşılama',
  'Hizmet & Özellik',
  'Galeri & Portfolyo',
  'Fiyatlandırma',
  'İletişim Sayfaları',
  'Footer',
  'Diğer Bileşenler'
];

const defaultDemos = [
  {
    title: 'Kurumsal Başlangıç',
    category: 'Tam Sayfa Şablonlar',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    link: '#',
    description: 'Küçük ve orta ölçekli işletmeler için tasarlanmış modern kurumsal web sitesi şablonu.'
  },
  {
    title: 'Modern Hero Section',
    category: 'Hero / Karşılama',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    link: '#',
    description: 'Büyük tipografi ve şık bir arka plan görseli ile dikkat çeken modern kahraman alanı tasarımı.'
  },
  {
    title: 'E-Ticaret Basic',
    category: 'Tam Sayfa Şablonlar',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80',
    link: '#',
    description: 'Ürünlerinizi online ortamda sergileyip satabileceğiniz hızlı ve kullanıcı dostu e-ticaret altyapısı.'
  }
];

export function DemosList() {
  const { demos: firebaseDemos, loading } = useDemos();
  const [activeCategory, setActiveCategory] = useState('Tümü');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  
  const allDemos = firebaseDemos.length > 0 ? firebaseDemos : defaultDemos;
  
  const filteredDemos = activeCategory === 'Tümü' 
    ? allDemos 
    : allDemos.filter((demo: any) => demo.category === activeCategory);

  return (
    <section className="py-24 relative min-h-screen">
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 border-b border-card-border pb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Bileşen & <span className="text-gradient">Şablon Galerisi</span>
          </h1>
          <p className="text-muted text-lg md:text-xl">
            Boş zamanlarımızda ürettiğimiz modern, erişilebilir ve dönüşüm odaklı web arayüzü tasarımlarını inceleyin.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden w-full flex justify-between items-center bg-white/5 border border-card-border p-4 rounded-2xl">
            <div className="flex items-center gap-2 text-white font-medium">
              <Filter size={20} />
              <span>Filtreler ({filteredDemos.length})</span>
            </div>
            <Button variant="outline" size="sm" onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}>
              {isMobileFilterOpen ? <X size={16} /> : 'Kategorileri Göster'}
            </Button>
          </div>

          {/* Sidebar / Filters */}
          <div className={`lg:w-64 shrink-0 transition-all duration-300 ${isMobileFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-24 bg-card-bg/50 backdrop-blur-md border border-card-border p-6 rounded-3xl">
              <div className="flex items-center gap-2 mb-6 text-white font-bold text-lg">
                <LayoutGrid size={20} className="text-primary" />
                <h3>Kategoriler</h3>
              </div>
              <div className="flex flex-col gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setIsMobileFilterOpen(false);
                    }}
                    className={`text-left px-4 py-2.5 rounded-xl text-sm transition-all duration-300 ${
                      activeCategory === cat 
                        ? 'bg-primary text-white font-medium shadow-[0_0_15px_rgba(124,92,255,0.3)]' 
                        : 'text-muted hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Demos Grid */}
          <div className="flex-1 w-full">
            {loading ? (
              <div className="py-24 flex items-center justify-center">
                <Loader2 className="w-12 h-12 animate-spin text-primary" />
              </div>
            ) : filteredDemos.length === 0 ? (
              <div className="py-24 text-center border border-dashed border-card-border rounded-3xl bg-white/5">
                <p className="text-muted text-lg">Bu kategoride henüz bir şablon bulunmuyor.</p>
                <Button 
                  variant="outline" 
                  className="mt-6 mx-auto"
                  onClick={() => setActiveCategory('Tümü')}
                >
                  Tümünü Göster
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                  {filteredDemos.map((demo: any, idx) => (
                    <motion.div
                      key={demo.id || idx}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="group block h-full"
                    >
                      <Link href={demo.linkUrl || demo.link || '#'} target="_blank" rel="noopener noreferrer" className="h-full flex flex-col bg-card-bg/30 border border-card-border p-2 rounded-3xl hover:bg-white/5 hover:border-primary/30 transition-colors duration-300">
                        <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 bg-[#0d1017]">
                          <div className="absolute inset-0 flex items-center justify-center text-muted/50 text-xs">
                            Görsel Yükleniyor...
                          </div>
                          <Image 
                            src={demo.imageUrl || demo.image}
                            alt={demo.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105 z-10"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                            <span className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2 transition-colors">
                              İncele <ExternalLink size={16} />
                            </span>
                          </div>
                        </div>
                        <div className="px-3 pb-3 flex-1 flex flex-col">
                          <div className="text-[10px] sm:text-xs text-secondary font-medium mb-2 uppercase tracking-wider bg-secondary/10 w-fit px-2 py-1 rounded inline-block">{demo.category}</div>
                          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">{demo.title}</h3>
                          <p className="text-muted text-xs sm:text-sm leading-relaxed line-clamp-2 mt-auto">
                            {demo.description}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

