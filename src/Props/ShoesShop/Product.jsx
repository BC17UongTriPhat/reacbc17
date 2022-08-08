import React, { Component } from 'react'


export default class Product extends Component {
    render() {
        let {product} = this.props;
        return (
            <div className="card">
                {/* <img src='https://picsum.photos/id/1/200/300' alt='...' /> */}
                <img src={product.image}/>
                <div className='card-body'>
                    {/* <p>Tên Sản Phẩm</p> */}
                    <p>Tên Sản Phẩm : {product.name}</p>
                    {/* <p>Giá</p> */}
                    <p>Giá : {product.price}</p>
                    <button className="btn text-white"
                        style={{ backgroundColor: '#000' }}
                    >
                        Mua Ngay
                    </button>
                </div>
            </div>
        )
    }
}
