import Container from './Container.jsx';
import SectionHead from './SectionHead.jsx';

const STEPS = [
  { name: 'week 01 — scope & sketch', desc: 'Read everything. Ask obnoxious questions. Sketch the smallest thing that would prove it.', status: 'done' },
  { name: 'week 02 — prototype',      desc: 'A crude, clickable version. Ugly, functional, honest. We play with it. You play with it.', status: 'done' },
  { name: 'week 03 — build',          desc: 'Visual polish, real data, edge cases. The boring parts that separate demos from products.', status: 'done' },
  { name: 'week 04 — ship',           desc: "Deploy, monitor, hand over docs. Then we decide what's next.", status: 'progress' },
];

export default function Process() {
  return (
    <section id="process" className="py-14 sm:py-[72px] md:py-24 border-t border-ink-700">
      <Container>
        <SectionHead num="03" label="PROCESS" right="FROM BRIEF TO SHIP" title="Four weeks to a working thing." />
        <div className="bg-ink-800 border border-ink-700 rounded-md p-5 sm:p-7 md:p-8 text-[13px] sm:text-[14px] leading-[2]">
          {STEPS.map((s) => (
            <div key={s.name}>
              <span className="text-imps-red mr-2">$</span>
              <span className="text-white font-semibold">{s.name}</span>{' '}
              {s.status === 'done'
                ? <span className="text-[#3F8F5F]">&#10003; done</span>
                : <span className="text-[#C48A2B]">&#9679; in progress</span>}
              <span className="text-ink-400 block text-[12px] sm:text-[13px] leading-[1.5] mt-0.5 mb-3 ml-5 sm:ml-7">{s.desc}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
