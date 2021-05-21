// src/pages/preview.js
import * as React from 'react'
// import { withPreviewResolver } from 'gatsby-source-prismic'
// import { graphql, useStaticQuery } from 'gatsby'
// import SEO from '../components/seo'
import { Helmet } from "react-helmet";
// import linkResolver from 'path-to-linkResolver'

const PreviewPage = ({ isPreview }) => {
    if (isPreview === false) return 'Not a preview!'

    return (<div> <Helmet> <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=lunaruna"></script>
    </Helmet>
        {/* <SEO title="preview" /> */}
        <p>Loading</p></div>)
}

export default PreviewPage
// (props) => {
//     const data = useStaticQuery(graphql`query {
//     sitePlugin(name: {eq: "gatsby-source-prismic"}) {
//       pluginOptions {
//         repositoryName
//       }
//     }
//   }`)
//     const { repositoryName } = data.sitePlugin.pluginOptions
//     return withPreviewResolver(PreviewPage, {
//         repositoryName,
//     })(props)
// }