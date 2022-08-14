import { combineReducers, legacy_createStore as createStore } from 'redux'
import { gioHangReducer } from './reducers/gioHangReducer';
// tự thay createStore = legacy_createStore xem có khác gì không vì cái createStore cũ rồi hết được hổ trợ

// định nghĩa 1 state mặc định 
// let stateGioHangDefault = [
//     { maSP: 1, tenSP: 'iphone', giaBan: 1000, soLuong: 1, hinhAnh: 'https://i.pravatar.cc?u=1' }
// ]


// xem rootReducer như state tổng của ứng dụng chứa state tập trung thay về để state dưới component như trước  
// sau đó kết nối với redux => xác định xem component nào cần lấy dữ liệu và xử dụng cú pháp
const rootReducer = combineReducers({
    // nơi chứa các state của ứng dụng 
    // reducer là hàm trả về giá trị là state
    // và khi nhiều component cần sd thì tạo 1 thư mục riêng là reducer để chứa
    // lần đầu tiên chưa làm gì thì giá trị mặc định của state là default 1:58:00 video 5 

    // no sẽ lấy qua tất cả các reducer = biến action
    // no sẽ lấy qua tất cả các reducer = biến action khi mà mình dispatch thì các hàm nó chạy 1 lân nữa dù 10 cái reducer nó cũng vậy
    // mình muốn handle state nào thì mình vào state đó code

    gioHangReducer: gioHangReducer , // 2:42 :00 tách giỏ hàng reducer từ configStore ra file riêng
    // gioHangReducer: (state = stateGioHangDefault, action) => {

    //     switch(action.type){
    //         case 'THEM_GIO_HANG': {
    //             let gioHang = [...state,action.sanPhamClick]
    //             return gioHang ;
    //         } 
    //     }


    //     return state;
    // },
    // no sẽ lấy qua tất cả các reducer = biến action khi mà mình dispatch thì các hàm nó chạy 1 lân nữa dù 10 cái reducer nó cũng vậy
    // mình muốn handle state nào thì mình vào state đó code
    numberReducer: (state = 1, action) => {
        return state;
    }
})


export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // video 5 1:00:00
// https://github.com/reduxjs/redux/releases                 legacy_createStore