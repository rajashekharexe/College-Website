import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const canvasRef = useRef(null);
  const overlayRef = useRef(null);
  const preloaderTextRef = useRef(null); // Reference for the BLDE text
  const collegePreloaderRef = useRef(null); // Reference for the College text
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Splitting text into individual spans for physics-based spring animation
  const bldeText = "BLDE".split("");
  const assocText = "Association's".split("");
  const asPatilText = "A.S. Patil".split("");
  const commerceText = "College of Commerce".split("");

  const totalFrames = 170;
  const frameImages = useRef([]);
  const canvasObj = useRef({ frame: 1, scale: 1.0 });

  useEffect(() => {
    let loadedCount = 0;
    const images = [];
    
    // Stop any existing scrolling on body until loaded
    document.body.style.overflow = 'hidden';

    // Preload images
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const frameNumber = i.toString().padStart(4, '0');
      img.src = `/frames/frame_${frameNumber}.jpg`;
      img.onload = () => {
        loadedCount++;
        setLoadingProgress(Math.floor((loadedCount / totalFrames) * 100));
        if (loadedCount === totalFrames) {
          setIsLoaded(true);
          document.body.style.overflow = 'auto'; // Restore scroll
        }
      };
      // For immediate availability on cache
      images.push(img);
    }
    frameImages.current = images;
    
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Set initial layout for main Hero text
    gsap.set(overlayRef.current, { opacity: 0 });
    gsap.set('.hero-char', { 
      y: 80, 
      rotationX: -60, 
      scale: 1.4, 
      opacity: 0, 
      filter: 'blur(25px)'
    });
    
    gsap.set('.hero-word', { 
      y: 30, 
      opacity: 0, 
      filter: 'blur(10px)',
      scale: 0.95
    });
    
    gsap.set('.hero-fade-up', { y: 30, opacity: 0 });
    
    // Set initial layout for BLDE Preloader text
    gsap.set('.preloader-char', { y: 100, opacity: 0 });
    
    // Set initial layout for College Preloader text
    gsap.set('.college-preloader-char', { y: 100, opacity: 0 });

    const renderCanvas = () => {
      if (!canvasRef.current) return;
      const img = frameImages.current[Math.max(0, Math.floor(canvasObj.current.frame) - 1)];
      if (img && img.complete) {
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;
        
        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
          drawWidth = canvas.width;
          drawHeight = canvas.width / imgRatio;
          offsetX = 0;
          offsetY = (canvas.height - drawHeight) / 2;
        } else {
          drawWidth = canvas.height * imgRatio;
          drawHeight = canvas.height;
          offsetX = (canvas.width - drawWidth) / 2;
          offsetY = 0;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        ctx.save();
        ctx.translate(canvas.width/2, canvas.height/2);
        ctx.scale(canvasObj.current.scale, canvasObj.current.scale);
        ctx.translate(-canvas.width/2, -canvas.height/2);
        
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        ctx.restore();
      }
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderCanvas();
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial sizing

    // Render first frame immediately
    canvasObj.current.frame = 1;
    renderCanvas();

    // The Grand Master Timeline (combining Preloader + Drone + Hero)
    const masterTl = gsap.timeline();
    
    // 0.0s: Fade in the BLDE Association's text immediately
    masterTl.to('.preloader-char', 
      { y: 0, opacity: 1, duration: 1.0, stagger: 0.03, ease: "power4.out" },
      0
    );

    // 0.0s: Start the Drone flight slowly (4.5s duration)
    masterTl.to(canvasObj.current, {
      frame: totalFrames,
      snap: 'frame',
      duration: 4.5,
      ease: "none",
      onUpdate: renderCanvas
    }, 0);

    // 1.5s: Sink the BLDE text down and fade it out
    masterTl.to(preloaderTextRef.current, 
      { y: 50, opacity: 0, duration: 0.6, ease: "power3.in" },
      1.5
    );

    // 2.0s: Fade in A.S. Patil College of Commerce text
    masterTl.to('.college-preloader-char',
      { y: 0, opacity: 1, duration: 1.0, stagger: 0.02, ease: "power4.out" },
      2.0
    );

    // 3.5s: Sink the College text down and fade it out
    masterTl.to(collegePreloaderRef.current,
      { y: 50, opacity: 0, duration: 0.6, ease: "power3.in" },
      3.5
    );

    // 4.5s: Fade in the dark gradient overlay right as the drone stops
    masterTl.to(overlayRef.current,
      { opacity: 1, duration: 1.2, ease: "power2.inOut" },
      4.5 
    );
    
    // 4.7s: Reveal the main Hero 3D text
    masterTl.to('.hero-char', 
      { 
        y: 0, rotationX: 0, scale: 1, opacity: 1, filter: 'blur(0px)', 
        duration: 1.0, stagger: 0.02, ease: "power4.out" 
      },
      4.7 
    )
    .to('.hero-word', 
      { y: 0, scale: 1, opacity: 1, filter: 'blur(0px)', duration: 0.8, stagger: 0.02, ease: "power4.out" },
      4.9
    )
    .to('.hero-fade-up', 
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
      5.1
    );

    // 4.5s: Start subtle endless Ken Burns zoom on the final drone frame
    masterTl.to(canvasObj.current, {
      scale: 1.1,
      duration: 25,
      ease: "none",
      onUpdate: renderCanvas
    }, 4.5);

    return () => {
      window.removeEventListener('resize', handleResize);
      masterTl.kill();
    };
  }, [isLoaded]);

  const heroStyle = {
    position: 'relative',
    height: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    overflow: 'hidden',
    backgroundColor: 'var(--surface-900)'
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(75deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 45%, rgba(255,255,255,0) 80%)',
    zIndex: 1,
    pointerEvents: 'none'
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
    textAlign: 'left',
    padding: '0 5% 3%',
    maxWidth: '1000px',
    perspective: '1000px'
  };

  return (
    <section style={heroStyle} ref={containerRef}>
      {!isLoaded && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'var(--brand-50)',
          fontFamily: 'var(--font-display)',
          fontSize: '3rem',
          zIndex: 10,
          fontWeight: 700,
          letterSpacing: '4px'
        }}>
          {loadingProgress}%
        </div>
      )}
      
      <canvas 
        ref={canvasRef} 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease'
        }} 
      />
      
      {/* --- PRELOADER TEXT LAYER (Floating over the drone) --- */}
      <div ref={preloaderTextRef} style={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        zIndex: 3, display: 'flex', alignItems: 'center', justifyContent: 'center',
        perspective: '1000px', pointerEvents: 'none',
        opacity: isLoaded ? 1 : 0 // Only show when canvas starts
      }}>
        {/* Massive Faint Watermark behind text */}
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          fontSize: '28vw', fontWeight: 900,
          color: 'rgba(0, 0, 0, 0.03)', // faint dark watermark behind text
          fontFamily: 'var(--font-display)',
          pointerEvents: 'none', zIndex: -1,
          letterSpacing: '2vw'
        }}>
          BLDE
        </div>
        <div style={{
          color: 'var(--brand-50)', fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 300,
          letterSpacing: '8px', textTransform: 'uppercase',
          display: 'flex', alignItems: 'center', gap: '30px',
          textShadow: '0px 10px 40px rgba(255,255,255,0.9)' // Light glow to stand out over video
        }}>
          <span style={{ color: 'var(--accent-500)', fontWeight: 600, display: 'flex' }}>
            {bldeText.map((char, i) => (
              <span key={i} className="preloader-char" style={{ display: 'inline-block' }}>{char}</span>
            ))}
          </span> 
          <span style={{ display: 'flex', opacity: 0.9 }}>
            {assocText.map((char, i) => (
              <span key={i} className="preloader-char" style={{ display: 'inline-block' }}>{char === " " ? "\u00A0" : char}</span>
            ))}
          </span>
        </div>
      </div>
      {/* ---------------------------------------------------- */}

      {/* --- COLLEGE PRELOADER TEXT LAYER (Floating over the drone) --- */}
      <div ref={collegePreloaderRef} style={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        zIndex: 3, display: 'flex', alignItems: 'center', justifyContent: 'center',
        perspective: '1000px', pointerEvents: 'none',
        opacity: isLoaded ? 1 : 0 
      }}>
        <div style={{
          color: 'var(--brand-50)', fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 300,
          letterSpacing: '6px', textTransform: 'uppercase',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
          textShadow: '0px 10px 40px rgba(255,255,255,0.9)'
        }}>
          <span style={{ color: 'var(--accent-500)', fontWeight: 600, display: 'flex' }}>
            {asPatilText.map((char, i) => (
              <span key={i} className="college-preloader-char" style={{ display: 'inline-block' }}>{char === " " ? "\u00A0" : char}</span>
            ))}
          </span> 
          <span style={{ display: 'flex', opacity: 0.9 }}>
            {commerceText.map((char, i) => (
              <span key={i} className="college-preloader-char" style={{ display: 'inline-block' }}>{char === " " ? "\u00A0" : char}</span>
            ))}
          </span>
        </div>
      </div>
      {/* ---------------------------------------------------- */}

      <div style={overlayStyle} ref={overlayRef}></div>
      
      <div style={contentStyle} ref={textRef}>
        <div className="hero-fade-up" style={{
          display: 'inline-block',
          padding: '8px 20px',
          backgroundColor: 'rgba(255,255,255,0.6)',
          border: '1px solid rgba(0,0,0,0.05)',
          borderRadius: '50px',
          backdropFilter: 'blur(10px)',
          marginBottom: '1.5rem',
        }}>
          <h3 style={{
            color: 'var(--accent-500)',
            fontFamily: 'var(--font-body)',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontSize: '12px',
            fontWeight: 600,
            margin: 0
          }}>
            A.S. Patil College of Commerce (Autonomous)
          </h3>
        </div>
        
        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw + 1rem, 5.5rem)',
          marginBottom: '1.5rem',
          lineHeight: 1.1,
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          color: 'var(--brand-50)',
          textShadow: '0 4px 30px rgba(255,255,255,0.8), 0 2px 10px rgba(255,255,255,0.5)',
          perspective: '1200px'
        }}>
          {"Education at the".split(' ').map((word, wIdx) => (
            <span key={wIdx} style={{ display: 'inline-block', whiteSpace: 'nowrap', marginRight: '0.25em' }}>
              {word.split('').map((char, cIdx) => (
                <span key={cIdx} className="hero-char" style={{ display: 'inline-block', transformOrigin: '50% 50% -50px' }}>{char}</span>
              ))}
            </span>
          ))}
          <br />
          <span style={{ color: 'var(--accent-500)', fontStyle: 'italic', fontWeight: 400, paddingRight: '12px' }}>
            {"forefront".split('').map((char, cIdx) => (
              <span key={cIdx} className="hero-char" style={{ display: 'inline-block', transformOrigin: '50% 50% -50px' }}>{char}</span>
            ))}
          </span>
          {"of development.".split(' ').map((word, wIdx) => (
            <span key={wIdx} style={{ display: 'inline-block', whiteSpace: 'nowrap', marginRight: '0.25em' }}>
              {word.split('').map((char, cIdx) => (
                <span key={cIdx} className="hero-char" style={{ display: 'inline-block', transformOrigin: '50% 50% -50px' }}>{char}</span>
              ))}
            </span>
          ))}
        </h1>
        
        <div style={{
          fontSize: 'var(--text-lg)',
          color: 'var(--brand-50)',
          opacity: 0.9,
          maxWidth: '650px',
          marginBottom: '3rem',
          lineHeight: 1.6,
          fontWeight: 400,
          textShadow: '0 2px 15px rgba(255,255,255,0.8)'
        }}>
          {"Affiliated to Rani Channamma University. Accredited by NAAC at B++ Level. Shaping the future of commerce and management in Vijayapura since 2007.".split(' ').map((word, wIdx) => (
            <span key={wIdx} className="hero-word" style={{ display: 'inline-block', marginRight: '0.25em' }}>
              {word}
            </span>
          ))}
        </div>
        
        <div className="hero-fade-up" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <button style={{
            background: 'var(--accent-500)',
            color: '#fff',
            border: 'none',
            padding: '16px 36px',
            borderRadius: '50px',
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: 'var(--text-base)',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 10px 30px rgba(235, 186, 81, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 15px 40px rgba(235, 186, 81, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 10px 30px rgba(235, 186, 81, 0.3)';
          }}
          >
            Explore Programs
          </button>
          
          <button style={{
            background: 'transparent',
            color: 'var(--brand-50)',
            border: '1px solid rgba(0,0,0,0.2)',
            padding: '16px 36px',
            borderRadius: '50px',
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: 'var(--text-base)',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(0,0,0,0.03)';
            e.target.style.borderColor = 'rgba(0,0,0,0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.borderColor = 'rgba(0,0,0,0.2)';
          }}
          >
            Virtual Tour
          </button>
        </div>
      </div>
    </section>
  );
}
