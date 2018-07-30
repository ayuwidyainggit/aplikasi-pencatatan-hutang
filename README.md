
14/02/18
*PROYEK BASIS DATA*
======================================================================================================================

a. Nama Aplikasi
APLIKASI PERHITUNGAN HUTANG

b. Desripsi:
- Pokok Masalah :
Membangun aplikasi perhitungan persediaan. Aplikasi ini digunakan untuk mengetahui laporan Hutang dalam suatu perusahaan .
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
*form hutang.pug*


     html
     head
	title hutang
	body
		form(action = "/hutang", method = "POST")
		div
			label(for = "NO") NO: 
			input(NO = "NO")
		br
		div
			label(for = "ID_S") NAMA_SUPLIER: 
			input(name = "NAMA_SUPLIER")
		br
		div
			label(for = "HUTANG") HUTANG: 
			input(name = "HUTANG")
		br
		button(type = "submit") SAVE
 
 
  *form suplier.pug*
 
 
     html
     head
       title suplier
        body
         form(action = "/suplier", method = "POST")
         div
          label(for = "ID_S") ID_S: 
          input(ID_S = "ID_S")
          br
         div
          label(for = "NAMA_SUPLIER") NAMA_SUPLIER: 
          input(name = "NAMA_SUPLIER")
         br
        div
          label(for = "ALAMAT") ALAMAT: 
          input(name = "ALAMAT")
         br
          button(type = "submit") SAVE


*database suplier*

     var mongoose = require('mongoose');
     mongoose.connect('mongodb://localhost/my_db');

     var SUPLIER = mongoose.Schema({
     ID_S: String,
    NAMA_SUPLIER: String,
    ALAMAT: String
    });
    var Person = mongoose.model("Person", SUPLIER);

*database hutang*

     var mongoose = require('mongoose');
     mongoose.connect('mongodb://localhost/my_db');

     var HUTANG = mongoose.Schema({
     NO_HUTANG: Number,
     ID_S: String,
     HUTANG: Number
     });
     var Person = mongoose.model("Person", HUTANG);


*koneksi ke database*

    const express = require('express')
    const app = express()
    var mongoose = require('mongooose')
    monggose.connect('localhost:27017/test')
    var Schema = mongoose.Schema;

    app.set('views', './views')
    app.set('view engine', 'pug')

    app.get('/', (req, res) => res.send('Hello World!'))

    app.use(express.static('public'))

    app.get('/ayu', function(req, res){
     res.render('suplier')
    }) 
    app.get('/ayu1', function(req, res){
     res.render('form2')
    })   

    app.listen(3000, () => console.log('Example app listening on port 3000!'))


FILE PROSES 
(masih belum bisa dijalankan )
ditambahkan pada routingnya

    app.post('/person', function(req, res){
    var personInfo = req.body; //Get the parsed information
   
    if(!personInfo.name || !personInfo.age || !personInfo.nationality){
      res.render('show_message', {
         message: "Sorry, you provided worng info", type: "error"});
    } else {
      var newPerson = new Person({
         name: personInfo.name,
         age: personInfo.age,
         nationality: personInfo.nationality
       });
		
      newPerson.save(function(err, Person){
         if(err)
            res.render('show_message', {message: "Database error", type: "error"});
         else
            res.render('show_message', {
               message: "New person added", type: "success", person: personInfo});
      });
    }
    });

hutang.pug

    html
    head
    title hutang
    body
        form(action = "/hutang1", method = "POST")
        div
            label(for = "NO") NO: 
            input(NO = "NO")
        br
        div
            label(for = "ID_S") NAMA_SUPLIER: 
            input(name = "NAMA_SUPLIER")
        br
        div
            label(for = "HUTANG") HUTANG: 
            input(name = "HUTANG")
        br
        button.btn.btn-primary(input type='submit') simpan
27/juli/2018
a. Nama Aplikasi
APLIKASI PERHITUNGAN BPHTB

b. Desripsi:
Bea Perolehan Hak atas Tanah dan Bangunan adalah pajak yg dikenakan atas perolehan hk atas taah dan atas bangunan.
- Pokok Masalah :
Membangun aplikasi perhitungan Bea Perolehan hak atas Tanah dan Bangunan
- Batasan masalah :
yang menjadi objek pajak BPHTB adalah perolehan ha atas tanah dan bangunan yang meliputi jual beli, tukar menukar, hibah, waris, lelang, dll
tarif BPHTB adalah 5%
untuk NPOPTKP jumlahnya sudah ditentukan menurut wilayah masing-masing.
BPHTB = (NPOP - NPOPTKP)X5%
-pembuat:
Ayu Widya Inggit
D3 KA - 163210012

d. Development Tools
Java Script, Express, MongoDB

e. Instalasi Development Tools
node JS, MongoDB, Notepad++

f. Cara  Menjalankan
mengisikan besarnya NPOP dari pembelian tanah dan bangunan , kemudian mengisikan NPOPTKP yg berlaku pada kabupaten tersebut.
1. dengan menggunakan CMD, masuk ke direktori aplikasi yang dibuat : (E:\cobaproyek\proyekAyu)
2. menghidupkan server express dengan mengetikkan perintah (node server)
3. kemudian masuk ke web browser dengan mengetikkan http://localhost:3000/xxx 
  (xxx diketikkan sesuai routing nya yang ada di server.js)
  untuk formnya menggunakan format .pug , nah sebelumnya harus instal pug terlebih dahulu.
