import React from 'react';
import Layout from '../../component/Layout/Layout';
import DefaultInput from '../../component/Items/Input/DefaultInput';
import SelectInput from '../../component/Items/Input/SelectInput';
import FileInput from '../../component/Items/Input/FileInput';
import Button from '../../component/Items/Button/button';
import { Link } from 'react-router-dom';

function LoginPage2() {

  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem('univ', event.target.univ.value);
    localStorage.setItem('prodi', event.target.prodi.value);
    localStorage.setItem('bukti', event.target.bukti.value);
    window.location.href ='/signUp/data'
    
    
     
   };





  return (
    <>
      <Layout hide="hidden">
        <div className="flex flex-col items-center justify-center mt-[47px]">
          <h1 className="text-5xl mb-[44px]">Lengkapi data anda disini...</h1>

          <form onSubmit={handleLogin}>
            <div className="mb-[41px]">
              <SelectInput
                label="Universitas"
                op1="Universitas Pendidikan"
                op2="Universitas Pandai"
                op3="Universitas Cerdas"
                name="univ"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <g clip-path="url(#clip0_366_388)">
                      <path d="M0 11L16 0L32 11" stroke="#1F298D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M3.55566 32H28.4446" stroke="#1F298D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M12.4443 10H19.5554" stroke="#1F298D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M5.3335 26V16" stroke="#1F298D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M12.4443 26V16" stroke="#1F298D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M19.5557 26V16" stroke="#1F298D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M26.6665 26V16" stroke="#1F298D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_366_388">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                }
              />
            </div>

            <div className="mb-[41px]">
              <SelectInput
                label="Program Studi"
                op1="Teknik Informatika"
                op2="Sistem Informasi"
                op3="Teknik Komputer"
                name="prodi"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <g clip-path="url(#clip0_366_388)">
                      <path d="M0 11L16 0L32 11" stroke="#1F298D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M3.55566 32H28.4446" stroke="#1F298D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M12.4443 10H19.5554" stroke="#1F298D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M5.3335 26V16" stroke="#1F298D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M12.4443 26V16" stroke="#1F298D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M19.5557 26V16" stroke="#1F298D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M26.6665 26V16" stroke="#1F298D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_366_388">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                }
              />
            </div>

            <div className="mb-[41px]">
              <FileInput
                label="Bukti"
                name="bukti"
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

            <div className="mb-[47px] ml-[390px] flex">
              <div className="mr-8">
                <Link to="/signUp/page1">
                  <Button width="w-[160px]">kembali</Button>
                </Link>
              </div>
              {/* <Link to='/signUp/data'> */}
              <Button width="w-[160px]" type="submit">
                Lanjutkan
              </Button>
              {/* </Link> */}
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
}

export default LoginPage2;
