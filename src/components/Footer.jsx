import { Link } from 'react-router-dom';
import { Signature } from './Signature';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--surface-900)',
      borderTop: '1px solid var(--glass-border)',
      padding: '80px 5% 40px 5%',
      color: 'var(--brand-50)'
    }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '40px',
        maxWidth: '1400px',
        margin: '0 auto',
        paddingBottom: '60px',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        
        {/* Brand Column */}
        <div style={{ flex: '2 1 300px', maxWidth: '400px' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--brand-50)' }}>
            A.S. Patil College
          </h3>
          <p style={{ opacity: 0.7, marginBottom: '2rem', lineHeight: 1.6, maxWidth: '300px' }}>
            Empowering students with world-class education in Commerce and Management since 1960.
          </p>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ width: '60px', height: '60px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', padding: '8px' }}>
              <div style={{ width: '100%', height: '100%', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%' }}></div>
            </div>
            <div>
              <p style={{ fontSize: '0.8rem', opacity: 0.6, margin: 0 }}>Managed by</p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 600, margin: 0 }}>B.L.D.E. Association</p>
              <p style={{ fontSize: '0.75rem', opacity: 0.6, margin: 0 }}>Estd. 1910</p>
            </div>
          </div>
        </div>

        {/* About Us Column - Highly Detailed */}
        <div style={{ flex: '1 1 200px' }}>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 600, color: 'var(--accent-500)' }}>About Us</h4>
          <ul className="footer-links" style={{ listStyle: 'none', padding: 0, margin: 0, opacity: 0.85, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
            <li><Link to="/about/vision-mission">Vision and Mission</Link></li>
            <li><Link to="/about/blde-association">BLDE Association</Link></li>
            <li><Link to="/about/vijayapura">About Vijayapura</Link></li>
            <li><Link to="/about/organogram">Organogram</Link></li>
            <li><Link to="/about/infrastructure">Infrastructure</Link></li>
            <li><Link to="/about/it-policy">IT Policy</Link></li>
            <li><Link to="/about/accreditation">Accreditation/Ranking</Link></li>
            <li><Link to="/about/annual-reports">Annual Reports</Link></li>
          </ul>
        </div>

        {/* Academics & Admissions */}
        <div style={{ flex: '1 1 200px' }}>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 600, color: 'var(--accent-500)' }}>Academics</h4>
          <ul className="footer-links" style={{ listStyle: 'none', padding: 0, margin: 0, opacity: 0.85, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', marginBottom: '2rem' }}>
            <li><Link to="/academics">Programs Overview</Link></li>
            <li><Link to="/academics/departments">Departments</Link></li>
            <li><Link to="/academics/faculty">Faculty Directory</Link></li>
            <li><Link to="/research">Research & Publications</Link></li>
          </ul>

          <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 600, color: 'var(--accent-500)' }}>Admissions</h4>
          <ul className="footer-links" style={{ listStyle: 'none', padding: 0, margin: 0, opacity: 0.85, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
            <li><Link to="/admissions/ug">UG Admissions</Link></li>
            <li><Link to="/admissions/pg">PG Admissions</Link></li>
            <li><Link to="/admissions/fees">Fee Structure</Link></li>
          </ul>
        </div>

        {/* Student Life & Contact */}
        <div style={{ flex: '1 1 200px' }}>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 600, color: 'var(--accent-500)' }}>Student Life</h4>
          <ul className="footer-links" style={{ listStyle: 'none', padding: 0, margin: 0, opacity: 0.85, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', marginBottom: '2rem' }}>
            <li><Link to="/student-life">Campus Experience</Link></li>
            <li><Link to="/iqac">IQAC</Link></li>
            <li><Link to="/library">Library</Link></li>
            <li><Link to="/alumni">Alumni</Link></li>
          </ul>

          <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 600, color: 'var(--accent-500)' }}>Contact Us</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, opacity: 0.85, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
            <li>New Campus, Shri B.M. Patil Road</li>
            <li>Vijayapura, Karnataka - 586103</li>
            <li style={{ marginTop: '10px' }}>Phone: <a href="tel:+919513397409" style={{ color: 'var(--accent-500)' }}>9513397409</a></li>
            <li>Email: <a href="mailto:info@bldeaspcc.ac.in" style={{ color: 'var(--accent-500)' }}>info@bldeaspcc.ac.in</a></li>
          </ul>
        </div>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        maxWidth: '1400px',
        margin: '40px auto 0 auto',
        opacity: 0.5,
        fontSize: '0.85rem'
      }}>
        <p>&copy; {new Date().getFullYear()} A.S. Patil College of Commerce. All Rights Reserved.</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <p style={{ margin: 0, opacity: 0.9, fontSize: '1.2rem', fontWeight: 500 }}>Developed by:</p>
          <div style={{ marginTop: '-20px' }}>
            <Signature color="var(--brand-50)" scale={0.12} />
          </div>
        </div>
      </div>

      <style>{`
        .footer-links a {
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-block;
        }
        .footer-links a:hover {
          color: var(--accent-500) !important;
          transform: translateX(5px);
        }
      `}</style>
    </footer>
  );
}
