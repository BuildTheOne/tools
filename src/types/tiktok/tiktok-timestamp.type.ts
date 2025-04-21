import { z } from "zod";

export const tiktokTimestampSchema = z.object({
  url: z.string().nonempty(),
});

export type TiktokTimestampFormData = z.infer<
  typeof tiktokTimestampSchema
>;
