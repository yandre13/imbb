import Results from '@/components/Results'
import { navbarUrls } from '@/data/data'
import { getData } from '@/services/getData'
import { notFound } from 'next/navigation'

export default async function Page({ params }: { params: { page: string } }) {
  const { page } = params

  // if page is not defined in navbarUrls, then return 404
  if (!navbarUrls.map((url) => url.to).includes(page)) {
    return notFound()
  }

  const data: Movie[] = await getData(page)

  if (!data) {
    throw new Error('Failed to fetch data')
  }

  return (
    <main className="container">
      <h1 className="mt-10 text-4xl font-bold">
        {page.charAt(0).toUpperCase() + page.slice(1)}
      </h1>
      <Results results={data} />
    </main>
  )
}
