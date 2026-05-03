import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-card-border bg-background pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <Logo />
            <p className="text-muted max-w-sm leading-relaxed">
              Markanız için modern, hızlı ve profesyonel web siteleri tasarlıyoruz. Sadece tasarım ve geliştirme üzerine odaklıyız; alan adı veya hosting hizmetimiz bulunmamaktadır.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 rounded-full bg-card border border-card-border hover:border-primary/50 text-muted hover:text-white transition-all">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-card border border-card-border hover:border-primary/50 text-muted hover:text-white transition-all">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-card border border-card-border hover:border-primary/50 text-muted hover:text-white transition-all">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6">Hızlı Linkler</h4>
            <ul className="space-y-4">
              <li><Link href="/hizmetler" className="text-muted hover:text-primary transition-colors">Hizmetler</Link></li>
              <li><Link href="/paketler" className="text-muted hover:text-primary transition-colors">Paketler</Link></li>
              <li><Link href="/surec" className="text-muted hover:text-primary transition-colors">Çalışma Süreci</Link></li>
              <li><Link href="/projeler" className="text-muted hover:text-primary transition-colors">Projelerimiz</Link></li>
              <li><Link href="/sss" className="text-muted hover:text-primary transition-colors">Sıkça Sorulan Sorular</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6">İletişime Geç</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hello@peyzedex.com" className="flex items-center gap-3 text-muted hover:text-primary transition-colors">
                  <Mail size={18} />
                  <span>hello@peyzedex.com</span>
                </a>
              </li>
              <li className="text-muted">
                <p>Türkiye / Remote</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-card-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">
            &copy; {currentYear} PeyZeDex Web Design. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6 text-sm text-muted">
            <Link href="#" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
            <Link href="#" className="hover:text-white transition-colors">Kullanım Şartları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
