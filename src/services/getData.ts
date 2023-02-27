const API_KEY = process.env.API_KEY

export async function getData(genre: string) {
  return fetch(
    `https://api.themoviedb.org/3/${
      genre === 'trending' ? 'trending/all/week' : 'movie/top_rated'
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 100000 } }
  )
    .then((res) => res.json())
    .then((data) => data.results)
    .catch((err) => console.log(err))
}
