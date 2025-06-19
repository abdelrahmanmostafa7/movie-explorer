import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    language: "en-US",
    // We will create pagination later and will change page number dynamically
    page: 1,
  },
});

export default apiClient;
