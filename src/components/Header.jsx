import React from 'react'

function Header() {
  return (
    <header className="flex items-center justify-between p-4">
<a href='/'><h1 className='font-medium'>Free <span className='text-blue-500 font-bold'>Scribe</span></h1></a>
<a href='/'><button className="flex items-center gap-1 px-4 rounded-md bg-white shadow-md  shadow-blue-500/10  hover:shadow-blue-600/30 hover:shadow-lg  "> 
  <p>New</p>
<i className="fa-solid fa-plus"></i>
</button>
</a>

        </header>
  )
}

export default Header
