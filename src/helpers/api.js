import axios from "axios";

export { baseURLAPI }

const baseUrl = (baseUrl) => axios.create({
  baseURL: baseUrl,
  responseType: "json"
});

const baseURLAPI = baseUrl("https://randomuser.me/api/");