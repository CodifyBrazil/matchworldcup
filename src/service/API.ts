import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://worldcup-a48eb-default-rtdb.firebaseio.com/.json",
});

export const API = {
  getAllMatchs: async () => {
    const data = await axiosInstance.get("");
    return data;
  },
};
