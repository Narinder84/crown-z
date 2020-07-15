
import React from 'react';

import './dropdown-item.scss'

const DropDownItem =({item})=>{
    const {imageUrl,name,quantity} =item
    return(
        <div className='drop-container' >
            <img alt='pic' src={imageUrl}/>
            <span>{name}</span>
            <span>QT-{quantity}</span>
        </div>
    )
}

export default DropDownItem;