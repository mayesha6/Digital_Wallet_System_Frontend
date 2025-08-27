import { role } from "@/constants/role";
import { adminSidebarItems } from "@/routes/adminSidebarItems";
import { agentSidebarItems } from "@/routes/agentSidebarItems";
import { userSidebarItems } from "@/routes/userSidebarItems";
import { type WRole } from "@/types";

export const getSidebarItems = (userRole: WRole) => {
  switch (userRole) {
    case role.SUPER_ADMIN:
      return [...adminSidebarItems];
    case role.ADMIN:
      return [...adminSidebarItems];
    case role.USER:
      return [...userSidebarItems];
    case role.AGENT:
      return [...agentSidebarItems];
    default:
      return [];
  }
};
