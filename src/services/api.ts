import axios from "axios";

export const api = axios.create({
  baseURL: "https://parseapi.back4app.com",
  headers: {
    "X-Parse-Application-Id": String(process.env.BACK4APP_APP_ID),
    "X-Parse-REST-API-Key": String(process.env.BACK4APP_API_KEY),
  },
});
