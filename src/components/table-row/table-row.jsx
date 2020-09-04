import  React from 'react';
import {connect} from 'react-redux'


import {removeItemFromCart,reduceItemFromCart,addItemToCart} from '../../redux/cart/cart.ations'
import styles from './table-row.module.scss';

const TableRow =({item,reduce,remove,add})=> {
    const {imageUrl,name,price,quantity} =item
        return (
            <div>
               
            
            <div className={styles.data_body} >
            <div className={styles.data_name_im} >
            <div
                className={styles.background_image}
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
                />
                <span>{name}</span>
                       
            </div>        
               
               <div className={styles.data_name } >
                   <span id={styles.sp} >{price}</span>
               </div>
               <div className={styles.data_name} >
                    <p onClick={()=>reduce(item)}  className={styles.da}>&#10094;</p>  
                    <span id={styles.sp} >{quantity}</span>
                    <p onClick={()=>add(item)}  className={styles.da} > &#10095;</p>
               </div>
               <div className={styles.data_name} >
                   <span id={styles.sp} >{price*quantity}</span>
               </div>
               <div className={styles.data_name} >
                   <span role="img" aria-label="del"id={styles.sp} onClick={()=>remove(item)} >&#10060;</span>
               </div>
               </div>
            </div>
        );
    
}

const mapDispatchToProps = (dipatech)=>({
reduce:(item)=>dipatech(reduceItemFromCart(item)),
remove:(item)=>dipatech(removeItemFromCart(item)),
add:(item)=>dipatech(addItemToCart(item))
})


export default connect(null,mapDispatchToProps)( TableRow);