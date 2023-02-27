import { navbarUrls } from '@/data/data'
import { notFound } from 'next/navigation'

export default function Page({ params }: { params: { page: string } }) {
  const { page } = params

  // if page is not defined in navbarUrls, then return 404
  if (!navbarUrls.map((url) => url.to).includes(`/${page}`)) {
    return notFound()
  }

  return (
    <main className="container">
      <h1 className="text-4xl font-bold">My page: {page}</h1>
    </main>
  )
}
