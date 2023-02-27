'use client'

import { useSelectedLayoutSegments } from 'next/navigation'
import Link from 'next/link'

export default function NabvarItem({ title, to }: MenuItemProps) {
  const segments = useSelectedLayoutSegments()

  const isActive = segments?.[1] === to

  return (
    <Link
      href={`/show/${to}`}
      className={`font-medium hover:text-amber-600 ${
        isActive
          ? 'underline decoration-amber-500 decoration-4 underline-offset-8'
          : ''
      }`}
    >
      <p>{title}</p>
    </Link>
  )
}
