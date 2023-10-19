import React from 'react';
import Layout from '../../component/Layout/Layout';
import imgHero from '../../Asset/img/12.png';
import Button from '../../component/Items/Button/button';
import { Link } from 'react-router-dom';

function HomeForum() {
  return (
    <>
      <Layout hide="">
        <div className="flex my-[47px] mx-[100px]">
          <img src={imgHero} alt="" />

          <div className="flex flex-col justify-center ml-[100px]">
            <h1 className="text-5xl font-bold mb-[22px]">
              Buat <span className="text-[#7B84E3]">Forum</span> Anda
            </h1>
            <h2 className="text-4xl font-bold mb-[62px]">
              Atau Gabung <br /> ke <span className="text-[#7B84E3]">Forum</span> yang telah ada
            </h2>

            <div className="flex">
              <div className="mr-8">
                <Link to='/home/forum/join1'>
                  <Button width="w-[160px]">Gabung</Button>
                </Link>
              </div>
              <Link to='/home/forum/create'>
                <Button width="w-[160px]">Buat</Button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default HomeForum;
