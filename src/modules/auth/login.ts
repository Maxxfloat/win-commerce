import axios from "axios";
import instance from "modules/apiInstance";
import { LoginForm } from "types/AuthFormType";

export const login = async (data: LoginForm) =>
  await axios.post("/api/auth/callback/login", data);
