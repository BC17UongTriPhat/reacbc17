import React, { Component } from "react";

export default class HandleEvent extends Component {
  // state = {
  //   isLogin : true

  // }
  isLogin = false;

  userName = "haicybersoft";

  renderLogin = () => {
    if (this.isLogin) {
      return (
        // dấu ngoặc () có chức năng để nó có thể xuống hàng mà không bị lỗi
        <span className=" text-white">
          <a className="text-white" href="#">
            Hello ! {this.userName}
          </a>
        </span>
      );
    }
    return (
      <button
        type="button"
        className="btn btn-success my-2 my-sm-0"
        onClick={() => { // viết hàm handle event
          this.handleLogin();  // 1 cài đặt 1 hàm handle Event vào nút đăng nhập 
        }}
      >
        Đăng nhập
      </button>
    );
  };
  // 2 viết ra hàm  
  handleLogin = () => {
    this.isLogin = true;
    console.log("islogin", this.isLogin);
    this.render();
  };

  render() {
    return (
      // b4-navbar backgroud
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <a className="dropdown-item" href="#">
                  Action 1
                </a>
                <a className="dropdown-item" href="#">
                  Action 2
                </a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            {/* {this.isLogin ? (
                            <span className="nav-item text-white">
                                <a className="nav-link" href="#">
                                    Hello ! {this.userName}
                                </a>
                            </span>
                        ) : (
                            <button className="btn btn-success my-2 my-sm-0" type="submit">
                                Đăng nhập
                            </button>
                        )} */}

            {this.renderLogin()}
          </form>
        </div>
      </nav>
    );
  }
}
