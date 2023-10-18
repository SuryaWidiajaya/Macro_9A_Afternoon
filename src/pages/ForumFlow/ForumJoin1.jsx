import React from 'react';
import Layout from '../../component/Layout/Layout';
import { Link } from 'react-router-dom';

function ForumJoin1() {
  return (
    <>
      <Layout hide="">
        <div className='flex my-[240px] flex-col items-center'>
        <h1 className='text-5xl font-bold mb-[40px]'>Isi Kode Forum...</h1>
        <div className="flex justify-center  ">
          <input type="text" class="w-[470px] p-6 bg-[#EBEDFF] rounded-l-lg text-[#1F298D] focus:outline-none focus:border-transparent font-medium " placeholder="Masukkan kode..." />
          <Link to='/home/forum/join2'>
          <button class=" text-white p-6 bg-[#1f298d] w-[160px] hover:bg-[#00085e]  border-2 border-[#1f298d] font-medium rounded-r-lg text-xl">Join</button>
          </Link>
        </div>
        </div>
      </Layout>
    </>
  );
}

export default ForumJoin1;