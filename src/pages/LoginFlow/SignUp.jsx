import React from 'react';
import Layout from '../../component/Layout/Layout';
import LoginInput from '../../component/Items/Input/LoginInput';
import Button from '../../component/Items/Button/button';
import imgSingup from '../../Asset/img/51.png';
import { Link } from 'react-router-dom';

function SignUp() {

  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem('email', event.target.email.value);
    localStorage.setItem('user', event.target.username.value);
    localStorage.setItem('pass', event.target.password.value);
    window.location.href ='/home'
    
    
     
   };




  return (
    <>
      <Layout hide="hidden">
        <div className="flex">
          <div className="flex flex-col items-center  w-[521px] h-[656px] bg-[#EBEDFF] my-[60px] ml-[161px] rounded-3xl">
            <h1 className="font-bold text-4xl mt-[36px] mb-[22px]">Daftar</h1>
            <form onSubmit={handleLogin}>
            <div className="mb-[22px]">
              <LoginInput
                label="Username"
                name="username"
                type="text"
                placeholder="Masukan username anda..."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="41" viewBox="0 0 36 41" fill="none">
                    <path
                      d="M17.9992 20.3177C23.0575 20.3177 27.158 16.2171 27.158 11.1588C27.158 6.10055 23.0575 2 17.9992 2C12.9409 2 8.84033 6.10055 8.84033 11.1588C8.84033 16.2171 12.9409 20.3177 17.9992 20.3177Z"
                      stroke="#1F298D"
                      stroke-width="3"
                    />
                    <path
                      d="M27.1588 23.981H27.8031C30.5743 23.981 32.912 26.0446 33.2559 28.7947L33.9712 34.5171C34.2445 36.7037 32.5395 38.6351 30.3359 38.6351H5.66406C3.46047 38.6351 1.75551 36.7037 2.02883 34.5171L2.74413 28.7947C3.08788 26.0446 5.4256 23.981 8.19701 23.981H8.84116"
                      stroke="#1F298D"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
              />
            </div>

            <div className="mb-[22px]">
              <LoginInput
                label="Email"
                name="email"
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

            <div className="mb-[22px]">
              <LoginInput
                label="Password"
                type="password"
                name="password"
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

            <div className="mb-[40px]">
              <LoginInput
                label="Konfirmasi Password"
                type="password"
                name="Konfirmasi Password"
                placeholder="Masukkan ulang password anda..."
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
              {/* <Link to='/home'> */}
              <Button width="w-[160px]" type="submit" >Daftar</Button>
              {/* </Link> */}
            </div>
            </form>
          </div>

          <div className="mt-[124px] ml-[110px] mr-[109px]">
            <img src={imgSingup} alt="" />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default SignUp;
