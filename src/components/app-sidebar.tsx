/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Link } from "react-router";
import { authApi, useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { getSidebarItems } from "@/utils/getSidebarItems";
import { Button } from "@/components/ui/button";
import { useLogoutMutation } from "@/redux/features/auth/auth.api";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { useNavigate } from "react-router";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: userData } = useUserInfoQuery(undefined);

  const data = {
    navMain: getSidebarItems(userData?.data?.data?.role),
  };
  console.log("app-sidebar: ",data)
const dispatch = useDispatch();
const navigate = useNavigate();
const [logout] = useLogoutMutation();

const handleLogout = async () => {
  try {
    const res = await logout(undefined).unwrap();

    if (res.success) {
      toast.success("Logged out successfully");

      dispatch(authApi.util.resetApiState());
      localStorage.removeItem("token");

      navigate("/");
    }
  } catch (err: any) {
    console.error(err);
    toast.error(err?.data?.message || "Logout failed");
  }
};

  return (
    <Sidebar {...props}>
      <SidebarHeader className="items-center">
        <Link to="/">
          SCASH
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link to={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
        <div className="mt-auto">
    <Button
      variant="outline"
      className="w-full border-0 bg-red-700 rounded-t-sm rounded-b-[0px] text-center font-bold text-white text-lg py-6 hover:bg-red-800 duration-300 hover:text-white"
      onClick={handleLogout}
    >
      Logout
    </Button>
  </div>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
