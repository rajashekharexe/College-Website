import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CoursesGrid() {
  const sectionRef = useRef(null);

  const courses = [
    { title: "B.Com", desc: "Bachelor of Commerce", color: "#F0F4FF" },
    { title: "BBA", desc: "Bachelor of Business Administration", color: "#FFF8EA" },
    { title: "BCA", desc: "Bachelor of Computer Applications", color: "#F2FFF0" },
    { title: "M.Com", desc: "Master of Commerce", color: "#FDF0FF" },
    { title: "MBA", desc: "Master of Business Administration", color: "#F0FCFF" },
    { title: "PGDCA", desc: "Post Graduate Diploma in Computer Applications", color: "#FFF0F0" },
  ];

  useEffect(() => {
    const cards = document.querySelectorAll('.course-card');
    
    gsap.fromTo(cards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} style={{
      padding: '8rem 5%',
      backgroundColor: '#fff',
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '5rem'
      }}>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
          color: 'var(--brand-50)',
          marginBottom: '1rem'
        }}>
          Academic <span style={{ color: 'var(--accent-500)', fontStyle: 'italic' }}>Programmes</span>
        </h2>
        <p style={{ color: 'rgba(0,0,0,0.6)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Comprehensive degrees designed to equip you with the skills needed for global commerce, management, and technology.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {courses.map((course, idx) => (
          <div key={idx} className="course-card" style={{
            backgroundColor: course.color,
            borderRadius: '24px',
            padding: '3rem 2rem',
            position: 'relative',
            overflow: 'hidden',
            cursor: 'pointer',
            border: '1px solid rgba(0,0,0,0.02)',
            transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.05)';
            const arrow = e.currentTarget.querySelector('.course-arrow');
            if(arrow) arrow.style.transform = 'translateX(5px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
            const arrow = e.currentTarget.querySelector('.course-arrow');
            if(arrow) arrow.style.transform = 'translateX(0)';
          }}
          >
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2.5rem',
              color: 'var(--brand-50)',
              marginBottom: '10px'
            }}>
              {course.title}
            </h3>
            <p style={{ color: 'rgba(0,0,0,0.6)', fontSize: '1.05rem', marginBottom: '2rem', minHeight: '3rem' }}>
              {course.desc}
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-500)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Explore Course <ArrowRight size={16} className="course-arrow" style={{ transition: 'transform 0.3s' }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
