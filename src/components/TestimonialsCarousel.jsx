import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "A.S. Patil College of Commerce provided me with not just a degree, but a platform to discover my true potential. The faculty's guidance was instrumental in shaping my career path.",
    name: "Sneha Kulkarni",
    role: "B.Com Alumnus (2020), Financial Analyst at Deloitte"
  },
  {
    quote: "The autonomous curriculum is incredibly aligned with industry standards. The placement cell worked tirelessly to ensure we got the best opportunities even before graduation.",
    name: "Rahul Desai",
    role: "MBA Alumnus (2022), Marketing Manager at ITC"
  },
  {
    quote: "Being part of the NCC wing at ASP College instilled a sense of discipline and leadership in me that I carry into my professional life every day. It was a transformative experience.",
    name: "Priya Patil",
    role: "BBA Alumnus (2021), Entrepreneur"
  }
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(slideRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' }
    );
  }, [currentIndex]);

  const nextSlide = () => {
    gsap.to(slideRef.current, {
      opacity: 0, x: -50, duration: 0.3, onComplete: () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }
    });
  };

  const prevSlide = () => {
    gsap.to(slideRef.current, {
      opacity: 0, x: 50, duration: 0.3, onComplete: () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      }
    });
  };

  return (
    <section style={{
      padding: '8rem 5%',
      backgroundColor: '#fff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        position: 'relative'
      }}>
        {/* Background decorative quote */}
        <Quote size={200} color="var(--brand-900)" style={{
          position: 'absolute',
          top: '-50px',
          left: '-20px',
          opacity: 0.5,
          zIndex: 0
        }} />

        <div ref={slideRef} style={{ position: 'relative', zIndex: 1, padding: '2rem' }}>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            color: 'var(--brand-50)',
            lineHeight: 1.4,
            marginBottom: '3rem',
            fontStyle: 'italic'
          }}>
            "{testimonials[currentIndex].quote}"
          </p>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h4 style={{ color: 'var(--brand-50)', fontSize: '1.2rem', fontWeight: 600 }}>{testimonials[currentIndex].name}</h4>
              <p style={{ color: 'rgba(0,0,0,0.5)', fontSize: '0.9rem' }}>{testimonials[currentIndex].role}</p>
            </div>
            
            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={prevSlide} style={{
                width: '50px', height: '50px', borderRadius: '50%',
                border: '1px solid rgba(0,0,0,0.1)', background: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', transition: 'all 0.3s'
              }} className="testim-btn">
                <ChevronLeft size={24} color="var(--brand-50)" />
              </button>
              <button onClick={nextSlide} style={{
                width: '50px', height: '50px', borderRadius: '50%',
                border: '1px solid rgba(0,0,0,0.1)', background: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', transition: 'all 0.3s'
              }} className="testim-btn">
                <ChevronRight size={24} color="var(--brand-50)" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .testim-btn:hover {
          background: var(--brand-50) !important;
        }
        .testim-btn:hover svg {
          stroke: #fff !important;
        }
      `}</style>
    </section>
  );
}
