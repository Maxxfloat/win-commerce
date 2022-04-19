import { AiOutlineSearch } from "react-icons/ai";
const NavbarSearchField = () => {
  return (
    <div className="flex items-center w-full px-3 py-2 text-lg bg-gray-400 rounded-md focus:bg-white focus:outline-none placeholder:text-black">
      <AiOutlineSearch />
      <span>Search ..</span>
    </div>
  );
};

export default NavbarSearchField;
