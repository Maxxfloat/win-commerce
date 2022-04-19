import { Dispatch, SetStateAction } from "react";
export interface SidebarType {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}
