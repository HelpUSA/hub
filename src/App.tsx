import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProductCatalog } from './components/ProductCatalog';
import { ClientDashboard } from './components/ClientDashboard';
import { SupportDesk } from './components/SupportDesk';
import { PricingCalculator } from './components/PricingCalculator';
import { InteractiveSandboxModal } from './components/InteractiveSandboxModal';
import { Footer } from './components/Footer';

import { PRODUCTS_DATA } from './data/productsData';
import { DEMO_CLIENT_PROFILE, INITIAL_TICKETS, INITIAL_INVOICES } from './data/clientData';
import type { Product, SupportTicket } from './types';
import { CheckCircle2, ExternalLink, X } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('catalogo');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [clientProfile, setClientProfile] = useState(DEMO_CLIENT_PROFILE);
  const [tickets, setTickets] = useState<SupportTicket[]>(INITIAL_TICKETS);
  const [invoices] = useState(INITIAL_INVOICES);
  
  // Interactive Modal State
  const [sandboxProduct, setSandboxProduct] = useState<Product | null>(null);

  // SSO Redirect Banner Notification State
  const [ssoNotification, setSsoNotification] = useState<{ show: boolean; productName?: string; subdomain?: string }>({ show: false });

  const handleAddTicket = (newTicket: SupportTicket) => {
    setTickets([newTicket, ...tickets]);
  };

  const handleSimulateSSO = (product: Product) => {
    // Activate module if not active
    if (!clientProfile.activeModules.includes(product.id)) {
      setClientProfile({
        ...clientProfile,
        activeModules: [...clientProfile.activeModules, product.id]
      });
    }

    setSsoNotification({
      show: true,
      productName: product.name,
      subdomain: product.subdomain
    });

    // Auto-hide notification after 5s
    setTimeout(() => {
      setSsoNotification({ show: false });
    }, 5000);
  };

  const handleRequestCustomPlan = (selectedProductIds: string[]) => {
    // Activate all selected modules for demo
    setClientProfile({
      ...clientProfile,
      activeModules: Array.from(new Set([...clientProfile.activeModules, ...selectedProductIds]))
    });
    setActiveTab('central_cliente');
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col relative selection:bg-indigo-500 selection:text-white">
      
      {/* Background Ambient Glows */}
      <div className="bg-glow-container">
        <div className="glow-orb-1" />
        <div className="glow-orb-2" />
        <div className="glow-orb-3" />
      </div>

      {/* SSO Simulation Toast Alert */}
      {ssoNotification.show && (
        <div className="fixed top-20 right-4 z-50 max-w-md p-4 rounded-xl glass-panel border-emerald-500/50 bg-slate-900/95 shadow-2xl animate-fadeIn flex items-start gap-3">
          <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-white">Single Sign-On (SSO) Efetuado</h4>
              <button onClick={() => setSsoNotification({ show: false })} className="text-slate-400 hover:text-white">
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-xs text-slate-300 mt-1">
              Autenticado com sucesso no <strong className="text-white">{ssoNotification.productName}</strong>!
            </p>
            <p className="text-[11px] text-emerald-400 font-mono mt-1 flex items-center gap-1">
              <ExternalLink className="w-3 h-3" /> Conectando a https://{ssoNotification.subdomain}
            </p>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        clientProfile={clientProfile}
        onOpenTicketModal={() => setActiveTab('chamados')}
      />

      {/* Main Page Body */}
      <main className="flex-1 z-10">
        
        {/* Render Hero Section only on Catalog Tab */}
        {activeTab === 'catalogo' && (
          <HeroSection
            onExploreCatalog={() => {
              const el = document.getElementById('catalogo-grid');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            onOpenDashboard={() => setActiveTab('central_cliente')}
            onCalculatePricing={() => setActiveTab('calculadora')}
          />
        )}

        {/* Tab 1: Product Catalog */}
        {activeTab === 'catalogo' && (
          <div id="catalogo-grid">
            <ProductCatalog
              products={PRODUCTS_DATA}
              searchQuery={searchQuery}
              activeClientModules={clientProfile.activeModules}
              onOpenSandbox={(product) => setSandboxProduct(product)}
              onSimulateSSO={handleSimulateSSO}
            />
          </div>
        )}

        {/* Tab 2: Client Dashboard (Central do Cliente) */}
        {activeTab === 'central_cliente' && (
          <ClientDashboard
            profile={clientProfile}
            products={PRODUCTS_DATA}
            invoices={invoices}
            onSimulateSSO={handleSimulateSSO}
            onOpenTicketModal={() => setActiveTab('chamados')}
          />
        )}

        {/* Tab 3: HelpUS Desk Support & Tickets */}
        {activeTab === 'chamados' && (
          <SupportDesk
            tickets={tickets}
            products={PRODUCTS_DATA}
            onAddTicket={handleAddTicket}
          />
        )}

        {/* Tab 4: Pricing Calculator & Ecosystem Packages */}
        {activeTab === 'calculadora' && (
          <PricingCalculator
            products={PRODUCTS_DATA}
            onRequestCustomPlan={handleRequestCustomPlan}
          />
        )}

      </main>

      {/* Interactive Sandbox Modal */}
      {sandboxProduct && (
        <InteractiveSandboxModal
          product={sandboxProduct}
          onClose={() => setSandboxProduct(null)}
          onSimulateSSO={(product) => {
            setSandboxProduct(null);
            handleSimulateSSO(product);
          }}
        />
      )}

      {/* Global Corporate Footer */}
      <Footer onSelectCategoryTab={() => setActiveTab('catalogo')} />

    </div>
  );
}

export default App;
