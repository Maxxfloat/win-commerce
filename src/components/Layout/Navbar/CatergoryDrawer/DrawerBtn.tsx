import React from "react";
import { FiMenu } from "react-icons/fi";

const DrawerBtn = () => {
  return (
    <button>
      <span className="mr-4">Categories</span>
      <FiMenu />
    </button>
  );
};

export default DrawerBtn;
