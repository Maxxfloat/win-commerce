import { destroyCookie } from "nookies";

const logout = () => {
  destroyCookie(null, "accessToken");
};

export default logout;
