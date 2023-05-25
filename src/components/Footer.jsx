import React from 'react'


const Footer = () => {
  let copyright = String.fromCodePoint(0x00A9);
  return (
    <div className="footer h-14 bg-slate-900 text-white flex items-center justify-center">
      <p> <span>{copyright} </span>Childress 2003</p>
    </div>
  )
}

export default Footer