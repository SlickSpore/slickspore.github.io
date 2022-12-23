import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - SlickSpore</title>
        <meta property="og:title" content="Page - SlickSpore" />
      </Helmet>
      <h1 className="page-text">
        <span>404 Not Found</span>
        <br></br>
        <br></br>
        <span>The requested url was not found on the system</span>
        <br></br>
      </h1>
    </div>
  )
}

export default Page
