import React, { useEffect } from 'react';
import InnerPageLayout from '../components/InnerPageLayout';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const breadcrumbs = [
    { label: 'About Us' }
  ];

  useEffect(() => {
    // Parallax effect for placeholders and subtle reveals
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.parallax-image').forEach(img => {
        gsap.to(img, {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: img.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });

      gsap.utils.toArray('.reveal-up').forEach(el => {
        gsap.fromTo(el,
          { opacity: 0, y: 50 },
          {
            opacity: 1, 
            y: 0, 
            duration: 1, 
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%'
            }
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <InnerPageLayout title="About Us" breadcrumbs={breadcrumbs}>
      
      {/* Hero Section: Editorial Text + Big Image */}
      <div className="reveal-up" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '4rem', 
        alignItems: 'start', 
        marginBottom: '8rem' 
      }}>
        <div style={{ maxWidth: '600px' }}>
          <h2 style={{ 
            fontSize: 'var(--text-3xl)', 
            color: 'var(--brand-50)', 
            fontFamily: 'var(--font-display)', 
            marginBottom: '2rem', 
            fontWeight: 700,
            lineHeight: 1.2
          }}>
            Towards making our world a better place.
          </h2>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--brand-50)', opacity: 0.7, lineHeight: 1.8, marginBottom: '2rem' }}>
            Commerce education plays a significant role in making our world a better place. It prepares future generations for trade, commerce, and business activities and provides an improved livelihood to the people at the bottom of the pyramid by empowering them.
          </p>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--brand-50)', opacity: 0.7, lineHeight: 1.8 }}>
            Recognising this immense power of commerce education in social transformation, BLDEA established ASP College of Commerce way back in 1961. The college is named after Shri Atalatti Siddanagouda Patil, who made liberal and generous donations for its establishment.
          </p>
        </div>
        
        {/* Premium Frosted Glass Image Placeholder - No empty boxes! */}
        <div style={{
          width: '100%',
          height: '600px',
          borderRadius: '24px',
          overflow: 'hidden',
          backgroundColor: 'rgba(0,0,0,0.03)',
          border: '1px solid rgba(0,0,0,0.05)',
          position: 'relative'
        }}>
          {/* Subtle loading pulse effect for the placeholder */}
          <div className="parallax-image" style={{
            position: 'absolute',
            inset: '-20%',
            background: 'linear-gradient(135deg, rgba(235, 186, 81, 0.1) 0%, rgba(255,255,255,0) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
             <span style={{ color: 'var(--brand-50)', opacity: 0.4, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>
               Campus Photography
             </span>
          </div>
        </div>
      </div>

      {/* Vision & Mission - Huge Asymmetrical Typography */}
      <div className="reveal-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginBottom: '8rem' }}>
        <div>
          <h3 style={{ fontSize: 'var(--text-sm)', color: 'var(--accent-500)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem', fontWeight: 600 }}>Our Vision</h3>
          <p style={{ fontSize: 'clamp(2rem, 3vw, 3.5rem)', color: 'var(--brand-50)', fontFamily: 'var(--font-display)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-1px' }}>
            To emerge as a premier autonomous institution offering commerce, management, entrepreneurship and computer education with service to mankind.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: '2rem' }}>
          <h3 style={{ fontSize: 'var(--text-sm)', color: 'var(--accent-500)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem', fontWeight: 600 }}>Our Mission</h3>
          <p style={{ fontSize: 'var(--text-xl)', color: 'var(--brand-50)', opacity: 0.8, lineHeight: 1.6 }}>
            To provide a strong tower for nurturing an environment for the holistic growth of learners and contributing to nation-building activities.
          </p>
        </div>
      </div>

      {/* Academic Excellence Stats */}
      <div className="reveal-up" style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '6rem' }}>
        <h2 style={{ fontSize: 'var(--text-2xl)', color: 'var(--brand-50)', fontFamily: 'var(--font-display)', marginBottom: '4rem', fontWeight: 700 }}>
          Excellence by the numbers
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem' }}>
          {[
            { title: 'Affiliation', desc: 'Rani Channamma University, Belagavi (State University, Karnataka)' },
            { title: 'Accreditation', desc: 'Recognised by UGC, Govt. of India. Accredited by NAAC with A grade.' },
            { title: 'Autonomy', desc: 'Autonomous Status in 2007 for UG Programme and in 2008 for PG Programme.' },
            { title: 'Infrastructure', desc: 'Green campus and state-of-the-art infrastructure with excellent facilities.' }
          ].map((stat, i) => (
            <div key={i}>
              <h4 style={{ color: 'var(--brand-50)', fontSize: 'var(--text-xl)', marginBottom: '1rem', fontWeight: 700 }}>{stat.title}</h4>
              <p style={{ color: 'var(--brand-50)', opacity: 0.7, fontSize: '0.95rem', lineHeight: 1.6 }}>{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </InnerPageLayout>
  );
}
