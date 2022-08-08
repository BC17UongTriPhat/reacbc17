import React, { Component } from 'react'

export default class Rendering2 extends Component {

// hiển thị ra thanh header
    isLogin = true; 
    userName = 'Phat Dev '


    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary">

                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Action 1</a>
                                    <a className="dropdown-item" href="#">Action 2</a>
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                          {this.isLogin ? <span className="nav-item">
                                <a className="text-white" href="#">Hello ! {this.userName}</a>
                            </span> : <button className="btn btn-success my-2 my-sm-0" type="submit">Đăng Nhập</button> }
                            
                        </form>
                    </div>
                </nav>

            </div>
        )
    }
}

// cách render ra nội dung này hoặc nội dung kia của component 
// co thể tách ra 1 cái hàm để viết renderLogin bên renderring1