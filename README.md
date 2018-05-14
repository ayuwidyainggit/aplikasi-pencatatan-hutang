*PROYEK BASIS DATA*
======================================================================================================================

a. Nama Aplikasi
APLIKASI PERHITUNGAN PERSEDIAAN METODE FIFO

b. Desripsi:
- Pokok Masalah :
Membangun aplikasi perhitungan persediaan. Aplikasi ini digunakan untuk mengetahui laporan persediaan dalam perusahaan.

- Batasan masalah :
1. metode yang digunakan : FIFO
*Metode FIFO*

FIFO (first in first out) yang berarti masuk pertama keluar pertama. 
Mengasumsikan unit persediaan yang pertama masuk akan dijual dan masuk terakhir akan dikeluarkan dikemudian hari. 
Artinya unit yang pertama kali dicatat saat penjualan adalah unit yang pertama kali masuk. Sangat relevan bila nilai
persediaan disajikan dengan menggunakan metode ini karena nilai berdasarkan harga paling terkini.

2. Aplikasi ini digunakan untuk mengisi data persediaan bahan baku, produk dalam proses, dan produk jadi.
   Aplikasi ini juga digunakan untuk menghapus dan mengedit data persediaan.
   
3. Aplikasi yang dihasilkan berupa Laporan Persediaan dengan Metode FIFO

c. Pembuat :
Ayu Widya Inggit
D3 KA - 163210012

d. Development Tools
Java Script, Express, MongoDB

e. Instalasi Development Tools
node JS, MongoDB, Virtual Studio Code

f. Cara  Menjalankan
mengisikan data persediaan, dengan menganalisis terlebih dahulu apakah itu merupakan barang yang masuk atau keluar, setelah itu akan muncul saldo perusahaan yang sesungguhnya.


g. Lisensi
nodeJS: https://nodejs.org/en/
mongoDB :
 https://www.quora.com/Where-can-I-find-MongoDB-for-a-32bit-windows-installer
 https://www.mongodb.com/dr/fastdl.mongodb.org/win32/mongodb-win32-i386-3.2.14-signed.msi/download
 
virtual studio code :
https://code.visualstudio.com/Download


PROGRESS
1. routing 

const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))
 app.route('/pers')
  .get(function (req, res) {
    res.send('Get a random persediaan')
  })
  .post(function (req, res) {
    res.send('Add a persediaan')
  })
  .put(function (req, res) {
    res.send('Update persediaan')
  })
  

app.listen(3000, () => console.log('Example app listening on port 3000!'))

2. membuat form data persediaan dan membuat form data suplier