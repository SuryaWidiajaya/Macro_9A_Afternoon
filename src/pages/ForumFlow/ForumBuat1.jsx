import React from 'react';
import Layout from '../../component/Layout/Layout';
import DefaultInput from '../../component/Items/Input/DefaultInput';
import SelectInput from '../../component/Items/Input/SelectInput';
import Button from '../../component/Items/Button/button';
import { Link } from 'react-router-dom';

function ForumBuat1() {
  return (
    <>
      <Layout hide="">
        <div className="flex flex-col items-center justify-center mt-[47px]">
          <h1 className="text-5xl mb-[44px]">Lengkapi data anda disini...</h1>

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
              label="Penanggung Jawab"
              op1="Universitas"
              op2="Prodi"
              op3="Organisasi"
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

          <div className='ml-[-490px]'>
            <h1 className='text-2xl font-medium mb-[32px]'>Tambahkan Anggota</h1>
            <Button width='w-[200px]'>Tambahkan</Button>

          </div>

          <div className="mb-[47px] ml-[590px]">
          <Link to='/profile/forum'>
            <Button width="w-[160px]">Lanjutkan</Button>
          </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default ForumBuat1;
