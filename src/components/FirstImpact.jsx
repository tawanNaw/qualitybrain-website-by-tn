'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const FirstImpact = () => {
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsMounted(true);
          } else {
            setIsMounted(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const titleSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: isMounted ? 1 : 0, transform: isMounted ? 'translateY(0)' : 'translateY(-50px)' },
    delay: isMounted ? 500 : 0,
  });

  const subtitleSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: isMounted ? 1 : 0, transform: isMounted ? 'translateY(0)' : 'translateY(50px)' },
    delay: isMounted ? 500 : 0,
  });

  const foregroundSpring = useSpring({
    from: { opacity: 0, transform: 'scale(0.5)' },
    to: { opacity: isMounted ? 1 : 0, transform: isMounted ? 'scale(1)' : 'scale(0.5)' },
    delay: isMounted ? 500 : 0,
  });

  const lineSpring = useSpring({
    from: { width: '0%' },
    to: { width: isMounted ? '50%' : '0%' },
    config: { duration: 1000 },
  });

  return (
    <section ref={sectionRef} className="relative flex items-center justify-center w-full h-full text-deepBlue overflow-hidden" style={{ marginTop: '50px', marginBottom:'50px' }} >
      <div className="relative z-10 flex w-full h-full" >
        <div className="w-1/2 flex items-center justify-center h-full p-8">
          <div className="text-right relative w-full" >

          
          
          {/* style={{ paddingTop: '0', marginTop: '-300px'}}  */}

            <animated.h1
              style={titleSpring}
              className="text-3xl md:text-6xl lg:text-8xl font-bold tracking-wide leading-tight"
            >
              BUILD YOUR <br /> QUALITY PRODUCTS
            </animated.h1>
            <div className="relative my-4 h-2 w-full overflow-hidden">
              <animated.div
                style={{ 
                  ...lineSpring, 
                  position: 'absolute', 
                  right: 0, 
                  height: '0.25rem', 
                  backgroundColor: '#283380' 
                }}
              />
            </div>
            <animated.p
              style={subtitleSpring}
              className="mt-4 text-2xl md:text-4xl font-light font-sans"
            >
              with <span className="text-2xl md:text-6xl lg:text-8xl italic">Quality Brain</span>
            </animated.p>
          </div>
        </div>
        {/* ปรับตำแหน่งของ div ที่ครอบคลุมภาพ */}
        <div className="w-1/2 flex items-center justify-center h-full p-8" >
          <animated.img
            src="/image/IMG_4419.gif"
            alt="Dashboard Foreground"
            style={foregroundSpring}
            className="max-w-1/2 max-h-1/2 object-contain" // ลดขนาดของภาพ
          />
        </div>
      </div>
    </section>
  );
};

export default FirstImpact;
