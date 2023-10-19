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
          <div className='grid grid-cols-4 gap-5 px-20 w-full'>
            <div className='col-span-2 w-full h-full'>
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
                <div className="w-full h-auto bg-[#EBEDFF] mt-[-113px] px-[60px] py-8 my-2 rounded-r-lg" >
                  <h1 className="text-2xl mt-[90px] mb-[13px]">
                    <span className="font-bold">Nama Lengkap : </span>{nama}{' '} Satriya Bhaardhika Yasin
                  </h1>
                  <h1 className="text-2xl mb-[13px]">
                    <span className="font-bold">Nama Panggilan : </span>{nama}{' '} Satriya
                  </h1>
                  <h1 className="text-2xl mb-[13px]">
                    <span className="font-bold">Universitas : </span>{univ}{' '} Teknik Informatika
                  </h1>
                  <h1 className="text-2xl mb-[13px]">
                    <span className="font-bold">Program Studi : </span>{prodi}{' '} Universitas Pendidikan
                  </h1>

                  <h1 className="text-2xl mt-[90px] mb-[13px]">
                    <span className="font-bold">Role : </span>
                  </h1>
                  <h1 className="text-2xl mb-[13px]">#MahasiswaInformatika21</h1>
                  <h1 className="text-2xl mb-[13px]">#KetuaDft</h1>
                  <h1 className="text-2xl mb-[13px]">#AnggotaUKMPend</h1>
                </div>
              </div>
            </div>
            <div className='w-full h-full my-2'>
              <div className='bg-[#EBEDFF] rounded-lg space-y-5'>
                <h1 className='text-white text-center w-full'>
                  <div className="bg-[#1F298D] text-white py-4 rounded-t-lg">
                    Daftar Voting
                  </div>
                </h1>
                <h1 href="" className='mb-2 text-center border-b-black border-b-2'><a href=''>Pemilihan Ketua Himpu..</a></h1>
                <h1 href="" className='mb-2 text-center border-b-black border-b-2'><a href=''>Webinar Elektro 2023 “M..</a></h1>
                <h1 href="" className='mb-2 text-center border-b-black border-b-2'><a href=''>Pemilihan Kepala Bidan..</a></h1>
                <h1 href="" className='mb-2 text-center border-b-black border-b-2 pb-4'><a href=''>Pemilihan Ketua Himpu..</a></h1>
              </div>
            </div>

            <div className='w-full h-full my-2'>
              <div className='bg-[#EBEDFF] rounded-lg space-y-5'>
                <h1 className='text-white text-center w-full'>
                  <div className="bg-[#1F298D] text-white py-4 rounded-t-lg">
                    Daftar Forum
                  </div>
                </h1>
                <h1 href="" className='mb-2 text-center border-b-black border-b-2'><a href=''>Forum Elektro 2021</a></h1>
                <h1 href="" className='mb-2 text-center border-b-black border-b-2'><a href=''>UKM SEJAHTERA</a></h1>
                <h1 href="" className='mb-2 text-center border-b-black border-b-2'><a href=''>Jurusan Elektro 2022</a></h1>
                <h1 href="" className='mb-2 text-center border-b-black border-b-2 pb-4'><a href=''>BEM Universitas Pendidi..</a></h1>
              </div>
            </div>
          </div>




        </>
      </Layout>
    </>
  );
}

export default ProfilePage;
