import { topicOrder, topics, type TopicKey } from './topics';

export interface NavItem {
  href: string;
  label: string;
  match: string;
  topic?: TopicKey;
}

export const primaryNav: NavItem[] = [
  { href: '/', label: 'Home', match: '/' },
  ...topicOrder.map((key) => ({
    href: topics[key].href,
    label: topics[key].label,
    match: topics[key].href.replace(/\/$/, ''),
    topic: key,
  })),
  { href: '/help/', label: 'Help', match: '/help' },
  { href: '/contact/', label: 'Contact', match: '/contact' },
];

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
