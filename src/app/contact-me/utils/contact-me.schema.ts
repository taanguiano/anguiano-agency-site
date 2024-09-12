import { z } from "zod";

const ContactMeSchema = z.object({
  firstName: z.string().max(50).optional(),
  lastName: z.string().max(50).optional(),
  email: z.string().email().or(z.literal("")).optional(),
  phone: z.string().optional(),
});

export type ContactMeType = z.infer<typeof ContactMeSchema>;

export default ContactMeSchema;
