import React, { Component } from "react";

export default class ChilDemoProps extends Component {

  render() {
      // this.Props là thuộc tính có sẵn của react class component dùng để
        // truyền dữ liệu Component cha sang component con
        // this.props là thuộc tính readonly: không thể gán ljai được giá trị khác

        // ví dụ 
        // this.props.tenSanPham = 'abc'; 
        // nó sẽ bị lỗi ngay



    return (
      // cách 1
      // <div className='card'>
      //   <img src="https://picsum.photos/200/300" alt="" />

      //   <div className='card-body'>
      //     <p>Tên Sản Phẩm {this.props.tenSanPham}</p>
      //     <p>Giá {this.props.gia}</p>
      //   </div>
      // </div>

      <div className="card">
        <img src={this} alt="" />

        <div className="card-body">
          <p>Tên Sản Phẩm {this.props.tenSanPham}</p>
          <p>Giá {this.props.gia}</p>
        </div>
      </div>
    //   <div className="card">
    //   <img src="https://picsum.photos/200/300" alt="" />

    //   <div className="card-body">
    //     <p>Tên Sản Phẩm {this.props.tenSanPham}</p>
    //     <p>Giá {this.props.gia}</p>
    //   </div>
    // </div>
    );
  }
}
