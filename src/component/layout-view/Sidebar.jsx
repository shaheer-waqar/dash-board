import React from 'react'
import DropDownMenu from './DropDownMenu';

function Sidebar({menuOpen,setMenuOpen}) {
  return (
    <div>
      <DropDownMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    </div>
  )
}

export default Sidebar