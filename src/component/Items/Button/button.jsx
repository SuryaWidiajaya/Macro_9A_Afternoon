import React, { useState } from 'react';

function Button({children, width, onClick = () => {}, type ="button"}) {
  
  return (
    <>
    <button type={type} className={`${width} text-white p-3 bg-[#1f298d]  hover:bg-[#00085e] font-medium rounded-lg text-xl`} onClick={() => onClick()} >{children}</button>
    </>
  );
}

export default Button;