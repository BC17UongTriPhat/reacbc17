import React, { Component } from 'react'
import GioHang from './GioHang';
import SanPham from './SanPham';

export default class XemChiTietSanPham extends Component {

    mangDienThoai = [
        {
            "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": '5.700.000', "hinhAnh": "./img/vsphone.jpg"
        },
        {
            "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB"
            , "rom": "64 GB", "giaBan": '7.600.000 ', "hinhAnh": "./img/meizuphone.jpg"
        },
        {
            "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": '27.000.000', "hinhAnh": "./img/applephone.jpg"
        }
    ]

    state = {
        sanPhamChiTiet: {
            "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": '27.000.000', "hinhAnh": "./img/applephone.jpg"
        },
        // nếu giao diện giỏ hàng nó nằm trên component xemchitietsanpham thì easy rồi chỉ cần thêm hàm map thì có thể render ra được rồi 
        // vì nó nằm trên component giỏ hàng nên mình phải thực hiện truyền Props 
        gioHang: [
            {maSP:1,tenSP:'Iphone',hinhAnh:'./img/meizuphone.jpg',giaBan:7600000,soLuong:1}
        ]
    }

    handleChangeProduct = (sanPhamClick) => {
        console.log('sanPhamClick', sanPhamClick);
        //Lấy sản phầm click thay thế cho sản phẩm chi tiết
        this.setState({
            sanPhamChiTiet: sanPhamClick
        })
    }

// 2:00:00 xét lại giỏ hàng khi mỗi lần nhấn thêm sản phẩm thì popup modal nó sẽ thay đổi theo 
// State ở đâu thì hàm setState ở đó 

themGioHang = (gioHangClick) =>{
console.log('gioHangClick',gioHangClick);
/** nut thêm giỏ hàng sản phẩm 
 * và cái state này ở cpn xemchitietsanpham chính vì vậy hàm themGioHang 
 * không thể binding trực tiếp lên nút button được vì thể phải truyền hàm xuống nút button (nằm trong cpn sanPham)
    this.setState({
    gioHang:gioHangClick  bị báo lỗi vì nút thêm giỏ hàng nằm ở cpn giở hàng state nằn ở xemchitietsanpham
})
*/

this.setState({
    gioHang:gioHangClick 
})
}

    render() {



        // bóc tách phần tử để sp bên dưới để ghi cho ngắn
        let { maSP, tenSP, manHinh, heDieuHanh, cameraTruoc, cameraSau, ram, rom, giaBan, hinhAnh } = this.state.sanPhamChiTiet;
        return (

            <div className='container'>
                <div className='text-right mt-5' >
                    <h3  data-toggle="modal" data-target="#modelId" className='text-dark    mt-1 font-weight-bold btn btn-outline-info' style={{cursor:'pointer'}}> <i class="fa fa-cart-arrow-down"></i> </h3>
                   {/* để hiển thị props giỏ hàng ra giao diện ta qua cpn GioHang */}
                    <GioHang gioHang={this.state.gioHang}/>
                </div>
                <h3 className='text-center display-4'>Danh Sách Sản Phẩm</h3>
                <div className='row'>
                    {/* cách viết tắt thay vì ghi ra hàm riêng */}
                    {this.mangDienThoai.map((sanPham, index) => {
                        return <div className='col-4' key={index}>
                            {/* lưu ý hàm hamXemChiTiethanleChangeProduct={this.handleChangeProduct()} 
                            không sử dụng dấu gọi hàm () */}
                            {/*                                                                                   2:01:53   themGioHang  */}
                            <SanPham sp={sanPham} hamXemChiTiethanleChangeProduct={this.handleChangeProduct} themGioHang={this.themGioHang} />
                        </div>
                    })}

                    {/* <div className='col-4'>
                <div className='card'>
                <img src="https://picsum.photos/150/200" alt="" />

                    <div className='card-body'>
                        <p>Tên Sản Phẩm</p>
                        <p>Giá bán</p>
                        <button className='btn btn-success'>Xem chi tiết</button>
                    </div>
                </div>
            </div>
            <div className='col-4'>
                <div className='card'>
                <img src="https://picsum.photos/150/200" alt="" />

                    <div className='card-body'>
                        <p>Tên Sản Phẩm</p>
                        <p>Giá bán</p>
                        <button className='btn btn-success'>Xem chi tiết</button>
                    </div>
                </div>
            </div> */}
                </div>
                <div className='row mt-5' >
                    <div className='col-4'>
                        {/* <h3 className='text-center'>{this.state.sanPhamChiTiet.tenSP}</h3> */}
                        {/* sau khi bóc tách phần tử bên trên  */}
                        <h3 className='text-center'>{tenSP}</h3>
                        <img src={hinhAnh} height={250} className='w-full' alt="" />
                    </div>
                    <div className='col-8'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Màn Hình</th>
                                    <th>{manHinh}</th>
                                </tr>
                                <tr>
                                    <th>Hệ Điều Hành</th>
                                    <th>{heDieuHanh}</th>
                                </tr>
                                <tr>
                                    <th>Camera trước </th>
                                    <th>{cameraTruoc}</th>
                                </tr>
                                <tr>
                                    <th>Camera sau</th>
                                    <th>{cameraSau}</th>
                                </tr>
                                <tr>
                                    <th>Ram</th>
                                    <th>{ram}</th>
                                </tr>
                                <tr>
                                    <th>Rom</th>
                                    <th>{rom}</th>
                                </tr>
                            </thead>
                        </table>

                    </div>
                </div>
            </div>
        )
    }
}

// 2:00:00 xét lại giỏ hàng khi mỗi lần nhấn thêm sản phẩm thì popup modal nó sẽ thay đổi theo 
// State ở đâu thì hàm setState ở đó 