import React from "react"
import Layout from '../components/layout'
import Map from '../components/map'
import LastUpdate from '../components/last-update'
import {useStaticQuery, graphql} from 'gatsby'
import canadaMapData from '../../static/canada.json'

export default (props) => {
const data = useStaticQuery(graphql`
          query  {
            site {
              siteMetadata {
                  name
                  description
                  last_updated
              }
            }
          }
        `)
  return (
    <Layout pageTitle={data.site.siteMetadata.name} pageDescription={data.site.siteMetadata.description} >
        <LastUpdate date={data.site.siteMetadata.last_updated} />
        <Map data={"Hi"} mapData={canadaMapData}/>
    </Layout>
    )
}
