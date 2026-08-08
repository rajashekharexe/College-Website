import React, { useEffect, useRef } from 'react';
import InnerPageLayout from '../components/InnerPageLayout';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AdmissionStep = ({ number, title, description }) => (
  <div className="stagger-step" style={{
    display: 'flex',
    gap: '2rem',
    alignItems: 'flex-start',
    padding: '2rem',
    background: 'rgba(0,0,0,0.02)',
    border: '1px solid rgba(0,0,0,0.05)',
    borderRadius: '16px'
  }}>
    <div style={{
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      background: 'var(--brand-50)',
      color: 'var(--surface-50)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5rem',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      flexShrink: 0
    }}>
      {number}
    </div>
    <div>
      <h3 style={{ color: 'var(--brand-50)', fontSize: '1.5rem', fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: '0.5rem' }}>
        {title}
      </h3>
      <p style={{ color: 'var(--brand-50)', opacity: 0.7, fontSize: '1rem', lineHeight: 1.6 }}>
        {description}
      </p>
    </div>
  </div>
);

export default function Admissions() {
  const breadcrumbs = [
    { label: 'Admissions' }
  ];

  const stepsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.stagger-step',
        { opacity: 0, x: -50 },
        {
          opacity: 1, 
          x: 0, 
          duration: 0.8, 
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: stepsRef.current,
            start: 'top 80%'
          }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <InnerPageLayout title="Admissions" breadcrumbs={breadcrumbs}>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginBottom: '8rem' }}>
        <div style={{ maxWidth: '600px' }}>
          <h2 style={{ 
            fontSize: 'var(--text-2xl)', 
            color: 'var(--brand-50)', 
            fontWeight: 300, 
            lineHeight: 1.4,
            marginBottom: '2rem'
          }}>
            Join a legacy of excellence. We are looking for driven, curious minds ready to shape the future of commerce and management.
          </h2>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button style={{
              background: 'var(--brand-50)',
              color: 'var(--surface-50)',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '50px',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'transform 0.3s'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              Apply Online Now
            </button>
            <button style={{
              background: 'transparent',
              color: 'var(--brand-50)',
              border: '1px solid rgba(0,0,0,0.1)',
              padding: '1rem 2rem',
              borderRadius: '50px',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'background 0.3s'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}>
              Download Brochure
            </button>
          </div>
        </div>

        {/* Quick Info Box */}
        <div style={{
          background: 'var(--surface-100)',
          border: '1px solid rgba(0,0,0,0.05)',
          borderRadius: '24px',
          padding: '3rem',
          boxShadow: '0 20px 40px rgba(0,0,0,0.02)'
        }}>
          <h3 style={{ color: 'var(--brand-50)', fontSize: '1.5rem', fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: '2rem' }}>
            Key Dates 2024-25
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '1rem' }}>
              <span style={{ color: 'var(--brand-50)', opacity: 0.7 }}>Applications Open</span>
              <span style={{ color: 'var(--brand-50)', fontWeight: 600 }}>June 1st, 2024</span>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '1rem' }}>
              <span style={{ color: 'var(--brand-50)', opacity: 0.7 }}>Entrance Exam (PG)</span>
              <span style={{ color: 'var(--brand-50)', fontWeight: 600 }}>July 15th, 2024</span>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--brand-50)', opacity: 0.7 }}>Classes Commence</span>
              <span style={{ color: 'var(--brand-50)', fontWeight: 600 }}>August 10th, 2024</span>
            </li>
          </ul>
        </div>
      </div>

      <section style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '6rem' }}>
        <h2 style={{ 
          fontSize: 'var(--text-3xl)', 
          color: 'var(--brand-50)', 
          fontFamily: 'var(--font-display)', 
          marginBottom: '4rem', 
          fontWeight: 700,
          letterSpacing: '-1px'
        }}>
          Application Process
        </h2>
        
        <div ref={stepsRef} style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px' }}>
          <AdmissionStep 
            number="1" 
            title="Online Registration" 
            description="Create an account on our admission portal and fill out the basic personal details to generate your application ID." 
          />
          <AdmissionStep 
            number="2" 
            title="Document Upload" 
            description="Submit scanned copies of your previous academic transcripts, identity proof, and passport-sized photographs." 
          />
          <AdmissionStep 
            number="3" 
            title="Application Fee" 
            description="Pay the non-refundable application fee securely via our online payment gateway (UPI, Netbanking, or Credit/Debit Cards)." 
          />
          <AdmissionStep 
            number="4" 
            title="Merit List / Interview" 
            description="Depending on your chosen programme (UG/PG), await the merit list announcement or an invitation for a personal interview." 
          />
        </div>
      </section>

    </InnerPageLayout>
  );
}
