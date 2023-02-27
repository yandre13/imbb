import { urls } from '@/data/data'
import MenuItem from './MenuItem'

export default function Menu() {
  return (
    <nav>
      <ul className="flex gap-6">
        {urls.map((url, i) => (
          <li className="text-lg uppercase" key={i}>
            <MenuItem {...url} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
