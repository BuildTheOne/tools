import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { textFormatter } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type BreadcrumbProps = {
  breadcrumbPath?: string[];
};

const AppBreadcrumb = ({ breadcrumbPath = [] }: BreadcrumbProps) => {
  const labelFormatter = (path: string) => {
    return textFormatter(path, ["deslug", "titleize"]);
  };

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbPath.map((path, i) => (
          <React.Fragment key={i}>
            {i !== 0 && <BreadcrumbSeparator />}
            <BreadcrumbItem>
              {i !== breadcrumbPath.length - 1 ? (
                <BreadcrumbLink asChild>
                  <Link href={"/" + breadcrumbPath.slice(0, i + 1).join("/")}>
                    <BreadcrumbPage>{labelFormatter(path)}</BreadcrumbPage>
                  </Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{labelFormatter(path)}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default AppBreadcrumb;
