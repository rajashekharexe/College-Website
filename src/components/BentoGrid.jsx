import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BentoGrid() {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.children;
    
    gsap.fromTo(cards, 
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        stagger: 0.1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gridAutoRows: '300px',
    gap: '20px',
    padding: '100px 5%',
    backgroundColor: 'var(--surface-900)',
    maxWidth: '1400px',
    margin: '0 auto'
  };

  const cardBaseStyle = {
    borderRadius: '16px',
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    background: '#fff',
    border: '1px solid rgba(0,0,0,0.05)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
    transition: 'transform 0.3s, background 0.3s',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden'
  };

  return (
    <section style={{ backgroundColor: 'var(--surface-900)' }}>
      <div style={{ textAlign: 'center', paddingTop: '100px' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)', color: 'var(--brand-50)' }}>
          Discover A.S. Patil
        </h2>
        <p style={{ color: 'rgba(0,0,0,0.6)', marginTop: '10px' }}>Excellence in Commerce & Management</p>
      </div>

      <div style={gridStyle} ref={containerRef}>
        
        {/* Large Feature Card */}
        <div className="bento-card" style={{ ...cardBaseStyle, gridColumn: 'span 2', gridRow: 'span 2', background: 'linear-gradient(135deg, rgba(235,186,81,0.1) 0%, rgba(255,255,255,0.02) 100%)' }}>
          <h3 style={{ fontSize: 'var(--text-3xl)', color: 'var(--accent-500)', marginBottom: '10px' }}>Academics</h3>
          <p style={{ color: 'rgba(0,0,0,0.8)', fontSize: '1.1rem' }}>Explore our undergraduate and postgraduate programs designed for the modern business world.</p>
        </div>

        {/* Medium Cards */}
        <div className="bento-card" style={cardBaseStyle}>
          <h3 style={{ fontSize: 'var(--text-2xl)', color: 'var(--brand-50)', marginBottom: '10px' }}>Admissions</h3>
          <p style={{ color: 'rgba(0,0,0,0.6)' }}>Join our vibrant community. Apply for the upcoming academic year.</p>
        </div>

        <div className="bento-card" style={cardBaseStyle}>
          <h3 style={{ fontSize: 'var(--text-2xl)', color: 'var(--brand-50)', marginBottom: '10px' }}>Placements</h3>
          <p style={{ color: 'rgba(0,0,0,0.6)' }}>Top recruiters from across the globe visiting our campus annually.</p>
        </div>

        {/* Wide Card */}
        <div className="bento-card" style={{ ...cardBaseStyle, gridColumn: 'span 2' }}>
          <h3 style={{ fontSize: 'var(--text-2xl)', color: 'var(--brand-50)', marginBottom: '10px' }}>Campus Life</h3>
          <p style={{ color: 'rgba(0,0,0,0.6)' }}>Experience state-of-the-art facilities, sports, and cultural events.</p>
        </div>

      </div>
      
      <style>{`
        .bento-card:hover {
          transform: translateY(-10px);
          boxShadow: '0 15px 30px rgba(0,0,0,0.08)' !important;
          background: '#fff' !important;
        }
      `}</style>
    </section>
  );
}
