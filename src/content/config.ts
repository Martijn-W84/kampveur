import { defineCollection, z } from 'astro:content';

export const collections = {
  blog: defineCollection({
    schema: z.object({
      draft: z.boolean().default(false),
      date: z.date().transform((str) => new Date(str)),
      title: z.string(),
      artist: z.string(),
      youtube: z.string(),
      image: z.string().optional(),
      slug2: z.string().optional(),      
    }),
  }),
};