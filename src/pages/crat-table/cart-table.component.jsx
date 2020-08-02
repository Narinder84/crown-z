import  React from 'react';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectItems,selectTotal} from '../../redux/cart/cart.reselectors.js'
import styles from './cart-table.module.css';
import {TableRow} from '../../components'
import CustomeButton from '../../components/custom-button/custom-button.component'
import { removeAllItems } from '../../redux/cart/cart.ations.js';

class CartTable  extends React.Component {
    
    render() {  
        const {items,total,remove} = this.props
        
        return (
            <div className={styles.con} >
                <div className={styles.container} >
               <div className={styles.header_body} >
               <div className={styles.header_name} >
                   <span>Product Name</span>
               </div>
               <div className={styles.header_name} >
                   <span>Price</span>
               </div>
               <div className={styles.header_name} >
                   <span>Quantity</span>
               </div>
               <div className={styles.header_name} >
                   <span>Total</span>
               </div>
               <div className={styles.header_name} >
                   <span>Action</span>
               </div>
               </div>
               {
                items.length===0?(<div className={styles.empty} >Empty Cart !!</div>):(items.map((item , ind)=> (<TableRow key={ind} item={item}  />)))
                   
               }
                   
                              
            </div>
            <div className={styles.footer_body} >
               <div className={styles.footer_name} >
                   <span></span>
               </div>
               <div className={styles.footer_name} >
                   <span></span>
               </div>
               <div className={styles.footer_name} >
                   <span>Total</span>
               </div>
               <div className={styles.footer_name} >
                   <span>{total}</span>
               </div>
               <div className={styles.footer_name} >
                   <span className={styles.bt} >
                    <div ><CustomeButton isSmall  onClick={()=>remove()} >Clear</CustomeButton></div>
                    <div className={styles.bt_b} ><CustomeButton isSmall >Pay </CustomeButton></div>
                   </span>
               </div>
               </div>
            </div>
        );
    }
}


const mapStateToProps = createStructuredSelector({
    items:selectItems,
    total: selectTotal
})
const mapDispatchToProps = (dispatchEvent)=>({
    remove : ()=>dispatchEvent(removeAllItems())
})

export default connect(mapStateToProps,mapDispatchToProps)( CartTable);