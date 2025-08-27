import ApproveAgent from "@/pages/admin/ApproveAgent";
import BlockWallet from "@/pages/admin/BlockWallet";
import Overview from "@/pages/admin/Overview";
import SuspendAgent from "@/pages/admin/SuspendAgent";
import Transaction from "@/pages/admin/Transaction";
import UnblockWallet from "@/pages/admin/UnblockWallet";
import Profile from "@/pages/user/Profile";
import UpdateProfile from "@/pages/user/UpdateProfile";
import type { ISidebarItem } from "@/types";


export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Overview",
        url: "overview",
        component: Overview,
      },
    ],
  },
  {
    title: "User Management",
    items: [
      {
        title: "Block Wallet",
        url: "block-wallet",
        component: BlockWallet,
      },
      {
        title: "Unblock Wallet",
        url: "unblock-wallet",
        component: UnblockWallet,
      },
    ],
  },
  {
    title: "Agent Management",
    items: [
      {
        title: "Approve Agent",
        url: "approve-agent",
        component: ApproveAgent,
      },
      {
        title: "Suspend Agent",
        url: "suspend-division",
        component: SuspendAgent,
      },
    ],
  },
  {
    title: "Transactions",
    items: [
      {
        title: "All Transaction",
        url: "all-transaction",
        component: Transaction,
      },
    ],
  },
  {
    title: "Profile",
    items: [
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
