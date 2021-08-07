import React from 'react'
import { RichText } from 'prismic-reactjs'
import htmlSerializer from '../../utils/htmlSerializer'

export default function Contacto(primary, items) {
    // const map = primary?.map?.url
    // const mapAlt = primary?.map?.alt

    return (<div className="bg-black-800">
        <div id={primary?.nav_item.text} className="max-w-small md:max-w-design mx-auto">
            <div className="md:mx-auto md:w-5/6 py-12 md:py-20">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-150">{primary?.title.text}</h1>

                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className=" my-12 md:my-20 flex flex-col md:space-y-6">
                        {items.map((item, i) => {

                            const title = item?.title?.text
                            const text = item?.text?.raw
                            const icon = item?.icon.url
                            const iconAlt = item?.icon.alt
                            const instagram = item?.instagram.url
                            const instagramAlt = item?.instagram.alt
                            const facebook_link = item?.facebook_link.text
                            const instagram_link = item?.instagram_link.text

                            return (
                                <div key={i} id={title}>
                                    <div className="">
                                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold pt-6 md:pt-12 text-yellow-150">{title}</h3>

                                        <RichText render={text}
                                            htmlSerializer={htmlSerializer('')} />
                                        <div className="grid grid-cols-2">
                                            <a href={facebook_link} target="_blank" rel="noreferrer"> <img src={icon} alt={iconAlt} /></a>
                                            <a href={instagram_link} target="_blank" rel="noreferrer"> <img src={instagram} alt={instagramAlt} /></a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="col-span-1 my-12 md:my-20">
                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d537.916366382061!2d-78.41841141465181!3d-0.205096479746533!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8a4ddb5366342198!2sSanta%20Fe!5e0!3m2!1sde!2sec!4v1606173251003!5m2!1sde!2sec" width="100%" height="100%" allowFullscreen="" aria-hidden="false" ></iframe>
                    </div>
                    {/* <img src={map} alt={mapAlt} className="" /> */}
                </div>
            </div>
        </div>
    </div>
    )
}