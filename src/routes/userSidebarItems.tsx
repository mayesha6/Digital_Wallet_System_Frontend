
import AddMoney from "@/pages/user/AddMoney";
import CashOut from "@/pages/user/CashOut";
import MyTransaction from "@/pages/user/MyTransaction";
import Overview from "@/pages/user/Overview";
import Profile from "@/pages/user/Profile";
import SendMoney from "@/pages/user/SendMoney";
import UpdateProfile from "@/pages/user/UpdateProfile";
import Withdraw from "@/pages/user/Withdraw";
import type { ISidebarItem } from "@/types";

export const userSidebarItems: ISidebarItem[] = [
  {
    title: "User Dashboard",
    items: [
      {
        title: "Overview",
        url: "overview",
        component: Overview,
      },
      {
        title: "Send Money",
        url: "send-money",
        component: SendMoney,
      },
      {
        title: "Withdraw",
        url: "withdraw",
        component: Withdraw,
      },
      {
        title: "Add Money",
        url: "addMoney",
        component: AddMoney,
      },
      {
        title: "Cash Out",
        url: "cashOut",
        component: CashOut,
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
