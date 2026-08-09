import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PrincipalDesk() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo('.principal-anim',
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
      backgroundColor: 'var(--brand-900)', // Light blue/gray base
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1.2fr',
        gap: '4rem',
        alignItems: 'center'
      }}>
        
        {/* Left: Image Placeholder */}
        <div className="principal-anim" style={{
          position: 'relative',
          height: '500px',
          borderRadius: '24px',
          overflow: 'hidden',
          backgroundColor: '#fff', // White skeleton with shadow
          boxShadow: '0 20px 50px rgba(0,0,0,0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid rgba(0,0,0,0.05)',
          order: 1
        }}>
          <img 
            src="/images/principal.jpg" 
            alt="Prof. S.B. Kamati" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} 
          />
        </div>

        {/* Right: Text Content */}
        <div className="principal-anim" style={{ order: 2 }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 20px',
            backgroundColor: '#fff',
            color: 'var(--accent-500)',
            borderRadius: '50px',
            fontSize: '0.85rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '2rem',
            boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
          }}>
            From the Principal's Desk
          </div>
          
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 4vw, 3rem)',
            color: 'var(--brand-50)',
            lineHeight: 1.1,
            marginBottom: '1.5rem'
          }}>
            Fostering <span style={{ color: 'var(--accent-500)', fontStyle: 'italic' }}>innovation</span> and academic rigor.
          </h2>
          
          <div style={{
            position: 'relative',
            paddingLeft: '24px',
            borderLeft: '4px solid var(--accent-500)'
          }}>
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(0,0,0,0.7)',
              lineHeight: 1.8,
              marginBottom: '1.5rem',
              fontStyle: 'italic'
            }}>
              "We take pride in our rich legacy and our continuous endeavor to provide holistic education. Our autonomous status has allowed us to tailor curricula that bridge the gap between academia and industry requirements."
            </p>
          </div>
          
          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-50)', fontSize: '1.3rem' }}>Prof. S.B. Kamati</h4>
            <p style={{ color: 'rgba(0,0,0,0.5)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Principal</p>
          </div>
        </div>
      </div>
    </section>
  );
}
