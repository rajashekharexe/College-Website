import React, { useEffect, useRef } from 'react';
import InnerPageLayout from '../components/InnerPageLayout';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CellCard = ({ title, content }) => {
  return (
    <div className="stagger-cell" style={{
      background: 'var(--surface-100)',
      border: '1px solid rgba(0,0,0,0.05)',
      borderRadius: '24px',
      padding: '3rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
    }}>
      <h3 style={{ 
        color: 'var(--brand-50)', 
        fontSize: 'var(--text-xl)', 
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        letterSpacing: '-0.5px'
      }}>
        {title}
      </h3>
      <p style={{ color: 'var(--brand-50)', opacity: 0.75, fontSize: '1rem', lineHeight: 1.6 }}>
        {content}
      </p>
    </div>
  );
};

export default function StudentLife() {
  const breadcrumbs = [
    { label: 'Student Life' }
  ];

  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.stagger-cell',
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 1, 
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%'
          }
        }
      );
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <InnerPageLayout title="Student Life" breadcrumbs={breadcrumbs}>
      
      {/* Intro section */}
      <div className="editorial-content" style={{ maxWidth: '800px', marginBottom: '8rem' }}>
        <p style={{ fontSize: 'var(--text-2xl)', color: 'var(--brand-50)', fontWeight: 300, lineHeight: 1.4 }}>
          Beyond academics, we believe in the holistic development of our students. From sports and cultural activities to vital support cells, campus life is vibrant, safe, and profoundly enriching.
        </p>
      </div>

      <div ref={gridRef} style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: '2rem' 
      }}>
        <CellCard 
          title="National Cadet Corps (NCC)" 
          content="The college offers training in the Army Wing for boys & girls, affiliated with 36 KAR.BN. Training includes trekking, rock climbing, and social campaigns with provision for B & C certificate exams." 
        />
        <CellCard 
          title="National Service Scheme (NSS)" 
          content="Established in 1973 with the motto 'Not Me but You'. Volunteers actively engage in tree plantation, health awareness, blood donation camps, and constructive village work." 
        />
        <CellCard 
          title="Sports & Athletics" 
          content="We provide state-of-the-art fields and courts for athletics, basketball, volleyball, and indoor games. Our sportsmen regularly represent the college at district, zonal, and state levels." 
        />
        <CellCard 
          title="Women's Forum" 
          content="A platform for women to express their views and resolve academic or social difficulties. The 'Matruchaya' initiative ensures physical and mental well-being for all female students." 
        />
        <CellCard 
          title="Anti-Ragging Cell" 
          content="A vigilant committee dedicated to preserving a completely ragging-free environment. We enforce strict discipline to ensure every student feels safe and respected on campus." 
        />
        <CellCard 
          title="Anti-Sexual Harassment Cell" 
          content="Providing a healthy, congenial atmosphere free of gender violence, exploitation, and discrimination. We value the dignity of every individual and uphold fundamental rights." 
        />
        <CellCard 
          title="Minority Cell" 
          content="Empowering minority communities through social and academic development. We assist students in securing scholarships and enrolling in career-oriented programs." 
        />
        <CellCard 
          title="Youth Red Cross Society" 
          content="Training students to assist in relief activities during national disasters. Volunteers organize blood donation drives and health awareness programs for weaker sections of society." 
        />
        <CellCard 
          title="Placements" 
          content="Our dedicated placement cell works tirelessly to bridge the gap between academia and industry, ensuring our students secure positions in top-tier companies globally." 
        />
      </div>

    </InnerPageLayout>
  );
}
