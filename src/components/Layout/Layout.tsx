import { FC, ReactChild, useState } from "react";
import Navbar from "./Navbar/Navbar";

const Layout: FC<{ children: ReactChild }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
