import Link from 'next/link'

export default function MenuItem({ title, to }: MenuItemProps) {
  return (
    <Link href={to}>
      <p>{title}</p>
    </Link>
  )
}
