import React from 'react'
import styles from './Header.module.css'
import Image from 'next/image'
import Button from '../Button/Button'
import Search from '../Search/Search'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
    const router = useRouter()
    return (
        <div className={styles.flexContainer}>
            <Link href='/'>
                <a> 
                     <div className={styles.logoContainer}>
                <Image src="/images/logo-dukaan.jpeg" alt="dukaan store logo" width="75" height="75"></Image>
                <p style={{marginLeft: '1rem'}}>Dukaan store</p>
            </div>
                </a>
            </Link>
            {router.asPath === '/' && <Search/>}
            {router.asPath !== '/' && <button style={{height: '30px', cursor: 'pointer'}} onClick={()=>router.push('/')}>Back to home</button>}
            <Button/>
        </div>
    )
}
