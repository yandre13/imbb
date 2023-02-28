'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SearchBox() {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (searchValue) {
      setSearchValue('')
      router.push(`/search/${searchValue}`)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-6xl items-center justify-between px-4"
    >
      <input
        type="search"
        className="w-full rounded-sm bg-transparent py-4 placeholder-gray-500 outline-none"
        placeholder="Search any movie..."
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
      <input
        className="cursor-pointer rounded-lg bg-amber-500 p-2 px-4 font-semibold disabled:cursor-auto disabled:bg-opacity-75"
        type="submit"
        value="Search"
        disabled={!searchValue}
      />
    </form>
  )
}
