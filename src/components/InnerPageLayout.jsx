import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import gsap from 'gsap';

export default function InnerPageLayout({ title, breadcrumbs, children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Magazine-style reveal
      const tl = gsap.timeline();
      
      tl.fromTo('.editorial-title .char',
        { y: 100, opacity: 0, rotateX: -45 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.02, ease: 'power4.out', delay: 0.2 }
      )
      .fromTo('.editorial-breadcrumbs',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        "-=0.8"
      )
      .fromTo('.editorial-content',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        "-=0.6"
      );
    }, containerRef);

    return () => ctx.revert();
  }, [title]);

  // Split text into spans for staggered character animation
  const titleChars = title.split('').map((char, index) => (
    <span key={index} className="char" style={{ display: 'inline-block' }}>
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));

  return (
    <div ref={containerRef} className="editorial-wrapper" style={{ 
      minHeight: '100vh', 
      backgroundColor: 'var(--surface-50)',
      paddingTop: '120px' // Leave space for navbar
    }}>
      
      {/* Ultra-minimalist Editorial Header */}
      <header style={{
        padding: '2rem 5% 4rem 5%',
        maxWidth: '1600px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column'
      }}>
        
        {/* Sleek Sticky Breadcrumbs */}
        <div className="editorial-breadcrumbs" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--brand-50)',
          fontFamily: 'var(--font-body)',
          fontSize: '0.85rem',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          marginBottom: '4rem',
          opacity: 0.6
        }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }} className="hover-accent">HOME</Link>
          {breadcrumbs && breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              <ChevronRight size={14} />
              {crumb.link ? (
                <Link to={crumb.link} style={{ color: 'inherit', textDecoration: 'none' }} className="hover-accent">
                  {crumb.label}
                </Link>
              ) : (
                <span style={{ color: 'var(--accent-500)', fontWeight: 600 }}>
                  {crumb.label}
                </span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Massive Typography Title */}
        <h1 className="editorial-title" style={{
          fontSize: 'clamp(3rem, 8vw, 8rem)',
          color: 'var(--brand-50)',
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          lineHeight: 0.9,
          letterSpacing: '-2px',
          textTransform: 'uppercase',
          margin: 0,
          perspective: '1000px'
        }}>
          {titleChars}
        </h1>
      </header>

      {/* Clean Main Content Area */}
      <main className="editorial-content" style={{
        padding: '0 5% 5rem 5%',
        maxWidth: '1600px',
        margin: '0 auto',
      }}>
        {children}
      </main>

      <style>{`
        .hover-accent { transition: color 0.3s; }
        .hover-accent:hover { color: var(--accent-500) !important; }
      `}</style>
    </div>
  );
}
