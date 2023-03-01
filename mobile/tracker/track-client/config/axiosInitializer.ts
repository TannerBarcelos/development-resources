import axios from "axios";
import { apiConfig } from "./apiConfig";

export const axiosInitializer = axios.create({
  baseURL: apiConfig.baseUrl,
  timeout: 2000,
});
