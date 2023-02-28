import Results from '@/components/Results'
import { getMoviesByTerm } from '@/services/getData'

export default async function SearchPage({
  params,
}: {
  params: { term: string }
}) {
  const { term } = params

  const data = await getMoviesByTerm(term)

  if (data?.length === 0) {
    return (
      <section className="container">
        <h1 className="mt-10 text-4xl font-bold">
          No results found for: {term}
        </h1>
      </section>
    )
  }

  return (
    <section className="container">
      <h1 className="mt-10 text-4xl font-bold">Search results for: {term}</h1>
      <Results results={data} />
    </section>
  )
}
