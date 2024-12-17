import * as z from "zod";

export const actionProductSchema = z.object({
  title: z.string().trim().min(6, { message: "toi thieu 6 ki tu" }),
  price: z.number(),
  detail: z.string().trim(),
});
