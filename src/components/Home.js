import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import currencyFormatter from 'currency-formatter'
import { Link } from 'react-router-dom'

function Home() {
    // let payload;
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.ProductReducer);
    return (
        <div className='container'>
            <div className='row mt-4'>
                {products.map(product => (
                    <div className='col-lg-3 col-md-4 col-sm-6 pb-3 pt-3 mt-2 mb-3  product' key={product.id}>
                        <Link to={`/details/${product.id}`} className="linkText text-decoration-none"  >
                            <div className='product_image'
                                onClick={() => dispatch({ type: "PRODUCT", payload:product })}> 
                                <img src={`/images/${product.name}.jpg`} className="w-100" />
                            </div>
                            <div className='product_name'>
                                <div className='text-capitalize fs-5'> {product.name}</div>
                            </div>
                            <div className='d-flex justify-content-between'>
                                {/* <div className='col-12'> */}
                                <div className='product_price '>
                                    <div className='fw-bold '>
                                        <span className='text-decoration-line-through'>
                                            {currencyFormatter.format(product.price, { code: 'USD' })}  </span>

                                        <span className='ms-2 product-discount'>5%</span>
                                    </div>
                                </div>
                                <div className='product_discount_price '>
                                    <div className='fw-bold'>   {currencyFormatter.format(product.discountPrice, { code: 'USD' })}</div>
                                </div>
                                {/* </div> */}
                            </div>
                        </Link>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Home