import React from 'react'

export default function Bienvenido(primary, items) {
    const image = primary?.background_image?.url
    const imageAlt = primary?.background_image?.alt
    const title = primary?.title?.text
    const quote = primary?.quote?.text

    return (
        <div id="bienvenido ">
            {/* <div className="bienvenido pb-6 md:pb-12 lg:pb-20"> */}
            {/* <img src={image} alt={imageAlt} className="w-screen" /> */}
            <div className=""
                style={{
                    background: `url(${image})`,
                    backgroundRepeat: `no-repeat`,
                    backgroundSize: `100%`,
                    marginLeft: `0%`,
                    marginRight: `0%`
                }}
                alt={imageAlt}
            >
                <div className="max-w-small md:max-w-design mx-auto">
                    <div className=" text-4xl md:text-5xl lg:text-6xl font-bold   pt-12 pb-4 md:pt-20 md:pb-20 text-yellow-150">
                        <div className="md:w-2/3 ">{title}</div>
                    </div>
                </div>
                <div className="hidden md:flex md:flex-row md:justify-items-start m-auto rounded-lg bg-yellow-50 bg-opacity-50 text-white font-bold italic py-12  md:py-20">
                    <div className="max-w-small md:max-w-design md:mx-auto">
                        <div className=" ">
                            <div className="md:w-2/5">{quote}</div>
                            <div className="md:3/5"></div></div>
                    </div>

                </div>


                <div className="max-w-small md:max-w-design m-auto my-4 md:my-20 flex flex-row pb-12 md:pb-20 justify-items-start" >

                    <div className="flex flex-row  ">
                        {items.map((item, i) => <a key={i}
                            className="py-2 px-4 mr-6 font-bold hover:text-white rounded-md bg-yellow-150 hover:bg-opacity-60 bg-opacity-100 text-green-apple"
                            href={`${item.link.text}`}>{item.label_link.text}</a >)}
                    </div>
                </div>


            </div>



        </div >
    )
}

// import React from 'react'

// export default function Bienvenido(primary, items) {
//     const image = primary?.background_image?.url
//     const imageAlt = primary?.background_image?.alt
//     const title = primary?.title?.text
//     const quote = primary?.quote?.text

//     return (
//         <div id="bienvenido ">
//             {/* <div className="bienvenido pb-6 md:pb-12 lg:pb-20"> */}
//             {/* <img src={image} alt={imageAlt} className="w-screen" /> */}
//             <div className="w-screen mx-auto"
//                 style={{
//                     background: `url(${image})`,
//                     backgroundRepeat: `no-repeat`,
//                     backgroundSize: `100%`,
//                     marginLeft: `1%`,
//                     marginRight: `0%`
//                 }}
//                 alt={imageAlt}
//             >
//                 <div className="">
//                     <div className="max-w-small md:max-w-design mx-auto text-4xl md:text-5xl lg:text-6xl font-bold   pt-12 pb-4 md:pt-20 md:pb-20 text-yellow-150">
//                         <div className="md:w-2/3 ">{title}</div>
//                     </div>
//                     <div className="hidden md:flex md:flex-row md:justify-items-start m-auto rounded-lg bg-yellow-50 bg-opacity-50 text-white font-bold italic py-12  md:py-20">
//                         <div className="max-w-small md:max-w-design md:mx-auto">
//                             <div className="md:w-2/5">{quote}</div>
//                             <div className="md:3/5"></div>
//</div>
//                     </div>

//                     <div className="max-w-small md:max-w-design m-auto my-4 md:my-20 flex flex-row pb-12 md:pb-20 justify-items-start" >

//                         <div className="flex flex-row ">
//                             {items.map((item, i) => <a key={i}
//                                 className="py-2 px-4 mr-6 font-bold hover:text-white rounded-md bg-yellow-150 hover:bg-opacity-60 bg-opacity-100 text-green-apple"
//                                 href={`${item.link.text}`}>{item.label_link.text}</a >)}
//                         </div>
//                     </div>


//                 </div>


//             </div>
//         </div >
//     )
// }