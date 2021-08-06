import React from 'react'
import { useWindowWidth } from '@react-hook/window-size/throttled'
// import { Link } from 'gatsby'

export default function NavBar(primary, items) {
    const image = primary?.background_image?.url
    const imageAlt = primary?.background_image?.alt
    const isMobile = useWindowWidth({ leading: true, initialWidth: 1200 }) <= 1199
    const lastItem = items[6]
    const navItems = items.slice(0, 5).map((item, i) => (item))
    if (isMobile) {
        return (<div> <img src={image} alt={imageAlt} /></div>)
    }
    else

        return (
            <div>
                <div className="m-auto"
                    style={{
                        background: `url(${image})`,
                        backgroundRepeat: `no-repeat`,
                        backgroundSize: `100%`,
                        marginLeft: `0%`,
                        marginRight: `0%`
                    }}
                    alt={imageAlt}
                >
                    {/* <img src={image} alt={imageAlt} /> */}
                    <div className="h-4"></div>
                    <div className="justify-end pr-52 mx-auto space-x-4 h-20 navbar flex flex-row">
                        {navItems.map((item, i) => (
                            <div>

                                <a key={i}
                                    className="pb-4 pt-21 px-4 h-full text-white hover:text-yellow-50"
                                    // className="py-2 px-4 bg-yellow-50 bg-opacity-60 text-white rounded-lg"
                                    href={`${item.link.text}`}>{item.label_link.text}</a >



                            </div>
                        )
                        )}
                        <div>
                            <a
                                // className="pb-4 pt-21 px-4 h-full text-white"
                                className="py-2 px-4 bg-yellow-50 bg-opacity-60 text-white rounded-lg hover:text-green-apple hover:bg-opacity-100"
                                href={`${lastItem.link.text}`}>{lastItem.label_link.text}</a >
                        </div>
                    </div>
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