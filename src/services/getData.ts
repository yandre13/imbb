import { API_KEY, API_URL } from './utils'

export async function getResults(genre: string) {
  try {
    const res = await fetch(
      `${API_URL}/${
        genre === 'trending' ? 'trending/all/week' : 'movie/top_rated'
      }?api_key=${API_KEY}&language=en-US&page=1`,
      { next: { revalidate: 100000 } }
    )
    const data = await res.json()
    return data.results
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch data')
  }
}

export async function getMovieById(id: string) {
  try {
    const res = await fetch(
      `${API_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
    )
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch data')
  }
}
