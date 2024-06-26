import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"
import { useStateValue } from './StateProvider';

const Header = () => {
    const [{basket}] = useStateValue();
    return (
        <nav className='header'>
            <Link to='/'>
                <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>
            <div className="header_search">
                <input type="text" className="header_serachInput" />
                <SearchIcon  className='header_searchIcon'/>
            </div>
            <div className="header_nav">
                <Link to='/login' className='header_link'>
                    <div className="header_option">
                        <span className='header_optionLineOne'>Hello Prashanth</span>
                        <span className='header_optionLineTwo'>Sign In</span>
                    </div>
                </Link>
                <Link to='/' className='header_link'>
                    <div className="header_option">
                        <span className='header_optionLineOne'>Returns</span>
                        <span className='header_optionLineTwo'>& Orders</span>
                    </div>
                </Link>
                <Link to='/' className='header_link'>
                    <div className="header_option">
                        <span className='header_optionLineOne'>Your</span>
                        <span className='header_optionLineTwo'>Prime</span>
                    </div>
                </Link>
                <Link to='/checkout' className='header_link'>
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon className='basket'/>
                        <span className='header_optionLineTwo header_BasketCount'> {basket?.length} </span>
                    </div>
                </Link>
            </div>
        </nav> 
    )
}

export default Header
