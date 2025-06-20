import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    language: "en-US",
    page: 1,
  },
});

export default apiClient;
