"use client";

import AppPage from "@/components/layout/app-page";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathName = usePathname();
  const breadcrumb = pathName.split("/").filter((p) => p !== "");

  return (
    <AppPage title="Random Generator" breadcrumbPath={breadcrumb}>
      <div></div>
    </AppPage>
  );
}
