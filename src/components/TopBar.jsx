import { Phone, Mail, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TopBar() {
  return (
    <div style={{
      background: 'var(--brand-900)',
      color: 'var(--brand-50)',
      padding: '8px 5%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '12px', /* Fixed smaller size */
      borderBottom: '1px solid var(--glass-border)',
      position: 'relative',
      zIndex: 101,
    }}>
      {/* Left: Contact */}
      <div style={{ flex: 1, display: 'flex', gap: '20px' }}>
        <a href="tel:+919513397409" style={{ display: 'flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s' }} className="hover-accent">
          <Phone size={12} color="var(--accent-500)" />
          <span>9513397409 / 01 / 02</span>
        </a>
        <a href="mailto:info@bldeaspcc.ac.in" style={{ display: 'flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s' }} className="hover-accent">
          <Mail size={12} color="var(--accent-500)" />
          <span>info@bldeaspcc.ac.in</span>
        </a>
      </div>
      
      {/* Center: Notice */}
      <div className="top-utils" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px', color: 'var(--accent-500)' }}>
        <span style={{ fontWeight: 600 }}>Notice:</span>
        <a href="#" style={{ textDecoration: 'underline', color: 'var(--brand-50)' }}>Admissions to PG-2024 Courses Open</a>
      </div>

      {/* Right: Links */}
      <div className="top-utils" style={{ flex: 1, display: 'flex', gap: '16px', justifyContent: 'flex-end', alignItems: 'center' }}>
        <Link to="/library" className="hover-accent" style={{ transition: 'color 0.2s' }}>Library</Link>
        <Link to="/alumni" className="hover-accent" style={{ transition: 'color 0.2s' }}>Alumni</Link>
        <Link to="/irins" className="hover-accent" style={{ transition: 'color 0.2s' }}>IRINS</Link>
      </div>
      
      <style>{`
        .hover-accent:hover { color: var(--accent-500) !important; }
        @media (max-width: 900px) {
          .top-utils { display: none !important; }
        }
      `}</style>
    </div>
  );
}
