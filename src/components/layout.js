/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "semantic-ui-css/semantic.min.css"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      <main class="main">{children}</main>

      <footer>
        <h2>For Business Inquiries</h2>
        <h5>Phone: 503-894-6282</h5>
        <h5>Email: orionp.dev@gmail.com</h5>

        <div className="ui button">
          <a href="tel:5038946282">Call</a>
        </div>

        <div className="ui button">
          <a href="mailto:orionp.dev@gmail.com">Email</a>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
