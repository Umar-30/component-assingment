import React from 'react'
import cssStyle from './hero.module.css'

const Hero = () => {
  return (
    <section className={cssStyle['hero']}>
        <h2>This is hero section</h2>
        <p>Hello I'm Shagufta Zakir. </p>
    </section>
  )
}

export default Hero