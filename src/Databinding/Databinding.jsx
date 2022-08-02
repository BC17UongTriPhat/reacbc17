import React, { Component } from "react";

export default class Databinding extends Component {
    // thuộc tính  nằm ngoài phương thức render
  product = {
    id: 1,
    name: "Iphone",
    price: 1000,
    img: "https://i.pravatar.cc/200",
  };

  // nếu cảm thấy đoạn card nhiều quá ta có thể tách nó ra 
  // và dùng arrow function để giữ ngữ cảnh con trỏ this
  
  // phương thưc
  renderProduct = () =>{
    
    return(
        <div className="card w-25">
        <img  src={this.product.img} alt="" />
        <p>{this.product.name}</p>
        <p>{this.product.price}</p>
      </div>
    )
  }
  
  render() {
    // biến : var let conts
    let title = "cybersoft";
            //Nội dung trả về của hàm muốn binding phải được chứa trong 1 thẻ bao phủ hoặc là 1 string hoặc number
            // truy xuât tới thuộc tính hay phương thức đều dùng con trỏ this
    return (
      <div className="container">
        <p id="txt">{title}</p>
        {this.renderProduct()}
      
        {/* <div className="card w-25">
          <img  src={this.product.img} alt="" />
          <p>{this.product.name}</p>
          <p>{this.product.price}</p>
        </div>
        <div className="card w-25">
          <img  src={this.product.img} alt="" />
          <p>{this.product.name}</p>
          <p>{this.product.price}</p>
        </div>
        <div className="card w-25">
          <img  src={this.product.img} alt="" />
          <p>{this.product.name}</p>
          <p>{this.product.price}</p>
        </div> */}
      </div>
    );
  }
}
