import React from 'react'
import HeaderTitle from './HeaderTitle'
import HeaderMenu from './HeaderMenu'
import "./header.css"

const Header = () => {
  return (
    <div className='navbar navbar-expand-lg navbar-light '>
        <HeaderTitle/>
        <HeaderMenu/>
    </div>
  )
}

export default Header
