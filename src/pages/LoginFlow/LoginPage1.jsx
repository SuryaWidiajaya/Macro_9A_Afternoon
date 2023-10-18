import React from 'react';
import Layout from '../../component/Layout/Layout';
import DefaultInput from '../../component/Items/Input/DefaultInput';
import SelectInput from '../../component/Items/Input/SelectInput';
import Button from '../../component/Items/Button/button';
import { Link } from 'react-router-dom';

function LoginPage1() {

  const handleLogin = (event) => {
   event.preventDefault();
   localStorage.setItem('nama', event.target.nama.value);
   localStorage.setItem('status', event.target.status.value);
   localStorage.setItem('nip', event.target.nip.value);
   window.location.href ='/signUp/page2'
   
  };

  return (
    <>
      <Layout hide="hidden">
        <div className="flex flex-col items-center justify-center mt-[47px]">
          <h1 className="text-5xl mb-[44px]">Lengkapi data anda disini...</h1>

          <form onSubmit={handleLogin} >
            <div className="mb-[41px]">
              <DefaultInput
                label="Nama"
                name="nama"
                type="text"
                placeholder="Masukan nama lengkap anda di sini..."
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

            <div className="mb-[41px]">
              <SelectInput
                label="Status"
                op1="Mahasiswa"
                op2="Dosen"
                op3="Staff"
                name="status"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <g clip-path="url(#clip0_366_124)">
                      <path d="M6.3999 6.40015H19.1999" stroke="#1F298D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M6.3999 12.8H25.5999" stroke="#1F298D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M17.6001 19.2H25.6001" stroke="#1F298D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M17.6001 25.5999H25.6001" stroke="#1F298D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                      <path
                        d="M0 31.04V0.96C0 0.429808 0.429808 0 0.96 0H26.0024C26.257 0 26.5011 0.101136 26.6811 0.281184L31.7189 5.31882C31.8989 5.49886 32 5.74304 32 5.99765V31.04C32 31.5702 31.5702 32 31.04 32H0.96C0.429808 32 0 31.5702 0 31.04Z"
                        stroke="#1F298D"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path d="M6.3999 25.6V19.2H11.1999V25.6H6.3999Z" stroke="#1F298D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M25.6001 0V5.44C25.6001 5.97019 26.0299 6.4 26.5601 6.4H32.0001" stroke="#1F298D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_366_124">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                }
              />
            </div>

            <div className="mb-[41px]">
              <DefaultInput
                label="NIP/NIDN/NIP"
                name="nip"
                type="text"
                placeholder="Masukkan NIP/NIDN/NIP anda disini..."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="28" viewBox="0 0 36 28" fill="none">
                    <path
                      d="M9.9999 18.9485C10.8836 18.9485 11.5999 18.1897 11.5999 17.2537C11.5999 16.3176 10.8836 15.5588 9.9999 15.5588C9.11625 15.5588 8.3999 16.3176 8.3999 17.2537C8.3999 18.1897 9.11625 18.9485 9.9999 18.9485Z"
                      fill="black"
                      stroke="#1F298D"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2 8.77933V3.0169C2 2.45528 2.42981 2 2.96 2H33.04C33.5702 2 34 2.45528 34 3.0169V8.77933M2 8.77933V24.7107C2 25.2724 2.42981 25.7276 2.96 25.7276H33.04C33.5702 25.7276 34 25.2724 34 24.7107V8.77933M2 8.77933H34"
                      stroke="#1F298D"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
              />
            </div>

            <div className="mb-[47px] ml-[590px]">
                <Button width="w-[160px]" type="submit">
              {/* <Link to="/signUp/page2"> */}
                  Lanjutkan
              {/* </Link> */}
                </Button>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
}

export default LoginPage1;
