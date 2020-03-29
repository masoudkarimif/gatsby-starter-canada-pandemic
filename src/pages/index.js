import React from "react"
import Layout from '../components/layout'
import {useStaticQuery, graphql} from 'gatsby'

export default (props) => {
const data = useStaticQuery(graphql`
          query  {
            site {
              siteMetadata {
                  about
              }
            }
          }
        `)
  return (
    <Layout pageTitle="About" pageDescription="Learn more about me" >
        <div dangerouslySetInnerHTML={{__html: data.site.siteMetadata.about}} />
    </Layout>
    )
}
