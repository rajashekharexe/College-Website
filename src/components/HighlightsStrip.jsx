import { Award, BookOpen, ShieldCheck, Leaf } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HighlightsStrip() {
  const containerRef = useRef(null);

  useEffect(() => {
    const items = containerRef.current.children;
    
    gsap.fromTo(items,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 90%',
        }
      }
    );
  }, []);

  const highlights = [
    { icon: <Award size={32} />, title: "NAAC B++ Grade", desc: "Accredited Excellence" },
    { icon: <ShieldCheck size={32} />, title: "Autonomous", desc: "UGC Recognized" },
    { icon: <BookOpen size={32} />, title: "RCU Affiliated", desc: "Rani Channamma University" },
    { icon: <Leaf size={32} />, title: "Green Campus", desc: "Sustainable Environment" }
  ];

  return (
    <section style={{
      backgroundColor: 'var(--brand-900)', // Light blue tint
      padding: '4rem 5%',
      borderTop: '1px solid var(--glass-border)',
      borderBottom: '1px solid var(--glass-border)',
    }}>
      <div ref={containerRef} style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {highlights.map((item, idx) => (
          <div key={idx} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '12px'
          }}>
            <div style={{
              color: 'var(--accent-500)',
              padding: '16px',
              backgroundColor: '#fff',
              borderRadius: '50%',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
            }}>
              {item.icon}
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-50)', fontSize: '1.25rem', marginBottom: '4px' }}>
                {item.title}
              </h4>
              <p style={{ color: 'rgba(0,0,0,0.6)', fontSize: '0.9rem' }}>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
