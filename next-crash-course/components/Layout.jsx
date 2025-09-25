import Head from 'next/head'
import React from 'react'
import NavBar from './NavBar'
import Header from './Header'
function Layout({children}) {
  console.log("children",children.type.name);
  return (
    <div>
        <Head>
          <title>{children.type.name||"Your page"}</title>
          <meta name="keywords" content="web development,programing"/>
        </Head>
        <NavBar/>
        <main>
          <Header/>
          {children}
          </main>
    </div>
  )
}

export default Layout