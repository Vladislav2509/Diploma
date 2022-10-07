import axios from "axios";
const API_URL = "https://studapi.teachmeskills.by/auth/";

export function register(username: string, email: string, password: string) {
  return axios.post(API_URL + "users/", {
    username,
    email,
    password,
  });
}

export function resetPassword(email: string) {
  return axios.post(API_URL + "users/reset_password/", {
    email,
  });
}

export function getCurrentUser() {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
  return null;
}
