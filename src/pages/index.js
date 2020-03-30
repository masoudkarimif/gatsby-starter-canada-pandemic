import React from "react"
import Layout from '../components/layout'
import Map from '../components/map'
import LastUpdate from '../components/last-update'
import Table from '../components/table'
import Total from '../components/total'
import FAQs from '../components/FAQs'
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
                  faqs {question, answer}
              }
            }
          }
        `)
  return (
    <Layout pageTitle={data.site.siteMetadata.name} pageDescription={data.site.siteMetadata.description} >
        <LastUpdate date={data.site.siteMetadata.last_updated} />
        <Map data={data.site.siteMetadata.data} mapData={canadaMapData}/>
        <DataSourceReference data={data.site.siteMetadata.data_source} />
        <div className="dummy-link" id="tables-link"></div>
        <div className="row" id="middle-info-holder">
          <Table data={data.site.siteMetadata.data} />
          <Total data={data.site.siteMetadata.data} />
        </div>
        <div className="dummy-link" id="faqs-link"></div>
        <FAQs data={data.site.siteMetadata.faqs} />
    </Layout>
    )
}
