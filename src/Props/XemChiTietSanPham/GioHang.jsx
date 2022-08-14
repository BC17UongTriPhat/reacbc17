import React, { Component } from 'react'

export default class GioHang extends Component {
    render() {
        // lấy prop từ cha sang con đặt ở đây video4 1:55
        let { gioHang } = this.props;

        return (

            //   <!-- Button trigger modal -->
            <div>
                {/* <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
                    Launch
                </button> */}
                {/* Modal */}
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>Mã Sản Phẩm</th>
                                            <th>Hình Ảnh</th>
                                            <th>Tên Sản Phẩm</th>
                                            <th>Số Lượng</th>
                                            <th>Giá Bán</th>
                                            <th>Thành Tiền</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* render ra dưới đây = hàm map 1:56*/}
                                        {gioHang.map((spGH, index) => {
                                            return <tr key={index}>
                                                <td className='text-center'>{spGH.maSP}</td>
                                                <td className='text-center'><img src={spGH.hinhAnh} style={{ height: 50 }} alt="" /></td>
                                                <td className='text-center'>{spGH.tenSP}</td>
                                                <td className='text-center'>
                                                    <button className='btn btn-primary'onClick={() => {
                                                        this.props.tangGiamSoLuong(spGH.maSP,1);
                                                    }} > + </button>

                                                    {spGH.soLuong}
                                                    <button className='btn btn-primary ml-1' onClick={() => {
                                                        this.props.tangGiamSoLuong(spGH.maSP,-1);
                                                    }}> - </button>

                                                </td>
                                                <td className='text-center'>{spGH.giaBan}</td>

                                                <td className='text-center'>{spGH.giaBan * spGH.soLuong}</td>
                                                <td>
                                                    <button className='btn btn-danger' onClick={() => {
                                                        this.props.xoaSanPham(spGH.maSP);
                                                    }}>Xóa</button>
                                                </td>


                                            </tr>
                                        })}
                                        {/* <tr>
                                            <td className='text-center'>1</td>
                                            <td className='text-center'><img src="https://picsum.photos/30/60" alt="" /></td>
                                            <td className='text-center'>I Phone</td>
                                            <td className='text-center'>2</td>
                                            <td className='text-center'>12.000.000</td>
                                            <td className='text-center'>24.000.000</td>
                                            <td>
                                                <button className='btn btn-danger'>Xóa</button>
                                            </td>
                                     
                                
                                        </tr> */}

                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
