import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    projectId: z.string(),
    lang: z.enum(['en', 'hu']),
    competencies: z.array(z.enum(['bitcoin', 'software', 'firmware', 'smarthome', '3d-printing'])),
    shortDesc: z.string(),
    image: z.string().optional(),
    cardImage: z.string().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()),
    year: z.number().optional(),
    links: z.array(z.object({ label: z.string(), href: z.string() })).optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { projects };
