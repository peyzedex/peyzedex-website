'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { Plus, Trash2, LogIn, Loader2, AlertCircle, Check } from 'lucide-react';
import { useProjects } from '@/lib/useProjects';
import { useDemos } from '@/lib/useDemos';

export function AdminPanel() {
  const [isLocalAdmin, setIsLocalAdmin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const [activeTab, setActiveTab] = useState<'projects' | 'demos' | 'settings'>('projects');
  
  const { projects, loading: projectsLoading, refetch: refetchProjects } = useProjects();
  const { demos, loading: demosLoading, refetch: refetchDemos } = useDemos();
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    imageUrl: '',
    linkUrl: '',
    isFeatured: true
  });
  
  const [settingsFormData, setSettingsFormData] = useState({
    logoUrl: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Fetch settings when entering settings tab
  useEffect(() => {
    if (activeTab === 'settings') {
      fetch('/api/settings')
        .then(res => res.json())
        .then(data => {
          if (data && data.logoUrl) {
            setSettingsFormData({ logoUrl: data.logoUrl });
          }
        })
        .catch(err => console.error('Failed to fetch settings', err));
    }
  }, [activeTab]);

  const handleSettingsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    setIsSubmitting(true);
    
    try {
      const res = await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: 'logoUrl', value: settingsFormData.logoUrl })
      });
      
      if (!res.ok) {
        throw new Error((await res.json())?.error || 'Bir hata oluştu');
      }
      
      setSuccessMsg('Ayarlar başarıyla güncellendi.');
      // Optionally trigger a reload or context update here if the logo is cached
    } catch (error: any) {
      setErrorMsg('Ayarlar güncellenemedi. ' + (error.message || 'Bir hata oluştu'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin3170527') {
      setIsLocalAdmin(true);
      setErrorMsg('');
    } else {
      setErrorMsg('Kullanıcı adı veya şifre hatalı.');
    }
  };

  const handleLogout = () => {
    setIsLocalAdmin(false);
    setUsername('');
    setPassword('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    setIsSubmitting(true);
    
    try {
      const payload: any = {
        title: formData.title,
        description: formData.description,
        category: formData.category,
        imageUrl: formData.imageUrl,
        linkUrl: formData.linkUrl,
      };
      
      if (activeTab === 'projects') {
        payload.isFeatured = formData.isFeatured;
      }

      const res = await fetch(`/api/${activeTab}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (!res.ok) {
        throw new Error((await res.json())?.error || 'Bir hata oluştu');
      }
      
      setFormData({
        title: '',
        description: '',
        category: '',
        imageUrl: '',
        linkUrl: '',
        isFeatured: true
      });
      
      if (activeTab === 'projects') refetchProjects();
      else refetchDemos();
    } catch (error: any) {
      setErrorMsg('Veritabanına eklenemedi. ' + (error.message || 'Bir hata oluştu'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string, type: 'projects' | 'demos') => {
    if(!confirm('Emin misiniz?')) return;
    try {
      const res = await fetch(`/api/${type}/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Silinemedi');
      if (type === 'projects') refetchProjects();
      else refetchDemos();
    } catch (error: any) {
      setErrorMsg('Silinemedi. ' + error.message);
    }
  }

  if (!isLocalAdmin) {
    return (
      <div className="py-24 flex items-center justify-center min-h-[60vh]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-panel p-12 rounded-3xl text-center max-w-sm mx-auto w-full"
        >
          <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <LogIn size={32} />
          </div>
          <h2 className="text-2xl font-bold mb-4">Admin Girişi</h2>
          <p className="text-muted mb-8 text-sm">
            Projeleri yönetmek için yetkili hesapla giriş yapın.
          </p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input 
                type="text" 
                placeholder="Kullanıcı Adı" 
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="w-full bg-white/5 border border-card-border rounded-lg px-4 py-3 text-sm text-white focus:border-primary/50" 
              />
            </div>
            <div>
              <input 
                type="password" 
                placeholder="Şifre" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-card-border rounded-lg px-4 py-3 text-sm text-white focus:border-primary/50" 
              />
            </div>
            <Button type="submit" variant="primary" className="w-full gap-2 mt-4">
              Giriş Yap
            </Button>
          </form>

          {errorMsg && <p className="mt-4 text-red-500 text-sm">{errorMsg}</p>}
          
          <div className="mt-6 text-xs text-muted text-left bg-white/5 p-3 rounded-lg">
            <strong>Bilgi:</strong> Şu an yerel doğrulama modundasınız. Verileri değiştirebilmek için Firebase kurallarının güncellenmesi gerekebilir.
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-24">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Yönetim Paneli</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted">{username}</span>
          <Button variant="outline" size="sm" onClick={handleLogout}>Çıkış Yap</Button>
        </div>
      </div>

      
      <div className="flex gap-4 mb-8 border-b border-card-border pb-4">
        <button 
          onClick={() => setActiveTab('projects')}
          className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'projects' ? 'bg-primary text-white' : 'text-muted hover:bg-white/5'}`}
        >
          Referanslar (Projeler)
        </button>
        <button 
          onClick={() => setActiveTab('demos')}
          className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'demos' ? 'bg-primary text-white' : 'text-muted hover:bg-white/5'}`}
        >
          Demolar
        </button>
        <button 
          onClick={() => setActiveTab('settings')}
          className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'settings' ? 'bg-primary text-white' : 'text-muted hover:bg-white/5'}`}
        >
          Ayarlar
        </button>
      </div>
      
      {errorMsg && (
        <div className="mb-8 p-4 bg-red-500/10 border border-red-500/50 rounded-xl flex items-center gap-2 text-red-400">
          <AlertCircle size={20} />
          <p className="text-sm">{errorMsg}</p>
        </div>
      )}

      {successMsg && (
        <div className="mb-8 p-4 bg-emerald-500/10 border border-emerald-500/50 rounded-xl flex items-center gap-2 text-emerald-400">
          <Check size={20} />
          <p className="text-sm">{successMsg}</p>
        </div>
      )}

      {activeTab === 'settings' ? (
        <div className="max-w-2xl">
          <h2 className="text-xl font-bold mb-6">Site Ayarları</h2>
          <form onSubmit={handleSettingsSubmit} className="space-y-6">
            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="font-bold mb-4 border-b border-card-border pb-4">Logo Ayarları</h3>
              <div>
                <label className="text-sm text-gray-300 mb-2 block">Logo URL</label>
                <input 
                  type="url" 
                  value={settingsFormData.logoUrl} 
                  onChange={e => setSettingsFormData({...settingsFormData, logoUrl: e.target.value})} 
                  className="w-full bg-white/5 border border-card-border rounded-lg px-4 py-3 text-sm text-white focus:border-primary/50" 
                  placeholder="https://..." 
                  required
                />
                <p className="text-xs text-muted mt-2">Logonuzun yüklü olduğu tam URL adresini (örn. https://unsplash.com/.../img.png) giriniz.</p>
              </div>
              
              {settingsFormData.logoUrl && (
                <div className="mt-4 border border-card-border/50 rounded-lg p-4 bg-black/20 flex items-center justify-center">
                  <div className="h-12 flex items-center">
                    <img src={settingsFormData.logoUrl} alt="Logo Preview" className="max-h-full object-contain" />
                  </div>
                </div>
              )}
            </div>

            <Button type="submit" disabled={isSubmitting} variant="primary" className="gap-2">
              {isSubmitting ? <Loader2 className="animate-spin" size={16} /> : <Check size={16} />}
              Ayarları Kaydet
            </Button>
          </form>
        </div>
      ) : (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 border-r border-card-border pr-8">
          <h2 className="text-xl font-bold mb-6">
            Yeni {activeTab === 'projects' ? 'Proje' : 'Demo'} Ekle
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs text-muted mb-1 block">Başlık</label>
              <input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full bg-white/5 border border-card-border rounded-lg px-3 py-2 text-sm text-white focus:border-primary/50" />
            </div>
            <div>
              <label className="text-xs text-muted mb-1 block">Kategori</label>
              {activeTab === 'demos' ? (
                <select required value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full bg-[#0d1017] border border-card-border rounded-lg px-3 py-2 text-sm text-white focus:border-primary/50 appearance-none cursor-pointer">
                  <option value="">Seçiniz</option>
                  <option value="Tam Sayfa Şablonlar">Tam Sayfa Şablonlar</option>
                  <option value="Header / Menü">Header / Menü</option>
                  <option value="Hero / Karşılama">Hero / Karşılama</option>
                  <option value="Hizmet & Özellik">Hizmet & Özellik</option>
                  <option value="Galeri & Portfolyo">Galeri & Portfolyo</option>
                  <option value="Fiyatlandırma">Fiyatlandırma</option>
                  <option value="İletişim Sayfaları">İletişim Sayfaları</option>
                  <option value="Footer">Footer</option>
                  <option value="Diğer Bileşenler">Diğer Bileşenler</option>
                </select>
              ) : (
                <input required type="text" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full bg-white/5 border border-card-border rounded-lg px-3 py-2 text-sm text-white focus:border-primary/50" placeholder="Örn: Kurumsal Web Sitesi" />
              )}
            </div>
            <div>
              <label className="text-xs text-muted mb-1 block">Açıklama</label>
              <textarea required value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full bg-white/5 border border-card-border rounded-lg px-3 py-2 text-sm text-white focus:border-primary/50 h-24 resize-none" />
            </div>
            <div>
              <label className="text-xs text-muted mb-1 block">Görsel URL</label>
              <input required type="text" value={formData.imageUrl} onChange={e => setFormData({...formData, imageUrl: e.target.value})} className="w-full bg-white/5 border border-card-border rounded-lg px-3 py-2 text-sm text-white focus:border-primary/50" placeholder="https://..." />
            </div>
            <div>
              <label className="text-xs text-muted mb-1 block">Site URL</label>
              <input required type="url" value={formData.linkUrl} onChange={e => setFormData({...formData, linkUrl: e.target.value})} className="w-full bg-white/5 border border-card-border rounded-lg px-3 py-2 text-sm text-white focus:border-primary/50" placeholder="https://..." />
            </div>
            
            {activeTab === 'projects' && (
               <div className="flex items-center gap-2 pt-2">
                 <input type="checkbox" id="featured" checked={formData.isFeatured} onChange={e => setFormData({...formData, isFeatured: e.target.checked})} className="accent-primary" />
                 <label htmlFor="featured" className="text-sm font-medium">Ana sayfada öne çıkar</label>
               </div>
            )}
            
            <Button type="submit" disabled={isSubmitting} variant="primary" className="w-full gap-2 mt-4">
              {isSubmitting ? <Loader2 className="animate-spin" size={16} /> : <Plus size={16} />}
              Ekle
            </Button>
          </form>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold mb-6">Mevcut {activeTab === 'projects' ? 'Projeler' : 'Demolar'}</h2>
          
          {activeTab === 'projects' && (
            projectsLoading ? (
               <div className="py-12 flex justify-center"><Loader2 className="animate-spin" size={24} /></div>
            ) : projects.length === 0 ? (
              <p className="text-muted text-sm border border-card-border rounded-xl p-8 text-center bg-white/5">Henüz proje eklenmemiş.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projects.map((project) => (
                  <div key={project.id} className="border border-card-border bg-white/5 rounded-xl p-4 flex flex-col">
                     <div className="flex justify-between items-start mb-2">
                       <h3 className="font-bold">{project.title}</h3>
                       <button onClick={() => handleDelete(project.id, 'projects')} className="text-red-400 hover:text-red-300 p-1">
                         <Trash2 size={16} />
                       </button>
                     </div>
                     <p className="text-xs text-secondary mb-2">{project.category}</p>
                     {project.isFeatured && <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded uppercase w-max mb-2">Öne Çıkan</span>}
                     <p className="text-xs text-muted line-clamp-2 mt-auto">{project.description}</p>
                  </div>
                ))}
              </div>
            )
          )}
          
          {activeTab === 'demos' && (
            demosLoading ? (
               <div className="py-12 flex justify-center"><Loader2 className="animate-spin" size={24} /></div>
            ) : demos.length === 0 ? (
              <p className="text-muted text-sm border border-card-border rounded-xl p-8 text-center bg-white/5">Henüz demo eklenmemiş.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {demos.map((demo) => (
                  <div key={demo.id} className="border border-card-border bg-white/5 rounded-xl p-4 flex flex-col">
                     <div className="flex justify-between items-start mb-2">
                       <h3 className="font-bold">{demo.title}</h3>
                       <button onClick={() => handleDelete(demo.id, 'demos')} className="text-red-400 hover:text-red-300 p-1">
                         <Trash2 size={16} />
                       </button>
                     </div>
                     <p className="text-xs text-secondary mb-2">{demo.category}</p>
                     <p className="text-xs text-muted line-clamp-2 mt-auto">{demo.description}</p>
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      </div>
      )}
    </div>
  );
}
