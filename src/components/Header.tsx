import { urls } from '@/data/data'
import MenuItem from './Menu/MenuItem'
import ThemeSwitcher from './ThemeSwitcher'

function Header() {
  return (
    <header className="container flex justify-between py-8">
      <section>
        <nav>
          <ul className="flex gap-6">
            {urls.map((url, i) => (
              <li className="text-lg uppercase" key={i}>
                <MenuItem {...url} />
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <section className="flex gap-6">
        <ThemeSwitcher />
        <h1 className="text-lg">
          <span className="mr-1 inline-block rounded-lg bg-orange-500 px-2 font-black text-white">
            imbb
          </span>
          Clone
        </h1>
      </section>
    </header>
  )
}

export default Header
