import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_APP_API_URL,
});

export default instance;
