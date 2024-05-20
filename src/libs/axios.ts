import axios from "axios";

export const api = axios.create({ baseURL: "http://192.168.0.3:3000" });

api.interceptors.response.use(
  async function (response) {
    // await new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve("");
    //   }, 2000);
    // });
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
