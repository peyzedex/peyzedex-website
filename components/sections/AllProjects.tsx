'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { ExternalLink, Loader2 } from 'lucide-react';
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

export function AllProjects() {
  const { projects: firebaseProjects, loading } = useProjects();
  
  const formattedFirebaseProjects = firebaseProjects.map(p => ({
    title: p.title,
    category: p.category,
    image: p.imageUrl,
    link: p.linkUrl,
    description: p.description
  }));
  
  const displayProjects = formattedFirebaseProjects.length > 0 
    ? [...defaultProjects, ...formattedFirebaseProjects]
    : defaultProjects;

  return (
    <section className="py-24 relative">
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 border-b border-card-border pb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Önceki <span className="text-gradient">Referanslarımız</span>
          </h1>
          <p className="text-muted text-lg md:text-xl">
            Tasarımını ve geliştirmesini üstlendiğimiz markaların dijital dünyadaki başarılı vitrinlerini inceleyin.
          </p>
        </div>

        {loading ? (
          <div className="py-24 flex items-center justify-center">
            <Loader2 className="w-12 h-12 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayProjects.map((project, idx) => (
              <Link key={idx} href={project.link} target="_blank" rel="noopener noreferrer" className="group block">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                  className="h-full flex flex-col"
                >
                  <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 glass-panel border-card-border p-2">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-card-bg">
                      <div className="absolute inset-0 flex items-center justify-center text-muted/50 text-sm">
                        Görsel Yükleniyor...
                      </div>
                      <Image 
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                  <div className="px-2 flex-1 flex flex-col">
                    <div className="text-xs text-secondary font-medium mb-2 uppercase tracking-wider">{project.category}</div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-muted text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
