import axios from "axios";

const refreshTokenApiPath =
  "https://studapi.teachmeskills.by/auth/jwt/refresh/";

export async function refreshToken() {
  const token = localStorage.getItem("refresh-token");

  if (!token) {
    throw new Error("No refresh token provided!");
  }

  const { data } = await axios.post(refreshTokenApiPath, {
    refresh: token,
  });

  console.log(data);

  localStorage.setItem("access-token", data.access);
  return data;
}
