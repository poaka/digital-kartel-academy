// Routeur principal connectant les Views et les Controllers dans l'architecture MVC

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './views/components/Navbar';
import Footer from './views/components/Footer';
import WhatsAppButton from './views/components/WhatsAppButton';
import HomeView from './views/pages/HomeView';
import FormationsView from './views/pages/FormationsView';
import AboutView from './views/pages/AboutView';
import ContactView from './views/pages/ContactView';
import LegalView from './views/pages/LegalView';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white text-[#0F172A]">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/services" element={<FormationsView />} />
            <Route path="/formations" element={<FormationsView />} />
            <Route path="/a-propos" element={<AboutView />} />
            <Route path="/contact" element={<ContactView />} />
            <Route path="/mentions-legales" element={<LegalView />} />
          </Routes>
        </div>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}
