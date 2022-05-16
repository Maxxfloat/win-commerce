import { useContext } from "react";
import context from "modules/context";

const useUser = () => {
  const { setUser } = useContext(context);
  //   const user = { lkjlk: "lkjlkj" };
  return (user: Object) => setUser(user);
};

export default useUser;
