import React from 'react'
import { useWindowWidth } from '@react-hook/window-size/throttled'
// import { Link } from 'gatsby'

export default function NavBar(primary, items) {
    const image = primary?.background_image?.url
    const imageAlt = primary?.background_image?.alt
    const isMobile = useWindowWidth({ leading: true, initialWidth: 1200 }) <= 1199
    if (isMobile) {
        return (<div> <img src={image} alt={imageAlt} /></div>)
    }
    else

        return (
            <div>
                <img src={image} alt={imageAlt} />

                <div className="md:w-4/5 mx-auto space-x-4 navbar">
                    {items.map((item, i) =>

                        <a key={i}
                            className="py-2 px-4 bg-yellow-50 bg-opacity-60 text-white rounded-lg"
                            href={`${item.link.text}`}>{item.label_link.text}</a >

                    )}

                </div>

            </div>
            // <div className=" bgimage absolute ">
            //     {/* <div className="m-auto"
            //     style={{
            //         background: `url(${image})`,
            //         backgroundRepeat: `no-repeat`,
            //         backgroundSize: `100%`,
            //         marginLeft: `0%`,
            //         marginRight: `0%`
            //     }}
            //     alt={imageAlt}
            //     > */}
            //     <div className="relative grid grid-cols-3">
            //         <div className="col-span-1"></div>
            //         <div className="col-span-2 grid grid-cols-5 space-x-4 flex items-end absolute">
            //             {/* <img src={image} alt={imageAlt} className="w-screen" /> */}
            //             {items.map((item, i) =>
            //             (<button key={i}
            //                 className="col-span-1 flex flex-row bg-gray-500">
            //                 <a
            //                     className="mx-6 text-xs h-full text-white items-stretch"
            //                     href={`${item.link.text}`}>{item.label_link.text}</a >
            //             </button>)

            //             )}
            //         </div>
            //     </div>
            //     {/* </div> */}
            // </div>
        )
}