import { navigate, Link } from 'gatsby'
import React from 'react'

const isInternal = url => url.startsWith('/')
const isInternalRichText = url => new URL(url).hostname === 'polypoly.coop'
const isMail = url => url.startsWith('mailto')

// if not a button but coming from RichText
export function createLinkElement(url, key, className, children) {
    if (isInternalRichText(url))
        if (
            url.includes('/press') || url.includes('_Vita') || url.includes('_bio')) {
            // exception for text-files (PDF/txt) on /press page's download-section. 
            // Those should have an autodownload: 
            return (
                <a
                    key={key}
                    target="_blank"
                    rel="noreferrer"
                    className={className}
                    href={url}
                    download
                >
                    {children}
                </a>
            )
        } else
            return (
                <Link
                    key={key}
                    to={url.replace('https://polypoly.coop', '')}
                    className={className}
                >
                    {children}
                </Link>
            )
    if (isInternal(url))
        return (
            <Link
                key={key}
                to={url}
                className={className}
            >
                {children}
            </Link>)
    return (
        <a
            key={key}
            href={url}
            target="_blank"
            rel="noreferrer"
            className={className}
        >
            {children}
        </a>
    )
}

export function openLink(url) {
    if (isInternal(url)) navigate(url)
    else if (isMail(url)) window.open(url, '_self', 'noreferrer')
    else {
        // workaround because window.open with features does not work in safari
        const a = document.createElement('a')
        a.href = url
        a.target = '_blank'
        a.rel = 'noreferrer'
        a.click()
    }
}