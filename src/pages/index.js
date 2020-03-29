import React from "react"
import Layout from '../components/layout'
import {useStaticQuery, graphql} from 'gatsby'

export default (props) => {
const data = useStaticQuery(graphql`
          query  {
            site {
              siteMetadata {
                  name
                  description
              }
            }
          }
        `)
  return (
    <Layout pageTitle={data.site.siteMetadata.name} pageDescription={data.site.siteMetadata.description} >
    </Layout>
    )
}
