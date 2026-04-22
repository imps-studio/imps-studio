import { Link } from 'react-router-dom';
import Container from './Container.jsx';

export default function CTA({ heading, secondaryLabel, secondaryHref }) {
  return (
    <section className="py-16 sm:py-20 md:py-[120px] border-t border-ink-700 bg-imps-red text-white">
      <Container>
        <h2 className="font-sans font-extrabold tracking-tightest leading-[0.95] m-0 mb-8 sm:mb-10 max-w-[1100px]"
            style={{ fontSize: 'clamp(2rem, 7vw, 6rem)' }}>
          {heading}
        </h2>
        <p className="font-sans text-[15px] sm:text-[17px] text-white/85 max-w-[580px] mb-7 sm:mb-10">
          We take on a handful of projects a year. Drop us a line — we'll tell you honestly whether we're the right team.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="mailto:hello@imps.studio"
            className="inline-block px-7 py-4 font-mono text-[13px] tracking-[0.1em] uppercase border-0 rounded-sm bg-ink-900 text-white hover:bg-white hover:text-imps-red transition-colors text-center no-underline"
          >
            start a project &#8594;
          </a>
          <Link
            to={secondaryHref}
            className="inline-block px-7 py-4 font-mono text-[13px] tracking-[0.1em] uppercase rounded-sm bg-transparent text-white border border-white/30 hover:border-white transition-colors text-center no-underline"
          >
            {secondaryLabel}
          </Link>
        </div>
      </Container>
    </section>
  );
}
