import React from 'react'

export default function Ofertas(primary, items) {


    return (
        <div className="w-screen bg-white">
            <div className="mx-auto py-12 md:py-20 w-4/5">
                <h1 id={primary?.nav_item.text} className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-150">{primary?.title.text}</h1>
                <div>{primary?.text.text}</div>
                <div className="grid md:justify-items-end">
                    <div className=" my-12 md:my-20 flex flex-col md:flex-row md:space-x-12">
                        {items.map((item, i) => {
                            const image = item?.image?.url
                            const imageAlt = item?.image?.alt
                            const cosa = item?.cosa?.text
                            const originalPrice = item?.original_price?.text
                            const oferta = item?.oferta?.text
                            const text = item?.text?.text

                            return (
                                <div key={i}><img src={image} alt={imageAlt} className="h-72 lg:h-48 xl:h-60" />
                                    <div className="">
                                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold pb-6 md:pb-12 lg:pb-20 text-yellow-150">{cosa}</h3>

                                        <div>{originalPrice}</div>
                                        <div>{oferta}</div>
                                        <div>{text}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}