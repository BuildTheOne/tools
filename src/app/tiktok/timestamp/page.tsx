"use client";

import AppPage from "@/components/layout/app-page";
import { TiktokService } from "@/services/tiktok.service";
import {
  TiktokTimestampFormData,
  tiktokTimestampSchema,
} from "@/types/tiktok/tiktok-timestamp.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import TiktokTimestampForm from "./form";

export default function Page() {
  const pathName = usePathname();
  const breadcrumb = pathName.split("/").filter((p) => p !== "");

  const form = useForm<TiktokTimestampFormData>({
    resolver: zodResolver(tiktokTimestampSchema),
    defaultValues: {
      url: "",
    },
  });

  const [result, setResult] = useState<string>("");

  const onSubmit = (values: TiktokTimestampFormData) => {
    const timestamp = TiktokService.timestamp(values);
    setResult(timestamp);
  };

  return (
    <AppPage title="Tiktok Timestamp" breadcrumbPath={breadcrumb}>
      <TiktokTimestampForm form={form} onSubmit={onSubmit} />
      {result && (
        <div className="p-2 border rounded-lg">
          <p className="">Uploaded on: {result}</p>
        </div>
      )}
    </AppPage>
  );
}
