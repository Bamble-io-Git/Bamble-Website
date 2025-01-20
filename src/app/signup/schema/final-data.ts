import z from 'zod';

export const finalDataValidation = z.object({
  linkedin_link: z.string(),
  job_description_link: z.string(),
});

export type TJobFilterSchema = z.infer<typeof finalDataValidation>;
