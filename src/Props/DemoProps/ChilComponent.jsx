import React, { Component } from 'react'

export default class ChilComponent extends Component {
    render() {

        // this.Props là thuộc tính có sẵn của react class component dùng để
        // truyền dữ liệu Component cha sang component con
        // this.props là thuộc tính readonly: không thể gán ljai được giá trị khác

        // ví dụ 
        // this.props.tenSanPham = 'abc'; 
        // nó sẽ bị lỗi ngay

        // để cho nó ngắn hơn và sd được cách 3  phải khai báo trước  
        let { maSanPham, tenSanPham, gia, hinhAnh } = this.props.product;

        return (
            <div className='card'>
                {/* <img src="https://picsum.photos/200/300" alt="" /> */}
                {/* <img src={this.props.product.hinhAnh} alt="" /> */}
                <img src={hinhAnh} alt="" />
                <div className='card-body'>
                    {/* <p>Tên sản phẩm : {this.props.tenSanPham}</p>
                <p>Giá : {this.props.gia}</p> */}

                    {/* cách 2 */}
                    {/* <p>Tên sản phẩm : {this.props.product.tenSanPham}</p>
                    <p>Giá : {this.props.product.gia}</p> */}



                    {/* cách 3 */}
                    <p>Tên sản phẩm : {tenSanPham}</p>
                    <p>Giá : {gia}</p>
                </div>
            </div>
        )
    }
}
