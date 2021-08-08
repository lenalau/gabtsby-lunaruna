import React from 'react'
import { Elements } from 'prismic-reactjs'
import clsx from 'clsx'
import { createLinkElement } from '../utils/linkOpener'
// import Heading1 from '../components/richtext/heading/heading1'
// import Heading2 from '../components/richtext/heading/heading2'
// import Heading3 from '../components/richtext/heading/heading3'
// import Heading4 from '../components/richtext/heading/heading4'
// import Heading5 from '../components/richtext/heading/heading5'
// import Heading6 from '../components/richtext/heading/heading6'

// -- Function to add unique key to props
const propsWithUniqueKey = (props, key) => {
    return Object.assign(props || {}, { key })
}

const htmlSerializer = (className, classObject) => {
    return (type, element, content, children, key) => {
        // TODO: Uncomment once you decided to use // const props = {} 
        switch (type) {
            // Add a class to paragraph elements 
            case Elements.listItem:
                return React.createElement(
                    'li',
                    propsWithUniqueKey(
                        {
                            className: `list-inside list-disc leading-normal ${className}`
                        }, key
                    ),
                    children)

            case Elements.list:
                return (
                    <ul key={key} className={`${className} mt-2 mb-4 pl-8`}>
                        {children}
                    </ul>)

            case Elements.oList:
                return (
                    <ol key={key} className={`${className} list-decimal ml-4 mt-2 mb-4`} >
                        {children}
                    </ol>)

            case Elements.oListItem:
                return (
                    <li key={key} className={`${className}`}>
                        {children}
                    </li>)

            case Elements.paragraph:
                return (
                    <p key={key} className={` ${className} text-sm sm:text-sm md:text-sm lg:text-lg xl:text-lg`} >
                        {children}
                    </p>)

            case Elements.strong:
                return (
                    <span key={key} className="font-semibold font-jost">
                        {children}
                    </span>)

            case Elements.hyperlink:
                return createLinkElement(
                    element.data.url,
                    key,
                    `underline hover:text-red-100 float-none ${className}`,
                    children)

            // case Elements.heading1:
            //     return (
            //         <Heading1
            //             key={key}
            //             className={clsx('font-light', className)} >
            //             {children}
            //         </Heading1>)
            // case Elements.heading2: return (
            //     <Heading2
            //         key={key}
            //         className={className}>
            //         {children}
            //     </Heading2>)

            // case Elements.heading3: return (
            //     <Heading3
            //         key={key}
            //         className="pt-30 md:pt-60 pb-2 md:pb-15" >
            //         {children}
            //     </Heading3>)
            // case Elements.heading4: return (
            //     <Heading4
            //         key={key}
            //         className="pt-15 md:pt-30">
            //         {children}
            //     </Heading4>)
            // case Elements.heading5: return (
            //     <Heading5
            //         key={key}
            //         className={className}>
            //         {children}
            //     </Heading5>)
            // case Elements.heading6: return (
            //     <Heading6
            //         key={key}
            //         className={className}>
            //         {children}
            //     </Heading6>)
            case Elements.em: {
                let font = ''
                let leading = ''
                let textSize = ''
                let weight = ''
                let italic = 'italic'
                if (classObject && classObject.em) {
                    if (classObject.em.className)
                        className = classObject.em.className

                    if (classObject.em.font) font = classObject.em.font

                    if (classObject.em.leading) leading = classObject.em.leading

                    if (classObject.em.textSize)
                        textSize = classObject.em.textSize

                    if (classObject.em.weight) weight = classObject.em.weight
                    if (classObject.em.italic) italic = classObject.em.italic
                }
                return (
                    <span
                        key={key}
                        className={clsx(
                            font,
                            className,
                            leading,
                            textSize,
                            weight,
                            italic
                        )}
                    >
                        {children}
                    </span>
                )
            }
            // Return null to stick with the default behavior 
            default:
                return null
        }
    }
}
export default htmlSerializer