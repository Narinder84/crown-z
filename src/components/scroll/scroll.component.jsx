import React from 'react'

import './scroll.style.scss'


const Scroll =({children,height})=>(
    <div style = { {height:`${height}`}} className='scroll' >
        {children}
    </div>
)

export default Scroll;