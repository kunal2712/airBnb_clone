import React from "react"
import collage from '../collage.png'

export default function Hero(){
    return(
        <section className="hero">
            <img src={collage} className="collage" alt="collage"></img>
            <h1 className="hero-title">Belong Anywhere</h1>
            <p className="hero-bio">Experience authentic and immersive travel experience-connecting with locals and their culture.</p>
        </section>
    )
}