import type { ComponentType } from "react";

export type WRole = "SUPER_ADMIN" | "ADMIN" | "USER" | "AGENT";

export interface ISidebarItem {
  title: string;
  items: {
    title: string;
    url: string;
    component: ComponentType;
  }[];
}

export interface IErrorResponse {
  statusCode?: number;
  success?: boolean;
  message: string;
  data?: unknown;
}