'use client'
import React, { useState } from 'react'
import { allCocktails } from '../constants'

const Menu = () => {
    // const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndex] = useState(0);
  return (
    <section id="menu" aria-labelledby="menu-heading">
        <img src="/images/slider-left-leaf.png" alt="Left Leaf" id="m-left-leaf" />
        <img src="/images/slider-right-leaf.png" alt="Right Leaf" id="m-right-leaf" />

        <h2 id="menu-heading" className='sr-only'>Cocktail Menu</h2>

        <nav className='cocktail-tabs' aria-label="Cocktail Navigation">
            {allCocktails.map((cocktail, index) => {
                const isActive = index === currentIndex
                return(
                    // <button key={cocktail.id}>
                    <button key={cocktail.id} className={isActive ? 'active' : ''} aria-pressed={isActive}>
                        {cocktail.name}
                    </button>
                )
            })}
        </nav>
    </section>
  )
}

export default Menu