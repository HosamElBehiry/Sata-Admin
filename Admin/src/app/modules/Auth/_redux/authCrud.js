import request from "../../../../utils/api-utils";

export const ME_URL = `${process.env.REACT_APP_API_URL}/api/users/me`;

export function login(email, password) {
  return request.post("/auth/login", { email, password });
}

export function getUserByToken() {
  return request.get("/users/me");
}
