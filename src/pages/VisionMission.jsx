import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import InnerPageLayout from '../components/InnerPageLayout';
import { Eye, Target } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function VisionMission() {
  useEffect(() => {
    // ScrollTrigger animations for the cards
    gsap.fromTo('.vm-card', 
      { opacity: 0, y: 100 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.2, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.vm-container',
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <InnerPageLayout 
      title="Vision & Mission" 
      subtitle="Guiding principles that drive our commitment to academic excellence and student success."
    >
      <div className="vm-container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem',
        marginTop: '2rem'
      }}>
        {/* Vision Card */}
        <div className="vm-card" style={{
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(12px)',
          border: '1px solid var(--glass-border)',
          borderRadius: '16px',
          padding: '4rem 3rem',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ 
            position: 'absolute', 
            top: '-20px', 
            right: '-20px', 
            opacity: 0.05,
            transform: 'rotate(15deg)'
          }}>
            <Eye size={200} color="var(--brand-50)" />
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ padding: '12px', background: 'var(--accent-500)', borderRadius: '12px', color: 'var(--surface-900)' }}>
              <Eye size={32} />
            </div>
            <h2 style={{ fontSize: 'var(--text-2xl)', color: 'var(--accent-500)', margin: 0 }}>Our Vision</h2>
          </div>
          
          <p style={{ fontSize: 'var(--text-lg)', lineHeight: 1.8, color: 'var(--brand-50)', fontWeight: 300 }}>
            To emerge as a premier institution of excellence in commerce and management education, 
            empowering students with holistic development, ethical values, and global competencies 
            to become future-ready leaders and entrepreneurs.
          </p>
        </div>

        {/* Mission Card */}
        <div className="vm-card" style={{
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(12px)',
          border: '1px solid var(--glass-border)',
          borderRadius: '16px',
          padding: '4rem 3rem',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ 
            position: 'absolute', 
            top: '-20px', 
            right: '-20px', 
            opacity: 0.05,
            transform: 'rotate(15deg)'
          }}>
            <Target size={200} color="var(--brand-50)" />
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ padding: '12px', background: 'var(--accent-500)', borderRadius: '12px', color: 'var(--surface-900)' }}>
              <Target size={32} />
            </div>
            <h2 style={{ fontSize: 'var(--text-2xl)', color: 'var(--accent-500)', margin: 0 }}>Our Mission</h2>
          </div>
          
          <ul style={{ 
            fontSize: 'var(--text-base)', 
            lineHeight: 1.8, 
            color: 'var(--brand-50)', 
            fontWeight: 300,
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <li style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: 'var(--accent-500)' }}>•</span>
              To impart quality education that blends theoretical knowledge with practical skills.
            </li>
            <li style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: 'var(--accent-500)' }}>•</span>
              To foster an environment of innovation, research, and continuous learning.
            </li>
            <li style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: 'var(--accent-500)' }}>•</span>
              To instill strong moral and ethical values in our students.
            </li>
            <li style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: 'var(--accent-500)' }}>•</span>
              To collaborate with industry partners to ensure our curriculum remains relevant and dynamic.
            </li>
          </ul>
        </div>
      </div>
    </InnerPageLayout>
  );
}
