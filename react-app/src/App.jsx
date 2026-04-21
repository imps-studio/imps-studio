import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Work from './components/Work.jsx';
import Process from './components/Process.jsx';
import Quote from './components/Quote.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-ink-900 text-white">
      <Nav />
      <Hero />
      <Services />
      <Work />
      <Process />
      <Quote />
      <CTA />
      <Footer />
    </div>
  );
}
