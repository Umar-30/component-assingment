import React from 'react'
import cssStyle from'./header.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <header className={cssStyle['header']}>

        <ul className={cssStyle['ul']}>
            <li><Link href="/">HOME</Link></li>
            <li><Link href="about">ABOUT</Link></li>
            <li><Link href="contact">CONTACT</Link></li>
            <li><Link href="service">SERVICE</Link></li>
        </ul>
    </header>
  )
}

export default Header
