import React from 'react'
import cssStyle from'./service.module.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Service = () => {
  return (
    <div className={cssStyle['service']}>
        <Header></Header>
        <h1 className={cssStyle['h1']}>This is Service page</h1>
        <Footer></Footer>
    </div>
  )
}

export default Service