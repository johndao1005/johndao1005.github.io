import { JSX } from "react";

export interface RouteItem {
    name: string;
    path: string;
    // Add any other properties your routes might have
    component?: JSX.Element;
    exact?: boolean;
  }