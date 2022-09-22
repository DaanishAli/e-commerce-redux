import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import currencyFormatter from 'currency-formatter';
import { BsPlusLg, BsFillTrashFill } from "react-icons/bs";
import { GrSubtract } from "react-icons/gr";


function ShopingCard() {
  const dispatch = useDispatch()
  const { products, TotalQuantity, TotalPrice } = useSelector(state => state.CartReducer)
  return (
    <div className='container mt-4'>
      {products.length > 0 ?
        <div className='row'>
          <div className='col-8'>
            {products.map(product => (

              <div key={product.id} className='mt-2 mb-2  text-capitalize'>
                <div className="d-flex justify-content-between align-items-center text-center">

                  <img className='cart-image col-3 ' src={`/images/${product.image}.jpg`} alt="not found" />
                  <div className='fs-5 col-2'>{product.name}</div>
                  <div className='fw-bold col-2'>
                    {currencyFormatter.format(product.discountPrice, { code: 'USD' })}
                  </div>

                  <div className='row product-count col-2'>
                    <div className='col-4 text-center border border-dark'
                      onClick={() => dispatch({ type: "DECREMENT", payload: { product } })}
                    ><GrSubtract /></div>
                    <div className='col-4 text-center border border-dark fs-4' >{product.quantity}</div>
                    <div className='col-4 text-center border border-dark '
                      onClick={() => dispatch({ type: "INCREMENT", payload: { product } })}
                    ><BsPlusLg /></div>

                  </div>

                  <div className='col-2 fw-bold'>
                    {currencyFormatter.format(product.discountPrice * product.quantity, { code: 'USD' })}

                  </div>
                  <div className='col-1'><BsFillTrashFill className='fs-4 delete'
                    onClick={() => dispatch({ type: "DELETE", payload: { product } })}
                  /></div>
                </div>
              </div>
            ))}
          </div>
          <div className='col-4'>
            <div>
              <div >Cart Summary</div>
              <div> total quentity  {TotalQuantity} </div>
              <div> total bill {currencyFormatter.format(TotalPrice, { code: 'USD' })} </div>
            </div>
          </div>
        </div>
         :
          "your card is empty"
      }

    </div>
  )
}

export default ShopingCard