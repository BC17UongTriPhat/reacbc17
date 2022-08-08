import React, { Component } from 'react'
import Product from './Product'

export default class ProductList extends Component {
    renderProduct = () => {
        let { dataProduct } = this.props;
        return dataProduct.map((item, index) => {
            return <div className='col-4 mt-2' key={index}>
                <Product product={item} />
            </div>
        })
    }
    render() {
        return (
            <div className='row'>
               
                    <h3 className='col-12 text-center'>Product list</h3>
                
                {/* <div className='col-4 '>
                    <Product />
                </div>  */}
               {/* nào mà lặp đi lặp lại thì dùng hàm map  */}
                {/* <div className='col-4'>
                    <Product />
                </div> */}
{/* 
                <div className='col-4'>
                    <Product />
                </div> */}
                {/* {this.renderProduct()} */}
            </div>
        )
    }
}
