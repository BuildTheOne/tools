import { z } from "zod";

export const tiktokTimestampSchema = z.object({
  url: z.string().nonempty("Tiktok URL is required"),
});

export type TiktokTimestampFormData = z.infer<typeof tiktokTimestampSchema>;
