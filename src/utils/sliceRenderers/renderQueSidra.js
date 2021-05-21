import React from 'react'

export default function QueSidra(primary) {
    const image = primary?.background_image?.url
    const imageAlt = primary?.background_image?.alt
    const title = primary?.title?.text
    const text = primary?.text?.text

    return (
        <div id="quesidra" className="mb-20" >
            <div className="mx-auto my-12 md:my-20 w-4/5 flex grid grid-cols-1 md:grid-cols-2 md:space-x-20">
                <img src={image} alt={imageAlt} className="w-screen col-span-1" />
                <div className="col-span-1">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold w-2/3 pb-6 md:pb-12 lg:pb-20 text-yellow-150">{title}</h1>
                    <div>{text}</div>
                </div>
            </div>
        </div>
    )
}