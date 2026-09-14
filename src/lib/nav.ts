export const primaryNav = [
  { href: '/', label: 'Home', match: '/', exact: true },
  { href: '/projects/', label: 'Projects', match: '/projects' },
  { href: '/notes/', label: 'Notes', match: '/notes' },
  { href: '/help/', label: 'Help', match: '/help' },
  { href: '/stack/', label: 'Stack', match: '/stack' },
  { href: '/contact/', label: 'Contact', match: '/contact' },
] as const;

export function currentPath(pathname: string, baseUrl: string): string {
  const base = baseUrl.replace(/\/$/, '');
  const path = pathname.replace(/\/$/, '') || '/';
  if (path === base || path === `${base}/`) return '/';
  return path.slice(base.length) || '/';
}

export function isNavActive(current: string, match: string, exact = false): boolean {
  if (exact || match === '/') {
    return current === '/' || current === '';
  }
  return current === match || current.startsWith(`${match}/`);
}
