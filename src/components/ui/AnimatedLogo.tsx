
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useLocation } from 'react-router-dom';

const AnimatedLogo: React.FC = () => {
  const location = useLocation();
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Trigger animation on route change
  useEffect(() => {
    setShouldAnimate(true);
    const timer = setTimeout(() => setShouldAnimate(false), 1000);
    return () => clearTimeout(timer);
  }, [location]);

  // Animation configuration
  const { transform } = useSpring({
    transform: shouldAnimate ? 'rotate(360deg)' : 'rotate(0deg)',
    config: { tension: 120, friction: 14 },
  });

  return (
    <animated.div 
      style={{ transform }}
      className="flex items-center justify-center"
    >
      <img 
        src="/lovable-uploads/8118a16f-e005-4e42-b737-4d68f15273d7.png" 
        alt="Smile Care Dental Clinic Logo" 
        className="h-10 md:h-12 w-auto"
      />
    </animated.div>
  );
};

export default AnimatedLogo;
