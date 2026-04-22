import Container from './Container.jsx';

export default function Nav() {
  const base = import.meta.env.BASE_URL;
  return (
    <div className="sticky top-0 z-50 bg-ink-900 border-b border-ink-700">
      <Container className="flex items-center justify-between gap-4 flex-wrap py-3 text-[12px] tracking-[0.14em] uppercase">
        <a className="flex items-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-imps-red focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900 rounded-sm" href="#top">
          <img src={`${base}imps-primary-light.svg`} alt="IMPS" className="h-8 sm:h-10 block" />
        </a>
        <nav className="hidden md:flex gap-7 text-ink-300">
          <a className="hover:text-imps-red focus-visible:text-imps-red focus-visible:outline-none focus-visible:underline" href="#services">services</a>
          <a className="hover:text-imps-red focus-visible:text-imps-red focus-visible:outline-none focus-visible:underline" href="#work">work</a>
          <a className="hover:text-imps-red focus-visible:text-imps-red focus-visible:outline-none focus-visible:underline" href="#process">process</a>
          <a className="hover:text-imps-red focus-visible:text-imps-red focus-visible:outline-none focus-visible:underline" href="#about">about</a>
        </nav>
        <div className="text-[#3F8F5F] text-[10px] sm:text-[12px] whitespace-nowrap">
          <span className="status-dot inline-block w-2 h-2 rounded-full bg-[#3F8F5F] mr-2 ring-4 ring-[#3F8F5F]/20 align-middle"></span>
          ACCEPTING — 2026
        </div>
      </Container>
    </div>
  );
}
