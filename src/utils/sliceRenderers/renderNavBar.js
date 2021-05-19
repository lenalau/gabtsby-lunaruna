import React from 'react'
// import { Link } from 'gatsby'

export default function NavBar(primary, items) {
    const image = primary?.background_image?.url
    const imageAlt = primary?.background_image?.alt

    return (
        <div className="w-screen">
            <img src={image} alt={imageAlt} className="w-screen" />
            {items.map((item, i) =>

                <a key={i}
                    className="mx-6"
                    href={`${item.link.text}`}>{item.label_link.text}</a >

            )}
        </div>
    )
}