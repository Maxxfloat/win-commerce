import type { Dispatch, SetStateAction } from "react";
export interface ContextT {
  user: Object | undefined;
  setUser: Dispatch<SetStateAction<Object | undefined>>;
  isAuthenticated: boolean;
}
export default ContextT;