4. untuk file prosesnya menggunakan hasil.js (namun masih error)

DATABASE
1. menginstall mongodb terlebih dahulu
2. untuk mengaktifkanya dengan masuk ke direktori mongodb, C:\mongodb\bin
3. untuk mengaktifkan server mongodb kita harus membuka server terlebih dahulu dengan mengetikkan 
   mongod --storageEngine=mmapv1 --dbpath C:\mongodb\data
   
   jika masih error, maka untuk memperbaikinya dengan cara
   mongod --dbpath C:\mongodb\data --repair
   kemudian 
   mongod.exe --dbpath C:\mongodb\data
   

g. Lisensi
nodeJS: https://nodejs.org/en/
mongoDB :
 https://www.quora.com/Where-can-I-find-MongoDB-for-a-32bit-windows-installer
 https://www.mongodb.com/dr/fastdl.mongodb.org/win32/mongodb-win32-i386-3.2.14-signed.msi/download
 
virtual studio code :
https://code.visualstudio.com/Download

1) bphtb.pug (view\bphtb.pug)

        <HTML>
        <HEAD>
        </HEAD>
            <BODY>
             <form (action = "http://localhost:3000/hutang1", method = "GET")>
             <CENTER> <H3> APLIKASI PERHITUNGAN BPHTP </H3> <CENTER>
              Masukkan tarif NJOP  :
              <INPUT type="text" name="NJOP"><BR>
              Masukkan tarif NPOPTKP  :
              <INPUT type="text" name="NPOPTKP"><BR>
              Masukkan tarif  :
              <SELECT name="dropdown" onchange"put()">
              <OPTION>5%
              <OPTION>6%
              <OPTION>7%
              <OPTION>8%
              </SELECT><BR>		
              BPHTB  :
              <input type="submit" name="count" value="submit" >
              <input type="reset" name="kosongkan" value="kosongkan" ><BR>
        </BODY>
        </HTML>

2)bphtb.pug (setelah dirubah agar bisa diproses) 
               
     <HTML>
     <HEAD>
     </HEAD>
     <BODY>
     <SCRIPT LANGUAGE="JavaScript">
     function hitung(){
     var NJOP=promt("masukkan NJOP :",0);
     var NPOPTKP=promt("masukkan NJOP :",0);
     BPHTB=eval(NJOP)+eval(NPOPTKP);
     docuument.write("Hasil dari "+NJOP+"-"+NPOPTKP+"+="BPHTB");
     }
     </SCRIPT>
     <BODY>
       <form (action = "http://localhost:3000/hutang1", method = "GET")>
        <CENTER> <H3> APLIKASI PERHITUNGAN BPHTP </H3> <CENTER>
        Masukkan tarif NJOP  :
        <INPUT type="text" name="NJOP"><BR>
        Masukkan tarif NPOPTKP  :
        <INPUT type="text" name="NPOPTKP"><BR>
        Masukkan tarif  :
        <SELECT name="dropdown" onchange"put()">
        <OPTION>5%
        <OPTION>6%
        <OPTION>7%
        <OPTION>8%
        </SELECT><BR>		
        BPHTB  :
        <input type="submit" name="count" value="submit" >
        <input type="reset" name="kosongkan" value="kosongkan" ><BR>
        </BODY>
     </HTML>
     
 (masih error)
 
 3) server.js 
 
        const express = require('express')
        const app = express()

        app.set('views', './views')
        app.set('view engine', 'pug')

        app.get('/', (req, res) => res.send('Hello World!'))

        app.use(express.static('public'))

        app.get('/ayu', function(req, res){
        res.render('suplier')
        }) 
        app.get('/ayu1', function(req, res){
        res.render('bphtb')
        })
        app.post('/ayu1', function(req, res){
        res.render('bphtb')
        }) 
        app.get('/person', function(req, res){
        res.render('person')
        })   
        app.post('/ayuu', function(req, res){
        res.render('form2')
        })  

        app.listen(3000, () => console.log('Example app listening on port 3000!'))


masalahnya masih seperti kemaren pak, saat diklik buttonnya sudah mau memproses. tapi saat saya tambahkan untuk menghitung, malah jadi error, 

PERKEMBANGAN
FILE PROSES

     <html>
     <body>
       <div class="container"></div>
       <center>
       <h2>PERHITUNGAN BPHTB</h2>
       </center>
       <html>
       <head>
       <title>BPHTB</title>
       <script type="text/javascript">
       function hitung()
       {
        NPOP =document.getElementById("NPOP").value;
		NPOPTKP =document.getElementById("NPOPTKP").value;
		Jumlah = NPOP-NPOPTKP*0.05;
		document.getElementById("operation").value;
	   }
        </head>
        </body>
     </html>
     
SERVER.js

    const express = require('express')
    const app = express()

    app.set('views', './views')
    app.set('view engine', 'pug')

    app.get('/', (req, res) => res.send('Hello World!'))

    app.use(express.static('public'))

    app.get('/ayu', function(req, res){
    res.render('hasil')
    }) 
    app.get('/ayu1', function(req, res){
    res.render('bphtb')
    })
    app.post('/ayu1', function(req, res){
    res.render('bphtb')
    }) 
    app.get('/wp', function(req, res){
     res.render('person')
     })   
    app.post('/ayuu', function(req, res){
    res.render('form2')
     })  

     app.listen(3000, () => console.log('Example app listening on port 3000!'))
