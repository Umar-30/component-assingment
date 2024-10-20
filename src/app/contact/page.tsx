import React from 'react'
import cssStyle from'./contact.module.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Contact = () => {
  return (
    <div className={cssStyle['contact']}>
        <Header></Header>
        <h1 className={cssStyle['h1']}>This is Contact page</h1>
        <Footer></Footer>
    </div>
  )
}

export default Contact