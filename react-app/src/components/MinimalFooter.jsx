import Container from './Container.jsx';
import { CURRENT_YEAR } from '../data/constants.js';

export default function MinimalFooter({ label }) {
  return (
    <footer className="border-t border-ink-700 py-5">
      <Container className="flex flex-col sm:flex-row justify-between gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-ink-500">
        <div>&copy; {CURRENT_YEAR} &middot; imps.studio</div>
        <div>{label} &middot; V{CURRENT_YEAR}.1</div>
      </Container>
    </footer>
  );
}
