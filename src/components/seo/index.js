import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
// eslint-disable-next-line import/no-extraneous-dependencies
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'
import localeState from '../../stateContainer/locale'
const query = graphql` 
query SEO {
     site { 
         siteMetadata { 
             defaultTitle: title 
        
             defaultDescription: description 
             siteUrl: url 
             defaultImage: image
             } 
            } 
        }`
const SEO = ({ title, description, image, article }) => {
    const { pathname } = useLocation()
    const { site } = useStaticQuery(query)
    const {
        state: { locale }
    } = localeState
    const {
        defaultTitle,
        defaultDescription,
        siteUrl,
        defaultImage,
        twitterUsername
    } = site.siteMetadata
    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname}`
    }
    const lang = locale.split('-')[0]
    return (
        <Helmet
            title={seo.title}
        // titleTemplate={titleTemplate}
        >
            <html lang={lang} />
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {(article ? true : null) && (
                <meta property="og:type" content="article" />
            )}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
                <meta property="og:description" content={seo.description} />
            )}
            {seo.image && <meta property="og:image" content={seo.image} />}
            <meta name="twitter:card" content="summary_large_image" />
            {twitterUsername && (
                <meta name="twitter:creator" content={twitterUsername} />)}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
                <meta name="twitter:description" content={seo.description} />
            )}
        </Helmet>)
}
export default SEO
SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    article: PropTypes.bool
}
SEO.defaultProps = {
    title: null,
    description: null,
    image: null,
    article: false
}

