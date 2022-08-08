import React, { Component } from 'react'
import ChilDemoProps from './ChilDemoProps'

export default class DemoProps1 extends Component {
  render() {
    let productA = {
        maSanPham:1,
        tenSanPham:'Iphone',
        gia:1000,
        hinhAnh:'https://picsum.photos/id/1/200/300'
    }
    
    let productB = {
        maSanPham:2,
        tenSanPham:'Iphone 13',
        gia:2000,
        hinhAnh:'https://picsum.photos/id/2/200/300'
    }
    return (
      <div className='container'>
        <div className='row'>
            <div className='col-4'>
                {/* <ChilDemoProps tenSanPham='iphone' gia={1000}/> */}
                <ChilDemoProps SPA={productA}/>
            </div>
            <div className='col-4'>
                {/* <ChilDemoProps tenSanPham='iphoneX' gia={2000}/> */}
                <ChilDemoProps SPB={productB}/>
            </div>
        </div>
      </div>
    )
  }
}
