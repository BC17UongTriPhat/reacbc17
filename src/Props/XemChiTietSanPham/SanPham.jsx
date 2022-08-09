// import React, { Component } from 'react'

// export default class SanPham extends Component {
//   render() {
//     let {sp}= this.props;
//     return (
//         <div className='card'>
//         <img src={this.props.sp.hinhAnh} alt="" />
//         <div className='card-body bg-dark text-white'>
//             <p>{this.props.sp.tenSP}</p>
//             <p>{this.props.sp.giaBan}</p>
//             <button className='btn btn-success ' onClick={()=>{
//                 // this.handleChangeProduct(sanPham)
//             }}>Xem chi tiết</button>
//         </div>
//     </div>
//     )
//   }
// }

import React, { Component } from 'react'

export default class SanPham extends Component {
  render() {
    let {sp}= this.props;
    return (
        <div className='card'>
        <img src={sp.hinhAnh} alt="" />
        <div className='card-body bg-dark text-white'>
            <p>{sp.tenSP}</p>
            <p>{sp.giaBan}</p>
            <button className='btn btn-success ' onClick={()=>{
                // this.handleChangeProduct(sanPham) bị lỗi 
                // this.handleChangeProduct(sp) vẫn bị lỗi
                /** để thằng component con có thể gọi được hàm ở thằng cha thì mình cũng sẽ truyền props
                 *  lúc này props của mình ko phải là 1 cái mảng , 1 cái obj 
                 *  Mà LÀ 1 CÁi " Hàm " bên comoponent cha tạo 1 cái hàm hamXemChiTiet
                 *     this.props.hamXemChiTiethanleChangeProduct() bên component cha truyền vào bên trong nó 1 cái props sp 
                */
               this.props.hamXemChiTiethanleChangeProduct(sp)
            }}>Xem chi tiết</button>
              <button className='btn btn-danger ml-2'  onClick={()=>{
                this.props.themGioHang(sp);
              }} >Thêm giỏ hàng</button>
        </div>
    </div>
    )
  }
}