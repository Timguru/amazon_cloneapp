import React from 'react'
import Logo from './images/amazon.png'
import './css/header.css'
import {Link} from 'react-router-dom'
import './assets/fontawesome/css/fontawesome.css'
import './assets/fontawesome/css/all.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {useStateValue} from './StateProvider'


function Header() {
    const[{ basket }] = useStateValue()

    console.log(basket)

    return <nav className="header">
        {/*Logo on the left */}
        <Link to="/">
        <img className="header_logo" 
        src={Logo}
        alt="Logo"
        />
        </Link>

        {/*Search box */}
        <div className="header_search">
            <input type="text" className="header_searchInput" />
            <SearchIcon className="header_searchIcon"/>
        </div>
       {/*Links*/}
       <div className="header_nav">
           {/* 1st link */}
           <Link to="/login" className="header_link">
           <div className="header_option">
               <span className="header_optionLineOne">Hello tim</span>
               <span className="header_optionLineTwo">Sign In</span>
           </div>
           </Link>
           {/* 2nd link */}
           <Link to="/" className="header_link">
           <div className="header_option">
               <span className="header_optionLineOne">Returns</span>
               <span className="header_optionLineTwo">& orders</span>
           </div>
           </Link>
           {/* 3rd link */}
           <Link to="/" className="header_link">
           <div className="header_option">
               <span className="header_optionLineOne">Your</span>
               <span className="header_optionLineTwo">Prime</span>
           </div>
           </Link>
           {/* 4th link */}
           <Link to="/checkout" className="header_link">
               
               <div className="header_optionBasket">
                   {/*SHopping Basket icon*/}
                   <ShoppingBasketIcon/>
                   {/* Number of Items */}
<span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
               </div>
           </Link>

       </div>

    </nav>
}

export default Header
