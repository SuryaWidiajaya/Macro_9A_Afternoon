import React, { useState, useEffect } from 'react';

function FileInput({icon, label, name}) {
    

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setSelectedFile(file);
      } 

    };

    const [imageUrl, setImageUrl] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileUpload = (e) => {
      const file = e.target.files[0];
  
      if (file) {
        setSelectedFile(file)
        const reader = new FileReader();
        reader.onload = (event) => {
          localStorage.setItem('uploadedImage', event.target.result);
          setImageUrl(event.target.result);

        };
        reader.readAsDataURL(file);
      } else {
        setSelectedFile(null);
      }
    };

    

  return (
    <div className="flex justify-center flex-col">
      <div className="flex items-center">
        {icon}
        <h1 className="text-2xl font-medium text-[#1F298D] ml-[10px]">{label}</h1>
      </div>

      <div className="flex items-center mt-1 w-[750px] bg-[#EBEDFF] p-3 pl-0 rounded-lg">
        <input name={name} type="file" id="formFile" className="hidden" onChange={handleFileUpload} accept="image/*" />
        <div className="mr-4">
          <label htmlFor="formFile" className="cursor-pointer bg-[#1F298D] text-white py-3 px-3 rounded-tl-lg rounded-bl-lg rounded-tr-none rounded-br-none hover:bg-[#131746]">
            Choose File
          </label>
        </div>
        <span className="font-medium">{selectedFile ? selectedFile.name : 'No file chosen'}</span>
      </div>
    </div>
  );
}

export default FileInput;
