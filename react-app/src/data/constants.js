export const CURRENT_YEAR = new Date().getFullYear();
export const FOUNDING_YEAR = 2020;
export const SITE_NAME = 'IMPS Studio';
export const DEFAULT_TITLE = `${SITE_NAME} · software, games, and everything in between`;

export function formatTitle(page) {
  return page ? `${page} · ${SITE_NAME}` : DEFAULT_TITLE;
}

export function getCategory(kind) {
  const k = kind.toLowerCase();
  if (k === 'game') return 'Games';
  if (k === 'app' || k === 'ios') return 'Apps';
  if (k === 'web') return 'Web';
  return 'Tools';
}
