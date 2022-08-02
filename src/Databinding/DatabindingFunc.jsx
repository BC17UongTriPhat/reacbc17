import React from 'react'

export default function DatabindingFunc() {

    const title = 'cybersoft'
// không cần sd con trỏ this

    const renderTitle = () =>{
        return <p>ahihi</p>
    }

  return (
    <div className='container'>
        <h3>{title}</h3>
        <p>{renderTitle()}</p>
        {/* phải sử dụng () để gọi hàm chạy */}
    </div>
  )
}

