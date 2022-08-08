import React, { Component } from "react";

export default class Rendering_Conditions extends Component {
    /*
          state là thuộc tính có sẵn của react class component để quản lý các giá trị thay đổi trên giao diện khi người dùng thao tác (event)
      */
    state = {
        isLogin: false,
    };

    // isLogin = false;
    userName = "haicybersoft";

    renderLogin = () => {
        if (this.state.isLogin) {
            return (
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
                onClick={() => {
                    this.handleLogin(); // 1 cài đặt 1 hàm handle Event vào nút đăng nhập
                }}
            >
                Đăng nhập
            </button>
        );
    };
    // 2 viết ra hàm
    handleLogin = () => {
        // this.state.isLogin = true; Không được gán giá trị state trực tiếp mà phải thông qua phương thức setState
        /*
                this.setState: là phương thức có sẵn của react class component dùng để thay đổi giá trị của state. Hàm setState sẽ nhận vào giá trị state mới và gọi lại hàm render => giao diện thay đổi
                this.setState: là 1 hàm bất đồng bộ, khi nó xử lý thì các đoạn code phía sau vẫn tiếp tục thực thi
            */
        // console.log("islogin", this.state.isLogin);

        // let newState = { isLogin: true };
        // this.setState({
        //     newState,
        // });
        // cach 2
        let newState1 = { isLogin: true };
        this.setState(
            {
                isLogin: true,
            },
            () => {
                //Hàm sẽ chạy sau khi state thay đổi và giao diện render xong
                console.log(this.state);
            }
        );
        // console.log(this.state) sẽ không ra giá trị đúng vì hàm no chưa render xong thì các thằng sau đã chạy
    };

    render() {
        return (
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
                        {/* {this.isLogin ? <span className="nav-item text-white">
                            <a className="nav-link" href="#">Hello ! {this.userName}</a>
                        </span> : <button className="btn btn-success my-2 my-sm-0" type="submit">Đăng nhập</button>} */}
                        {this.renderLogin()}
                    </form>
                </div>
            </nav>
        );
    }
}
