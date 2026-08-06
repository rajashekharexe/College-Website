import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import MegaMenu from './MegaMenu';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30); // small threshold because of topbar
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyles = {
    position: 'relative',
    height: '90px', // slightly taller for a premium feel
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 5%',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    // Completely transparent when at the top to let the sky show through!
    background: isScrolled ? 'var(--surface-900)' : 'transparent',
    backdropFilter: isScrolled ? 'none' : 'none',
    borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.05)' : '1px solid transparent',
  };

  const navItems = [
    { name: 'About Us', link: '/about' },
    { 
      name: 'Administration', 
      link: '/administration',
      dropdown: [
        { name: "Principal's Message", link: '/administration/principals-message' },
        { name: 'Governing Body', link: '/administration/governing-body' },
        { name: 'Academic Council', link: '/administration/academic-council' },
        { name: 'Board of Studies', link: '/administration/board-of-studies' },
        { name: 'Controller of Examination', link: '/administration/controller-of-examination' }
      ]
    },
    { 
      name: 'Academics', 
      link: '/academics',
      dropdown: [
        { name: 'Programmes', link: '/academics/programmes' },
        { name: 'Outcome Based Education', link: '/academics/outcome-based-education' },
        { name: 'Value Added Courses', link: '/academics/value-added-courses' },
        { name: 'Academic Calendar', link: '/academics/academic-calendar' }
      ]
    },
    { name: 'Admissions', link: '/admissions/apply' },
    { 
      name: 'Student Life', 
      link: '/student-life',
      dropdown: [
        { name: 'Placements', link: '/student-life/placements' },
        { name: 'Anti-Ragging Cell', link: '/student-life/anti-ragging-cell' },
        { name: 'SGRC', link: '/student-life/sgrc' },
        { name: 'Anti-Sexual Harassment Cell', link: '/student-life/anti-sexual-harassment-cell' },
        { name: 'NCC', link: '/student-life/ncc' },
        { name: 'Sports', link: '/student-life/sports' },
        { name: 'NSS', link: '/student-life/nss' },
        { name: 'YRC Society', link: '/student-life/yrc-society' },
        { name: "Women's Forum", link: '/student-life/womens-forum' },
        { name: 'Minority Cell', link: '/student-life/minority-cell' }
      ]
    },
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
                src="/src/assets/association-logo.png" 
                alt="BLDE Association Logo" 
                style={{
                  height: '45px',
                  width: 'auto',
                  objectFit: 'contain',
                  borderRadius: '50%'
                }}
              />
              <img 
                src="/src/assets/college-logo.png" 
                alt="College Logo" 
                style={{
                  height: '55px',
                  width: 'auto',
                  objectFit: 'contain',
                  borderRadius: '50%'
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, letterSpacing: '1px', color: 'var(--brand-50)', lineHeight: 1.1 }}>
                  A.S. PATIL
                </span>
                <span style={{ fontSize: '0.55rem', color: 'var(--accent-500)', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  College of Commerce
                </span>
              </div>
            </Link>
          </div>

          <div className="nav-desktop-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center', height: '100%' }}>
            {navItems.map((item) => (
              <div key={item.name} className="nav-item-group" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
                <Link to={item.link} style={{
                  color: 'var(--brand-50)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  letterSpacing: '0.5px',
                  transition: 'color 0.3s',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
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
            
            <button 
              onClick={() => setMegaMenuOpen(true)}
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
                letterSpacing: '2px',
                transition: 'color 0.2s'
              }}
              className="menu-trigger hover-accent"
            >
              <Menu size={24} color="var(--accent-500)" />
              <span className="menu-text">Menu</span>
            </button>
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
