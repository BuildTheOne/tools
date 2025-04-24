import AppLayout from "@/components/layout/app-layout";
import { SidebarProvider } from "@/components/ui/sidebar";
// import { cookies } from "next/headers";

type LayoutProps = {
  children: React.ReactNode;
};

const MainLayout = async ({ children }: LayoutProps) => {
  // const cookie = await cookies();
  // const defaultOpen = cookie.get("sidebar_state")?.value === "true";

  return (
    <SidebarProvider defaultOpen={true}>
      <AppLayout>{children}</AppLayout>
    </SidebarProvider>
  );
};

export default MainLayout;
