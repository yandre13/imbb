import { navbarUrls } from '@/data/data'
import NabvarItem from './NavbarItem'

export default function Nabvar() {
  return (
    <nav>
      <ul className="flex justify-center gap-6 bg-amber-100 p-4 dark:bg-gray-600 tablet:text-lg">
        {navbarUrls.map((url) => (
          <li key={url.to}>
            <NabvarItem {...url} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
