import { useEffect, useState } from 'react';

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = (ev: MouseEvent) => {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  };

  useEffect(() => {
    window.addEventListener('pointermove', updateMousePosition);

    return () => window.removeEventListener('pointermove', updateMousePosition);
  }, []);

  return mousePosition;
};
