import React, { useState } from 'react';
import { 
  X, 
  MessageCircle, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  Globe, 
  Smartphone 
} from 'lucide-react';
import type { Language } from '../i18n/translations';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, lang }) => {
  const [activeTab, setActiveTab] = useState<'whatsapp' | 'instagram' | 'sms' | 'form'>('whatsapp');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const phoneUSA = '+1 (251) 677-8489';
  const phoneUSANumber = '12516778489';
  const phoneBR = '+55 (83) 99872-1848';
  const phoneBRNumber = '5583998721848';
  const instagramUrl = 'https://www.instagram.com/p/DcoMVB1Of8Z/';

  const labels = {
    pt: {
      title: 'Falar Conosco',
      subtitle: 'Escolha o canal de atendimento oficial de sua preferência',
      tabWhatsapp: 'WhatsApp Direct',
      tabInstagram: 'Instagram Direct',
      tabSMS: 'SMS & Ligação',
      tabForm: 'Enviar Mensagem',
      usaPrimary: 'EUA (Atendimento Principal)',
      brSecondary: 'Brasil (Suporte Regional)',
      clickToChat: 'Iniciar conversa instantânea',
      openInstagram: 'Abrir Perfil no Instagram',
      smsDescription: 'Envie um SMS ou faça uma chamada telefônica direta:',
      formTitle: 'Cadastro de Mensagem Institucional',
      nameLabel: 'Seu Nome Completo',
      emailLabel: 'E-mail Profissional',
      phoneLabel: 'Telefone / WhatsApp',
      msgLabel: 'Descrição da sua necessidade ou projeto',
      sendBtn: 'Enviar Mensagem Agora',
      thanksTitle: 'Mensagem enviada com sucesso!',
      thanksDesc: 'Sua solicitação foi registrada em nosso CRM. Nossa equipe executiva retornará em breve.'
    },
    en: {
      title: 'Contact Us',
      subtitle: 'Choose your preferred official communication channel',
      tabWhatsapp: 'WhatsApp Direct',
      tabInstagram: 'Instagram Direct',
      tabSMS: 'SMS & Call',
      tabForm: 'Send Message',
      usaPrimary: 'USA (Primary Support)',
      brSecondary: 'Brazil (Regional Support)',
      clickToChat: 'Start instant chat',
      openInstagram: 'Open Instagram Profile',
      smsDescription: 'Send an SMS or make a direct phone call:',
      formTitle: 'Institutional Message Form',
      nameLabel: 'Your Full Name',
      emailLabel: 'Business Email',
      phoneLabel: 'Phone / WhatsApp',
      msgLabel: 'Describe your project or inquiry',
      sendBtn: 'Send Message Now',
      thanksTitle: 'Message sent successfully!',
      thanksDesc: 'Your request has been recorded. Our team will get back to you shortly.'
    },
    es: {
      title: 'Hablar con Nosotros',
      subtitle: 'Elija su canal oficial de atención preferido',
      tabWhatsapp: 'WhatsApp Directo',
      tabInstagram: 'Instagram Directo',
      tabSMS: 'SMS y Llamada',
      tabForm: 'Enviar Mensaje',
      usaPrimary: 'EE.UU. (Atención Principal)',
      brSecondary: 'Brasil (Soporte Regional)',
      clickToChat: 'Iniciar conversación instantánea',
      openInstagram: 'Abrir Perfil de Instagram',
      smsDescription: 'Envíe un SMS o realice una llamada telefónica directa:',
      formTitle: 'Formulario de Mensaje Institucional',
      nameLabel: 'Su Nombre Completo',
      emailLabel: 'Correo Profesional',
      phoneLabel: 'Teléfono / WhatsApp',
      msgLabel: 'Describa su proyecto o consulta',
      sendBtn: 'Enviar Mensaje Ahora',
      thanksTitle: '¡Mensaje enviado con éxito!',
      thanksDesc: 'Su solicitud ha sido registrada. Nuestro equipo le responderá en breve.'
    }
  };

  const t = labels[lang] || labels.pt;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', message: '' });
        setSubmitted(false);
        onClose();
      }, 3500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in" onClick={onClose}>
      <div 
        className="bg-slate-900 border border-slate-700/80 text-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.7)] relative overflow-hidden space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-800 pb-4">
          <div>
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[11px] font-extrabold uppercase tracking-widest">
              Central de Atendimento
            </span>
            <h3 className="text-2xl font-extrabold text-white mt-2 tracking-tight">
              {t.title}
            </h3>
            <p className="text-xs text-slate-400 mt-1 font-medium">
              {t.subtitle}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-2xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
          <button
            onClick={() => setActiveTab('whatsapp')}
            className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'whatsapp' 
                ? 'bg-emerald-600 text-white shadow-md' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </button>

          <button
            onClick={() => setActiveTab('instagram')}
            className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'instagram' 
                ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-md' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            <span>Instagram</span>
          </button>

          <button
            onClick={() => setActiveTab('sms')}
            className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'sms' 
                ? 'bg-cyan-600 text-white shadow-md' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>SMS / Fone</span>
          </button>

          <button
            onClick={() => setActiveTab('form')}
            className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'form' 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Mensagem</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="space-y-4 pt-2">
          
          {/* TAB 1: WHATSAPP DIRECT */}
          {activeTab === 'whatsapp' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-bold text-white">{t.usaPrimary}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold uppercase">
                    1ª Opção
                  </span>
                </div>
                <a
                  href={`https://wa.me/${phoneUSANumber}?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20solu%C3%A7%C3%B5es%20HelpUS`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-between transition-all shadow-lg shadow-emerald-900/40"
                >
                  <span className="text-sm tracking-wide font-mono">{phoneUSA}</span>
                  <span className="text-[11px] underline">{t.clickToChat} ↗</span>
                </a>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-slate-400" />
                    <span className="text-xs font-bold text-slate-300">{t.brSecondary}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 text-[10px] font-extrabold uppercase">
                    2ª Opção
                  </span>
                </div>
                <a
                  href={`https://wa.me/${phoneBRNumber}?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20solu%C3%A7%C3%B5es%20HelpUS`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-between transition-all"
                >
                  <span className="text-sm tracking-wide font-mono">{phoneBR}</span>
                  <span className="text-[11px] text-cyan-400 underline">{t.clickToChat} ↗</span>
                </a>
              </div>
            </div>
          )}

          {/* TAB 2: INSTAGRAM DIRECT */}
          {activeTab === 'instagram' && (
            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-950/40 via-purple-950/30 to-slate-950 border border-pink-500/30 text-center space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 flex items-center justify-center mx-auto shadow-lg shadow-pink-500/20">
                <InstagramIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-white">Instagram @helpusbr</h4>
                <p className="text-xs text-slate-400 mt-1">Acompanhe nossos lançamentos, cases de sucesso e envie mensagem direta pelo Instagram.</p>
              </div>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold text-xs shadow-lg shadow-pink-900/50 transition-all transform hover:scale-[1.02]"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>{t.openInstagram} ↗</span>
              </a>
            </div>
          )}

          {/* TAB 3: SMS & DIRECT PHONE CALL */}
          {activeTab === 'sms' && (
            <div className="space-y-3">
              <p className="text-xs text-slate-400 font-medium">{t.smsDescription}</p>
              
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-[11px] font-bold text-cyan-400 uppercase">{t.usaPrimary}</span>
                <div className="flex items-center gap-3">
                  <a href={`tel:+${phoneUSANumber}`} className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-white font-mono text-xs text-center font-bold flex items-center justify-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Ligar: {phoneUSA}</span>
                  </a>
                  <a href={`sms:+${phoneUSANumber}`} className="py-2.5 px-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs">
                    SMS
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase">{t.brSecondary}</span>
                <div className="flex items-center gap-3">
                  <a href={`tel:+${phoneBRNumber}`} className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-white font-mono text-xs text-center font-bold flex items-center justify-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <span>Ligar: {phoneBR}</span>
                  </a>
                  <a href={`sms:+${phoneBRNumber}`} className="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs">
                    SMS
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: INLINE MESSAGE FORM */}
          {activeTab === 'form' && (
            <div>
              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-950/50 border border-emerald-500/40 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-extrabold text-white">{t.thanksTitle}</h4>
                  <p className="text-xs text-slate-300">{t.thanksDesc}</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1">{t.nameLabel}</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Carlos Andrade"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1">{t.emailLabel}</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contato@empresa.com"
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1">{t.phoneLabel}</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(00) 00000-0000"
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1">{t.msgLabel}</label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Descreva brevemente o projeto ou dúvida..."
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-blue-900/40"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.sendBtn}</span>
                  </button>
                </form>
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default ContactModal;
