'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'Web sitesi kaç günde teslim edilir?',
    answer: 'Projenin kapsamına ve seçtiğiniz pakete göre teslim süreleri değişmektedir. Tek sayfalık tasarımlar genelde 5-7 iş günü içerisinde, daha kapsamlı kurumsal projeler ise 2-4 hafta içerisinde yayına hazır hale getirilir.'
  },
  {
    question: 'Paketlere alan adı (domain) ve hosting dahil mi?',
    answer: 'Hayır, PeyZeDex olarak biz sadece arayüz tasarımı ve yazılım geliştirme hizmeti veriyoruz. Alan adı, hosting sunucusu veya kurumsal e-posta hizmeti sağlamıyoruz veya satmıyoruz. Bu alımlarda size danışmanlık yapabilir ve uygun firmalara yönlendirebiliriz.'
  },
  {
    question: 'Web sitem mobil cihazlara uyumlu olacak mı?',
    answer: 'Kesinlikle. Tüm projelerimiz "Mobile-First" (mobil öncelikli) tasarım anlayışıyla geliştirilir ve telefon, tablet, masaüstü olmak üzere her ekran boyutunda kusursuz görünür.'
  },
  {
    question: 'Teslimat sonrasında revize hakkım var mı?',
    answer: 'Evet, tasarım aşamasında ve demo sunumu sonrasında paketinize dahil olan belirli bir revize hakkınız bulunmaktadır. Siteniz tam içinize sinmeden yayına almıyoruz.'
  },
  {
    question: 'Sadece web tasarımı mı yapıyorsunuz?',
    answer: 'Evet. Odak noktamız sadece web tasarım ve web tabanlı arayüzlerin (UI/UX) geliştirilmesidir. Sosyal medya yönetimi veya SEO danışmanlığı gibi farklı hizmetler sunmuyoruz.'
  },
  {
    question: 'Teklif almak için süreç nasıl işliyor?',
    answer: 'İletişim bilgilerimizden bize ulaşıp talebinizi kısaca anlattığınızda, size özel bir ihtiyaç analizi yaparak uygun paketi veya özel teklifimizi hazırlıyoruz. Karşılıklı anlaştığımızda geliştirme sürecine hemen başlıyoruz.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="sss" className="py-24 relative bg-white/5 border-t border-card-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Sıkça Sorulan <br className="hidden lg:block"/>
              <span className="text-gradient">Sorular</span>
            </h2>
            <p className="text-muted text-lg mb-8">
              Aklınıza takılan soruların cevaplarını burada bulabilirsiniz. Farklı bir sorunuz varsa bizimle iletişime geçmekten çekinmeyin.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={cn(
                    "glass-panel rounded-2xl overflow-hidden transition-colors",
                    isOpen ? "border-primary/50 bg-primary/5" : "hover:border-card-border hover:bg-white-[0.02]"
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex items-center justify-between w-full p-6 text-left"
                  >
                    <span className="text-lg font-bold pr-8">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={cn(
                        "shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                        isOpen ? "bg-primary text-white" : "bg-card text-muted"
                      )}
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 text-muted leading-relaxed border-t border-card-border pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
