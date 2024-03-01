import { axios } from "./axiosConfig";

export async function listPost() {
  return axios.get("/posts/list");
}

export async function listUser() {
  return axios.get("/users/list");
}

export async function getUser(id) {
  return axios.post(`/users/${id}`);
}

export async function getComment(id) {
  return axios.post(`/comments/${id}`);
}
