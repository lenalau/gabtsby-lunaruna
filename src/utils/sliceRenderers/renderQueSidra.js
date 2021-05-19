import React from 'react'

export default function QueSidra(primary) {
    const image = primary?.background_image?.url
    const imageAlt = primary?.background_image?.alt
    const title = primary?.title?.text
    const text = primary?.text?.text

    return (
        <div id="QueSidra">
            <img src={image} alt={imageAlt} className="w-screen" />
            <h1>{title}</h1>
            <div>{text}</div>

        </div>
    )
}