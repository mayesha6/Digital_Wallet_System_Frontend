import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { role } from "@/constants/role";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import Features from "@/pages/Features";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import type { WRole } from "@/types";
import { generateRoutes } from "@/utils/generateRoutes";
import { withAuth } from "@/utils/withAuth";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import { userSidebarItems } from "./userSidebarItems";
import { agentSidebarItems } from "./agentSidebarItems";
import WhyChooseSCash from "@/pages/WhyChooseUs";
import FeatureDetails from "@/pages/FeatureDetaiks";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: Home,
        index: true,
      },
      {
        Component: About,
        path: "about",
      },
      {
        Component: Contact,
        path: "contact",
      },
      {
        Component: Features,
        path: "features",
      },
      {
        Component: FeatureDetails,
        path: "features-details",
      },
      {
        Component:FAQ,
        path: "faq",
      },
      {
        Component:WhyChooseSCash,
        path: "whychoosescash",
      },
    ],
  },
  {
    Component: withAuth(DashboardLayout, (role.SUPER_ADMIN, role.ADMIN) as WRole),
    path: "/admin",
    children: [
      { index: true, element: <Navigate to="/admin/overview" /> },
      ...generateRoutes(adminSidebarItems),
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.USER as WRole),
    path: "/user",
    children: [
      { index: true, element: <Navigate to="/user/overview" /> },
      ...generateRoutes(userSidebarItems),
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.AGENT as WRole),
    path: "/agent",
    children: [
      { index: true, element: <Navigate to="/agent/cash-in" /> },
      ...generateRoutes(agentSidebarItems),
    ],
  },
  {
    Component: Login,
    path: "/login",
  },
  {
    Component: Register,
    path: "/register",
  },
//   {
//     Component: Verify,
//     path: "/verify",
//   },
//   {
//     Component: Unauthorized,
//     path: "/unauthorized",
//   },
//   {
//     Component: Success,
//     path: "/payment/success",
//   },
//   {
//     Component: Fail,
//     path: "/payment/fail",
//   },
]);
