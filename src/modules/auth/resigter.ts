import axios from "axios";
export const register = async (data: {
  username: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(
      "http://localhost:1337/auth/local/register",
      data
    );
    return {
      user: response.data.user,
      jwt: response.data.jwt,
    };
  } catch {
    throw Error("something is wrong");
  }
};
