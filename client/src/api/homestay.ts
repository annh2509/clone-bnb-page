import axiosInstance from "../configs/axios";
import { IGetHomeStayList } from "../pages/Home/types/home";

const homeStayApi = {
  async getHomeStayList(query: IGetHomeStayList) {
    const res = await axiosInstance.get("/homestay", {
      params: query,
    });
    return res.data;
  },

  async getHomeStayById(id: string) {
    const res = await axiosInstance.get(`/homestay/${id}`);
    return res.data;
  },
};

export default homeStayApi;
