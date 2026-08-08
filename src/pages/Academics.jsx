import React, { useEffect, useRef } from 'react';
import InnerPageLayout from '../components/InnerPageLayout';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section = ({ title, id, description, items }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.stagger-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%'
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id={id} ref={sectionRef} style={{ 
      marginBottom: '8rem', 
      borderTop: '1px solid rgba(0,0,0,0.1)', 
      paddingTop: '6rem' 
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
        <div style={{ maxWidth: '500px' }}>
          <h2 style={{ 
            fontSize: 'var(--text-3xl)', 
            color: 'var(--brand-50)', 
            fontFamily: 'var(--font-display)', 
            marginBottom: '2rem', 
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-1px'
          }}>
            {title}
          </h2>
          {description && (
            <p style={{ fontSize: 'var(--text-lg)', color: 'var(--brand-50)', opacity: 0.7, lineHeight: 1.6 }}>
              {description}
            </p>
          )}
        </div>
        
        {/* Bento/Stagger Grid for content */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {items && items.length > 0 ? items.map((item, i) => (
            <div key={i} className="stagger-card" style={{
              background: 'rgba(0,0,0,0.02)',
              border: '1px solid rgba(0,0,0,0.05)',
              borderRadius: '16px',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <h3 style={{ color: 'var(--brand-50)', fontSize: '1.2rem', fontWeight: 600 }}>{item.title}</h3>
              <p style={{ color: 'var(--brand-50)', opacity: 0.7, fontSize: '0.95rem', lineHeight: 1.5 }}>
                {item.desc}
              </p>
            </div>
          )) : (
            <div className="stagger-card" style={{
              background: 'rgba(0,0,0,0.02)',
              border: '1px solid rgba(0,0,0,0.05)',
              borderRadius: '16px',
              padding: '4rem 2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gridColumn: '1 / -1'
            }}>
              <span style={{ color: 'var(--brand-50)', opacity: 0.4, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>
                Content arriving soon
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default function Academics() {
  const breadcrumbs = [
    { label: 'Academics' }
  ];

  return (
    <InnerPageLayout title="Academics" breadcrumbs={breadcrumbs}>
      
      {/* Intro section */}
      <div className="editorial-content" style={{ maxWidth: '800px', marginBottom: '8rem' }}>
        <p style={{ fontSize: 'var(--text-2xl)', color: 'var(--brand-50)', fontWeight: 300, lineHeight: 1.4 }}>
          Our academic structure is designed to foster independent thinking, rigorous inquiry, and practical excellence. We offer a comprehensive suite of programmes tailored to the modern business landscape.
        </p>
      </div>

      <Section 
        id="programmes" 
        title="Our Programmes" 
        description="We offer robust undergraduate and postgraduate programmes that blend theoretical knowledge with practical industry insights."
        items={[
          { title: "B.Com", desc: "A three-year integrated degree programme designed to build a strong foundation in commerce." },
          { title: "BBA", desc: "A three-year programme focused on business administration and leadership skills." },
          { title: "BCA", desc: "A three-year programme developing expertise in computer applications and software." },
          { title: "MBA", desc: "A two-year postgraduate programme grooming global managers and entrepreneurs." },
          { title: "M.Com", desc: "Advanced studies in commerce, accounting, and finance." }
        ]}
      />

      <Section 
        id="outcome-based-education" 
        title="Outcome Based Education" 
        description="Our curriculum is driven by clearly defined outcomes. We focus on what students can actually do with what they know, measuring success through practical competencies rather than just grades."
      />

      <Section 
        id="value-added-courses" 
        title="Value Added Courses" 
        description="Supplement your core degree with specialised short-term courses designed to enhance employability and soft skills in a competitive global market."
        items={[
          { title: "Tally ERP 9", desc: "Practical training in computerized accounting and inventory management." },
          { title: "Digital Marketing", desc: "Learn modern SEO, social media marketing, and online brand management." },
          { title: "Advanced Excel", desc: "Data analysis, macros, and financial modeling using MS Excel." }
        ]}
      />

      <Section 
        id="academic-calendar" 
        title="Academic Calendar" 
        description="Stay on track with our comprehensive yearly schedule for examinations, cultural fests, and academic milestones."
      />

    </InnerPageLayout>
  );
}
