import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import gsap from 'gsap';

export default function InnerPageLayout({ title, breadcrumbs, children }) {
  useEffect(() => {
    window.scrollTo(0, 0);

    const tl = gsap.timeline();
    
    tl.fromTo('.inner-hero-overlay',
      { scaleY: 0, transformOrigin: 'top' },
      { scaleY: 1, duration: 1, ease: 'power3.inOut' }
    )
    .fromTo('.inner-hero-title',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      "-=0.4"
    )
    .fromTo('.inner-breadcrumbs',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
      "-=0.6"
    )
    .fromTo('.inner-page-content',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      "-=0.4"
    );

    return () => tl.kill();
  }, [title]);

  return (
    <div className="inner-page-wrapper" style={{ minHeight: '100vh', backgroundColor: 'var(--surface-50)' }}>
      {/* Inner Page Hero Banner */}
      <div style={{
        position: 'relative',
        height: '40vh',
        minHeight: '350px',
        width: '100%',
        backgroundColor: 'var(--surface-900)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 5%',
        marginTop: '0' 
      }}>
        <div className="inner-hero-overlay" style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'var(--brand-50)',
          zIndex: 0
        }} />
        
        {/* Placeholder for future hero background images */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.1,
          backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)',
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 10px 10px',
          zIndex: 1
        }} />

        <div style={{ position: 'relative', zIndex: 10, paddingTop: '80px' }}>
          <h1 className="inner-hero-title" style={{
            fontSize: 'clamp(2.5rem, 4vw, 4rem)',
            color: '#ffffff',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            marginBottom: '1rem',
            letterSpacing: '-1px'
          }}>
            {title}
          </h1>

          {/* Breadcrumbs */}
          <div className="inner-breadcrumbs" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: 'rgba(255, 255, 255, 0.7)',
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem'
          }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none' }}>Home</Link>
            {breadcrumbs && breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                <ChevronRight size={14} />
                {crumb.link ? (
                  <Link to={crumb.link} style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none' }}>
                    {crumb.label}
                  </Link>
                ) : (
                  <span style={{ color: 'var(--accent-500)', fontWeight: 500 }}>
                    {crumb.label}
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="inner-page-content" style={{
        padding: '5rem 5%',
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: 'var(--surface-50)'
      }}>
        {children}
      </main>
    </div>
  );
}
