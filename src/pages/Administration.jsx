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

export default function Administration() {
  return (
    <div style={{ padding: '6rem 5%', backgroundColor: 'var(--surface-900)' }} id="administration">
      <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', color: 'var(--accent-500)', fontFamily: 'var(--font-display)', marginBottom: '1rem' }}>
          Administration
        </h2>
        <p style={{ color: 'var(--brand-50)', opacity: 0.8, maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem' }}>
          Meet the leadership and governing bodies that guide our institution towards excellence.
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Section title="Principal's Message" id="principals-message" />
        <Section title="Governing Body" id="governing-body" />
        <Section title="Academic Council" id="academic-council" />
        <Section title="Board of Studies" id="board-of-studies" />
        <Section title="Controller of Examination" id="controller-of-examination" />
      </div>
    </div>
  );
}
