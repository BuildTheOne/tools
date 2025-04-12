import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Icon } from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { menu } from "@/constants/menu";
import Link from "next/link";

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <p className="text-center font-bold">Tools</p>
        <Separator className="" />
      </SidebarHeader>
      <SidebarContent className="">
        {menu.map((menu) => (
          <SidebarGroup key={menu.id} className="py-0 px-2">
            <SidebarGroupContent>
              <SidebarMenu>
                {menu.children && menu.children.length > 0 ? (
                  <Collapsible className="group/collapsible">
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton className="cursor-pointer">
                          <span>{menu.label}</span>
                          <div className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90">
                            <Icon icon="ChevronRight" size="sm" />
                          </div>
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {menu.children.map((submenu) => (
                            <SidebarMenuSubItem key={submenu.id}>
                              <SidebarMenuSubButton asChild>
                                {submenu.isActive && (
                                  <Link href={submenu.url}>
                                    <span>{submenu.label}</span>
                                  </Link>
                                )}
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ) : (
                  <SidebarMenuItem>
                    {menu.isActive && (
                      <Link href={menu.url}>
                        <SidebarMenuButton className="cursor-pointer">
                          <span>{menu.label}</span>
                        </SidebarMenuButton>
                      </Link>
                    )}
                  </SidebarMenuItem>
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
