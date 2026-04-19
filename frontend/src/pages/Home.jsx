import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Products from '../components/Products';
import Experiences from '../components/Experiences';
import Farmstay from '../components/Farmstay';
import Food from '../components/Food';
import Impact from '../components/Impact';
import Testimonials from '../components/Testimonials';
import Journal from '../components/Journal';
import Partnership from '../components/Partnership';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Intro />
      <Products />
      <Experiences />
      <Farmstay />
      <Food />
      <Impact />
      <Testimonials />
      <Journal />
      <Partnership />
      <Contact />
      <Footer />
    </div>
  );
}
