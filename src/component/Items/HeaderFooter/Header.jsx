import React, { useState, useEffect } from 'react';
import imgProfil from '../../../Asset/img/profil.png';
import { Link } from 'react-router-dom';

function Header({hidden}) {

  const user = localStorage.getItem('user')

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    const handleImageClick = () => {
      if (isModalOpen) {
        closeModal();
      } else {
        openModal();
      }
    };


    const [imageUrl, setImageUrl] = useState(null);
  useEffect(() => {
    const storedImage = localStorage.getItem('ProfilImage');
    if (storedImage) {
      setImageUrl(storedImage);
    }
  }, []);

  return (
    <div className=" flex items-center justify-between py-[27px] bg-[#EBEDFF] hover:bg-white transition duration-1500 w-full h-[105px] border-b-4 border-[#1F298D]">
      <div className="flex items-center">
        <div className="w-[50px] h-[50px] ml-[90px] mr-[27px] bg-slate-400">.</div>
        <Link to='/home'>
        <h1 className="text-4xl font-bold text-[#1F298D] cursor-pointer hover:text-[#00085e]">iChoice</h1>
        </Link>
      </div>

      <div className={`relative ${hidden}`}>
        <div className="flex items-center">
          <h1 className="font-bold text-2xl">{user}</h1>
          <img src={imageUrl || imgProfil} style={{ objectFit: 'cover', width: '61px', height: '61px' }} alt="" className="mr-[72px] ml-[15px] cursor-pointer rounded-full" onClick={handleImageClick} />
        </div>
        {isModalOpen && (
          <div className="absolute inset-0 flex items-center justify-center z-50 m-40 ">
      
            <div className={`modal bg-[#EBEDFF] rounded-lg mr-[100px]`}> 
              <ul className="w-[180px]">
                <Link to='/profile'>
                <li className=" w-full cursor-pointer hover:text-white hover:bg-[#1F298D] py-3 px-2 pl-6  rounded-tl-lg rounded-tr-lg">Profil</li>
                </Link>
                <Link to="/profile/voting">
                <li className="w-full cursor-pointer hover:text-white hover:bg-[#1F298D] py-3 px-2 pl-6 ">My Voting</li>
                </Link>
                <Link to='/profile/forum'>
                <li className="w-full cursor-pointer hover:text-white hover:bg-[#1F298D] py-3  px-2 pl-6  rounded-bl-lg rounded-br-lg">My Forum</li>
                </Link>
              </ul>
            </div>
          </div>
        )}  
      </div>
    </div>
  );
}

export default Header;
