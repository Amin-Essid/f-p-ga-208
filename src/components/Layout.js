import React from 'react'
import Helmet from 'react-helmet'
import Header from '../header/header.js'
import Footer from '../footer/footer.js'

// import Navbar from './Navbar'
// import './all.sass'

const Layout = ({ children }) => (
  <>
    {/* <Helmet title="Home | Gatsby + WordPress" /> */}
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout
