import { useEffect } from 'react';
import gsap from 'gsap';

export default function InnerPageLayout({ title, subtitle, children }) {
  useEffect(() => {
    // Simple entry animation for inner pages
    gsap.fromTo('.page-header', 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
    gsap.fromTo('.page-content',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
    );
  }, [title]);

  return (
    <main style={{ minHeight: '100vh', paddingTop: '160px', paddingBottom: '100px', backgroundColor: 'var(--surface-900)' }}>
      <div className="page-header" style={{ padding: '0 5%', marginBottom: '4rem' }}>
        <h1 style={{ 
          fontSize: 'var(--text-4xl)', 
          color: 'var(--accent-500)', 
          fontFamily: 'var(--font-display)',
          marginBottom: '1rem'
        }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{ 
            fontSize: 'var(--text-lg)', 
            color: 'var(--brand-50)', 
            opacity: 0.8,
            maxWidth: '800px'
          }}>
            {subtitle}
          </p>
        )}
      </div>
      
      <div className="page-content" style={{ padding: '0 5%' }}>
        {children || (
          <div style={{
            padding: '4rem',
            border: '1px dashed var(--glass-border)',
            borderRadius: '12px',
            textAlign: 'center',
            color: 'var(--brand-50)',
            opacity: 0.6
          }}>
            Content for {title} will be added here soon.
          </div>
        )}
      </div>
    </main>
  );
}
