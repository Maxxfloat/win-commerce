import nookies from "nookies";
const logout = () => {
  nookies.destroy(null, "accessToken");
};

export default logout;
