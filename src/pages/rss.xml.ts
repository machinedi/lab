import type { APIContext } from 'astro';
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { withBase } from '../lib/paths';

export async function GET(context: APIContext) {
  const notes = (await getCollection('notes', ({ data }) => data.status === 'published')).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );

  const site = new URL(import.meta.env.BASE_URL, context.site).href;

  return rss({
    title: 'machinedi lab notes',
    description: 'Notes on designing agent systems that run with precision, not almost.',
    site,
    items: notes.map((note) => ({
      title: note.data.title,
      pubDate: note.data.pubDate,
      description: note.data.description,
      link: withBase(`/notes/${note.id}/`),
    })),
    customData: `<language>en-gb</language>`,
  });
}
