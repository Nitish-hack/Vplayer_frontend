import React from 'react'

const Header = () => {
  return (
    <div className='py-5 flex justify-between items-center'>
        <a  href="/" ><img src="/Vplayer.png" alt="logo"  width={150}/></a>
        <div className="nav font-semibold">
          <a href="/" className='tracking-wide'>Home</a>
          <a href="/upload" className='ms-2 tracking-wide'>Upload</a>
          
        </div>
    </div>
  )
}

export default Header