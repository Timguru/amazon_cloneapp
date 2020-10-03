import Image5 from './images/sellpg.jpg'
export const initialState = {
    basket: [{
    id :"222453",
    title:"SELL LIKE CRAZY: How to Get As Many Clients, Customers and Sales As You Can Possibly Handle-Sabri Suby",
    price:72000,
    rating : 4,
    image :Image5
    },
    {
        id :"222454",
        title:"SELL LIKE CRAZY: How to Get As Many Clients, Customers and Sales As You Can Possibly Handle-Sabri Suby",
        price:72000,
        rating : 4,
        image :Image5
    }
    ],
    user : null
}

export const getBasketTotal = (basket) =>
basket?.reduce((amount, item)=> item.price + amount, 0)

function reducer(state, action){
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            //logic for add to basket
            return {
                ...state,
                basket : [...state.basket, action.item]

            }
            //break
        case 'REMOVE_FROM_BASKET':
            //logic fro remove to basket
            let newBasket = [...state.basket]
            const index = state.basket.findIndex((basketItem)=> basketItem.id === action.id)

            if(index >= 0) {
                //item exists so remove it
                newBasket.splice(index, 1)

            }else {
                console.warn(`Cant remove product with id ${action.id}`)
            }
            return {...state, basket : newBasket}
            //break
        default:
            return state
    }
        
}

export default reducer