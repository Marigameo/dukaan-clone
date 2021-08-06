import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

export default function about() {
    return (
        <>
        <Head>
        <title>About page</title>
        </Head>
        <div style={{margin: '3rem', fontSize: '24px'}}>
            About page
            <Image src='/images/shirt.png' width="150" height="150"></Image>
        </div>
        </>
    )
}
