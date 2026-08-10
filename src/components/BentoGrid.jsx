import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

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
    gap: 'var(--space-md)',
    padding: 'var(--space-2xl) 5%',
    backgroundColor: 'var(--surface-900)',
    maxWidth: '1400px',
    margin: '0 auto'
  };

  const cardBaseStyle = {
    borderRadius: '24px',
    padding: 'var(--space-lg)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    background: '#fff',
    border: 'none',
    boxShadow: 'var(--shadow-soft)',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden'
  };

  // Emil Kowalski style press animation settings
  const motionProps = {
    whileHover: { y: -5, boxShadow: 'var(--shadow-hover)' },
    whileTap: { scale: 0.98, transition: { type: 'spring', stiffness: 400, damping: 20 } },
    transition: { type: 'spring', stiffness: 300, damping: 30 }
  };

  return (
    <section style={{ backgroundColor: 'var(--surface-900)' }}>
      <div style={{ textAlign: 'center', paddingTop: 'var(--space-xl)' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)', color: 'var(--brand-50)' }}>
          Discover A.S. Patil
        </h2>
        <p style={{ color: 'rgba(0,0,0,0.6)', marginTop: 'var(--space-xs)' }}>Excellence in Commerce & Management</p>
      </div>

      <div style={gridStyle} ref={containerRef}>
        
        {/* Large Feature Card */}
        <motion.div {...motionProps} className="bento-card" style={{ ...cardBaseStyle, gridColumn: 'span 2', gridRow: 'span 2', background: 'linear-gradient(135deg, rgba(235,186,81,0.1) 0%, rgba(255,255,255,0.02) 100%)' }}>
          <h3 style={{ fontSize: 'var(--text-3xl)', color: 'var(--accent-500)', marginBottom: 'var(--space-xs)' }}>Academics</h3>
          <p style={{ color: 'rgba(0,0,0,0.8)', fontSize: 'var(--text-base)' }}>Explore our undergraduate and postgraduate programs designed for the modern business world.</p>
        </motion.div>

        {/* Medium Cards */}
        <motion.div {...motionProps} className="bento-card" style={cardBaseStyle}>
          <h3 style={{ fontSize: 'var(--text-2xl)', color: 'var(--brand-50)', marginBottom: 'var(--space-xs)' }}>Admissions</h3>
          <p style={{ color: 'rgba(0,0,0,0.6)' }}>Join our vibrant community. Apply for the upcoming academic year.</p>
        </motion.div>

        <motion.div {...motionProps} className="bento-card" style={cardBaseStyle}>
          <h3 style={{ fontSize: 'var(--text-2xl)', color: 'var(--brand-50)', marginBottom: 'var(--space-xs)' }}>Placements</h3>
          <p style={{ color: 'rgba(0,0,0,0.6)' }}>Top recruiters from across the globe visiting our campus annually.</p>
        </motion.div>

        {/* Wide Card */}
        <motion.div {...motionProps} className="bento-card" style={{ ...cardBaseStyle, gridColumn: 'span 2' }}>
          <h3 style={{ fontSize: 'var(--text-2xl)', color: 'var(--brand-50)', marginBottom: 'var(--space-xs)' }}>Campus Life</h3>
          <p style={{ color: 'rgba(0,0,0,0.6)' }}>Experience state-of-the-art facilities, sports, and cultural events.</p>
        </motion.div>

      </div>
    </section>
  );
}
