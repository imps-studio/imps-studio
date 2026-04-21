import Container from './Container.jsx';
import SectionHead from './SectionHead.jsx';

const WORK = [
  { name: 'Ember',   kind: 'Game · 2024', label: 'EMBER',  bg: 'linear-gradient(135deg,#8B2A2A,#B83A3A)', fg: '#fff' },
  { name: 'Lumen',   kind: 'iOS · 2024',  label: 'LUMEN',  bg: '#282C34', fg: '#B83A3A' },
  { name: 'Forge',   kind: 'Web · 2024',  label: 'FORGE',  bg: '#0C0E12', fg: '#fff', border: true },
  { name: 'Pip',     kind: 'Bot · 2023',  label: 'PIP',    bg: '#FAF0F0', fg: '#0C0E12' },
  { name: 'Oddkey',  kind: 'CLI · 2024',  label: 'ODDKEY', bg: '#181B21', fg: '#868D9B', border: true },
  { name: '& more',  kind: '23 projects', label: '\u2605', bg: '#B83A3A', fg: '#fff' },
];

export default function Work() {
  return (
    <section id="work" className="py-14 sm:py-[72px] md:py-24 border-t border-ink-700">
      <Container>
        <SectionHead num="02" label="WORK" right="06 OF 23 SHOWN" title="Shipped last year." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {WORK.map((w) => (
            <div key={w.name} className="bg-ink-800 border border-ink-700 rounded-sm overflow-hidden cursor-pointer hover:border-imps-red transition-colors">
              <div className="aspect-[4/3] flex items-center justify-center font-sans font-extrabold text-[36px] sm:text-[48px] tracking-[-0.03em]"
                   style={{ background: w.bg, color: w.fg, borderBottom: w.border ? '1px solid #282C34' : 'none' }}>
                {w.label}
              </div>
              <div className="p-4 sm:p-[18px] flex justify-between items-baseline text-[12px] tracking-[0.1em] uppercase">
                <div className="text-white font-sans font-semibold tracking-normal normal-case text-[15px]">{w.name}</div>
                <div className="text-ink-400">{w.kind}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
