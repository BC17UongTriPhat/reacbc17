import React, { Component } from "react";
// kết nối với redux
import { connect } from 'react-redux'
// hàm connect  này ( hàm lấy giá trị về) khi mà nó gọi nó sẽ trả về cho chung ta 1 component


class GioHangRedux extends Component {
    render() {
        console.log('props', this.props)
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Mã sản phẩm</th>
                        <th>Tên sản phẩm</th>
                        <th>Hình ảnh</th>
                        <th>Giá bán</th>
                        <th>Số lượng</th>
                        <th>Tổng tiền</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.gioHang1.map((itemGH, index) => {
                        return <tr key={index}>
                            <td>{itemGH.maSP}</td>
                            <td>{itemGH.tenSP}</td>
                            <td>
                                <img src={itemGH.hinhAnh} width={35} height={50} alt="" />
                            </td>
                            <td>{itemGH.giaBan}</td>
                            <td> 
                                <button className="btn btn-danger" > + </button>
                                {itemGH.soLuong}
                                <button className="btn btn-danger" ml-2> - </button>
                                </td>
                            <td>{itemGH.giaBan * itemGH.soLuong}</td>
                            <td>
                                <button className="btn btn-danger" onClick={()=>{
                                    this.props.xoaGioHang(itemGH.maSP)
                                }}>Xóa</button>
                            </td>
                        </tr>
                    })}
                    {/* <tr>
                        <td>1</td>
                        <td>I phone13 Pro max</td>
                        <td>
                            <img  src="https://i.pravatar.cc?u=1" width={35} height={50} alt=""  />
                        </td>
                        <td>1500</td>
                        <td>2</td>
                        <td>3000</td>
                        <td>
                            <button className="btn btn-danger">Xóa</button>
                        </td>
                    </tr> */}
                </tbody>
            </table>
        );
    }
}


//Định nghĩa hàm để lấy dữ liệu từ redux về component này
// map State từ redux về và biến nó thành 1 cái props
const mapStateToProps = (rootReducer) => {
    //rootReducer: là state tổng của ứng dụng

    //hàm này sẽ tạo ra 1 props cho component ở lệnh return
    return {
        gioHang1: rootReducer.gioHangReducer,
        number: rootReducer.numberReducer
    }
}

// gioHang1 mình tự đặt tên nhưng nó là cái props do  map State từ redux về và biến nó thành 1 cái props



//Định nghĩa hàm mapdispatchToPreops để tạo ra props là phương thức gửi dữ liệu lên reducer
const mapDispatchToProps = (dispatch) => {
    return { //new props
      xoaGioHang: (maSPXoa) => {
        // console.log('Mã sản phẩm click xoá',maSPXoa);
        // alert(maSPXoa);
        if (window.confirm('Bạn muốn xoá không ?')) {
          const action = {
            type: 'XOA_GIO_HANG',
            maSPXoa
          };
          //Sử dụng hàm dispatch để đưa action lên tất cả reducer
          dispatch(action);
        }
      },
      tangGiamSoLuong: (maSP,soLuong) =>{
        // alert(maSP + '-'+soLuong);
        const action = {
          type:'TANG_GIAM_SL',
          maSP,
          soLuong
        }
        console.log('action',action)
        //Sau khi bấm + - tạo dữ liệu action gửi lên redux
        dispatch(action)
      }
    }
  }




// cú pháp
// connect()(GioHangRedux) // sau đó gán nó lại const ComponentRedux bên dưới export default ComponentRedux và trên export default class GioHangRedux extends Component
// ta xóa  export default đi

//cach 1 // no sinh ra component mới mà không cần đổi tên component GioHangRedux
// const ComponentRedux = connect()(GioHangRedux)

// export default ComponentRedux

// cách 2 Khi connect (kết nối) được gọi sẽ trả về 1 component đã được kết nối với redux store, và mình export default component đó ra luôn
//                     lây về thì tạo hàm mapStateToProps không lấy về điền null 
export default connect(mapStateToProps,mapDispatchToProps)(GioHangRedux) // nhiệm vụ của nó là giúp mình kết nối còn muốn lấy gì thì lấy ở trên

