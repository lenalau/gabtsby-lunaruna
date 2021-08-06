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
                <div className="">
                    <div className="mx-auto w-4/5 text-4xl md:text-5xl lg:text-6xl font-bold   pt-12 pb-4 md:pt-20 md:pb-20 text-yellow-150">
                        <div className="md:w-2/3 ">{title}</div>
                    </div>
                    <div className="hidden md:flex rounded-lg bg-yellow-50 bg-opacity-50 text-white font-bold italic py-12  md:py-20">
                        <div className="w-4/5 mx-auto ">{quote}</div></div>


                    <div className="mx-auto my-4 md:my-20 md:w-4/5  mr-4 md:mr-0 flex flex-row pb-12 md:pb-20 justify-items-start md:justify-items-end" >

                        <div className="flex flex-row text-white ">
                            {items.map((item, i) => <a key={i}
                                className="py-2 px-4 ml-6 rounded-md bg-yellow-150 bg-opacity-60 "
                                href={`${item.link.text}`}>{item.label_link.text}</a >)}
                        </div>
                    </div>


                </div>


            </div>
        </div >
    )
}