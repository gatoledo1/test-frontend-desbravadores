export interface Repository {
  owner: {
    login: string;
  };
  name: string;
  id: string;
  updated_at: string;
}

export interface Repositories {
  repos: Repository[];
}