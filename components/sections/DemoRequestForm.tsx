'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { Plus, Trash2, Send, CheckCircle2, ChevronRight, ChevronLeft, AlertCircle, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const packages = [
  'Tek Sayfa (4.999₺)',
  'Kurumsal Başlangıç (9.999₺)',
  'Profesyonel Kurumsal (17.499₺)',
  'Premium Marka Sitesi (24.999₺)',
  'Özel Proje (Teklif)'
];

const extraFeaturesList = [
  'Çoklu Dil Desteği',
  'E-Ticaret / Satış Altyapısı',
  'Randevu / Rezervasyon Sistemi',
  'Blog / İçerik Yönetimi',
  'Canlı Destek / WhatsApp',
  'Sıkça Sorulan Sorular',
  'Kullanıcı Üyelik / Giriş Sistemi',
  'Gelişmiş SEO Çalışması'
];

export function DemoRequestForm() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    currentWebsite: '',
    projectNotes: '',
    budget: ''
  });
  
  const [socialMedia, setSocialMedia] = useState(['']);
  const [selectedPackage, setSelectedPackage] = useState('');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {};
    if (currentStep === 1) {
      if (!formData.companyName.trim()) newErrors.companyName = 'Firma adınızı belirtmelisiniz.';
      if (!formData.contactName.trim()) newErrors.contactName = 'Yetkili kişi adını belirtmelisiniz.';
      if (!formData.phone.trim()) newErrors.phone = 'Telefon numaranızı girmelisiniz.';
      if (!formData.email.trim()) newErrors.email = 'E-posta adresinizi girmelisiniz.';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Lütfen geçerli bir e-posta adresi girin.';
    } else if (currentStep === 3) {
      if (!selectedPackage) newErrors.package = 'Lütfen ilgilendiğiniz bir paket seçin.';
      if (!formData.projectNotes.trim()) newErrors.projectNotes = 'Lütfen projenizin detaylarından biraz bahsedin.';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => {
        const newErrs = { ...prev };
        delete newErrs[field];
        return newErrs;
      });
    }
  };

  const handleAddSocial = () => setSocialMedia([...socialMedia, '']);
  const handleRemoveSocial = (index: number) => setSocialMedia(socialMedia.filter((_, i) => i !== index));
  const handleSocialChange = (index: number, value: string) => {
    const newSocial = [...socialMedia];
    newSocial[index] = value;
    setSocialMedia(newSocial);
  };

  const toggleFeature = (feature: string) => {
    setSelectedFeatures(prev => 
      prev.includes(feature) ? prev.filter(f => f !== feature) : [...prev, feature]
    );
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(prev => Math.min(prev + 1, 3));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Optional: shake animation or scroll to first error
    }
  };
  
  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(3)) {
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (isSubmitted) {
    return (
      <div className="py-24 flex items-center justify-center min-h-[60vh]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-panel p-12 rounded-3xl text-center max-w-lg mx-auto border-green-500/20"
        >
          <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-bold mb-4">Talebiniz Alındı!</h2>
          <p className="text-muted leading-relaxed mb-8">
            Merhaba <strong>{formData.contactName}</strong>, demo talebinizi başarıyla aldık. Proje ekibimiz bilgilerinizi detaylıca inceledikten sonra <strong>{formData.email}</strong> üzerinden sizinle en kısa sürede iletişime geçecektir.
          </p>
          <Link href="/">
            <Button variant="outline" className="w-full">
              Ana Sayfaya Dön
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-24 relative">
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Demo & Teklif</span> Talebi
            </h1>
            <p className="text-muted text-lg">
              Size en uygun web projesini sunabilmemiz için aşağıdaki bilgileri detaylıca doldurun.
            </p>
          </div>

          {/* Stepper */}
          <div className="flex items-center justify-between mb-12 relative max-w-xl mx-auto">
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-card-border -z-10 -translate-y-1/2" />
            <div 
              className="absolute top-1/2 left-0 h-[2px] bg-gradient-to-r from-primary to-secondary -z-10 -translate-y-1/2 transition-all duration-500" 
              style={{ width: `${((step - 1) / 2) * 100}%` }}
            />
            
            {[1, 2, 3].map((num) => (
              <div 
                key={num}
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-500",
                  step >= num 
                    ? "bg-primary text-white shadow-[0_0_15px_rgba(124,92,255,0.4)]" 
                    : "bg-background border-2 border-card-border text-muted"
                )}
              >
                {step > num ? <CheckCircle2 size={18} /> : num}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="glass-panel p-6 md:p-10 rounded-3xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              
              {/* STEP 1: Firma Bilgileri */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold mb-6 border-b border-card-border pb-4">1. Firma & İletişim Bilgileri</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Firma / Marka Adı *</label>
                      <input 
                        type="text" 
                        value={formData.companyName}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                        className={cn("w-full bg-white/5 border rounded-xl px-4 py-3 text-white focus:outline-none focus:bg-white/10 transition-colors", errors.companyName ? "border-red-500" : "border-card-border focus:border-primary/50")} 
                        placeholder="Örn: PeyZeDex Bilişim" 
                      />
                      {errors.companyName && <p className="text-red-400 text-xs flex items-center gap-1"><AlertCircle size={12}/>{errors.companyName}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Yetkili Kişi *</label>
                      <input 
                        type="text" 
                        value={formData.contactName}
                        onChange={(e) => handleInputChange('contactName', e.target.value)}
                        className={cn("w-full bg-white/5 border rounded-xl px-4 py-3 text-white focus:outline-none focus:bg-white/10 transition-colors", errors.contactName ? "border-red-500" : "border-card-border focus:border-primary/50")} 
                        placeholder="Ad Soyad" 
                      />
                      {errors.contactName && <p className="text-red-400 text-xs flex items-center gap-1"><AlertCircle size={12}/>{errors.contactName}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Telefon Numarası *</label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={cn("w-full bg-white/5 border rounded-xl px-4 py-3 text-white focus:outline-none focus:bg-white/10 transition-colors", errors.phone ? "border-red-500" : "border-card-border focus:border-primary/50")} 
                        placeholder="+90 555 555 55 55" 
                      />
                      {errors.phone && <p className="text-red-400 text-xs flex items-center gap-1"><AlertCircle size={12}/>{errors.phone}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">E-posta Adresi *</label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={cn("w-full bg-white/5 border rounded-xl px-4 py-3 text-white focus:outline-none focus:bg-white/10 transition-colors", errors.email ? "border-red-500" : "border-card-border focus:border-primary/50")} 
                        placeholder="ornek@firma.com" 
                      />
                      {errors.email && <p className="text-red-400 text-xs flex items-center gap-1"><AlertCircle size={12}/>{errors.email}</p>}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Dijital Varlıklar */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold mb-6 border-b border-card-border pb-4">2. Dijital Varlıklarınız</h3>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Mevcut Web Siteniz (Varsa)</label>
                    <input 
                      type="url" 
                      value={formData.currentWebsite}
                      onChange={(e) => handleInputChange('currentWebsite', e.target.value)}
                      className="w-full bg-white/5 border border-card-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-colors" 
                      placeholder="https://www.mevcutsiteniz.com" 
                    />
                  </div>

                  <div className="space-y-4 pt-4">
                    <label className="text-sm font-medium text-gray-300">Sosyal Medya Hesaplarınız</label>
                    {socialMedia.map((social, index) => (
                      <div key={index} className="flex flex-col sm:flex-row gap-3">
                        <input 
                          type="url" 
                          value={social}
                          onChange={(e) => handleSocialChange(index, e.target.value)}
                          className="flex-1 bg-white/5 border border-card-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-colors" 
                          placeholder="Örn: https://instagram.com/kullaniciadi" 
                        />
                        {socialMedia.length > 1 && (
                          <button 
                            type="button" 
                            onClick={() => handleRemoveSocial(index)}
                            className="w-full sm:w-12 h-12 shrink-0 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center hover:bg-red-500/20 transition-colors"
                          >
                            <Trash2 size={20} />
                          </button>
                        )}
                      </div>
                    ))}
                    <button 
                      type="button" 
                      onClick={handleAddSocial}
                      className="text-primary text-sm font-medium flex items-center gap-2 hover:text-primary/80 transition-colors px-2 py-2"
                    >
                      <Plus size={16} /> Başka Bir Hesap Daha Ekle
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Proje Detayları */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold mb-6 border-b border-card-border pb-4">3. Proje & Paket Bilgileri</h3>
                  
                  <div className="space-y-4 mb-6 relative">
                    <label className="text-sm font-medium text-gray-300">İlgilendiğiniz Paket *</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {packages.map((pkg, idx) => (
                        <div 
                          key={idx} 
                          onClick={() => {
                            setSelectedPackage(pkg);
                            if(errors.package) {
                              setErrors(prev => { const e = {...prev}; delete e.package; return e; });
                            }
                          }}
                          className={cn(
                            "cursor-pointer border rounded-xl px-4 py-3 transition-colors",
                            selectedPackage === pkg 
                              ? "bg-primary/20 border-primary" 
                              : "bg-white/5 border-card-border hover:bg-white/10"
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <div className={cn(
                              "w-5 h-5 shrink-0 rounded-full border-2 flex items-center justify-center",
                              selectedPackage === pkg ? "border-primary" : "border-gray-500"
                            )}>
                              {selectedPackage === pkg && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
                            </div>
                            <span className="text-sm">{pkg}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    {errors.package && <p className="text-red-400 text-xs flex items-center gap-1"><AlertCircle size={12}/>{errors.package}</p>}
                  </div>

                  <div className="space-y-4 mb-6">
                    <label className="text-sm font-medium text-gray-300">İhtiyaç Duyduğunuz Ek Özellikler</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {extraFeaturesList.map((feature, idx) => (
                        <div
                          key={idx}
                          onClick={() => toggleFeature(feature)}
                          className={cn(
                            "cursor-pointer border rounded-xl px-4 py-3 transition-colors flex items-center gap-3",
                            selectedFeatures.includes(feature)
                              ? "bg-green-500/10 border-green-500/50"
                              : "bg-white/5 border-card-border hover:bg-white/10"
                          )}
                        >
                          <div className={cn(
                            "w-5 h-5 shrink-0 rounded flex items-center justify-center border transition-colors",
                            selectedFeatures.includes(feature) ? "bg-green-500 border-green-500 text-background" : "border-gray-500 bg-transparent"
                          )}>
                            {selectedFeatures.includes(feature) && <Check size={14} strokeWidth={3} />}
                          </div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Projeden Beklentileriniz / Notlarınız *</label>
                    <textarea 
                      value={formData.projectNotes}
                      onChange={(e) => handleInputChange('projectNotes', e.target.value)}
                      className={cn(
                        "w-full h-32 resize-none bg-white/5 border rounded-xl px-4 py-3 text-white focus:outline-none focus:bg-white/10 transition-colors",
                        errors.projectNotes ? "border-red-500" : "border-card-border focus:border-primary/50"
                      )} 
                      placeholder="Web sitenizin amacı nedir? Tasarımda olmasını istediğiniz özel detaylar var mı?" 
                    />
                    {errors.projectNotes && <p className="text-red-400 text-xs flex items-center gap-1"><AlertCircle size={12}/>{errors.projectNotes}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Bu proje için planlanan tahmini bütçe (Opsiyonel)</label>
                    <select 
                      value={formData.budget}
                      onChange={(e) => handleInputChange('budget', e.target.value)}
                      className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Belirtmek İstemiyorum</option>
                      <option value="5k-10k">5.000₺ - 10.000₺</option>
                      <option value="10k-20k">10.000₺ - 20.000₺</option>
                      <option value="20k-50k">20.000₺ - 50.000₺</option>
                      <option value="50k+">50.000₺+</option>
                    </select>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-10 pt-6 border-t border-card-border">
              {step > 1 ? (
                <Button type="button" variant="ghost" onClick={prevStep} className="gap-2">
                  <ChevronLeft size={18} /> Geri
                </Button>
              ) : (
                <div /> // Placeholder for spacing
              )}
              
              {step < 3 ? (
                <Button type="button" variant="primary" onClick={nextStep} className="gap-2">
                  İleri <ChevronRight size={18} />
                </Button>
              ) : (
                <Button type="submit" variant="primary" className="gap-2 shadow-[0_0_20px_rgba(124,92,255,0.4)]">
                  Talebi Gönder <Send size={18} />
                </Button>
              )}
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}
