"use client";

import AppPage from "@/components/layout/app-page";
import { RandomGeneratorService } from "@/services/random-generator.service";
import {
  RandomPasswordGeneratorFormData,
  randomPasswordGeneratorSchema,
} from "@/types/random-generator/random-pasword.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import RandomPasswordGeneratorForm from "./form";

export default function RandomPasswordGeneratorPage() {
  const pathName = usePathname();
  const breadcrumb = pathName.split("/").filter((p) => p !== "");

  const form = useForm<RandomPasswordGeneratorFormData>({
    resolver: zodResolver(randomPasswordGeneratorSchema),
    defaultValues: {
      passwordLength: 12,
      isNumberOnly: false,
      isIncludeNumber: true,
      isIncludeLowercaseLetter: true,
      isIncludeUppercaseLetter: true,
      isIncludeSpecialCharacter: false,
      isBeginWithLetter: false,
      isUseCustomSpecialCharacter: false,
      customSpecialCharacter: "().,?!;/\\|+-_=><[]{}~`",
      numberOfPassword: 1,
    },
  });

  const [passwordGenerated, setPasswordGenerated] = useState<string[]>([]);

  function onSubmit(values: RandomPasswordGeneratorFormData) {
    const randomPassword = RandomGeneratorService.password(values);
    setPasswordGenerated(randomPassword);
  }

  return (
    <AppPage title="Random Password Generator" breadcrumbPath={breadcrumb}>
      <RandomPasswordGeneratorForm
        form={form}
        onSubmit={onSubmit}
        passwordGenerated={passwordGenerated}
      />
    </AppPage>
  );
}
