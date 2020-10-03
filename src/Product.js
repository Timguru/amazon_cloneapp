import React from 'react'
import './css/product.css'
import {useStateValue} from './StateProvider'


function Product({id, title, rating,price,image}) {
    const[{basket}, dispatch] = useStateValue()

    const addToBasket = ()=>{
        //add item to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item : {
                id,
                title,
                image,
                price,
                rating
            }
        })
    }

    return <div className="product">
        <div className="product_info">
            <p>{title}</p>
            <p className="product_price">
                <small>Ksh</small>
                <strong>{price}</strong>
            </p>
            <div className="product_rating">
                {
                    Array(rating)
                        .fill()
                        .map((_) => (
                            <p role="img">&#11088;</p>
                        ))
                }
            </div>
        </div>

         <img src={image} alt="" />
         <button onClick={addToBasket}>Add to Basket</button>
    </div>
}

export default Product
