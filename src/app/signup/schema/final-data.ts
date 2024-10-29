import z from 'zod';

export const finalDataValidation = z.object({
  linkedin_link: z.string().url(),
  job_description_link: z.string().nullable(),
});

export type TJobFilterSchema = z.infer<typeof finalDataValidation>;
