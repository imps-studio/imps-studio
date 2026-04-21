import Container from './Container.jsx';

export default function Quote() {
  return (
    <section className="py-14 sm:py-20 md:py-[120px] border-t border-ink-700 text-center">
      <Container>
        <blockquote className="font-sans font-bold text-white max-w-[1100px] mx-auto m-0 leading-[1.05] tracking-tightest"
                    style={{ fontSize: 'clamp(1.5rem, 5vw, 4.5rem)' }}>
          Small team. <span className="text-imps-red">Big builds.</span><br />
          We ship before the<br />meeting is scheduled.
        </blockquote>
        <div className="text-[11px] text-ink-500 tracking-[0.18em] mt-6 sm:mt-8 uppercase">HOUSE RULES · &#8470; 3</div>
      </Container>
    </section>
  );
}
