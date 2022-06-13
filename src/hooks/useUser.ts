import { useContext } from "react";
import context from "modules/context";

const useUser = () => {
  const { setUser } = useContext(context);
  return (user: Object) => setUser(user);
};

export default useUser;
