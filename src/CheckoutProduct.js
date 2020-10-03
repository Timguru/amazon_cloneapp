import React from 'react'
import './css/checkoutProduct.css'
import {useStateValue} from './StateProvider'

function CheckoutProduct({id, title, image, price, rating}) {
    const[{basket}, dispatch] = useStateValue()
    const removeFromBasket = ()=>{
        dispatch({
            type : 'REMOVE_FROM_BASKET',
            id : id
        })
    }
    return(
     <div className="checkoutProduct">
        <img src={image} alt="" className="checkoutProduct_img"/>

        <div className="checkoutProduct_info">
           <p className="checkoutProduct_title">{title}</p>
           <p className="checkoutProduct_price">
                <small>Ksh</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct_rating">
                {
                    Array(rating)
                        .fill()
                        .map((_,i) => (
                            <p role="img">&#11088;</p>
                        ))
                }
            </div>
            <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
    
    </div>
    )
}

export default CheckoutProduct
