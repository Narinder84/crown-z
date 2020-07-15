import React from 'react';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectTotalQuantity} from '../../redux/cart/cart.reselectors'
import {ReactComponent as ShopingBag} from '../../assets/shopping-bag.svg';
import style from './cart-icon.module.css';
import {toggelCart} from '../../redux/cart/cart.ations'




const CartIcon = ({toggelCart,getTotalQuantity})=>{
    
    
    return(
        <div className={style.container}  onClick={toggelCart} >
            <ShopingBag className={style.bag} />
            <span>{getTotalQuantity}</span>
        </div>
    )
}

const mapDispatchToProps =(dispatch)=>({
    toggelCart : ()=>dispatch(toggelCart())
})

const mapStateToProps = createStructuredSelector({
    getTotalQuantity: selectTotalQuantity 
})

export default connect(mapStateToProps,mapDispatchToProps)( CartIcon);