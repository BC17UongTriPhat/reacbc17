// import React, { Component } from 'react'
// import ChilProps1 from './ChilProps1'

// export default class Props1 extends Component {
//   render() {


//     return ( 
//       <div className='container'>
//             <div className='row'>
//                 <div className='col-4'>
//                     {/* Props là nơi sẽ truyền dữ liệu cho nó dữ liệu cơ sở , array , object */}
//                     <ChilProps1 tenSanPham='Iphone' gia={1000} />  
//                 </div>
//                 <div className='col-4'>
//                 <ChilProps1 tenSanPham='Iphone X' gia={2000}/>
// s
//                 </div>

//             </div>
//       </div>
//     )
//   }
// }

// cách 2 thằng cha truyền thằng con props dạng chuỗi
import React, { Component } from 'react'
import ChilProps1 from './ChilProps1'

export default class Props1 extends Component {
  render() {

    let productA = {
        maSanPham :1,
        tenSanPham:'Iphone',
        gia:1000,
        hinhAnh: 'https:picsum.photos/id/200/300'
    }
    let productB = {
        maSanPham :1,
        tenSanPham:'Iphone X',
        gia:2000,
        hinhAnh: 'https:picsum.photos/id/200/300'
    }
    
    return ( 
      <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    {/* Props là nơi sẽ truyền dữ liệu cho nó dữ liệu cơ sở , array , object */}
                    <ChilProps1 SP={productA} />  
                </div>
                <div className='col-4'>
                <ChilProps1 SP={productB}/>
s
                </div>

            </div>
      </div>
    )
  }
}
