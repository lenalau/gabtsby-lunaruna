import React from 'react'

export default function NuestrosProductos(primary, items) {


    return (
        <div id={primary?.nav_item.text} className="w-screen bg-white">
            <div className="mx-auto py-12 md:py-20 w-4/5">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-150">{primary?.title.text}</h1>
                <div className="mx-auto my-12 md:my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:space-x-4">
                    {items.map((item, i) => {
                        const image = item?.image?.url
                        const imageAlt = item?.image?.alt
                        const title = item?.title?.text
                        const text = item?.text?.text
                        const quantity = item?.quantity?.text
                        const price = item?.price?.text

                        return (
                            <div key={i}><img src={image} alt={imageAlt} className="h-72 lg:h-48 xl:h-60" />
                                <div className="">
                                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold w-2/3 pb-6 md:pb-12 lg:pb-20 text-yellow-150">{title}</h3>
                                    <div>{quantity}</div>
                                    <div>{text}</div>
                                    <div>{price}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}