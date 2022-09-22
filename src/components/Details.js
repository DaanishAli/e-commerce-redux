import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import currencyFormatter from 'currency-formatter';
import { BsPlusLg } from "react-icons/bs";
import { GrSubtract } from "react-icons/gr";
import { Link } from "react-router-dom";




function Details() {
const dispatch=useDispatch()
  const { product } = useSelector(state => state.ProductReducer)

  const [QTY, setQTY] = useState(1);
  const [price, setPrice] = useState(product.price);
  const [discountPrice, setDiscountPrice] = useState(product.discountPrice);


  return (
    <div>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6 col-sm-12' >
            <img className='image_detail w-100' src={`/images/${product.name}.jpg`} />
          </div>

          <div className='col-6' >
            <div className='text-uppercase'>{product.name}</div>
            <div className='fw-bold d-flex mb-2 mt-2 ' >
              <div className='text-decoration-line-through '>
                {currencyFormatter.format(price, { code: 'USD' })}  </div>
              <div className='ms-4'>
                {currencyFormatter.format(discountPrice, { code: 'USD' })}
              </div>
            </div>

            <div className='row product-count'>
           
              <Link to="/shoping_card"  className='col-12 border border-dark ms-3 text-center bg-danger '
              onClick={()=>dispatch({type:"ADD-TO-CART",payload:{product}})}>ADD TO CART</Link>
            </div>
            <div className='col-12 mt-5'>{product.discription} </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Details