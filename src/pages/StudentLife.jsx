import React from 'react';

const Section = ({ title, id }) => (
  <section id={id} style={{ 
    marginBottom: '6rem', 
    padding: '3rem', 
    background: 'var(--surface-800)', 
    borderRadius: '16px',
    border: '1px solid var(--glass-border)'
  }}>
    <h2 style={{ 
      color: 'var(--accent-500)', 
      fontFamily: 'var(--font-display)', 
      fontSize: '2rem',
      marginBottom: '1.5rem'
    }}>{title}</h2>
    <div style={{
      width: '100%',
      height: '300px',
      background: 'rgba(255,255,255,0.02)',
      border: '1px dashed rgba(255,255,255,0.1)',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--brand-50)',
      opacity: 0.5
    }}>
      [Image and Content for {title} will go here]
    </div>
  </section>
);

export default function StudentLife() {
  return (
    <div style={{ padding: '6rem 5%', backgroundColor: 'var(--surface-900)' }} id="student-life">
      <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', color: 'var(--accent-500)', fontFamily: 'var(--font-display)', marginBottom: '1rem' }}>
          Student Life
        </h2>
        <p style={{ color: 'var(--brand-50)', opacity: 0.8, maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem' }}>
          Discover the vibrant campus life, diverse clubs, and comprehensive support systems for our students.
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Section title="Placements" id="placements" />
        <Section title="Anti-Ragging Cell" id="anti-ragging-cell" />
        <Section title="Student Grievance Redressal Cell (SGRC)" id="sgrc" />
        <Section title="Anti-Sexual Harassment Cell" id="anti-sexual-harassment-cell" />
        <Section title="NCC" id="ncc" />
        <Section title="Sports" id="sports" />
        <Section title="NSS" id="nss" />
        <Section title="YRC Society" id="yrc-society" />
        <Section title="Women's Forum" id="womens-forum" />
        <Section title="Minority Cell" id="minority-cell" />
      </div>
    </div>
  );
}
