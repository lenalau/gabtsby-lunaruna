import React, { useCallback, useState } from 'react'
import { graphql, Link } from 'gatsby'
import getSlices from '../utils/slices'
// import SEO from '../components/seo'
import '../../global.css'
import { withPreview } from 'gatsby-source-prismic'
import { Helmet } from "react-helmet";
import Logo from "../images/Logo.jpeg"
import arrowUp from "../images/arrowUp.png"
// import arrowDown from "../images/arrowDown.png"
import Scrollspy from 'react-scrollspy'
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import clsx from 'clsx'



const SidraArtesanal = ({ data }) => {
    const { prismicSidraartesanal } = data
    const {
        prismicSidraartesanal: {
            data: { body }
        } } = data
    const slices = getSlices(body)

    const [navOpen, setNavOpen] = useState(false)

    const toggleNav = useCallback(() => {
        setNavOpen(!navOpen)
    }, [navOpen])
    // let itemColor = ''
    return (
        <div className="w-screen">
            <div className="flex justify-end sticky">

                <div className="flex flex-col lg:flex-col-reverse items-end">
                    <div className="bg-green-apple bg-opacity-60 px-2 md:px-4 flex flex-col items-center pb-4 mr-2 md:mr-4 lg:mt-4 rounded-md">
                        {navOpen ? (<Link to="#" onClick={() => toggleNav()}>
                            <img src={arrowUp} width="25px" className="p-1 my-2" alt="Arrow Up" />
                        </Link>) : (<Link to="#" >
                            <img src={arrowUp} width="25px" className="p-1 my-2" alt="Arrow Up" />
                        </Link>)}

                        <button

                            onClick={toggleNav}
                        // className="pt-0 border-0 border-green-apple border-opacity-0 hover:border-2 hover:border-yellow-50 hover:border-opacity-100"
                        >
                            <img
                                src={Logo}
                                width="40px"
                                className={clsx(


                                    {
                                        'border-2 border-green-apple border-opacity-100 hover:border-2 hover:border-yellow-50 hover:border-opacity-50': !navOpen,
                                        'border-2 border-white border-opacity-100 hover:border-2 hover:border-yellow-50 hover:border-opacity-100': navOpen
                                    }
                                )}
                                alt="Menu Logo"
                            />
                        </button>

                    </div>


                    <div
                        className={clsx({
                            hidden: !navOpen,
                            'block shadow-mobileMenu mt-4 md:mr-4': navOpen
                        })}
                    >
                        <div className="block bg-green-apple md:bg-opacity-60 p-6 rounded-md">
                            <Scrollspy
                                items={['quesidra', 'nuestros', 'ofertas', 'nosotros', 'recetas', 'contacto', 'puntos']}
                                currentClassName="active"
                                className=" flex flex-col p-2 mr-4 rounded-md stickyMenu"
                            >
                                <Link
                                    to="#quesidra"
                                    className={clsx(
                                        'p-0 py-1 px-4 text-xl md:text-lg leading-10 ml-2 text-white hover:text-yellow-50 hover:bg-green-apple hover:bg-opacity-100'
                                        // mobileMenuItemClassName,
                                        // menuItemClassName
                                    )}
                                    onClick={() => toggleNav()}>{prismicSidraartesanal.data.navigation_1.text}</Link>
                                <Link
                                    to="#nuestros"
                                    className={clsx(
                                        'p-0 py-1 px-4 text-xl md:text-lg leading-10 ml-2 text-white hover:text-yellow-50 hover:bg-green-apple hover:bg-opacity-100'
                                        // mobileMenuItemClassName,
                                        // menuItemClassName
                                    )}
                                    onClick={() => toggleNav()}>{prismicSidraartesanal.data.navigation_2.text}</Link>
                                <Link

                                    to="#ofertas"
                                    className={clsx(
                                        'p-0 py-1 px-4 text-xl md:text-lg leading-10 ml-2 text-white hover:text-yellow-50 hover:bg-green-apple hover:bg-opacity-100'
                                        // mobileMenuItemClassName,
                                        // menuItemClassName
                                    )}
                                    onClick={() => toggleNav()}>OFERTAS SPECIALES</Link>
                                <Link
                                    to="#nosotros"
                                    className={clsx(
                                        'p-0 py-1 px-4 text-xl md:text-lg leading-10 ml-2 text-white hover:text-yellow-50 hover:bg-green-apple hover:bg-opacity-100'
                                        // mobileMenuItemClassName,
                                        // menuItemClassName
                                    )}
                                    onClick={() => toggleNav()}
                                >{prismicSidraartesanal.data.navigation_4.text}</Link>
                                <Link
                                    to="#recetas"
                                    className={clsx(
                                        'p-0 py-1 px-4 text-xl md:text-lg leading-10 ml-2 text-white hover:text-yellow-50 hover:bg-green-apple hover:bg-opacity-100'
                                        // mobileMenuItemClassName,
                                        // menuItemClassName
                                    )}
                                    onClick={() => toggleNav()}>{prismicSidraartesanal.data.navigation_3.text}</Link>
                                <Link
                                    to="#contacto"
                                    className={clsx(
                                        'p-0 py-1 px-4 text-xl md:text-lg leading-10 ml-2 text-white hover:text-yellow-50 hover:bg-green-apple hover:bg-opacity-100'
                                        // mobileMenuItemClassName,
                                        // menuItemClassName
                                    )}
                                    onClick={() => toggleNav()}>{prismicSidraartesanal.data.navigation_5.text}</Link>
                                <Link
                                    to="#puntos"
                                    className={clsx(
                                        'p-0 py-1 px-4 text-xl md:text-lg leading-10 ml-2 text-white text-white hover:text-green-apple bg-yellow-50 bg-opacity-70 font-bold rounded-lg hover:bg-opacity-60'
                                        // mobileMenuItemClassName,
                                        // menuItemClassName
                                    )}
                                    onClick={() => toggleNav()}>PUNTOS DE VENTA</Link>


                            </Scrollspy>

                            {/* {items?.map((item, i) => {
                                // gives last Item different text-color:
                                if (items.length - 1 === items.indexOf(item)) {
                                    itemColor = 'text-red-400'
                                }

                                return (
                                    <div key={i} className={`${itemColor}`}>
                                        <Link
                                            className={clsx(
                                                'p-0 text-left text-lg pt-2 text-xl md:text-lg leading-10 relative hover:text-indigo-custom',
                                                mobileMenuItemClassName,
                                                menuItemClassName
                                            )}
                                            variant="clear"
                                            to={`/en-gb${item.path}`}
                                            activeClassName="active-mobile"
                                            onClick={() => toggleNav()}
                                        >
                                            {item.title}
                                        </Link>
                                    </div>
                                )
                            })} */}
                        </div>
                    </div>

                    {/* <div className="bg-green-apple bg-opacity-60 pl-4 flex flex-col items-center mr-4">
                        <Link to="#">
                            <img src={arrowUp} width="25px" className="p-1 pb-2 mr-4" alt="Arrow Up" />
                        </Link>
                        <img src={Logo} width="40px" className="pb-2 mr-4" alt="Menu Logo" />
                        {/* <img src={arrowDown} width="25px" className="p-1 mr-4"></img> */}
                    {/* </div> */}


                    {/* <Scrollspy
                        items={['quesidra', 'nuestros', 'ofertas', 'nosotros', 'recetas', 'contacto', 'puntos']}
                        currentClassName="active"
                        className="bg-green-apple bg-opacity-60 flex flex-col p-2 mr-4 rounded-md stickyMenu"
                    >
                        <Link
                            activeClassName="active" to="#quesidra" className="ml-2 colorTrans">{prismicSidraartesanal.data.navigation_1.text}</Link>
                        <Link
                            activeClassName="active" to="#nuestros" className="ml-2 text-white hover:text-yellow-50">{prismicSidraartesanal.data.navigation_2.text}</Link>
                        <Link
                            activeClassName="active" to="#ofertas" className="ml-2 text-white hover:text-yellow-50">OFERTAS SPECIALES</Link>
                        <Link
                            activeClassName="active" to="#nosotros" className="ml-2 text-white hover:text-yellow-50">{prismicSidraartesanal.data.navigation_4.text}</Link>
                        <Link
                            activeClassName="active" to="#recetas" className="ml-2 text-white hover:text-yellow-50">{prismicSidraartesanal.data.navigation_3.text}</Link>
                        <Link
                            activeClassName="active" to="#puntos" className="bg-yellow-50 pl-2 bg-opacity-60 text-white rounded-lg hover:text-green-apple hover:bg-opacity-100">PUNTOS DE VENTA</Link>
                        <Link
                            activeClassName="active" to="#contacto" className="ml-2 text-white hover:text-yellow-50">{prismicSidraartesanal.data.navigation_5.text}</Link>

                    </Scrollspy> */}


                </div>
            </div>
            {
                slices.map((slice, i) => (

                    <React.Fragment key={i}>
                        <Helmet> <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=lunaruna"></script>
                        </Helmet>
                        {/* <SEO title="Home" /> */}
                        {slice}
                    </React.Fragment>))
            }

        </div >)
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



// // Added it as a prop because the amount of items
// // can change and this makes it easier to manage
// // when the mobile menu gets displayed
// if (isMobile) {
//     return (
//         <div>
//             <nav className={clsx('w-full', className)}>
//                 <div className="flex flex-1 relative">
//                     <div className="flex items-center flex-1 py-3">
//                         <img
//                             className="cursor-pointer"
//                             src={logoSource}
//                             alt={logoAlt}
//                             onClick={logoOnClick}
//                         />
//                     </div>
//                     <div className="flex flex-1 items-center justify-end">
//                         <div
//                             className={clsx(
//                                 'py-4 pl-4 pr-4 md:pr-0',
//                                 'flex flex-row',
//                                 {
//                                     'bg-green-apple ': navOpen
//                                 }
//                             )}
//                         >
//                             <button
//                                 variant="clear"
//                                 onClick={toggleNav}
//                                 className="pt-0 pr-4 md:pr-30"
//                             >
//                                 <img
//                                     src={burgerIconSource}
//                                     alt="Burger Icon"
//                                 />
//                             </button>
//                         </div>
//                     </div>
//                 </div>

                // <div
                //     className={clsx({
                //         hidden: !navOpen,
                //         'block shadow-mobileMenu': navOpen
                //     })}
                // >
                //     <div className="block bg-green-apple p-6">
                //         {items?.map((item, i) => {
                //             // gives last Item different text-color:
                //             if (items.length - 1 === items.indexOf(item)) {
                //                 itemColor = 'text-red-400'
                //             }

                //             return (
                //                 <div key={i} className={`${itemColor}`}>
                //                     <Link
                //                         className={clsx(
                //                             'p-0 text-left text-lg pt-2 text-xl md:text-lg leading-10 relative hover:text-indigo-custom',
                //                             mobileMenuItemClassName,
                //                             menuItemClassName
                //                         )}
                //                         variant="clear"
                //                         to={`/en-gb${item.path}`}
                //                         activeClassName="active-mobile"
                //                         onClick={() => toggleNav()}
                //                     >
                //                         {item.title}
                //                     </Link>
                //                 </div>
                //             )
                //         })}
                //     </div>
                // </div>
//             </nav>
//             <div>{children}</div>
//         </div>
//     )
// }


// }



