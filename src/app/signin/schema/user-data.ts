import z from 'zod';

export const userSigninDataValidation = z.object({
  email: z.string().email(),
});

export type TJobFilterSchema = z.infer<typeof userSigninDataValidation>;
