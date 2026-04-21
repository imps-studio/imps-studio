import Container from './Container.jsx';
import SectionHead from './SectionHead.jsx';

const SERVICES = [
  { cmd: '$ imps new --type=game',   title: 'Indie games',      desc: 'Small, sharp, played-in-one-sitting games. Unity, Godot, custom engines if it calls for it.', foot: 'UNITY · GODOT · STEAM' },
  { cmd: '$ imps new --type=mobile', title: 'Mobile apps',      desc: 'iOS and Android. Native when it matters, React Native when velocity matters more.',         foot: 'SWIFT · KOTLIN · RN' },
  { cmd: '$ imps new --type=web',    title: 'Web apps & sites', desc: 'Marketing pages, dashboards, SaaS. Typed, tested, hosted somewhere sensible.',              foot: 'TS · REACT · EDGE' },
  { cmd: '$ imps new --type=tool',   title: 'Tools & things',   desc: 'CLIs, plugins, bots, extensions. The stuff that makes a team faster or an idea fly.',      foot: 'NODE · RUST · GO' },
];

export default function Services() {
  return (
    <section id="services" className="py-14 sm:py-[72px] md:py-24 border-t border-ink-700">
      <Container>
        <SectionHead num="01" label="SERVICES" right="FOUR DISCIPLINES" title="Games. Apps. Sites. Tools." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-700 border border-ink-700">
          {SERVICES.map((s) => (
            <div key={s.title} className="bg-ink-900 p-5 sm:p-6 lg:p-7 flex flex-col justify-between min-h-0 sm:min-h-[220px] lg:min-h-[260px] hover:bg-ink-800 transition-colors">
              <div>
                <div className="text-imps-red text-[12px] tracking-[0.14em]">{s.cmd}</div>
                <h3 className="font-sans text-[22px] sm:text-[24px] font-bold tracking-[-0.02em] text-white mt-4 mb-2">{s.title}</h3>
                <p className="font-sans text-[14px] text-ink-300 leading-[1.5] m-0">{s.desc}</p>
              </div>
              <div className="text-[10px] text-ink-500 tracking-[0.14em] uppercase mt-5">{s.foot}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
