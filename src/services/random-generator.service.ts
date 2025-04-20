"use client";

import {
  lowercaseCharacter,
  numberCharacter,
  uppercaseCharacter,
} from "@/constants/characters";
import { RandomPasswordGeneratorFormData } from "@/types/random-generator/random-pasword.type";

const randomPasswordGeneratorService = ({
  passwordLength,
  isNumberOnly,
  isIncludeNumber,
  isIncludeLowercaseLetter,
  isIncludeUppercaseLetter,
  isIncludeSpecialCharacter,
  isBeginWithLetter,
  isUseCustomSpecialCharacter,
  customSpecialCharacter,
  numberOfPassword,
}: RandomPasswordGeneratorFormData) => {
  const passwords: string[] = [];

  for (let i = 0; i < numberOfPassword; i++) {
    let password = "";

    for (let j = 0; j < passwordLength; j++) {
      if (isNumberOnly) {
        password += numberCharacter.charAt(
          Math.floor(Math.random() * numberCharacter.length),
        );
        continue;
      }

      let chars = "";
      if (isIncludeNumber) {
        chars += numberCharacter;
      }
      if (isIncludeLowercaseLetter) {
        chars += lowercaseCharacter;
      }
      if (isIncludeUppercaseLetter) {
        chars += uppercaseCharacter;
      }
      if (isIncludeSpecialCharacter) {
        chars += isUseCustomSpecialCharacter
          ? customSpecialCharacter
          : "().,?!;/\\|+-_=><[]{}~`";
      }

      if (isBeginWithLetter) {
        const letterChars = lowercaseCharacter + uppercaseCharacter;
        password += letterChars.charAt(
          Math.floor(Math.random() * letterChars.length),
        );
        continue;
      }

      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    passwords.push(password);
  }

  return passwords;
};

export const RandomGeneratorService = {
  password: randomPasswordGeneratorService,
};
