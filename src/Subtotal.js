import React from 'react'
import './css/subtotal.css'
import {useStateValue} from './StateProvider'
import { getBasketTotal } from './Reducer'

function Subtotal() {
    const[{basket}] = useStateValue()
    
    return (
        <div className="subtotal">
            {/* Price */}
            <p>
                Subtotal ({basket.length} items): Ksh {getBasketTotal(basket)}
                
            </p>
            <small className="subtotal_gift">
                <input type="checkbox"/>This order contains a gift
            </small>
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
