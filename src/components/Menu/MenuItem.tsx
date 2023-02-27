import Link from 'next/link'

type MenuItemProps = {
  title: string
  to: string
}

function MenuItem({ title, to }: MenuItemProps) {
  return (
    <div>
      <Link href={to}>
        <p>{title}</p>
      </Link>
    </div>
  )
}

export default MenuItem
