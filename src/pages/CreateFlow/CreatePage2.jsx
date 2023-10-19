import React, {useState} from 'react';
import Layout from '../../component/Layout/Layout';
import imgPlus from '../../Asset/img/Group 69.png';
import OptionInput from '../../component/Items/Input/OptionInput';
import Button from '../../component/Items/Button/button';
import { Link } from 'react-router-dom';
import App1 from '../Coba';

function CreatePage2() {

  const [optionInputs, setOptionInputs] = useState([]);

  const addOptionInput = () => {
    const newOptionInputs = [...optionInputs, <OptionInput key={optionInputs.length} />];
    setOptionInputs(newOptionInputs);
  }

  return (
    <>
      <Layout hide="">
        <div className="mx-[90px] my-[60px]">
          <h1 className="text-5xl font-bold">Isi Data Voting Anda...</h1>

          <div className="w-full mt-[60px]">
            <h1 className="text-2xl font-bold mb-[5px]">Judul</h1>
            <input type="text" placeholder="Masukkan judul voting anda..." className="w-full p-3 bg-[#EBEDFF] rounded-lg text-[#1F298D] focus:outline-none focus:border-transparent font-medium" />
          </div>

          <div className="w-full mt-[20px]">
            <h1 className="text-2xl font-bold mb-[5px]">Deskripsi</h1>
            <textarea placeholder="Masukkan deskripsi voting anda..." className="w-full p-3 bg-[#EBEDFF] rounded-lg text-[#1F298D] focus:outline-none focus:border-transparent font-medium"></textarea>
          </div>

          <div className="mt-5">
          <h1 className="text-2xl font-bold mb-4">Opsi/Pilihan</h1>

          <div className="flex items-start flex-wrap gap-4">
            {optionInputs.map((input, index) => (
              <div key={index}>{input}</div>
            ))}
            <img
              src={imgPlus}
              alt=""
              className="w-8 cursor-pointer"
              onClick={addOptionInput}
            />
          </div>
        </div>


        <div>
        <h1 className="text-2xl font-bold mb-4 mt-8">Waktu</h1>


           <div className='flex gap-8'> 
        <div>
            <h1 className=' ml-[3px] font-medium'>Waktu Mulai</h1>
            <input type="datetime-local" className='w-[300px] p-3 bg-[#EBEDFF] rounded-lg text-[#1F298D] focus:outline-none focus:border-transparent font-medium " placeholder="Masukkan kode...'/>
        </div>
        <div>
            <h1 className=' ml-[3px] font-medium'>Waktu Berhenti</h1>
            <input type="datetime-local" className='w-[300px] p-3 bg-[#EBEDFF] rounded-lg text-[#1F298D] focus:outline-none focus:border-transparent font-medium " placeholder="Masukkan kode...'/>
        </div>
            </div>     
        </div>

        <div className='bg-[#EBEDFF] w-[513px] h-[114px] my-[56px] flex flex-col justify-center p-8 rounded-lg'>
            <h1 className='text-2xl'>Kode Anda : <span className='font-bold'>AA3324D</span></h1>
            <h1 className='text-2xl'>Link : Link : //https/iChoice.com </h1>

        </div>

        <div className='flex justify-end'>
            <Link to='/profile/voting'>
            <Button width='w-[160px]'>Buat</Button>
            </Link>
        </div>
        </div>
      </Layout>




      <App1/>
    </>
  );
}

export default CreatePage2;
