import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 1200, label: "Students Enrolled", suffix: "+" },
  { value: 60, label: "Years of Legacy", suffix: "+" },
  { value: 80, label: "Research Papers", suffix: "+" },
  { value: 300, label: "Placements Yearly", suffix: "+" },
];

export default function StatsCounter() {
  const containerRef = useRef(null);

  useEffect(() => {
    const statElements = document.querySelectorAll('.stat-number');
    
    // Number counting animation
    statElements.forEach((el) => {
      const target = parseInt(el.getAttribute('data-target'));
      
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(el, {
            innerHTML: target,
            duration: 2.5,
            snap: { innerHTML: 1 },
            ease: 'power3.out',
            onUpdate: function() {
              el.innerHTML = Math.ceil(this.targets()[0].innerHTML);
            }
          });
        },
        once: true
      });
    });

    // Fade in animation for the whole container
    gsap.fromTo(containerRef.current.children,
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%'
        }
      }
    );
  }, []);

  return (
    <section style={{
      padding: '6rem 5%',
      backgroundColor: 'var(--brand-50)', // Dark charcoal background for extreme contrast
      color: 'var(--surface-900)' // Light text
    }}>
      <div ref={containerRef} style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '3rem',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        {stats.map((stat, idx) => (
          <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
              display: 'flex',
              alignItems: 'baseline',
              fontFamily: 'var(--font-display)',
              fontSize: '4rem',
              color: 'var(--accent-500)',
              lineHeight: 1,
              marginBottom: '1rem'
            }}>
              <span className="stat-number" data-target={stat.value}>0</span>
              <span style={{ fontSize: '3rem' }}>{stat.suffix}</span>
            </div>
            <div style={{
              fontSize: '1.1rem',
              fontWeight: 300,
              letterSpacing: '1px',
              opacity: 0.8
            }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
