import React from 'react'

export default function Puntos(primary, items) {


    return (
        <div id={primary?.nav_item.text} className="">
            <div className="mx-auto py-12 md:py-20 w-4/5">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-150">{primary?.title.text}</h1>
                <div className="pt-6 md:pt-12 pb-12 md:pb-20 ">{primary?.text.text}</div>
                <div className="grid grid-cols-1 md:grid-cols-2 space-x-20 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 space-x-12">
                        {items.map((item, i) => {

                            const punto = item?.punto?.text
                            const direccion = item?.direccion?.text
                            const telephono = item?.telephono?.text

                            return (
                                <div key={i}>
                                    <div className="">
                                        <h3 className="md:whitespace-nowrap text-xl md:text-2xl lg:text-3xl font-bold w-2/3 pb-2 md:pb-4 text-yellow-150">{punto}</h3>

                                        <div className="text-justify">{direccion}</div>
                                        <div className="grid justify-items-end text-lg md:text-xl lg:text-2xl font-bold pb-6 md:pb-12 lg:pb-20 text-yellow-150">{telephono}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <img src={primary?.map?.url} alt={primary?.map?.alt}></img>
                </div>

            </div>
        </div >
    )
}