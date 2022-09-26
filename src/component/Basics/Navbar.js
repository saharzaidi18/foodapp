import React from 'react'


const Navbar = ({filterItem , setMenuData , Menu}) => {
    
  return (
    <>
    <nav className='navbar'>
        <div className='btn-group'>
            {/* {menuList.map( (curElem) => {
                return(
                    <button className='btn-group__item' onClick={ () => filterItem("curElem")}>
                        {curElem}
                    </button>
                )
            })} */}
          <button className='btn-group__item' onClick={ () => filterItem("Breakfast")}>Breakfast </button>
          <button className='btn-group__item' onClick={ () => filterItem("Lunch")}>Lunch </button>
          <button className='btn-group__item' onClick={ () => filterItem("Evening")}>Evening </button>
          <button className='btn-group__item' onClick={ () => filterItem("Dinner")}>Dinner </button>
          <button className='btn-group__item' onClick={ () => setMenuData(Menu)}>All </button> 
        </div>
       </nav>
      
    </>
  )
}

export default Navbar;