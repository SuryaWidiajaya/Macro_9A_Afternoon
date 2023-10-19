import React from 'react';
import Layout from '../../component/Layout/Layout';
import LoginInput from '../../component/Items/Input/LoginInput';
import Button from '../../component/Items/Button/button';
import imgSingin from '../../Asset/img/61.png';
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <>
      <Layout hide="hidden">
        <div className="flex">
          <div className="flex flex-col items-center  w-[521px] h-[556px] bg-[#EBEDFF] my-[60px] ml-[161px] rounded-3xl">
            <h1 className="font-bold text-4xl mt-[36px] mb-[22px]">Masuk</h1>
            <div className="mb-[22px]">
              <LoginInput
                label="Email"
                name="Email"
                type="email"
                placeholder="Masukan email anda..."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="28" viewBox="0 0 36 28" fill="none">
                    <path
                      d="M2 4.96596C2 3.3279 3.43269 2 5.2 2H30.8C32.5674 2 34 3.3279 34 4.96596V22.7617C34 24.3998 32.5674 25.7276 30.8 25.7276H5.2C3.43269 25.7276 2 24.3998 2 22.7617V4.96596Z"
                      stroke="#1F298D"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path d="M3.6001 3.48291L13.7482 11.8436C16.1731 13.8415 19.8271 13.8415 22.2521 11.8436L32.4001 3.48291" stroke="#1F298D" stroke-width="3" stroke-linejoin="round" />
                  </svg>
                }
              />
            </div>
            <div className="mb-[40px]">
              <LoginInput
                label="Password"
                type="password"
                name="Password"
                placeholder="Masukkan password anda..."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="28" viewBox="0 0 36 28" fill="none">
                    <path
                      d="M30.4444 10.7417H5.55556C3.59188 10.7417 2 11.8599 2 13.2393V23.2299C2 24.6093 3.59188 25.7276 5.55556 25.7276H30.4444C32.4081 25.7276 34 24.6093 34 23.2299V13.2393C34 11.8599 32.4081 10.7417 30.4444 10.7417Z"
                      stroke="#1F298D"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.33325 5.74647C7.33325 3.67736 9.72107 2 12.6666 2H23.3333C26.2789 2 28.6666 3.67736 28.6666 5.74647V10.7418H7.33325V5.74647Z"
                      stroke="#1F298D"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
              />
            </div>
            <div>
              <Link to='/home'>
              <Button width="w-[160px]">Masuk</Button>
              </Link>
            </div>

            <div className="border-b-4 border-b-[#1F298D] w-[400px] mt-[40px]"></div>
            <div className="mt-[15px] ml-[-240px] cursor-pointer">
              <h1 className=" mb-[10px]">Lupa password?</h1>
              <Link to='/signUp/page1'>
              <h1>Belum punya akun?</h1>
              </Link>
            </div>
          </div>

          <div className="mt-[65px] ml-[110px] mr-[109px]">
            <img src={imgSingin} alt="" />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default SignIn;
