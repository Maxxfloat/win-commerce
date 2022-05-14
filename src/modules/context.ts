import { createContext } from "react";
import type { ContextT } from "types/ContextType";

export default createContext<ContextT>({ isAuthenticated: false } as ContextT);
