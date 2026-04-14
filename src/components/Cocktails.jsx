import React from 'react'

const Cocktails = () => {
  return (
    <section id="cocktails" className='noisy'>
        <img  src='/images/cocktail-left-leaf.png' alt='left-leaf' id='c-left-leaf'/>
        <img src='images/cocktail-right-leaf.png' alt='r-leaf' id='c-right-leaf'/>

        <div className='list'>
            <div className='popular'>
                <h2>Most popular cocktails
                </h2>
                <ul></ul>
            </div>
        </div>
    </section>
  )
}

export default Cocktails