import { useState, useEffect } from 'react';

const getPosition = () => ({
  x: window.scrollX,
  y: window.scrollY,
});

const useScroll = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleScroll = (e) => {
    setPosition(getPosition());
  };

  useEffect(() => {
    window.onscroll = handleScroll;
    // return window.removeEventListener('scroll', handleScroll);
    return () => { window.onscroll = null; };
  }, []);

  return position;
};

export default useScroll;