import { useState, useEffect, useRef } from 'react';
import { Menu } from 'lucide-react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import MegaMenu from './MegaMenu';

import assocLogo from '../assets/association-logo.png';
import collegeLogo from '../assets/college-logo.png';

export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Emil Kowalski style spring-physics magnetic button
  const Magnetic = ({ children }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    // Physics parameters for that premium heavy feel
    const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e) => {
      if (!ref.current) return;
      const { clientX, clientY } = e;
      const { height, width, left, top } = ref.current.getBoundingClientRect();
      const xPos = (clientX - (left + width / 2)) * 0.35;
      const yPos = (clientY - (top + height / 2)) * 0.35;
      x.set(xPos);
      y.set(yPos);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x: springX, y: springY, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
      >
        {children}
      </motion.div>
    );
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30); // small threshold because of topbar
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDarkHeroPage = location.pathname === '/' || location.pathname === '/library';
  const isLightText = isDarkHeroPage && !isScrolled;
  const textColor = isLightText ? '#fff' : 'var(--brand-50)';

  const navStyles = {
    position: 'relative',
    height: '72px', // Thinner, sleeker navbar
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 5%',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    // Completely transparent when at the top to let the sky/background show through!
    background: isScrolled ? 'var(--surface-900)' : 'transparent',
    backdropFilter: isScrolled ? 'none' : 'none',
    borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.05)' : '1px solid transparent',
  };

  const navItems = [
    { name: 'About Us', link: '/about' },
    { name: 'Administration', link: '/administration' },
    { name: 'Academics', link: '/academics' },
    { name: 'Admissions', link: '/admissions' },
    { name: 'Student Life', link: '/student-life' },
    { name: 'Library', link: '/library' },
    { name: 'Alumni', link: '/alumni' }
  ];

  return (
    <>
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column'
      }}>
        
        <nav style={navStyles}>
          <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
              <img 
                src={assocLogo} 
                alt="BLDE Association Logo" 
                style={{
                  height: '38px',
                  width: 'auto',
                  objectFit: 'contain',
                  borderRadius: '50%'
                }}
              />
              <img 
                src={collegeLogo} 
                alt="College Logo" 
                style={{
                  height: '46px',
                  width: 'auto',
                  objectFit: 'contain',
                  borderRadius: '50%'
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, letterSpacing: '1px', color: textColor, lineHeight: 1.1, transition: 'color 0.4s' }}>
                  A.S. PATIL
                </span>
                <span style={{ fontSize: '0.5rem', color: 'var(--accent-500)', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  College of Commerce
                </span>
              </div>
            </Link>
          </div>

          <div className="nav-desktop-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center', height: '100%' }}>
            {navItems.map((item) => (
              <div key={item.name} className="nav-item-group" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
                <Magnetic>
                  <Link to={item.link} style={{
                    color: textColor,
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    letterSpacing: '0.5px',
                    transition: 'color 0.3s',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '10px'
                  }}
                  className="hover-accent"
                  >
                    {item.name}
                    {item.dropdown && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.3s' }} className="dropdown-arrow">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    )}
                  </Link>
                </Magnetic>
                
                {item.dropdown && (
                  <div className="dropdown-menu" style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%) translateY(10px)',
                    background: 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(0,0,0,0.05)',
                    borderRadius: '12px',
                    padding: '0.5rem',
                    minWidth: '240px',
                    opacity: 0,
                    visibility: 'hidden',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                  }}>
                    {item.dropdown.map((dropItem) => (
                      <Link key={dropItem.name} to={dropItem.link} className="dropdown-item" style={{
                        color: 'var(--brand-50)',
                        padding: '12px 16px',
                        textDecoration: 'none',
                        fontSize: '0.85rem',
                        borderRadius: '8px',
                        transition: 'all 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}>
                        <span>{dropItem.name}</span>
                        <span className="dropdown-item-arrow" style={{ opacity: 0, transform: 'translateX(-10px)', transition: 'all 0.3s' }}>→</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <Magnetic>
              <button style={{
                background: 'transparent',
                color: 'var(--accent-500)',
                border: '1px solid var(--accent-500)',
                padding: '10px 24px',
                borderRadius: '50px',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              className="apply-btn hover-bg-accent"
              >
                APPLY NOW
              </button>
            </Magnetic>
            
            <Magnetic>
              <button 
                onClick={() => setMegaMenuOpen(true)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: textColor,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: 'var(--text-sm)',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  transition: 'color 0.2s',
                  padding: '10px'
                }}
                className="menu-trigger hover-accent"
              >
                <Menu size={24} color="var(--accent-500)" />
                <span className="menu-text">Menu</span>
              </button>
            </Magnetic>
          </div>
        </nav>
      </div>
      
      {/* Removed nav-spacer so the Hero section hits the absolute top of the screen */}
      <MegaMenu isOpen={megaMenuOpen} onClose={() => setMegaMenuOpen(false)} />

      <style>{`
        .hover-accent:hover { color: var(--accent-500) !important; }
        .hover-bg-accent:hover { 
          background: var(--accent-500) !important; 
          color: #fff !important; 
        }
        .nav-item-group:hover .dropdown-menu {
          opacity: 1 !important;
          visibility: visible !important;
          transform: translateX(-50%) translateY(0) !important;
        }
        .nav-item-group:hover .dropdown-arrow {
          transform: rotate(180deg);
        }
        .dropdown-item:hover {
          background: rgba(0,0,0,0.05);
          color: var(--accent-500) !important;
        }
        .dropdown-item:hover .dropdown-item-arrow {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
        @media (max-width: 1024px) {
          .nav-desktop-links { display: none !important; }
        }
        @media (max-width: 768px) {
          .apply-btn { display: none !important; }
          .menu-text { display: none !important; }
        }
      `}</style>
    </>
  );
}
