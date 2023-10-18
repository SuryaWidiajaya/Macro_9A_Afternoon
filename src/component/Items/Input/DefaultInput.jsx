import React, { useState } from 'react';

function DefaultInput({name, type, placeholder, icon, label}) {
  return (
    <div className="flex justify-center flex-col">
      <div className="flex items-center">
        {icon}
        <h1 className='text-2xl font-medium text-[#1F298D] ml-[10px]'>{label}</h1>
        </div>
        
        <input name={name} type={type} placeholder={placeholder} className='mt-1 w-[750px] bg-[#EBEDFF] rounded-lg px-3 py-3 text-[#1F298D] focus:outline-none focus:border-transparent font-medium '/> 
    </div>
  );
}


export default DefaultInput;