import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToSection() {
  // location represents the current URL
  // for example, if the URL is change to /about
  // location.pathname will be /about
  const location = useLocation();

  // Scroll to the section corresponding to the current path
  // the ? and : stands for short hand ternary operator, 
  // it is a way to write an if-else statement in a single line
  useEffect(() => {
    const id = location.pathname === '/' ? 'home' : location.pathname.replace('/', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, [location]);

  //getElementById will return null if the element is not found,
  //the ? mark prevents nullpointer error by return null and not calling scrollIntoView if the element is not found
  return null;
}