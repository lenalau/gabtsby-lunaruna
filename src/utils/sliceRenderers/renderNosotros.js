import React from 'react'

export default function Nosotros(primary, items) {
    const image = primary?.image?.url
    const imageAlt = primary?.image?.alt
    const title = primary?.title?.text
    const subtitle = primary?.subtitle?.text
    const text = primary?.text?.text

    return (<div className="bg-white w-full">
        <div className="max-w-small md:max-w-design mx-auto bg-white">
            <div className="md:mx-auto md:w-4/5 py-12 md:py-20">
                <h1 id="nosotros" className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-150 pb-6 md:pb-12">{title}</h1>
                {/* <div className="bienvenido pb-6 md:pb-12 lg:pb-20"> */}
                {/* <img src={image} alt={imageAlt} className="w-screen" /> */}
                {/* <div className="m-auto"
                style={{
                    background: `url(${image})`,
                    backgroundRepeat: `no-repeat`,
                    backgroundSize: `100%`,
                    marginLeft: `0%`,
                    marginRight: `0%`
                }}
                alt={imageAlt}
            > */}

                <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-12">
                    <img src={image} alt={imageAlt} className=" " />
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-150">
                        <h3 className="pt-6 md:pt-12">{subtitle}</h3>
                    </div>


                </div>
                <div className="w-4/5 mx-auto  font-bold py-12  md:py-20 text-yellow-150">
                    <div className="text-right">{text}</div></div>





            </div>
        </div>
    </div>
    )
}