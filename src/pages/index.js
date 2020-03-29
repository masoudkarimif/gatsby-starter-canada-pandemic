import React from "react"
import Layout from '../components/layout'
import Map from '../components/map'
import LastUpdate from '../components/last-update'
import {useStaticQuery, graphql} from 'gatsby'
import canadaMapData from '../../static/canada.json'


const DataSourceReference = (props) => {
  return (
    <p id="data-source" dangerouslySetInnerHTML={{__html:"Source: " + props.data}} />
  )
}

export default (props) => {
const data = useStaticQuery(graphql`
          query  {
            site {
              siteMetadata {
                  name
                  description
                  last_updated
                  data {province, cases, deaths}
                  data_source
              }
            }
          }
        `)
  return (
    <Layout pageTitle={data.site.siteMetadata.name} pageDescription={data.site.siteMetadata.description} >
        <LastUpdate date={data.site.siteMetadata.last_updated} />
        <Map data={data.site.siteMetadata.data} mapData={canadaMapData}/>
        <DataSourceReference data={data.site.siteMetadata.data_source} />
    </Layout>
    )
}
