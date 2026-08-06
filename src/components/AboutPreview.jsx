import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPreview() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo('.about-anim',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} style={{
      padding: '8rem 5%',
      backgroundColor: 'var(--surface-900)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center'
      }}>
        {/* Left: Text Content */}
        <div>
          <div className="about-anim" style={{
            display: 'inline-block',
            padding: '8px 20px',
            backgroundColor: 'var(--brand-900)',
            color: 'var(--accent-500)',
            borderRadius: '50px',
            fontSize: '0.85rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '2rem'
          }}>
            President's Message
          </div>
          
          <h2 className="about-anim" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
            color: 'var(--brand-50)',
            lineHeight: 1.1,
            marginBottom: '1.5rem'
          }}>
            Towards making our world a <span style={{ color: 'var(--accent-500)', fontStyle: 'italic' }}>better place</span>.
          </h2>
          
          <p className="about-anim" style={{
            fontSize: '1.1rem',
            color: 'rgba(0,0,0,0.7)',
            lineHeight: 1.8,
            marginBottom: '2rem'
          }}>
            We believe that education is not merely the accumulation of facts, but the preparation of life itself. At A.S. Patil College of Commerce, we strive to create an environment where young minds are nurtured to become leaders of tomorrow, grounded in ethics and propelled by innovation.
          </p>
          
          <div className="about-anim" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div>
              <h4 style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-50)', fontSize: '1.5rem' }}>M. B. Patil</h4>
              <p style={{ color: 'rgba(0,0,0,0.5)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>President, BLDE Association</p>
            </div>
          </div>
        </div>

        {/* Right: Image Placeholder */}
        <div className="about-anim" style={{
          position: 'relative',
          height: '600px',
          borderRadius: '24px',
          overflow: 'hidden',
          backgroundColor: '#f5f5f5', // Subtle gray skeleton
          boxShadow: '0 20px 60px rgba(0,0,0,0.05)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px dashed rgba(0,0,0,0.1)'
        }}>
          {/* Skeleton Placeholder */}
          <div style={{ color: 'rgba(0,0,0,0.3)', fontFamily: 'var(--font-display)', fontSize: '2rem' }}>
            [ President Image ]
          </div>
        </div>
      </div>
      
      {/* Background Decorative Element */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--brand-900) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />
    </section>
  );
}
