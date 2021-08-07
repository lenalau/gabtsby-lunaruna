import React from 'react'
import { RichText } from 'prismic-reactjs'
import htmlSerializer from '../../utils/htmlSerializer'

export default function Recetas(primary, items) {


    return (
        <div className="max-w-small md:max-w-design mx-auto">
            <div className="md:mx-auto md:w-5/6  py-12 md:py-20">
                <h1 id="recetas" className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-150">{primary?.title.text}</h1>

                <div className="grid md:justify-items-end">
                    <div className=" my-12 md:my-20 flex flex-col md:flex-row md:space-x-12">
                        {items.map((item, i) => {
                            const background_image = item?.background_image?.url
                            const background_imageAlt = item?.background_image?.alt
                            const title = item?.title?.text

                            const text = item?.text?.raw

                            return (
                                <div key={i}>
                                    <div className="m-auto"
                                        style={{
                                            background: `url(${background_image})`,
                                            backgroundRepeat: `no-repeat`,
                                            backgroundSize: `100%`,
                                            marginLeft: `0%`,
                                            marginRight: `0%`
                                        }}
                                        alt={background_imageAlt}
                                    >

                                        <div className="p-6 md:p-12 ">
                                            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold pb-4 md:pb-6 text-yellow-150">{title}</h3>

                                            <RichText render={text}
                                                htmlSerializer={htmlSerializer('')} />
                                        </div>
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