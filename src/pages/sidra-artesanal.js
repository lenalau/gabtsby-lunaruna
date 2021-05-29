import React from 'react'
import { graphql } from 'gatsby'
import getSlices from '../utils/slices'
// import SEO from '../components/seo'
import '../../global.css'
import { withPreview } from 'gatsby-source-prismic'
import { Helmet } from "react-helmet";

const SidraArtesanal = ({ data }) => {
    const {
        prismicSidraartesanal: {
            data: { body }
        } } = data
    const slices = getSlices(body)

    return (
        <div className="w-screen">
            {slices.map((slice, i) => (

                <React.Fragment key={i}>
                    <Helmet> <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=lunaruna"></script>
                    </Helmet>
                    {/* <SEO title="Home" /> */}
                    {slice}
                </React.Fragment>))}
        </div>)
}



export const query = graphql`
 query SidraQuery { 
  prismicSidraartesanal{
      data {
        body {
          ... on PrismicSidraartesanalBodyNavbar {
            id
            primary {
              background_image {
                alt
                url
                thumbnails {
                  mobile {
                    url
                    alt
                  }
                }
              }
            }
            items {
              label_link {
                text
              }
              link {
                text
              }
            }
            slice_type
          }
          ... on PrismicSidraartesanalBodyBienvenido {
            id
            slice_type
            primary {
              title {
                text
              }
              quote {
                raw
                text
              }
              background_image {
                alt
                url
              }
            }
            items {
              link {
                text
              }
              label_link {
                text
              }
              
            }
          }
          ... on PrismicSidraartesanalBodyQueEsLaSidra {
            id
            slice_type
            primary {
              background_image {
                alt
                url
              }
              text {
                raw
                text
              }
              title {
                text
              }
            }
          }

          ... on PrismicSidraartesanalBodyNuestrosProductos {
            id
            slice_type
            primary {
              nav_item {
                  text
              }
              title {
                  text
              }
            }
            items {
                title {
                  text
                }
                quantity {
                    text
                }
                text {
                  text
                  raw
                }
                price {
                    text
                  }
                image {
                  alt
                  url
                }
            }
          }
        
          ... on PrismicSidraartesanalBodyPuntosDeVenta {
            id
            slice_type
            primary {
              nav_item {
                  text
              }
              title {
                  text
              }
              text {
                  text
              }
              map {
                alt
                url
              }
            }
            items {
                punto {
                  text
                }
                direccion {
                    text
                    raw
                }
                telephono {
                  text
                }
                
            }
          }

          ... on PrismicSidraartesanalBodyOfertasActuales {
            id
            slice_type
            primary {
              nav_item {
                  text
              }
              title {
                  text
              }
              text {
                  text
              }

            }
            items {
                cosa {
                  text
                }
                original_price {
                    text
                }
                text {
                  text
                  raw
                }
                oferta {
                    text
                  }
                image {
                    alt
                    url
                }
               
            }
          }

          ... on PrismicSidraartesanalBodyRecetasConSidra {
            id
            slice_type
            primary {
              nav_item {
                  text
              }
              title {
                  text
              }
           

            }
            items {
                background_image {
                    alt
                    url
                }
                title {
                    text
                }
                text {
                  text
                  raw
                }                       
            }
          }


          ... on PrismicSidraartesanalBodyNosotros {
            id
            slice_type
            primary {
                nav_item {
                    text
                  }
              image {
                alt
                url
              }
              text {
                raw
                text
              }
              subtitle {
                text
              }
              title {
                text
              }
            }
          }


          ... on PrismicSidraartesanalBodyContacto {
            id
            slice_type
            primary {
              nav_item {
                  text
              }
              title {
                  text
              }
              map {
                alt
                url
            }

            }
            items {
                title {
                    text
                }
                text {
                  text
                  raw
                }  
                icon {
                    alt
                    url
                } 
                instagram {
                    alt
                    url
                } 
                facebook_link {
text
                }                
                instagram_link {
text
                }
            }
          }

        }
      }
    }
  } 
`

export default withPreview(SidraArtesanal)