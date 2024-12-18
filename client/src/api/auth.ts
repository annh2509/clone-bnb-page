import axiosInstance, { axiosInstanceWithToken } from "../configs/axios";
import { ILogin, ISignup } from "../pages/Auth/types/auth";

const authApi = {
  async login(payload: ILogin) {
    const res = await axiosInstance.post("/auth/login", payload);
    return res;
  },

  async signup(payload: ISignup) {
    const res = await axiosInstance.post("/auth/signup", payload);
    return res;
  },

  async getAccessToken() {
    const res = await axiosInstance.get("/auth/access-token");
    return res;
  },

  async getProfile(token: string) {
    const res = await axiosInstanceWithToken(token).get("/auth/profile");
    return res;
  },

  async logout() {
    const res = await axiosInstance.post("/auth/logout");
    return res;
  },
};

export default authApi;
