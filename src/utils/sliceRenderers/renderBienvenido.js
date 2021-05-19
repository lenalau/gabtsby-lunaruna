import React from 'react'

export default function Bienvenido(primary) {
    const image = primary?.background_image?.url
    const imageAlt = primary?.background_image?.alt
    const title = primary?.title?.text
    const quote = primary?.quote?.text

    return (
        <div id="Bienvenido">
            <img src={image} alt={imageAlt} className="w-screen" />
            <h1>{title}</h1>
            <div>{quote}</div>
            {/* {items?.map((item, i) =>
                <div key={i}
                    href={item.link?.text}>{item.label_link?.text}</div >
            )} */}
        </div>
    )
}