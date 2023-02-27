'use client'

import { useEffect, useState } from 'react'
import { MdLightMode } from 'react-icons/md'
import { MdDarkMode } from 'react-icons/md'

function getInitialTheme() {
  if (typeof window !== 'undefined') {
    if (
      localStorage?.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      // is dark mode
      return 'dark'
    } else {
      // is light mode
      return 'light'
    }
  }
}

function ThemeSwitcher() {
  const [theme, setTheme] = useState('')

  const toggleTheme = () =>
    theme === 'dark' ? setTheme('light') : setTheme('dark')

  useEffect(() => {
    setTheme(getInitialTheme()!)
  }, [])

  useEffect(() => {
    if (theme) {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      localStorage.theme = theme
    }
  }, [theme])

  return (
    <button className="flex items-center gap-2" onClick={toggleTheme}>
      {theme === 'dark' ? (
        <>
          <MdLightMode />
          <span>Light</span>
        </>
      ) : (
        <>
          <MdDarkMode />
          <span>Dark</span>
        </>
      )}
    </button>
  )
}

export default ThemeSwitcher
