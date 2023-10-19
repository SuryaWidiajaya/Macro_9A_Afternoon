import React, { useState } from 'react';

function DefaultOutput({text, icon,label}) {
  return (
    <div className="flex justify-center flex-col">
      <div className="flex items-center">
        {icon}
        <h1 className='text-2xl font-medium text-[#1F298D] ml-[10px]'>{label}</h1>
        </div>
        <h1 className='mt-1 w-[400px] bg-[#ffffff] rounded-lg px-3 py-3 text-[#1F298D] focus:outline-none focus:border-transparent font-medium '>{text}</h1>
        
    </div>
  );
}


export default DefaultOutput;