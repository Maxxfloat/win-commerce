import axios from "axios";
import { setCookie } from "nookies";
import instance from "modules/apiInstance";
export const login = async (data: {
  identifier: string | undefined;
  password: string | undefined;
}) => {
  try {
    const res = await instance.post("/auth/local", data);
    if (res.statusText === "OK") {
      setCookie(null, "accessToken", res.data.jwt);
    }
  } catch {
    throw Error;
  }
};
