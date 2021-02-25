import React, {
  ReactNode,
  // useCallback,
  // useState
} from 'react'
// import Link from 'next/link'
import Head from 'next/head'
// import Nav from './Nav'
import Footer from './Footer'

const defaultTitle = 'Next.js + TypeScript Example'

const Layout = ({
  children,
  title,
}: {
  children: ReactNode
  title?: string
}) => {
  // const [menuVisible, setMenuVisibility] = useState(false)
  // const toggleMenu = useCallback(() => setMenuVisibility(s => ! s), [])
  return (
    <div className="relative min-h-screen bg-gray-800">
      <Head>
        <title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <Nav /> */}
      <main className="h-full">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
