import { useState, useEffect } from 'react';

export default function useIsMobile() {
  const [metrics, setMetrics] = useState({
    isMobile: window.innerWidth < 768,
    isLowEndDevice: false,
  });

  useEffect(() => {
    const updateMetrics = () => {
      const mobile = window.innerWidth < 768;
      // Hardware concurrency fallback for Firefox/Safari
      const cores = navigator.hardwareConcurrency || 4;
      // Consider low-end if less than 4 cores
      const lowEnd = cores < 4;
      
      setMetrics({
        isMobile: mobile,
        isLowEndDevice: lowEnd
      });
    };

    updateMetrics();
    window.addEventListener('resize', updateMetrics);
    
    return () => {
      window.removeEventListener('resize', updateMetrics);
    };
  }, []);

  return metrics;
}
