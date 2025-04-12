import AppNavbar from "@/components/layout/app-navbar";

type PageProps = {
  title?: string;
  children: React.ReactNode;
  breadcrumbPath?: string[];
};

const AppPage = ({ title, children, breadcrumbPath = [] }: PageProps) => {
  return (
    <div className="">
      <AppNavbar breadcrumbPath={breadcrumbPath} />
      <div className="px-6 py-4 pb-8 md:pb-16 flex flex-col gap-4 md:gap-8">
        {title && (
          <div className="w-full flex justify-between lg:items-center gap-4">
            <h1>{title}</h1>
          </div>
        )}
        <div className="flex flex-col gap-4 md:gap-8 w-full">{children}</div>
      </div>
    </div>
  );
};

export default AppPage;
