import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Footer from './components/Footer';
import InnerPageLayout from './components/InnerPageLayout';
import AboutUs from './pages/AboutUs';
import VisionMission from './pages/VisionMission';
import HighlightsStrip from './components/HighlightsStrip';
import AboutPreview from './components/AboutPreview';
import CoursesGrid from './components/CoursesGrid';
import PrincipalDesk from './components/PrincipalDesk';
import StatsCounter from './components/StatsCounter';
import TestimonialsCarousel from './components/TestimonialsCarousel';

// --- Unified Pages ---
import Administration from './pages/Administration';
import Academics from './pages/Academics';
import StudentLife from './pages/StudentLife';
import Admissions from './pages/Admissions';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Home() {
  return (
    <main>
      <Hero />
      <HighlightsStrip />
      <AboutPreview />
      <CoursesGrid />
      <PrincipalDesk />
      <BentoGrid />
      <StatsCounter />
      <TestimonialsCarousel />
    </main>
  );
}

// A generic placeholder component generator for our massive routing structure
const Placeholder = ({ title }) => (
  <InnerPageLayout title={title} subtitle="This section is currently under development. Please check back later." />
);

function App() {
  return (
    <Router>
      <SmoothScroll>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* About Us Routes */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about/vision-mission" element={<VisionMission />} />
          <Route path="/about/blde-association" element={<Placeholder title="BLDE Association" />} />
          <Route path="/about/vijayapura" element={<Placeholder title="About Vijayapura" />} />
          <Route path="/about/organogram" element={<Placeholder title="Organogram" />} />
          <Route path="/about/infrastructure" element={<Placeholder title="Infrastructure" />} />
          <Route path="/about/it-policy" element={<Placeholder title="IT Policy" />} />
          {/* Academics Routes */}
          <Route path="/academics/*" element={<Academics />} />

          {/* Administration Routes */}
          <Route path="/administration/*" element={<Administration />} />

          {/* Student Life Routes */}
          <Route path="/student-life/*" element={<StudentLife />} />

          {/* Admissions Routes */}
          <Route path="/admissions/*" element={<Admissions />} />

          {/* Other Routes */}
          <Route path="/research" element={<Placeholder title="Research" />} />
          <Route path="/iqac" element={<Placeholder title="IQAC" />} />
          <Route path="/contact" element={<Placeholder title="Contact Us" />} />
          <Route path="/library" element={<Placeholder title="Library" />} />
          <Route path="/alumni" element={<Placeholder title="Alumni" />} />
          <Route path="/irins" element={<Placeholder title="IRINS" />} />

        </Routes>
        <Footer />
      </SmoothScroll>
    </Router>
  );
}

export default App;
