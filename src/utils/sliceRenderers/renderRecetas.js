import React from 'react'
import { RichText } from 'prismic-reactjs'
import htmlSerializer from '../../utils/htmlSerializer'

export default function Recetas(primary, items) {


    return (
        <div className="max-w-small md:max-w-design mx-auto">
            <div className="md:mx-auto md:w-5/6  py-12 md:py-20">
                <h1 id="recetas" className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-150">{primary?.title.text}</h1>

                <div className="grid md:justify-items-end">
                    <div className=" my-12 md:my-20 flex flex-col md:flex-row md:gap-x-12">
                        {items.map((item, i) => {
                            const background_image = item?.background_image?.url
                            const background_imageAlt = item?.background_image?.alt
                            const title = item?.title?.text

                            const text = item?.text?.raw

                            return (
                                <div key={i}>


                                    <div className="py-6 md:p-12 md:bg-white">
                                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold pb-2 md:pb-6 text-yellow-150">{title}</h3>
                                        <img src={background_image} alt="SIdra" className="md:block md:hidden py-2"></img>

                                        <div className="flex flex-col-reverse md:flex-row gap-x-2 pb-2 md:pb-4">

                                            <div className="md:w-1/2">
                                                <h4 className="text-base md:text-lg lg:text-xl font-bold md:pb-1 text-yellow-150">Ingredients</h4>
                                                <RichText render={item?.ingredients?.raw}
                                                    htmlSerializer={htmlSerializer('text-white md:text-green-apple text-sm text-opacity-100')} />
                                            </div>
                                            <img src={background_image} alt="SIdra" className="hidden md:block md:h-full md:w-1/2"></img>
                                        </div>
                                        {/* <div className="m-auto"
                                            style={{
                                                background: `url(${background_image})`,
                                                backgroundRepeat: `no-repeat`,
                                                backgroundSize: `100%`,
                                                marginLeft: `0%`,
                                                marginRight: `0%`,
                                                opacity: 0.6
                                            }}
                                            alt={background_imageAlt}
                                        > */}
                                        <h4 className="text-base md:text-lg lg:text-xl font-bold pb-1 md:pb-2 text-yellow-150">Preparation</h4>

                                        <RichText render={text}
                                            htmlSerializer={htmlSerializer('text-white md:text-green-apple text-opacity-100 md:pl-1')} />
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