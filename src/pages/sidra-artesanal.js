import React from 'react'
import { graphql, Link } from 'gatsby'
import getSlices from '../utils/slices'
// import SEO from '../components/seo'
import '../../global.css'
import { withPreview } from 'gatsby-source-prismic'
import { Helmet } from "react-helmet";
import Logo from "../images/Logo.jpeg"
import arrowUp from "../images/arrowUp.png"
// import arrowDown from "../images/arrowDown.png"

const SidraArtesanal = ({ data }) => {
    const { prismicSidraartesanal } = data
    const {
        prismicSidraartesanal: {
            data: { body }
        } } = data
    const slices = getSlices(body)
    return (
        <div className="w-screen">
            <div className="flex justify-end sticky">

                <div className="flex flex-col items-end">
                    <div className="bg-green-apple bg-opacity-60 pl-4 flex flex-col items-center">
                        <Link to="#">
                            <img src={arrowUp} width="25px" className="p-1 pb-2 mr-4" alt="Arrow Up" />
                        </Link>
                        <img src={Logo} width="40px" className="pb-2 mr-4" alt="Menu Logo" />
                        {/* <img src={arrowDown} width="25px" className="p-1 mr-4"></img> */}
                    </div>

                    <div className="bg-green-apple bg-opacity-60 flex flex-col p-2 mr-4 rounded-md stickyMenu">
                        <Link to="#quesidra" className="ml-2 text-white hover:text-yellow-50 hover:text-opacity-60">{prismicSidraartesanal.data.navigation_1.text}</Link>
                        <Link to="#nuestros" className="ml-2 text-white hover:text-yellow-50">{prismicSidraartesanal.data.navigation_2.text}</Link>
                        <Link to="#recetas" className="ml-2 text-white hover:text-yellow-50">{prismicSidraartesanal.data.navigation_3.text}</Link>
                        <Link to="#nosotros" className="ml-2 text-white hover:text-yellow-50">{prismicSidraartesanal.data.navigation_4.text}</Link>
                        <Link to="#contacto" className="ml-2 text-white hover:text-yellow-50">{prismicSidraartesanal.data.navigation_5.text}</Link>
                        <Link to="#ofertas" className="ml-2 text-white hover:text-yellow-50">OFERTAS SPECIALES</Link>
                        <Link to="#puntos" className="bg-yellow-50 pl-2 bg-opacity-60 text-white rounded-lg hover:text-green-apple hover:bg-opacity-100">PUNTOS DE VENTA</Link>

                    </div>

                </div>
            </div>
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
        navigation_1 {
            text
          }
          navigation_2 {
            text
          }
          navigation_3 {
            text
          }
          navigation_4 {
            text
          }
          navigation_5 {
            text
          }
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