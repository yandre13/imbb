import Image from 'next/image'
import Link from 'next/link'
import { FiThumbsUp } from 'react-icons/fi'

export default function Card({ movie }: { movie: Movie }) {
  return (
    <article className="cursor-pointer rounded-lg border border-solid border-slate-400 p-3 shadow-md">
      <Link href={`/movie/${movie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          alt={movie.name || movie.title || movie.original_title}
          width={500}
          height={300}
          placeholder="blur"
          blurDataURL={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
        />
        <div className="mt-3">
          <h2 className="text-lg font-bold">
            {movie.name || movie.title || movie.original_title}
          </h2>
          <p className="mt-2 mb-3 line-clamp-3">{movie.overview}</p>
          <div className="flex items-center">
            <span>{movie.release_date || movie.first_air_date}</span>
            <FiThumbsUp className="mr-1 ml-4" />
            <span>{movie.vote_count}</span>
          </div>
        </div>
      </Link>
    </article>
  )
}
