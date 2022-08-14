// định nghĩa 1 state mặc định 
let stateGioHangDefault = [
    { maSP: 1, tenSP: 'iphone', giaBan: 1000, soLuong: 1, hinhAnh: 'https://i.pravatar.cc?u=1' }
]

export const gioHangReducer = (state = stateGioHangDefault, action) => {

    switch (action.type) {
        case 'THEM_GIO_HANG': {
            // let gioHang = [...state]; // 1 là cách này bên dưới là return gioHang
            let gioHang = state; // 2 là cách này bên dưới là return [...gioHang]
            //Từ sản phẩm được click thông qua redux gửi lên => tạo ra 1 sản phẩm có thuộc tính số lượng
            let spGH = { ...action.sanPhamClick, soLuong: 1 };
            //Kiểm tra sản phẩm gửi lên đã có trong giỏ hàng hay chưa
            let sp = gioHang.find(spGH => spGH.maSP === action.sanPhamClick.maSP);
            if (sp) {
                sp.soLuong += 1;
            } else {
                gioHang.push(spGH);
            }
            //immutable: tính chất bất biến khi địa chỉ ô nhớ  thay đổi 
            // return gioHang ;
            return [...gioHang];
        }
        default: return state; // state ban đầu khi chưa thực hiện chức năng gì
    }


    // return state;
}