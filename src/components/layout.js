import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Menu from "./menu"
import PageHeader from "./page-header"
import Footer from "./footer"
import { Helmet } from "react-helmet"

const Layout = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          name
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <title>
          {props.pageDescription} - {props.pageTitle || ""}
        </title>
        <meta name="description" content={props.pageDescription || ""} />
      </Helmet>

      <div id="site-wrapper">
        <Menu
          currentPage={props.pageTitle}
          name={data.site.siteMetadata.name}
        />

        <div id="page-content">
          <div className="" id="content-wrapper">
            <PageHeader title={props.pageDescription} />
          </div>
          {props.children}
        </div>

        <footer>
          <div className="container">
            <div className="row">
              <div className="column">
                <Footer name={data.site.siteMetadata.name} />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Layout
