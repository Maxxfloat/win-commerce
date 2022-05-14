import { FC, Dispatch, SetStateAction } from "react";
import { FiMenu } from "react-icons/fi";

const SidebarToggle: FC<{
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ setSidebarOpen }) => {
  return (
    <button
      onClick={function () {
        setSidebarOpen((v) => !v);
      }}
      className="z-30 flex items-center justify-center w-12 h-12 text-3xl text-center text-black rounded-lg "
    >
      <FiMenu />
    </button>
  );
};

export default SidebarToggle;
