import axios from "axios";
import { setCookie } from "nookies";
import instance from "modules/apiInstance";
import useUser from "hooks/useUser";
export const login = async (data: { identifier: string; password: string }) => {
  try {
    const res = await instance.post("/auth/local", data);
    if (res.status === 200) {
      setCookie(null, "accessToken", res.data.jwt);
    }
    return res;
  } catch {
    throw Error;
  }
};
