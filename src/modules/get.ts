import { AxiosRequestConfig, AxiosResponse } from "axios";
import axiosInstance from "modules/apiInstance";

const get = async (
  source: string,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<any>> => {
  const res = await axiosInstance.get(source, options);
  return res.data;
};

export default get;
