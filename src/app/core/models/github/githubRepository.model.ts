export interface GithubRepository {
  id: string;
  full_name: string;
  description: string;
  language: string;
  stargazers_count: number;
  owner: OwnerRepository;
  contributors_url: string;
  topics: string[];
  updated_at: string;
  created_at: string;
}

export interface OwnerRepository {
  avatar_url:          string;

}
