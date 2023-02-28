import { getMovieById } from '@/services/getData'
import Image from 'next/image'

export default async function Movie({ params }: { params: { id: string } }) {
  const { id } = params

  const movie: Movie = await getMovieById(id)

  return (
    <section className="container">
      <article className="mt-16 flex flex-col items-center gap-6 laptop:flex-row laptop:gap-10">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          alt={movie.name || movie.title || movie.original_title}
          width={680}
          height={400}
          placeholder="blur"
          className="rounded-lg object-cover shadow-lg"
          blurDataURL={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
        />
        <div>
          <h1 className="text-2xl font-bold">{movie.title}</h1>
          <p className="mt-5 mb-3">
            <span className="font-semibold">Overview: </span>
            {movie.overview}
          </p>
          <p className="my-3">
            <span className="font-semibold">Release Date: </span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p>
            <span className="font-semibold">Rating: </span>
            {movie.vote_count || movie.vote_average}
          </p>
        </div>
      </article>
    </section>
  )
}
