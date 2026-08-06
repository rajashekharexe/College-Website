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

// --- Disabled Consolidated Pages (Kept for future use if needed) ---
// import Administration from './pages/Administration';
// import Academics from './pages/Academics';
// import StudentLife from './pages/StudentLife';

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
          <Route path="/academics/programmes" element={<Placeholder title="Programmes" />} />
          <Route path="/academics/outcome-based-education" element={<Placeholder title="Outcome Based Education" />} />
          <Route path="/academics/value-added-courses" element={<Placeholder title="Value Added Courses" />} />
          <Route path="/academics/academic-calendar" element={<Placeholder title="Academic Calendar" />} />
          <Route path="/academics/departments" element={<Placeholder title="Departments" />} />
          <Route path="/academics/faculty" element={<Placeholder title="Faculty" />} />

          {/* Administration Routes */}
          <Route path="/administration/principals-message" element={<Placeholder title="Principal's Message" />} />
          <Route path="/administration/governing-body" element={<Placeholder title="Governing Body" />} />
          <Route path="/administration/academic-council" element={<Placeholder title="Academic Council" />} />
          <Route path="/administration/board-of-studies" element={<Placeholder title="Board of Studies" />} />
          <Route path="/administration/controller-of-examination" element={<Placeholder title="Controller of Examination" />} />

          {/* Student Life Routes */}
          <Route path="/student-life/placements" element={<Placeholder title="Placements" />} />
          <Route path="/student-life/anti-ragging-cell" element={<Placeholder title="Anti-Ragging Cell" />} />
          <Route path="/student-life/sgrc" element={<Placeholder title="SGRC" />} />
          <Route path="/student-life/anti-sexual-harassment-cell" element={<Placeholder title="Anti-Sexual Harassment Cell" />} />
          <Route path="/student-life/ncc" element={<Placeholder title="NCC" />} />
          <Route path="/student-life/sports" element={<Placeholder title="Sports" />} />
          <Route path="/student-life/nss" element={<Placeholder title="NSS" />} />
          <Route path="/student-life/yrc-society" element={<Placeholder title="YRC Society" />} />
          <Route path="/student-life/womens-forum" element={<Placeholder title="Women's Forum" />} />
          <Route path="/student-life/minority-cell" element={<Placeholder title="Minority Cell" />} />

          {/* Admissions Routes */}
          <Route path="/admissions/ug" element={<Placeholder title="UG Admissions" />} />
          <Route path="/admissions/pg" element={<Placeholder title="PG Admissions" />} />
          <Route path="/admissions/fees" element={<Placeholder title="Fee Structure" />} />
          <Route path="/admissions/apply" element={<Placeholder title="Apply Now" />} />

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
