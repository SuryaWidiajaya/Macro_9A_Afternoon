import React from 'react';
import Layout from '../component/Layout/Layout';
import imgHero from '../Asset/img/711.png';
import Button from '../component/Items/Button/button';
import imgMenu1 from '../Asset/img/41.png';
import imgMenu2 from '../Asset/img/21.png';
import imgMenu3 from '../Asset/img/11.png';
import { Link } from 'react-router-dom';

function HomeAkun() {
  return (
    <>
      <Layout hide="">
        <div>
          <div className="flex mt-[64px] m-10 justify-center">
            <h1 className="text-right text-5xl font-bold line-[30px] border-r-[12px] px-5 border-r-[#1f298d] line-1">
              Demokrasi Kampus Digital <br /> Suara Anda, Suara Perubahan
            </h1>
            <h2 className=" text-3xl font-bold line-[30px]  px-5 mt-[45px]">
              Bergabung dengan <br /> Revolusi Demokrasi Digital
            </h2>
          </div>

          <div className="flex justify-center">
            <img src={imgHero} alt="" />
          </div>
          
          <div className='flex justify-center mt-[150px] mb-[100px]'>
          <h1 className='font-bold text-5xl'>Jelajahi <span className='text-[#7B84E3]'>Fitur Kami</span></h1>
          </div>

          <div className='flex  justify-evenly mx-[100px] mb-[100px]'>
            <div className="bg-[#EBEDFF] rounded-3xl w-[300px] h-[395px] flex flex-col items-center">
              <div className=" bg-white w-[300px] h-[222px] rounded-t-3xl border-[7px] border-[#EBEDFF] flex justify-center items-center">
                <img src={imgMenu1} alt="" />
              </div>
              <h1 className="text-2xl font-bold mt-[18px] mb-[25px]">Buat Vote</h1>
              <Link to='/home/create'>
              <Button width="w-[160px]">Buat</Button>
              </Link>
            </div>
            <div className="bg-[#EBEDFF] rounded-3xl w-[300px] h-[395px] flex flex-col items-center">
              <div className=" bg-white w-[300px] h-[222px] rounded-t-3xl border-[7px] border-[#EBEDFF] flex justify-center items-center">
                <img src={imgMenu2} alt="" />
              </div>
              <h1 className="text-2xl font-bold mt-[18px] mb-[25px]">Ikuti Vote</h1>
              <Link to='/home/join'>
              <Button width="w-[160px]">Ikuti</Button>
              </Link>
            </div>
            <div className="bg-[#EBEDFF] rounded-3xl w-[300px] h-[395px] flex flex-col items-center">
              <div className=" bg-white w-[300px] h-[222px] rounded-t-3xl border-[7px] border-[#EBEDFF] flex justify-center items-center">
                <img src={imgMenu3} alt="" />
              </div>
              <h1 className="text-2xl font-bold mt-[18px] mb-[25px]">Forum</h1>
              <Link to='/home/forum'>
              <Button width="w-[160px]">Masuk</Button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default HomeAkun;
