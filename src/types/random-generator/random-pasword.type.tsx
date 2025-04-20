import { z } from "zod";

export const randomPasswordGeneratorSchema = z.object({
  passwordLength: z.number().min(6),
  isNumberOnly: z.boolean(),
  isIncludeNumber: z.boolean(),
  isIncludeLowercaseLetter: z.boolean(),
  isIncludeUppercaseLetter: z.boolean(),
  isIncludeSpecialCharacter: z.boolean(),
  isBeginWithLetter: z.boolean(),
  isUseCustomSpecialCharacter: z.boolean(),
  customSpecialCharacter: z.string(),
  numberOfPassword: z.number().min(1),
});

export type RandomPasswordGeneratorFormData = z.infer<
  typeof randomPasswordGeneratorSchema
>;
