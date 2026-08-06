import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight } from 'lucide-react';
import gsap from 'gsap';

const menuData = [
  {
    title: 'Academics',
    links: [
      { name: 'Programs Overview', path: '/academics' },
      { name: 'Departments', path: '/academics/departments' },
      { name: 'Faculty', path: '/academics/faculty' },
      { name: 'Calendar', path: '/academics/calendar' },
    ]
  },
  {
    title: 'Admissions & Fees',
    links: [
      { name: 'UG Admissions', path: '/admissions/ug' },
      { name: 'PG Admissions', path: '/admissions/pg' },
      { name: 'Fee Structure', path: '/admissions/fees' },
      { name: 'Apply Now', path: '/admissions/apply' },
    ]
  },
  {
    title: 'More Info',
    links: [
      { name: 'Administration', path: '/administration' },
      { name: 'Research', path: '/research' },
      { name: 'IQAC', path: '/iqac' },
      { name: 'Student Life', path: '/student-life' },
      { name: 'Contact Us', path: '/contact' },
    ]
  }
];

export default function MegaMenu({ isOpen, onClose }) {
  const overlayRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(overlayRef.current, {
        autoAlpha: 1,
        duration: 0.4,
        ease: 'power2.out',
      });
      gsap.fromTo('.menu-column', 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out', delay: 0.1 }
      );
      document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    } else {
      gsap.to(overlayRef.current, {
        autoAlpha: 0,
        duration: 0.4,
        ease: 'power2.in',
      });
      document.body.style.overflow = '';
    }
    
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <div 
      ref={overlayRef}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        zIndex: 200,
        visibility: 'hidden',
        opacity: 0,
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto'
      }}
    >
      <div style={{
        padding: '2rem 5%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid var(--glass-border)'
      }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 600 }}>
          MENU
        </div>
        <button 
          onClick={onClose}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--brand-50)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: 'var(--text-sm)',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}
          className="close-btn"
        >
          Close <X size={24} color="var(--accent-500)" />
        </button>
      </div>

      <div 
        ref={containerRef}
        style={{
          padding: '4rem 5%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '4rem',
          flex: 1
        }}
      >
        {menuData.map((col, idx) => (
          <div key={idx} className="menu-column">
            <h3 style={{ 
              color: 'var(--accent-500)', 
              fontSize: 'var(--text-lg)', 
              marginBottom: '1.5rem',
              fontFamily: 'var(--font-display)'
            }}>
              {col.title}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {col.links.map((link, i) => (
                <Link 
                  key={i} 
                  to={link.path}
                  onClick={onClose}
                  className="menu-link"
                  style={{
                    color: 'var(--brand-50)',
                    fontSize: 'var(--text-base)',
                    fontWeight: 300,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <ArrowRight size={14} className="link-arrow" style={{ opacity: 0, transform: 'translateX(-10px)', transition: 'all 0.3s ease', color: 'var(--accent-500)' }} />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .menu-link:hover {
          color: var(--accent-500) !important;
          transform: translateX(10px);
        }
        .menu-link:hover .link-arrow {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
        .close-btn:hover {
          color: var(--accent-500) !important;
        }
      `}</style>
    </div>
  );
}
