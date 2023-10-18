import React, { useState } from 'react';
import imgProfil from '../../../Asset/img/Group 78.png';

function OptionInput() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const divStyle = {
    background: image ? `url(${image})` : '#1F298D',
    backgroundSize: image ? '100% auto' : 'cover',
    backgroundPosition: 'center',
    height: image ? 200 : 57,
  };

  return (
    <>
      <div className="w-[282px] h-auto bg-[#EBEDFF] rounded-lg">
        <div style={divStyle} className="rounded-t-lg">
          <label htmlFor="imageInput" className="w-[60px] h-[60px] flex items-center cursor-pointer justify-center ">
            <img src={imgProfil} alt="" className="w-[35px] " />
            <input type="file" id="imageInput" accept="image/*" className="hidden" onChange={handleImageChange} />
          </label>
        </div>

        <textarea className="w-[235px] h-[100px] bg-white rounded-lg mx-[23px] mt-[21px] focus:outline-none focus:border-transparent font-medium p-3" placeholder="Tuliskan judul..."></textarea>

        <textarea className="w-[235px] h-[239px] bg-white rounded-lg mx-[23px] my-[21px] focus:outline-none focus:border-transparent font-medium p-3" placeholder="Tuliskan keterangan..."></textarea>
      </div>
    </>
  );
}

export default OptionInput;
