import axios from "axios";

export const cmsApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CMS_BASE_URL,
});

export * from "./product";
export * from "./home";
export * from "./auth";
