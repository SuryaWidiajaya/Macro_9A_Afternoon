import './style.css';
import {hitungBMI} from './script';
import {resetBMI} from './script';



import React, { useState } from 'react';

function Forum1() {
  
  

  return (
    <>
      <div className="body">
        
        <div className="container">
          <div className="judul-container">
            <h1>KALKULATOR BMI</h1>
            <p>
              BMI adalah indikator pengukuran yang digunakan untuk menentukan kategori berat badan ideal atau tidak. BMI dikembangkan oleh Adolphe Quetelet selama abad ke-19. Melalui hasil perhitungan BMI, Anda akan mengetahui kategori
              berat badan, yaitu kurus, ideal, berlebihan, atau bahkan obesitas
            </p>
          </div>

          <div className="calculator-container">
            <h2>Kalkulator :</h2>
            <div className="input">
              <h3>Jenis Kelamin</h3>
              <div className="radio-pilihan">
                <input type="radio" name="jenisKelamin" value="Laki-Laki" /> Laki-Laki
                <input type="radio" name="jenisKelamin" value="Perempuan" /> Perempuan
              </div>
            </div>
            <div className="input">
              <h3>Usia (Tahun)</h3>
              <input type="number" id="usia" placeholder="masukan usia" />
            </div>
            <div className="input">
              <h3>Berat Badan (kg)</h3>
              <input type="number" id="beratBadan" placeholder="masukan berat badan" />
            </div>
            <div className="input">
              <h3>Tinggi Badan (cm)</h3>
              <input type="number" id="tinggiBadan" placeholder="masukan tinggi badan" />
            </div>
            <div className="button-pilihan">
              <button onClick={hitungBMI}>Hitung BMI</button>
              <button onClick={resetBMI}>Reset</button>
            </div>
          </div>

          <div className="hasil-container">
            <h2>HASIL : </h2>
            <div id="hasilBMI"></div>
            <p id="jenisKelaminPilihan"></p>
            <p id="usiaPilihan"></p>

            <p className="paragraf-bmi p1">
              BMI Anda berada pada rentang kurang dari 18.4 <br /> Sehingga status anda : Kekurangan Berat Badan
            </p>
            <p className="paragraf-bmi p2">
              BMI Anda berada pada rentang 18.5 - 24.9 <br /> Sehingga status anda : Normal (Ideal)
            </p>
            <p className="paragraf-bmi p3">
              BMI Anda berada pada rentang 25.0 - 29.9 <br /> Sehingga status anda : Kelebihan Berat Badan
            </p>
            <p className="paragraf-bmi p4">
              BMI Anda berada pada rentang lebih dari 30.0 <br /> Sehingga status anda : Kegemukan (Obesitas)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forum1;
