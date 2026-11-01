import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import InquiryModal from './components/InquiryModal';
import CaseStudyDrawer from './components/CaseStudyDrawer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Work from './pages/Work';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import { useLenis } from './utils/useLenis';

export default function App() {
  // Initialize Lenis smooth scroll
  useLenis();

  // Global State for Inquiry Modal and Case Study Drawer
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryDiscipline, setInquiryDiscipline] = useState('');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const handleOpenInquiry = (discipline = '') => {
    setInquiryDiscipline(discipline);
    setIsInquiryOpen(true);
  };

  const handleCloseInquiry = () => {
    setIsInquiryOpen(false);
  };

  const handleSelectCaseStudy = (study) => {
    setSelectedCaseStudy(study);
  };

  const handleCloseCaseStudy = () => {
    setSelectedCaseStudy(null);
  };

  return (
    <BrowserRouter>
      {/* Scroll restoration */}
      <ScrollToTop />

      {/* Custom Brutalist Cursor for Desktop */}
      <CustomCursor />

      {/* Initial Editorial Preloader */}
      <Preloader />

      <div className="min-h-screen flex flex-col bg-cream text-ink font-sans selection:bg-vermilion selection:text-cream">
        {/* Editorial Navbar */}
        <Navbar onOpenInquiry={() => handleOpenInquiry()} />

        {/* Main Content Router */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onOpenInquiry={handleOpenInquiry}
                  onSelectCaseStudy={handleSelectCaseStudy}
                />
              }
            />
            <Route
              path="/work"
              element={
                <Work
                  onSelectCaseStudy={handleSelectCaseStudy}
                  onOpenInquiry={handleOpenInquiry}
                />
              }
            />
            <Route
              path="/services"
              element={<Services onOpenInquiry={handleOpenInquiry} />}
            />
            <Route
              path="/about"
              element={<About onOpenInquiry={handleOpenInquiry} />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenInquiry={() => handleOpenInquiry()} />

        {/* Global Project Inquiry Modal */}
        <InquiryModal
          isOpen={isInquiryOpen}
          onClose={handleCloseInquiry}
          initialDiscipline={inquiryDiscipline}
        />

        {/* Global Case Study Detail Drawer */}
        <CaseStudyDrawer
          isOpen={Boolean(selectedCaseStudy)}
          project={selectedCaseStudy}
          onClose={handleCloseCaseStudy}
          onInquire={(disc) => handleOpenInquiry(disc)}
        />
      </div>
    </BrowserRouter>
  );
}
