import React from 'react'
import cssStyle from './footer.module.css'
const Footer = () => {
  return (
    <footer className={cssStyle['footer']}>
        <p>&copy; 2024 My Next.js Website</p>
    </footer>
  )
}

export default Footer