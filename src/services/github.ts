import axios from "axios";

const controller = new AbortController();

const githubApi = axios.create({
  baseURL: "https://api.github.com",
});

export const getUserDetails = async (username: string) => {
  const response = await githubApi.get(`/users/${username}`);
  return response.data; 
};

export const getUserRepos = async (username: string) => {
  try {
    const response = await githubApi.get(`/users/${username}/repos`);
    return response.data;
    
  } catch (error) {
    if(error.response.status === 404) {
      controller.abort()
    }
  }
};

export const getRepoDetails = async (fullName: string) => {
  const response = await githubApi.get(`/repos/${fullName}`);
  return response.data;
};
