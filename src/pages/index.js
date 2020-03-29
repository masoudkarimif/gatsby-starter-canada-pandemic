import React from "react"
import Layout from '../components/layout'
import Map from '../components/map'
import {useStaticQuery, graphql} from 'gatsby'
import canadaMapData from '../../static/canada.json'

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
        <Map data={"Hi"} mapData={canadaMapData}/>
    </Layout>
    )
}
