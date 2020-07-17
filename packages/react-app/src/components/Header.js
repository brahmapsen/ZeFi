import React from 'react'
import { PageHeader } from 'antd'
import MenuButton from "./MenuButton"

export default function Header(props) {

  return (
    <>
      <div onClick={()=>{
        window.open("https://github.com/DeFiChat");
      }}>
        <PageHeader
          title="ZERO 💭"
          subTitle=""
          style={{cursor:'pointer', fontWeieght:'800'}}
        />      
      </div>
      <MenuButton className="menu-posture"/>
    </>
  );
}
