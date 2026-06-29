import { useState, useEffect, useRef } from 'react';

/**
 * Hook para detectar si un elemento está en el viewport usando IntersectionObserver.
 * Útil para disparar animaciones de entrada cuando el usuario hace scroll.
 */
export function useInView(options = { threshold: 0.1 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(el);
      }
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return [ref, visible];
}

export default useInView;
