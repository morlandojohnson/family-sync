import {
  Calendar,
  Home,
  ShoppingCart,
  ListTodo,
  CookingPot,
  Utensils,
  Image,
  MessageCircleMore,
  Users,
  LogOut,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import Link from "next/link";

const items = [
  {
    title: "Home",
    url: "/home",
    icon: Home,
  },
  {
    title: "MyFamily",
    url: "/my-family",
    icon: Users,
  },
  {
    title: "Calendar",
    url: "/calendar",
    icon: Calendar,
  },
  {
    title: "Tasks/Chores",
    url: "/tasks",
    icon: ListTodo,
  },
  {
    title: "Shopping Lists",
    url: "/shopping",
    icon: ShoppingCart,
  },
  {
    title: "Recipes",
    url: "/recipes",
    icon: CookingPot,
  },
  {
    title: "Meal Plan",
    url: "/meal-plan",
    icon: Utensils,
  },
  {
    title: "Photos",
    url: "/photos",
    icon: Image,
  },
  {
    title: "Messages",
    url: "/messages",
    icon: MessageCircleMore,
  },
  {
    title: "Log Out",
    url: "#",
    icon: LogOut,
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
