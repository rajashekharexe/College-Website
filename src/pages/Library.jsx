import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Library = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [images, setImages] = useState([]);
  // Frame count from extraction (now 60fps)
  const frameCount = 884; 

  // Refs for text overlays
  const textIntro = useRef(null);
  const textStacks = useRef(null);
  const textReading = useRef(null);
  const textMags = useRef(null);

  useEffect(() => {
    // 1. Preload images
    const loadImages = async () => {
      const loadedImages = [];
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = `/library-frames/frame_${i.toString().padStart(4, '0')}.webp`;
        loadedImages.push(img);
      }
      setImages(loadedImages);
    };
    loadImages();
  }, []);

  useEffect(() => {
    if (images.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    canvas.width = 1920;
    canvas.height = 1080;

    const render = (frameIndex) => {
      if (images[frameIndex]) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(images[frameIndex], 0, 0, canvas.width, canvas.height);
      }
    };

    // Render first frame
    images[0].onload = () => render(0);
    if(images[0].complete) render(0);

    const playhead = { frame: 0 };
    
    // Main Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=12000', // Double the scroll distance for 884 frames
        scrub: 0.5,
        pin: true,
      }
    });

    // 1. Video Scrubbing (runs continuously alongside text)
    tl.to(playhead, {
      frame: frameCount - 1,
      snap: 'frame',
      ease: 'none',
      onUpdate: () => render(playhead.frame)
    }, 0);

    // 2. Text Animations synchronized by percentage of the timeline
    
    // Intro Text (Frame 0-100 approx)
    tl.fromTo(textIntro.current, { opacity: 0, scale: 0.9, y: 50, filter: 'blur(10px)' }, { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)', duration: 0.1 }, 0)
      .to(textIntro.current, { opacity: 0, scale: 1.1, y: -50, filter: 'blur(10px)', duration: 0.1 }, 0.2);

    // Stacks Text (Frame 120-200 approx)
    tl.fromTo(textStacks.current, { opacity: 0, x: -100, filter: 'blur(10px)' }, { opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.1 }, 0.3)
      .to(textStacks.current, { opacity: 0, x: 100, filter: 'blur(10px)', duration: 0.1 }, 0.45);

    // Reading Hall Text (Frame 250-320 approx)
    tl.fromTo(textReading.current, { opacity: 0, y: 100, filter: 'blur(10px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.1 }, 0.6)
      .to(textReading.current, { opacity: 0, scale: 1.2, filter: 'blur(10px)', duration: 0.1 }, 0.75);

    // Magazines Text (Frame 350-443 approx)
    tl.fromTo(textMags.current, { opacity: 0, scale: 0.8, filter: 'blur(10px)' }, { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.1 }, 0.85);

    // Handle Resize to keep canvas aspect ratio covering the window
    const handleResize = () => {
      const vh = window.innerHeight;
      const vw = window.innerWidth;
      const canvasRatio = 1920 / 1080;
      const windowRatio = vw / vh;
      
      if (windowRatio < canvasRatio) {
        canvas.style.height = '100vh';
        canvas.style.width = `${100 * canvasRatio}vh`;
      } else {
        canvas.style.width = '100vw';
        canvas.style.height = `${100 / canvasRatio}vw`;
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [images]);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-brand-900">
      
      {/* Canvas Layer */}
      <canvas 
        ref={canvasRef} 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      />

      {/* Dark Gradient Overlay for text readability */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-brand-900/40 via-transparent to-brand-900/60 mix-blend-multiply" />

      {/* Overlay Layers */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        
        {/* Intro Text */}
        <div ref={textIntro} className="absolute inset-0 flex flex-col items-center justify-center opacity-0">
          <h1 className="text-white text-6xl md:text-8xl font-serif text-center drop-shadow-2xl">
            A Sanctuary of
            <br />
            <span className="italic font-light">Knowledge</span>
          </h1>
        </div>

        {/* Stacks Text */}
        <div ref={textStacks} className="absolute inset-0 flex flex-col items-start justify-center p-12 md:p-32 opacity-0">
          <h2 className="text-brand-50 text-5xl md:text-7xl font-serif max-w-2xl drop-shadow-2xl">
            Over <span className="text-accent-500 italic">500,000</span> Volumes
          </h2>
          <p className="text-white mt-6 text-xl max-w-md font-light drop-shadow-md">
            Wander through endless aisles of history, science, and literature preserved for the next generation.
          </p>
        </div>

        {/* Reading Hall Text */}
        <div ref={textReading} className="absolute inset-0 flex flex-col items-end justify-center p-12 md:p-32 opacity-0 text-right">
          <h2 className="text-brand-50 text-5xl md:text-7xl font-serif max-w-2xl drop-shadow-2xl">
            Focus & <span className="text-accent-500 italic">Clarity</span>
          </h2>
          <p className="text-white mt-6 text-xl max-w-md font-light drop-shadow-md ml-auto">
            Silent reading halls equipped with high-speed Wi-Fi and ergonomic seating to fuel your deep work.
          </p>
        </div>

        {/* Magazines Text */}
        <div ref={textMags} className="absolute inset-0 flex flex-col items-center justify-center p-12 md:p-32 opacity-0">
          <h2 className="text-brand-50 text-5xl md:text-7xl font-serif text-center drop-shadow-2xl">
            Global <span className="text-accent-500 italic">Perspectives</span>
          </h2>
          <p className="text-white mt-6 text-xl max-w-2xl text-center font-light drop-shadow-md">
            Stay connected with the world. Daily newspapers, international journals, and rare periodicals delivered fresh.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Library;
