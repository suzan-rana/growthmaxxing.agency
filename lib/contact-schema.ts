import { z } from "zod";

export const needs = ["Lead follow-up", "AI receptionist", "Sales agent", "Ad creative", "A mix", "Not sure"] as const;
export const budgets = ["Not spending yet", "Under $2k", "$2k-$10k", "$10k+"] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name."),
  email: z.string().trim().email("Enter a valid work email."),
  company: z.string().trim().min(1, "Enter your company."),
  website: z
    .string()
    .trim()
    .max(200)
    .refine((v) => v === "" || /^(https?:\/\/)?[^\s.]+\.[^\s]+$/.test(v), "Enter a valid website.")
    .optional(),
  need: z.enum(needs, { message: "Choose one." }),
  budget: z.enum(budgets, { message: "Choose one." }),
  message: z.string().trim().min(10, "Tell us a little more (10+ characters).").max(2000),
  // honeypot: real users leave this empty
  hp: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
