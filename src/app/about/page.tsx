import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import cssStyle from './about.module.css'

const Contact = () => {
  return (
    <div className={cssStyle['contact']}>
        <Header></Header>
        <h1 className={cssStyle['h1']}>This is About page</h1>
        <Footer></Footer>
    </div>
  )
}

export default Contact