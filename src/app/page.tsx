import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl">
      <h1 className="text-4xl font-bold">Hello World</h1>
    </main>
  )
}
