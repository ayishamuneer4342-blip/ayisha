import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Suspense, lazy } from 'react';

// Eager load Home for LCP optimization
import Home from './pages/Home';

// Lazy load other pages
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const VPerfectLanding = lazy(() => import('./pages/VPerfectLanding'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const SeoService = lazy(() => import('./pages/SeoService'));
const SocialMedia = lazy(() => import('./pages/services/SocialMedia'));
const PaidAds = lazy(() => import('./pages/services/PaidAds'));
const ContentMarketing = lazy(() => import('./pages/services/ContentMarketing'));
const EmailMarketing = lazy(() => import('./pages/services/EmailMarketing'));
const WebDesign = lazy(() => import('./pages/services/WebDesign'));
const MarketingStrategy = lazy(() => import('./pages/services/MarketingStrategy'));
const MarketingAutomation = lazy(() => import('./pages/services/MarketingAutomation'));
const LeadGeneration = lazy(() => import('./pages/services/LeadGeneration'));
const AiIntegration = lazy(() => import('./pages/services/AiIntegration'));

import Chatbot from './components/Chatbot';
import FloatingContactButton from './components/FloatingContactButton';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Chatbot />
        <FloatingContactButton />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/webdevelopment" element={<VPerfectLanding />} />
            <Route path="/services/seo" element={<SeoService />} />
            <Route path="/services/social-media" element={<SocialMedia />} />
            <Route path="/services/paid-ads" element={<PaidAds />} />
            <Route path="/services/content-marketing" element={<ContentMarketing />} />
            <Route path="/services/email-marketing" element={<EmailMarketing />} />
            <Route path="/services/web-design" element={<WebDesign />} />
            <Route path="/services/marketing-strategy" element={<MarketingStrategy />} />
            <Route path="/services/marketing-automation" element={<MarketingAutomation />} />
            <Route path="/services/lead-generation" element={<LeadGeneration />} />
            <Route path="/services/ai-integration" element={<AiIntegration />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/:slug" element={<BlogPost />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
