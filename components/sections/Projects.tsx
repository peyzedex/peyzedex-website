'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useProjects } from '@/lib/useProjects';

const defaultProjects = [
  {
    title: 'BigA Drone',
    category: 'Zirai İlaçlama & Drone',
    image: '/projects/bigadrone.png',
    link: 'https://www.bigadrone.com',
    description: 'Biga Drone için hazırladığımız, zirai ilaçlama, teknik servis ve ürün satış hizmetlerini modern bir şekilde sunan kurumsal web sitesi.'
  },
  {
    title: 'Mutlular Turizm',
    category: 'Turizm & Transfer',
    image: '/projects/mutlularturizm.png',
    link: 'https://www.mutlularturizm.com',
    description: 'Sabiha Gökçen Uluslararası Havalimanı transferleri, VIP taşımacılık ve tur hizmetleri için tasarladığımız detaylı seyahat platformu.'
  }
];

export function Projects() {
  const { projects: firebaseProjects, loading } = useProjects();
  
  // Combine default items with featured items from firebase
  const featuredFirebaseProjects = firebaseProjects.filter(p => p.isFeatured).map(p => ({
    title: p.title,
    category: p.category,
    image: p.imageUrl,
    link: p.linkUrl,
    description: p.description
  }));
  
  // Merge, prioritizing standard mock ones if firebase is empty just to show something
  const displayProjects = featuredFirebaseProjects.length > 0 
    ? [...defaultProjects, ...featuredFirebaseProjects]
    : defaultProjects;

  return (
    <section id="projeler" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Öne Çıkan <span className="text-gradient">Projeler</span>
            </h2>
            <p className="text-muted text-lg">
              Farklı sektörlerden markalar için ürettiğimiz sonuç odaklı tasarım ve geliştirme çözümleri.
            </p>
          </div>
          <Link href="/projeler" className="hidden md:flex">
            <Button variant="outline">
              Tümünü Gör
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayProjects.slice(0, 4).map((project, idx) => (
            <Link key={idx} href={project.link} target="_blank" rel="noopener noreferrer" className="group block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="h-full"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 glass-panel border-card-border p-2">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-card-bg">
                    {/* Placeholder div if image isn't loaded */}
                    <div className="absolute inset-0 flex items-center justify-center text-muted/50 text-sm">
                      Görsel Yükleniyor...
                    </div>
                    <Image 
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105 z-10"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                      <Button variant="primary" className="gap-2 pointer-events-none">
                        Siteyi Ziyaret Et <ExternalLink size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="px-2">
                  <div className="text-sm text-secondary font-medium mb-2">{project.category}</div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link href="/projeler" className="block w-full">
            <Button variant="outline" className="w-full">
              Tümünü Gör
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
