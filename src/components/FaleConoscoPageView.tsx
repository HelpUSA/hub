import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Send, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MessageCircle, 
  Globe, 
  Smartphone
} from 'lucide-react';
import type { Language } from '../i18n/translations';

interface FaleConoscoPageViewProps {
  lang: Language;
  onBack: () => void;
}

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export const FaleConoscoPageView: React.FC<FaleConoscoPageViewProps> = ({ lang, onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Desenvolvimento de Site / Sistema Web',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const officialEmail = 'helpus.ecommerce@gmail.com';
  const whatsappBR = '+55 (83) 99872-1848';
  const whatsappBRNumber = '5583998721848';
  const phoneUSA = '+1 (251) 677-8489';
  const phoneUSANumber = '12516778489';
  const instagramUrl = 'https://www.instagram.com/helpus.ecommerce/';

  const labels = {
    pt: {
      backBtn: 'Voltar à Página Inicial',
      badge: 'Central de Atendimento Executivo',
      title: 'Fale Conosco',
      subtitle: 'Entre em contato direto com nossa equipe de especialistas. Envie sua mensagem ou utilize nossos canais oficiais.',
      formHeading: 'Envie sua Mensagem Institucional',
      formSubhead: 'Preencha o formulário abaixo. Sua mensagem será enviada diretamente para helpus.ecommerce@gmail.com',
      nameLabel: 'Seu Nome Completo',
      emailLabel: 'Seu E-mail Profissional',
      phoneLabel: 'Seu Telefone / WhatsApp',
      subjectLabel: 'Assunto ou Tipo de Projeto',
      messageLabel: 'Mensagem Detalhada',
      sendBtn: 'Enviar Mensagem Agora',
      successTitle: 'Mensagem Enviada com Sucesso!',
      successDesc: 'Sua solicitação foi registrada e enviada para helpus.ecommerce@gmail.com. Nossa equipe entrará em contato em breve.',
      channelsHeading: 'Canais Diretos de Comunicação',
      zapTitle: 'WhatsApp (Zap Brasil)',
      zapDesc: 'Atendimento instantâneo e demonstrações em tempo real',
      zapAction: 'Falar no WhatsApp',
      phoneTitle: 'Contato Telefônico & SMS (EUA)',
      phoneDesc: 'Linha direta para ligações executivas e SMS',
      callAction: 'Ligar para EUA',
      smsAction: 'Enviar SMS EUA',
      emailTitle: 'E-mail Oficial',
      instaTitle: 'Rede Social Oficial (Instagram)',
      instaDesc: 'Siga @helpus.ecommerce para ver cases, novidades e enviar Direct',
      instaAction: 'Acessar Instagram @helpus.ecommerce ↗'
    },
    en: {
      backBtn: 'Back to Home Page',
      badge: 'Executive Support Center',
      title: 'Contact Us',
      subtitle: 'Get in direct contact with our team of specialists. Send your message or use our official channels.',
      formHeading: 'Send Your Institutional Message',
      formSubhead: 'Fill out the form below. Your message will be sent directly to helpus.ecommerce@gmail.com',
      nameLabel: 'Your Full Name',
      emailLabel: 'Business Email',
      phoneLabel: 'Phone / WhatsApp',
      subjectLabel: 'Subject or Project Type',
      messageLabel: 'Detailed Message',
      sendBtn: 'Send Message Now',
      successTitle: 'Message Sent Successfully!',
      successDesc: 'Your request has been recorded and sent to helpus.ecommerce@gmail.com. Our team will contact you shortly.',
      channelsHeading: 'Direct Communication Channels',
      zapTitle: 'WhatsApp (Brazil Zap)',
      zapDesc: 'Instant support and real-time demonstrations',
      zapAction: 'Chat on WhatsApp',
      phoneTitle: 'Phone Call & SMS (USA)',
      phoneDesc: 'Direct line for executive phone calls and SMS',
      callAction: 'Call USA',
      smsAction: 'Send USA SMS',
      emailTitle: 'Official Email',
      instaTitle: 'Official Social Network (Instagram)',
      instaDesc: 'Follow @helpus.ecommerce for portfolio cases, news and Direct messages',
      instaAction: 'Visit Instagram @helpus.ecommerce ↗'
    },
    es: {
      backBtn: 'Volver a la Página Principal',
      badge: 'Centro de Atención Ejecutiva',
      title: 'Hablar con Nosotros',
      subtitle: 'Póngase en contacto directo con nuestro equipo de especialistas. Envíe su mensaje o use nuestros canales.',
      formHeading: 'Envíe su Mensaje Institucional',
      formSubhead: 'Complete el formulario. Su mensaje será enviado a helpus.ecommerce@gmail.com',
      nameLabel: 'Su Nombre Completo',
      emailLabel: 'Correo Profesional',
      phoneLabel: 'Teléfono / WhatsApp',
      subjectLabel: 'Asunto o Tipo de Proyecto',
      messageLabel: 'Mensaje Detallado',
      sendBtn: 'Enviar Mensaje Ahora',
      successTitle: '¡Mensaje Enviado con Éxito!',
      successDesc: 'Su solicitud ha sido enviada a helpus.ecommerce@gmail.com. Le responderemos en breve.',
      channelsHeading: 'Canales Directos de Comunicación',
      zapTitle: 'WhatsApp (Zap Brasil)',
      zapDesc: 'Atención instantánea y demostraciones en tiempo real',
      zapAction: 'Chatear en WhatsApp',
      phoneTitle: 'Llamada y SMS (EE.UU.)',
      phoneDesc: 'Línea directa para llamadas ejecutivas y SMS',
      callAction: 'Llamar a EE.UU.',
      smsAction: 'Enviar SMS a EE.UU.',
      emailTitle: 'Correo Oficial',
      instaTitle: 'Red Social Oficial (Instagram)',
      instaDesc: 'Siga a @helpus.ecommerce para ver proyectos y enviar mensajes Direct',
      instaAction: 'Visitar Instagram @helpus.ecommerce ↗'
    }
  };

  const t = labels[lang] || labels.pt;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans pt-8 pb-24 relative overflow-hidden">
      
      {/* Top Bar Header */}
      <div className="hub-container max-w-6xl mx-auto px-6 mb-12">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-white font-bold text-xs transition-all shadow-md mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
          <span>{t.backBtn}</span>
        </button>

        <div className="space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-extrabold uppercase tracking-widest inline-block">
            {t.badge}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {t.title}
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed font-medium">
            {t.subtitle}
          </p>
        </div>
      </div>

      {/* Main Grid: Left Form vs Right Channels */}
      <div className="hub-container max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* LEFT COLUMN: FORM */}
        <div className="lg:col-span-7 bg-slate-900/80 backdrop-blur-2xl border border-slate-800/90 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="border-b border-slate-800/80 pb-4">
            <h2 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
              <Mail className="w-5 h-5 text-cyan-400" />
              <span>{t.formHeading}</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">{t.formSubhead}</p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-4 animate-fade-in">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h3 className="text-xl font-extrabold text-white">{t.successTitle}</h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-md mx-auto">{t.successDesc}</p>
              <button
                onClick={() => {
                  setFormData({ name: '', email: '', phone: '', subject: 'Desenvolvimento de Site / Sistema Web', message: '' });
                  setSubmitted(false);
                }}
                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                Enviar Outra Mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  {t.nameLabel} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ex: Roberto Alencar"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-all font-medium"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    {t.emailLabel} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="empresa@dominio.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-all font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    {t.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(00) 00000-0000"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-all font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  {t.subjectLabel}
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-400 font-medium"
                >
                  <option value="Desenvolvimento de Site / Sistema Web">Criação de Site Profissional / Sistema Web</option>
                  <option value="Atendente de IA no WhatsApp">Atendente Inteligente de IA no WhatsApp</option>
                  <option value="Plataforma Setorial (Imóveis, Saúde, etc.)">Plataforma Setorial (Imóveis, Saúde, etc.)</option>
                  <option value="Suporte Técnico / Dúvida">Suporte Técnico / Atendimento Comercial</option>
                  <option value="Outros Assuntos">Outros Assuntos</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  {t.messageLabel} *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Descreva detalhes do seu projeto ou necessidade..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-all font-medium leading-relaxed"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-xl shadow-cyan-900/30 transform hover:scale-[1.01]"
              >
                <Send className="w-4 h-4" />
                <span>{t.sendBtn}</span>
              </button>
            </form>
          )}
        </div>

        {/* RIGHT COLUMN: OFFICIAL DIRECT CHANNELS */}
        <div className="lg:col-span-5 space-y-6">
          <div className="border-b border-slate-800/80 pb-3">
            <h2 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
              <Globe className="w-5 h-5 text-emerald-400" />
              <span>{t.channelsHeading}</span>
            </h2>
          </div>

          {/* CHANNEL 1: ZAP BRASIL */}
          <div className="p-5 rounded-3xl bg-slate-900/90 border border-emerald-500/40 space-y-3 shadow-xl hover:border-emerald-400 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-white">{t.zapTitle}</h3>
                <p className="text-[11px] text-slate-400">{t.zapDesc}</p>
              </div>
            </div>
            <a
              href={`https://wa.me/${whatsappBRNumber}?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20HelpUS%20e%20gostaria%20de%20falar%20com%20um%20atendente`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs flex items-center justify-between transition-all shadow-lg shadow-emerald-950/50"
            >
              <span className="font-mono text-sm">{whatsappBR}</span>
              <span>{t.zapAction} ↗</span>
            </a>
          </div>

          {/* CHANNEL 2: PHONE & SMS USA */}
          <div className="p-5 rounded-3xl bg-slate-900/90 border border-cyan-500/40 space-y-3 shadow-xl hover:border-cyan-400 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 flex items-center justify-center">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-white">{t.phoneTitle}</h3>
                <p className="text-[11px] text-slate-400">{t.phoneDesc}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 pt-1">
              <a
                href={`tel:+${phoneUSANumber}`}
                className="flex-1 py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-400 text-white font-mono font-extrabold text-xs flex items-center justify-center gap-1.5 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>{phoneUSA}</span>
              </a>
              <a
                href={`sms:+${phoneUSANumber}`}
                className="py-2.5 px-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs transition-all"
              >
                SMS
              </a>
            </div>
          </div>

          {/* CHANNEL 3: INSTAGRAM OFFICIAL */}
          <div className="p-5 rounded-3xl bg-gradient-to-br from-pink-950/40 via-purple-950/30 to-slate-900 border border-pink-500/40 space-y-3 shadow-xl hover:border-pink-400 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white flex items-center justify-center shadow-md">
                <InstagramIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-white">{t.instaTitle}</h3>
                <p className="text-[11px] text-slate-400">{t.instaDesc}</p>
              </div>
            </div>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-extrabold text-xs flex items-center justify-between transition-all shadow-lg shadow-pink-950/50"
            >
              <span>@helpus.ecommerce</span>
              <span>{t.instaAction}</span>
            </a>
          </div>

          {/* CHANNEL 4: EMAIL */}
          <div className="p-5 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>{t.emailTitle}</span>
            </div>
            <a href={`mailto:${officialEmail}`} className="text-sm font-bold text-white hover:text-cyan-300 block truncate transition-colors">
              {officialEmail}
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

export default FaleConoscoPageView;
