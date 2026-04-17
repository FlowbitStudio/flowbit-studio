import { useEffect, useState } from 'react'

export default function useIsFirefox() {
  const [isFirefox, setIsFirefox] = useState(false)

  useEffect(() => {
    const ff = /Firefox\//i.test(navigator.userAgent)
    setIsFirefox(ff)
    if (ff) document.documentElement.classList.add('is-firefox')
  }, [])

  return isFirefox
}
