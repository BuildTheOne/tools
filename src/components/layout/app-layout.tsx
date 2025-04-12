"use client";

import AppSidebar from "@/components/layout/app-sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full flex">
      <AppSidebar />
      <main className="w-full">{children}</main>
    </div>
  );
};

export default AppLayout;
