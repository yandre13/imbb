'use client' // Error components must be Client components

import { useEffect } from 'react'

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="container my-16">
      <h2 className="text-red-500">Something went wrong!</h2>
    </div>
  )
}
