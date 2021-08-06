import React from 'react'
import Head from 'next/head'
import styles from './products.module.css'
import Layout from '../../components/Layout/Layout'
import Image from 'next/image'

export default function hoodie() {
    return (
        <Layout>
      <Head>
        <title>Dukaan Clone - web app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.productWrapper}>
            <Image src="/images/hoodie.png" alt="hoodie" width="452" height="564"/>
            <div className={styles.content}>
                <p>New Summer Collection Pure Magic Cotton Full Stitched Men's Shirt</p>
               <div>Rs. 600<span>Rs 800 15% off</span></div>
            </div>
        </div>
      </main>
    </Layout>
    )
}
