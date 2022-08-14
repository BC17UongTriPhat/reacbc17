import React, { Component } from 'react'
import GioHangRedux from './GioHangRedux'
import SanPhamRedux from './SanPhamRedux'

export default class DemoGioHangRedux extends Component {

    mangDienThoai = [
        {
            "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg"
        },
        {
            "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB"
            , "rom": "64 GB", "giaBan": 7600000 , "hinhAnh": "./img/meizuphone.jpg"
        },
        {
            "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg"
        }
    ]

    // biến đổi 1 mảng sp ra mảng giao diện map

    // cách 1 comment lại những giao diện được render ra rồi viết hàm rendersp dùng hàm map để lọc ra số lượng  itemtrongmang để render ra giao diện
    // renderProductList = () => {
    //     return this.mangDienThoai.map((itemtrongmang, index) => {
    //         return <div className='col-4' key={index}>
    //             <SanPhamRedux sp={itemtrongmang} />
    //         </div>
    //     })
    // }





    render() {
        return (
            <div className='container'>
                <h3 className='text-center'>Giỏ Hàng Redux</h3>
                <div className='text-right mt-2'>
                    {/* 1:31:00 */}
                    <span style={{ fontWeight: 'bold', fontSize: 20, cursor: 'pointer' }}> <i style={{ fontSize: 28 }} className="fa fa-cart-arrow-down">(0)</i> </span>
                </div>
                <GioHangRedux />
                <h3 className='mt-3 text-center'>Danh Sách Sản Phẩm</h3>
                <div className='row'>
                    {/* cách 1 coment lại những giao diện lúc đầu viết hàm riêng bên trên rồi bên dưới gọi hàm */}
                    {/* {this.renderProductList()} */}


                    {/* cách 2 video5 1:49:00 */}
                    {/* cách viết tắt thay vì ghi ra hàm riêng bên trên ta truyền thẳng xuống dưới  */}
                    {this.mangDienThoai.map((itemtrongmang, index) => {
                        return <div className='col-4' key={index}>
                    
                            <SanPhamRedux sanPham={itemtrongmang} />
                        </div>
                    })}








                    {/* <div className='col-4'>
                        <SanPhamRedux />
                    </div> */}
                    {/* <div className='col-4'>
                        <SanPhamRedux />
                    </div> */}
                    {/* <div className='col-4'>
                        <SanPhamRedux />
                        <div className='card'>
                     <img src="https://i.pravatar.cc?u=1" className='w-100' alt="" />   
                    <div className='card-body'>
                        <p>Tên sản phẩm</p>
                        <p>1000</p>
                    </div>
                </div>
                    </div> */}
                </div>
            </div>
        )
    }
}
