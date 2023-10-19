import React, { useState } from 'react';
import Layout from '../../component/Layout/Layout';
import imgsatu from '../../Asset/img/img1.png';
import imgdua from '../../Asset/img/img2.png';
import imgtiga from '../../Asset/img/img3.png';
import { Link } from 'react-router-dom';

function ProfileVoting() {

  return (
    <>
      <Layout hide="">
        <div className='py-10'>
          <div className="bg-white">
            <div className="text-center my-4">
              <h1 className="text-2xl font-bold">Pemilihan Ketua Himpunan 2024</h1>
            </div>

            <div className="bg-blue-100 p-8 md:flex justify-between">
              <div className="md:w-3/4 mr-6">
                <h3 className="text-2xl font-semibold">Deskripsi :</h3>
                <p className="text-gray-700 text-lg">
                  Pemilihan Ketua Himpunan tahun 2024 adalah sebuah proses demokratis yang penting dalam kehidupan himpunan kami. Tujuan utama dari pemilihan ini adalah untuk memilih individu yang akan memimpin, mewakili, dan menggerakkan himpunan kami ke arah yang lebih baik selama periode masa jabatan mendatang. Berikut adalah deskripsi singkat tentang pemilihan Ketua Himpunan 2024
                </p>
              </div>
              <div className="md:w-1/4">
                <h5 className="text-xl font-semibold">Waktu</h5>
                <p className="text-lg">12/10/2023 - 19/10/2023</p>
                <h5 className="text-xl font-semibold pt-4">Hasil</h5>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md">Lihat</button>
              </div>
            </div>

            <section className="p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-1 md:col-span-1">
                <div className="bg-white p-4 border rounded-md">
                  <img src={imgsatu} alt="Arya Permana" className="w-full h-auto rounded-md" />
                  <h5 className="text-lg font-semibold text-center mt-4">Arya Permana</h5>
                  <div className="mt-4 space-y-2">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-md m-4">Deskripsi</button>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-md">Pilih</button>
                  </div>
                </div>
              </div>
              <div className="col-span-1 md:col-span-1">
                <div className="bg-white p-4 border rounded-md">
                  <img src={imgdua} alt="Bagas Pramana" className="w-full h-auto rounded-md" />
                  <h5 className="text-lg font-semibold text-center mt-4">Bagas Pramana</h5>
                  <div className="mt-4 space-y-2">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-md m-4">Deskripsi</button>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-md">Pilih</button>
                  </div>
                </div>
              </div>
              <div className="col-span-1 md:col-span-1">
                <div className="bg-white p-4 border rounded-md">
                  <img src={imgtiga} alt="Agas Pramana" className="w-full h-auto rounded-md" />
                  <h5 className="text-lg font-semibold text-center mt-4">Agas Pramana</h5>
                  <div className="mt-4 space-y-2">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-md m-4">Deskripsi</button>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-md">Pilih</button>
                  </div>
                </div>
              </div>
            </section>

            <div className="p-8 bg-blue-100">
              <p className="text-blue-500 text-lg">KODE VOTING : <span className="font-semibold">AA335D</span></p>
              <p className="text-blue-500 text-lg">Link : //https/iChoice.com</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default ProfileVoting;
