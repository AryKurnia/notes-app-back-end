# notes-app-back-end

notes-app-back-end adalah RESTful API untuk aplikasi catatan sederhana. Di mana aplikasi tersebut berfungsi untuk menyimpan (create), melihat (read), mengubah (update),
dan menghapus (delete) catatan, yang dimana fungsi ini disebut CRUD.
Perlu anda ketahui, menyimpan disini hanya bersifat apabila server berjalan, karna nilai dan objecnya disimpan dalam variabel saja, tidak menggunakan database.
ini hanya sekedar RESTful API sederhana saja tampa adanya tampilan Front-End.

## Fitur
1. Web Server dapat menyimpan catatan
2. Web Server dapat menampilkan catatan
3. Web Server dapat mengubah catatan
4. Web Server dapat menghapus catatan


## Instalasi

1. **Clone Repository**

```bash
git clone https://github.com/AryKurnia/notes-app-back-end.git
cd notes-app-back-end
npm install
```

2. **Jalankan website**

development:
```bash
npm run start-dev
```
production:
```bash
npm run start-prod
```
Jika anda menjalankan di production, sebaiknya install Process Manager (pm2) pada server anda (VM Instanc).
pm2 merupakan salah satu Node.js Process Manager yang populer digunakan. Kita akan menggunakan pm2 ini untuk memantau web server yang ada di Compute Engine instance.
Cara Instal pm2:
```bash
npm install -g pm2
```
Setelah proses instalasi selesai, masuk ke direktori notes-app-back-end dengan perintah cd notes-app-back-end. Jalankan node process menggunakan pm2 dengan perintah:
```bash
pm2 start npm --name "notes-api" -- run "start-prod"
```
pm2 berhasil menjalankan web server dan ia akan memantau prosesnya. Bila proses itu terhenti entah karena terjadi crash atau apa pun, ia akan secara otomatis menjalankan ulang proses. Dengan begitu, Anda tidak perlu khawatir server akan mengalami downtime lagi.

Di pm2, kita dapat me-restart proses secara manual dengan cara:
```bash
pm2 restart notes-api
```

Kita bisa juga menghentikan prosesnya dengan cara:
```bash
pm2 stop notes-api
```

Untuk menjalankan kembali proses, gunakan perintah:
```bash
pm2 start notes-api
```

> Merupakan project latihan dari Dicoding di kelas Belajar Membuat Aplikasi Back-End untuk Pemula.
