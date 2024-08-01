import z from 'zod';

export const userDataValidation = z.object({
  email: z.string().email(),
  fullName: z.string().min(3),
});

export type TJobFilterSchema = z.infer<typeof userDataValidation>;
