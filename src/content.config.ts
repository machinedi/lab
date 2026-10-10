import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notes = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    status: z.enum(['published', 'coming']),
    listing: z.enum(['full', 'abstract', 'title']),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    dek: z.string(),
    date: z.coerce.date(),
    readingTime: z.string(),
    topic: z.enum(['knowledge', 'agent-building']),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.string(),
    kind: z.enum(['project', 'lab-note']),
    featured: z.boolean().default(false),
    order: z.number(),
  }),
});

export const collections = { notes, posts, projects };
