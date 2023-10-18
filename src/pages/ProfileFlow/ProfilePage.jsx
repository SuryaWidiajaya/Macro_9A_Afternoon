import React, { useState, useEffect } from 'react';
import Layout from '../../component/Layout/Layout';
import imgProfil from '../../Asset/img/profil.png';
import { Link } from 'react-router-dom';

function ProfilePage() {
  const [selectedImage, setSelectedImage] = useState(null);
    
  const nama = localStorage.getItem('nama')
  const univ = localStorage.getItem('univ')
  const prodi = localStorage.getItem('prodi')



  useEffect(() => {
    const storedImage = localStorage.getItem('ProfilImage');
    if (storedImage) {
      setSelectedImage(storedImage);
    }
  }, []);


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
        reader.onload = (event) => {
          localStorage.setItem('ProfilImage', event.target.result);
          setSelectedImage(event.target.result);

        };
        reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Layout hide="hidden">
        <>
          <div className="w-full h-[112px] bg-[#1F298D] flex"></div>
          <label htmlFor="imageUpload">
            <img
              src={selectedImage || imgProfil}
              alt=""
              className="mt-[-80px] mx-[53px] rounded-full border-4 border-white cursor-pointer"
              style={{ objectFit: 'cover', width: '200px', height: '200px' }}
            />
          </label>
          <input
            type="file"
            accept="image/*"
            id="imageUpload"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />

          <div>
            <div className="w-[650px] h-auto bg-[#EBEDFF] mt-[-113px] px-[60px] py-8 my-2 rounded-r-lg">
              <h1 className="text-2xl mt-[90px] mb-[13px]">
                <span className="font-bold">Nama Lengkap : </span>{nama}{' '}
              </h1>
              <h1 className="text-2xl mb-[13px]">
                <span className="font-bold">Nama Panggilan : </span>{nama}{' '}
              </h1>
              <h1 className="text-2xl mb-[13px]">
                <span className="font-bold">Universitas : </span>{univ}{' '}
              </h1>
              <h1 className="text-2xl mb-[13px]">
                <span className="font-bold">Program Studi : </span>{prodi}{' '}
              </h1>

              <h1 className="text-2xl mt-[90px] mb-[13px]">
                <span className="font-bold">Role : </span>
              </h1>
              <h1 className="text-2xl mb-[13px]">#MahasiswaInformatika21</h1>
              <h1 className="text-2xl mb-[13px]">#KetuaDft</h1>
              <h1 className="text-2xl mb-[13px]">#AnggotaUKMPend</h1>
            </div>

          </div>
        </>
      </Layout>
    </>
  );
}

export default ProfilePage;
