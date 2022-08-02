import React, { Component } from "react";

export default class HandleEvent extends Component {
  /* muốn click vào này mà nó tạo ra 1 hành động gì đó  thì phải tạo 1 hàm hay 1 phương thức cho nó */
  // cách 1 viết ra phương thức và gọi nó
  handleClick = () => {
    alert("Hello Phát");
  };

  //   ví dụ chúng ta muốn truyền vào cho nó name ( tham số )
  // làm sao để truyền vào ?
  showMess = (name) => {
    alert("Alo Alo " + name);
  };

  render() {
    return (
      <div className="container">
        <h3>Handle event Loại 1</h3>
        <button onClick={this.handleClick}>Show messge</button>
        {/* cách 2 truyền thẳng 1 phương thức (hàm) vào trong đó  */}
        <button
          onClick={() => {
            alert("Hello Đào");
          }}
        >
          Click me!
        </button>
        <hr />
        <h3>Handle event param loại 2</h3>
        {/* cách này chưa nhấn là nó đã thực thi lệnh onClick */}
        <button onClick={this.showMess("Minh")}>Show mess</button>
        <p>      trong jS co hàm gọi lại chính bản than nó và trả về nó lúc chưa gọi
        Trong js có cái hàm thay vì return về giá trị thì cái hàm đó cho return
        về 1 cái hàm chưa được gọi call back funciton </p>
  {/* trong js 1 phương thức là bind và truyền vào 1 tham số là this( this chính là function do là hàm showMess 
  và Hàm showMess là hàm chưa gọi và ta muốn truyền và tham số tiếp theo là số 2 trở đi sau dấu phẩy 
    sau ) */}
        <button onClick={this.showMess.bind(this, "Tài")}>Show mess</button>
        {/* cách trong react 
        Click vào nó sẽ thực hiện hàm bên trong hàm arrow và ta truyền vào đó 1 cái hàm có kèm tham số thì nó sẽ gọi hàm đó chạy
        arrow làm gì bên trong ? ( những hàm gì bên trong nó sẽ thực thi) */}
        <button
          onClick={() => {
            this.showMess("Dũng đẹp trai!");
          }}
        >
          show mess param
        </button>
      </div>
    );
  }
}

// function main () {

//     return function (name) {
//         console.log(name);
//     }
// }

// let result = main();
// result('a');

// main()('a');
//  bằng cách sử dụng 1 arrow function hoặc chèn 1 callback function bên trong