import React from 'react'
import { PageHeader } from 'antd'
import MenuButton from "./MenuButton"

export default function Header(props) {

  return (
    <>
      <div onClick={()=>{
        window.open("https://github.com/zkfs");
      }}>
        <PageHeader
          title="ZeFi 💭"
          subTitle=""
          style={{cursor:'pointer'}}
        />      
      </div>
      <MenuButton className="menu-posture"/>
    </>
  );
}
