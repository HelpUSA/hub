// arquivo: src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import { FaWhatsapp } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Chat virtual guiado (com botões)
import ChatGuiado from './components/ChatGuiado';

// Páginas principais
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import PoliticaDePrivacidade from './pages/PoliticaDePrivacidade';
import Login from './pages/Login';
import AdminDashboard from './pages/admin/AdminDashboard';
import ListaUsuariosAdmin from './pages/admin/ListaUsuariosAdmin';
import CadastroUsuario from './pages/admin/CadastroUsuario';
import EditarUsuario from './pages/admin/EditarUsuario';

// Páginas de Soluções Específicas
import AutomacaoFiscal from './pages/solucoes/AutomacaoFiscal';
import InteligenciaArtificial from './pages/solucoes/InteligenciaArtificial';
import EcommerceAmazon from './pages/solucoes/EcommerceAmazon';
import SaasImobiliaria from './pages/solucoes/SaasImobiliaria';
import ReservasAgendamentos from './pages/solucoes/ReservasAgendamentos';
import PlataformasMedicas from './pages/solucoes/PlataformasMedicas';
import CibersegurancaCvss from './pages/solucoes/CibersegurancaCvss';
import PublicidadeAdvert from './pages/solucoes/PublicidadeAdvert';

function AppInit() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return null;
}

// Rola automaticamente para a seção de parceiros quando a rota for /parceiros
function ScrollToPartnersOnRoute() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === '/parceiros') {
      // espera o React pintar a Home
      setTimeout(() => {
        document.getElementById('partners')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 0);
    }
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <AppInit />
      <div className="pt-4 md:pt-8 flex flex-col min-h-screen scroll-smooth">
        <Header />
        <ScrollToPartnersOnRoute />

        <main className="flex-grow">
          <Routes>
            {/* Rotas Web Studio */}
            <Route path="/" element={<Home />} />
            <Route path="/parceiros" element={<Home />} />
            <Route path="/criacao-de-sites" element={<Navigate to="/" replace />} />
            <Route path="/servicos" element={<Navigate to="/" replace />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/usuarios" element={<ListaUsuariosAdmin />} />
            <Route path="/admin/cadastro-usuario" element={<CadastroUsuario />} />
            <Route path="/admin/editar-usuario/:id" element={<EditarUsuario />} />

            {/* Rotas das Soluções */}
            <Route path="/solucoes/automacao-fiscal" element={<AutomacaoFiscal />} />
            <Route path="/solucoes/inteligencia-artificial" element={<InteligenciaArtificial />} />
            <Route path="/solucoes/ecommerce-amazon" element={<EcommerceAmazon />} />
            <Route path="/solucoes/saas-imobiliaria" element={<SaasImobiliaria />} />
            <Route path="/solucoes/reservas-agendamentos" element={<ReservasAgendamentos />} />
            <Route path="/solucoes/plataformas-medicas" element={<PlataformasMedicas />} />
            <Route path="/solucoes/ciberseguranca-cvss" element={<CibersegurancaCvss />} />
            <Route path="/solucoes/publicidade-advert" element={<PublicidadeAdvert />} />
          </Routes>
        </main>

        <Footer />
        <CookieConsent />
        <ChatGuiado />

        {/* Botão flutuante do WhatsApp */}
        <a
          href="https://wa.me/5583998721848"
          aria-label="Fale conosco no WhatsApp"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg animate-bounce"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="text-2xl" />
        </a>
      </div>
    </Router>
  );
}

export default App;
