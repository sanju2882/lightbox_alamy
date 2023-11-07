
import buttons from '../../../constants/headerMenuFiles'
import HeaderMenuItem from './HeaderMenuItem'

const HeaderMenu = () => {
  return (
    
    <div className='collapse navbar-collapse'>
        <ul className="navbar-nav ml-auto">
          
      {buttons.map((button,index)=>(
        <>
          <HeaderMenuItem key={index} link={button.link} title={button.title} symbol={button.symbol}/>
          <span>| </span>
        </>
      ))}
    
      </ul>
      </div>
  )
}

export default HeaderMenu
