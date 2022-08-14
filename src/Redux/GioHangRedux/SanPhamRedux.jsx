// import React, { Component } from "react";

// export default class SanPhamRedux extends Component {
//   render() {
//     let {sp} = this.props;
//     return (
//       <div className="card">
//         <img src="https://i.pravatar.cc?u=1" className="w-100" alt="" />
//         <div className="card-body">
//           <p>Tên sản phẩm</p>
//           <p>1000</p>
//         </div>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";

// kết nối với redux
import {connect} from 'react-redux'

 class SanPhamRedux extends Component {
  render() {
    let {sanPham} = this.props;
    console.log(this.props);
    return (
      <div className="card">
        <img height={300} src={sanPham.hinhAnh} className="w-100" alt="" />
        <div className="card-body bg-dark text-white">
          <p>Tên sản phẩm :  {sanPham.tenSP}</p>
          <p>Giá bán : {sanPham.giaBan.toLocaleString()}</p>
          <button className="btn btn-danger text-white" onClick={()=>{
            this.props.themGioHang(sanPham)
          }}>Thêm giỏ hàng</button>
        </div>
      </div>
    );
  }
}

//mapDispatchToProps dùng để định nghĩa props là các hàm gửi giá trị lên redux (tạo hàm sự kiện để gán vào các nút)
// (tạo hàm sự kiện để gán vào các nút)
const mapDispatchToProps = (dispatch) => {
    return {
        // tự định nghĩa hàm themGioHang 
      themGioHang: (sanPhamClick) => {
        // console.log(sanPhamClick)
        const action = {
          type:'THEM_GIO_HANG', //Thuộc tính bắt buộc của redux
          sanPhamClick
        };
        //Gửi dữ liệu lên redux
        // từ hàm connect bên dưới nó trả ra hàm dispatch và mình gửi cái action đi qua configStore
        dispatch(action)
      }
    }  
  }

//  không lấy về điền null connect(null, thamso thứ 2 la gửi hàm đi ta phải định nghĩa bên ngoài 1 hàm)(SanPhamRedux)   lây về thì tạo hàm mapStateToProps 
export default  connect(null,mapDispatchToProps)(SanPhamRedux) // kết nối và tạo 1 component mới thay cho component SanPhamRedux