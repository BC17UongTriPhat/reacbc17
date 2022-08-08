// import React, { Component } from "react";

// export default class ChilProps1 extends Component {
//   /*  this.Props là thuộc tính có sẵn của react class component dùng để
//    truyền dữ liệu Component cha sang component con */

//   // this.props là thuộc tính readonly: không thể gán lại được giá trị khác

//   // ví dụ 
// // this.props.tenSanPham = 'abc'; 
// // nó sẽ bị lỗi ngay

//   render() {
//     return (
//       <div className="card">
//         <img src="https://picsum.photos/200/300" alt="" />
//         <div className="card-body">
//           <p>Tên Sản Phẩm {this.props.tenSanPham}</p>
//           <p>Giá {this.props.gia}</p>
//         </div>
//       </div>
//     );
//   }
// }

// cách 2 thằng cha truyền thằng con props dạng chuỗi

// import React, { Component } from "react";

// export default class ChilProps1 extends Component {


//   render() {
//     return (
//       <div className="card">

//         <img src={this.props.SP.hinhAnh} alt="" />
//         <div className="card-body">
//           <p>Tên Sản Phẩm {this.props.SP.tenSanPham}</p>
//           <p>Giá {this.props.SP.gia}</p>
//         </div>
//       </div>
//     );
//   }
// }

// cách 3 nếu thấy nó dài quá sử dụng bóc tách phần từ của ES6 


import React, { Component } from "react";

export default class ChilProps1 extends Component {

    render() {

        let { maSanPham, tenSanPham, hinhAnh, gia } = this.props.SP;

        return (
            <div className="card">

                <img src={hinhAnh} alt="" />
                <div className="card-body">
                    <p>Tên Sản Phẩm {tenSanPham}</p>
                    <p>Giá {gia}</p>
                </div>
            </div>
        );
    }
}
