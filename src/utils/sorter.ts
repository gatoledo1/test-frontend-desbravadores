export const sortRepos = (repos: any, sortBy: string) => {

  const sortOptions = {
    stars: (a: { stargazers_count: number }, b: { stargazers_count: number }) => b.stargazers_count - a.stargazers_count,
    starsAsc: (a: { stargazers_count: number }, b: { stargazers_count: number }) => a.stargazers_count - b.stargazers_count,
    alphabetical: (a: { name: string }, b: { name: any }) => a.name.localeCompare(b.name),
    recent: (a: { updated_at: string | Date }, b: { updated_at: string | Date }) =>
      Number(new Date(b.updated_at)) - Number(new Date(a.updated_at)),
    oldest: (a: { updated_at: string | Date }, b: { updated_at: string | Date }) =>
      Number(new Date(a.updated_at)) - Number(new Date(b.updated_at)),
  };

  return [...repos].sort(sortOptions[sortBy] || ((a, b) => 0));
}
