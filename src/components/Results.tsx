import Card from './Card'

export default function Results({ results }: { results: Movie[] }) {
  return (
    <section className="flex flex-col gap-6 py-10 tablet:grid tablet:grid-cols-2 desktop:grid-cols-3 desktopLarge:grid-cols-4">
      {results.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </section>
  )
}
