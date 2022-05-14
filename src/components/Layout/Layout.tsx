import { FC, ReactChild } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "components/Layout/Footer/Footer";

const Layout: FC<{ children: ReactChild }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
