import React from 'react'
import { Link } from 'react-router-dom'



const HeaderMenuItem = ({title,symbol,link,index}) => {
  return (
    <div key={index}>

            <Link to={link} className='nav-link'><i className={`${symbol} headerIcon`}></i>{title}</Link>
            
       
    </div>
  )
}

export default HeaderMenuItem
