import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import About from './pages/About';
import VPerfectLanding from './pages/VPerfectLanding';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPost';
import SeoService from './pages/SeoService';
import SocialMedia from './pages/services/SocialMedia';
import PaidAds from './pages/services/PaidAds';
import ContentMarketing from './pages/services/ContentMarketing';
import EmailMarketing from './pages/services/EmailMarketing';
import WebDesign from './pages/services/WebDesign';
import MarketingStrategy from './pages/services/MarketingStrategy';
import MarketingAutomation from './pages/services/MarketingAutomation';
import LeadGeneration from './pages/services/LeadGeneration';
import AiIntegration from './pages/services/AiIntegration';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Chatbot />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vperfect" element={<VPerfectLanding />} />
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
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
