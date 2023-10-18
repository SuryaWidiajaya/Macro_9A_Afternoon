import React from 'react';
import Layout from '../component/Layout/Layout';
import imgHero from '../Asset/img/71.png';
import Button from '../component/Items/Button/button';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
      <Layout hide="hidden">
        <div>
          <div className="flex mt-[64px] m-10 justify-center">
            <h1 className="text-right text-5xl font-bold line-[30px] border-r-[12px] px-5 border-r-[#1f298d] line-1">
              Demokrasi Kampus Digital <br /> Suara Anda, Suara Perubahan
            </h1>
            <h2 className=" text-3xl font-bold line-[30px]  px-5 mt-[45px]">
              Bergabung dengan <br /> Revolusi Demokrasi Digital
            </h2>
          </div>

          <div className="flex mt">
            <div className="ml-[140px] mt-[px]">
              <div className="flex m-4 items-center">
                <div className="bg-[#FEDA15] p-2 w-[43px]  h-[43px] flex justify-center items-center rounded-full font-bold text-white text-2xl mr-4">
                  <h2>1</h2>
                </div>
                <h1 className="text-2xl">
                  <span className="font-bold">Daftarkan</span> diri anda
                </h1>
              </div>

              <div className="flex m-4 items-center">
                <div className="bg-[#FEDA15] p-2 w-[43px]  h-[43px] flex justify-center items-center rounded-full font-bold text-white text-2xl mr-4">
                  <h2>2</h2>
                </div>
                <h1 className="text-2xl">
                  Bergabung dengan <span className="font-bold">Forum</span>
                </h1>
              </div>

              <div className="flex m-4 items-center">
                <div className="bg-[#FEDA15] p-2 w-[43px]  h-[43px] flex justify-center items-center rounded-full font-bold text-white text-2xl mr-4">
                  <h2>3</h2>
                </div>
                <h1 className="text-2xl">
                  Mulai <span className="font-bold">Voting!</span>
                </h1>
              </div>
              <div className="m-5 mt-20">
                <Link to="/signIn" ><Button width="w-[160px]">Masuk</Button></Link>
              </div>
            </div>

            <div className="z-[-10] ml-[-120px]">
              <img src={imgHero} alt="" />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Home;
