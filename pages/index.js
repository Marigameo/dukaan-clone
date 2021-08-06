import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/Layout/Layout'
import Image from 'next/image'

const shirts = [
  {
    id: 1,
    name: 'Comfy Fabulous Men Hoodie',
    image: '/images/hoodie.png',
    price: '₹550',
    strike: '₹650 ',
    offer: '(15% off)',
    link: '/products/hoodie'
  },
  {
    id: 2,
    name: 'Fancy Ravishing Men Tshirts',
    image: '/images/fancy.png',
    price: '₹650',
    strike: '₹750',
    offer: '(15% off)',
    link: '/products/fancy'
  },
  {
    id: 3,
    name: 'Stylish men t-shirt',
    image: '/images/tshirt.png',
    price: '₹450',
    strike: '₹550',
    offer: '(15% off)',
    link: '/products/tshirt'
  },
  {
    id: 4,
    name: 'Leaf styles tshirt',
    image: '/images/leaf.png',
    price: '₹550',
    strike: '₹650',
    offer: '(15% off)',
    link: '/products/leaf'
  },
]

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Dukaan Clone - web app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.shirtSection}>
          
            {shirts.map(shirt => {
              return(
                <Link href={shirt.link}>
                  <a>
                    <div className={styles.card}>
               <Image src={shirt.image} alt={shirt.name} width="224" height="280"/>
               <div className={styles.cardContent}>
                  <p>{shirt.name}</p>
               <div className={styles.price}>{shirt.price}<span className={styles.strike}>{shirt.strike}</span><span className={styles.offer}>{shirt.offer}</span></div>
               </div>
              </div>
                  </a>
                </Link>
              )
            })}
        </div>
      </main>
    </Layout>
  )
}
