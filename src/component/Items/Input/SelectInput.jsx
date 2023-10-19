import React, { useState } from 'react';

function SelectInput({icon, label, op1, op2, op3, name ='null'}) {
  const [selectedOption, setSelectedOption] = useState('');


  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex justify-center flex-col">
      <div className="flex items-center">
        {icon}
        <h1 className='text-2xl font-medium text-[#1F298D] ml-[10px]'>{label}</h1>
        </div>
        <select name={name} className=" mt-1 w-[750px] bg-[#EBEDFF] rounded-lg px-3 py-3 text-[#1F298D] font-medium focus:outline-none focus:border-transparent" value={selectedOption} onChange={handleSelectChange}>
          <option value="">...</option>
          <option value={op1}>{op1}</option>
          <option value={op2}>{op2}</option>
          <option value={op3}>{op3}</option>
        </select>
    </div>
  );
}

export default SelectInput;
