import { User } from "../types/user";
import instance from "./instance";

export const signup = (user: User) => {
  const url = "/signup";
  return instance.post(url, user);
};
export const signin = (user: User) => {
  const url = "/signin";
  return instance.post(url, user);
};
