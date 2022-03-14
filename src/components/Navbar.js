import React from 'react';
import { BsFillBagFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector} from 'react-redux';



function Navbar() {
  const {  TotalQuantity} = useSelector(state => state.CartReducer)

    return (
        <div className="Navbar">
            <div className="container">
                <div className='d-flex justify-content-between align-items-center'>
                    <Link to='/'>
                        <div className='fs-3 fw-bold online_shopping'> Online Shopping</div>
                    </Link>
                    <Link to='shoping_card' >
                        < BsFillBagFill className=' fs-3' />
                        <span className='shopping_total fs-6'>{TotalQuantity}</span>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Navbar