import React from 'react'
import Styles from './Search.module.css'

export default function Search() {
    return (
        <div>
            <input className={Styles.search} type="text" placeholder="search for products"/>
        </div>
    )
}
