import React, { useEffect, useRef } from 'react';
import InnerPageLayout from '../components/InnerPageLayout';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AdminProfile = ({ name, role, imagePlaceholder }) => {
  return (
    <div className="stagger-profile" style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    }}>
      <div style={{
        width: '100%',
        aspectRatio: '3/4',
        borderRadius: '16px',
        background: 'rgba(0,0,0,0.03)',
        border: '1px solid rgba(0,0,0,0.05)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle loading pulse effect for the placeholder */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(235, 186, 81, 0.1) 0%, rgba(255,255,255,0) 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          textAlign: 'center'
        }}>
           <span style={{ color: 'var(--brand-50)', opacity: 0.4, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem' }}>
             {imagePlaceholder} Portrait
           </span>
        </div>
      </div>
      <div>
        <h4 style={{ color: 'var(--brand-50)', fontSize: '1.2rem', fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: '0.2rem' }}>
          {name}
        </h4>
        <p style={{ color: 'var(--accent-500)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
          {role}
        </p>
      </div>
    </div>
  );
};

export default function Administration() {
  const breadcrumbs = [
    { label: 'Administration' }
  ];

  const profilesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal text
      gsap.fromTo('.reveal-text',
        { opacity: 0, y: 30 },
        {
          opacity: 1, 
          y: 0, 
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.reveal-text',
            start: 'top 85%'
          }
        }
      );

      // Reveal profiles
      gsap.fromTo('.stagger-profile',
        { opacity: 0, y: 50 },
        {
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: profilesRef.current,
            start: 'top 80%'
          }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <InnerPageLayout title="Administration" breadcrumbs={breadcrumbs}>
      
      {/* Principal's Message Section */}
      <section style={{ marginBottom: '8rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          
          <div className="reveal-text" style={{ maxWidth: '600px' }}>
            <h2 style={{ 
              fontSize: 'var(--text-3xl)', 
              color: 'var(--brand-50)', 
              fontFamily: 'var(--font-display)', 
              marginBottom: '2rem', 
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-1px'
            }}>
              From the Principal's Desk
            </h2>
            <p style={{ fontSize: 'var(--text-lg)', color: 'var(--brand-50)', opacity: 0.7, lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Our goal is to groom students into citizens with integrity. Since its inception, our college has enjoyed a very high degree of credibility and trust from society and the student community in particular.
            </p>
            <p style={{ fontSize: 'var(--text-lg)', color: 'var(--brand-50)', opacity: 0.7, lineHeight: 1.8, marginBottom: '2rem' }}>
              We believe that enterprise indeed is prosperity. We are committed to nurturing an environment for the holistic growth of learners, ensuring they are well-equipped to contribute to nation-building activities.
            </p>
            <div>
              <h4 style={{ color: 'var(--brand-50)', fontSize: '1.2rem', fontFamily: 'var(--font-display)', fontWeight: 700 }}>Prof. B S Belagali</h4>
              <p style={{ color: 'var(--accent-500)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>Principal</p>
            </div>
          </div>

          <div className="reveal-text" style={{
            width: '100%',
            aspectRatio: '1/1',
            borderRadius: '24px',
            background: 'rgba(0,0,0,0.03)',
            border: '1px solid rgba(0,0,0,0.05)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(235, 186, 81, 0.1) 0%, rgba(255,255,255,0) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
               <span style={{ color: 'var(--brand-50)', opacity: 0.4, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>
                 Principal Portrait
               </span>
            </div>
          </div>

        </div>
      </section>

      {/* Governing Body Section */}
      <section style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '6rem', marginBottom: '8rem' }}>
        <div style={{ marginBottom: '4rem', maxWidth: '600px' }}>
          <h2 className="reveal-text" style={{ 
            fontSize: 'var(--text-3xl)', 
            color: 'var(--brand-50)', 
            fontFamily: 'var(--font-display)', 
            marginBottom: '1rem', 
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-1px'
          }}>
            Governing Body
          </h2>
          <p className="reveal-text" style={{ fontSize: 'var(--text-lg)', color: 'var(--brand-50)', opacity: 0.7, lineHeight: 1.6 }}>
            The visionary leaders who guide our institution towards continuous excellence and societal impact.
          </p>
        </div>

        <div ref={profilesRef} style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', 
          gap: '3rem' 
        }}>
          {/* Placeholders for Governing Body members */}
          <AdminProfile name="Dr. M. B. Patil" role="President, BLDE Association" imagePlaceholder="President" />
          <AdminProfile name="Shri G. K. Patil" role="General Secretary" imagePlaceholder="Secretary" />
          <AdminProfile name="Board Member" role="Academic Advisor" imagePlaceholder="Member" />
          <AdminProfile name="Board Member" role="Industry Expert" imagePlaceholder="Member" />
        </div>
      </section>

      {/* Other Committees Section */}
      <section style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '6rem' }}>
        <h2 className="reveal-text" style={{ 
            fontSize: 'var(--text-2xl)', 
            color: 'var(--brand-50)', 
            fontFamily: 'var(--font-display)', 
            marginBottom: '3rem', 
            fontWeight: 700
        }}>
          Academic Administration
        </h2>
        
        <div className="reveal-text" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {[
            { title: 'Academic Council', desc: 'Oversees the academic policies, curriculum design, and evaluation methods of the autonomous institution.' },
            { title: 'Board of Studies', desc: 'Responsible for formulating the syllabi for various courses, reviewing academic programs, and suggesting improvements.' },
            { title: 'Controller of Examination', desc: 'Manages the end-to-end examination process, ensuring transparency, confidentiality, and timely declaration of results.' }
          ].map((item, i) => (
            <div key={i} style={{
              background: 'rgba(0,0,0,0.02)',
              border: '1px solid rgba(0,0,0,0.05)',
              borderRadius: '16px',
              padding: '2rem'
            }}>
              <h3 style={{ color: 'var(--brand-50)', fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem' }}>{item.title}</h3>
              <p style={{ color: 'var(--brand-50)', opacity: 0.7, fontSize: '0.95rem', lineHeight: 1.5 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

    </InnerPageLayout>
  );
}
