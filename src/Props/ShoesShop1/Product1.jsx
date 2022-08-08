// import React, { Component } from "react";

// export default class Product1 extends Component {
//   render() {
//     let {product}=this.props; //dong 43 bên productlist

//     return (
//       <div className="card">
//         <img src="https://picsum.photos/200/300" alt="" />
//         <div className="card-body">
//           <p>Tên Sản Phẩm :</p>
//           <p>Giá :</p>
//           <button className="btn text-white" style={{backgroundColor:'#000'}}>Mua Ngay</button>
//         </div>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";

export default class Product1 extends Component {
  render() {
    let {product}=this.props; //dong 43 bên productlist
    // thì sẽ hiển thị được thông tin product khác nhau
    return (
      <div className="card">
        <img src={product.image} alt="" />
        <div className="card-body">
          <p>Tên Sản Phẩm : {product.name}</p>
          <p>Giá :{product.price}</p>
          <button className="btn text-white" style={{backgroundColor:'#000'}}>Mua Ngay</button>
        </div>
      </div>
    );
  }
}
