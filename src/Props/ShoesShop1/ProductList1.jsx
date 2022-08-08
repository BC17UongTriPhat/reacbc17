// import React, { Component } from 'react'
// import Product1 from './Product1'

// export default class ProductList1 extends Component {
//   render() {
//     return (
//       <div className='container'>
//         <div className='row'>
//             <h3 className='col-12 text-center'>ProductList</h3>
//             <div className='col-4'>
//                 <Product1/>
//             </div>
//             <div className='col-4'>
//             <Product1/>

//             </div>
//             <div className='col-4'>
//             <Product1/>

//             </div>
//         </div>
//       </div>
//     )
//   }
// }

import React, { Component } from "react";
import Product1 from "./Product1";

export default class ProductList1 extends Component {
    renderProduct = () =>{
/**sẽ lấy mảng dữ liệu từ this.prosp và muốn lấy được cái mảng dự liệ ra đây
 * thì phải truyền đúng tên props thi nó sẽ lấy ra được cái props là dataProduct 
 * là 1 cái mảng 
 * từ 1 cái mảng muốn render ra các cái div thì chạy vòng lặp là map
 * và ở đây truyền 1 cái mảng thì bên dưới cũng nhận dc 1 mảng bằng cách ghi this.props
 *  */ 
        let {dataProduct} = this.props; // thường hay viết dưới hàm render nhưng this.props là thuộc tính của component nên có thể gọi ở bất kì phương thức nào
        return dataProduct.map((item,index) =>{
            // cái gì lặp đi lặp lại thì cho vào map và thêm cho 1 cái key={index}
           return <div className="col-4 mt-2" key={index}>
            {/*  nhưng như vậy thì dữ liệu render ra giống nhau nên muốn khác nhau ta phải tr
            thẳng vào cho nó 1 cái props product={item} và cái ojcet nó là item ( vì duyệt qa mảng nên mỗi item là 1 cái ọject và minh truyen obj xuống product)  */}
            <Product1 product={item} />
          </div>
        })

    }
  render() {
    return (
      <div className="container">
        <div className="row">
          <h3 className="col-12 text-center">ProductList</h3>
        {/* Viết 1 hàm để render */}
        {this.renderProduct()}
          {/* lặp đi lặp lại thì giống cái mảng và mình viết cái hàm để render nó ra  */}
           {/* <div className="col-4">
            <Product1 />
          </div> */}      
        </div>
      </div>
    );
  }
}
