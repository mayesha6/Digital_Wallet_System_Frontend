import CashIn from "@/pages/agent/CashIn";
import AddMoney from "@/pages/user/AddMoney";
import MyTransaction from "@/pages/user/MyTransaction";
import Overview from "@/pages/user/Overview";
import Profile from "@/pages/user/Profile";
import UpdateProfile from "@/pages/user/UpdateProfile";
import type { ISidebarItem } from "@/types";

export const agentSidebarItems: ISidebarItem[] = [
  {
    title: "Agent Management",
    items: [
      {
        title: "Overview",
        url: "overview",
        component: Overview,
      },
      {
        title: "Add Money",
        url: "addMoney",
        component: AddMoney,
      },
      {
        title: "Cash In (to user)",
        url: "cash-in",
        component: CashIn,
      },
      {
        title: "My Transaction",
        url: "myTransaction",
        component: MyTransaction,
      },
      {
        title: "Profile",
        url: "profile",
        component: Profile,
      },
      {
        title: "Update Profile",
        url: "updateProfile",
        component: UpdateProfile,
      },
    ],
  },
];
