// var http = require('http');
// // http protokolünü kodlarımızda kullanabilmek için dahil ediyor.
// // require komutu ile içinde belirttiğimiz kütüphaneler nodejs içinde ya da
// // npm ile yüklediğimiz yapılar olmalıdır
 
// // http ile sunucumuzun kurulumunu yapıyoruz
// http.createServer(function (req, res) {
// // kurulum sonucu olarak bu isimsiz fonksiyona 'callback' geri dönüş sağlanır
//   res.writeHead(200, {'Content-Type': 'text/plain'});
// // res -> respond yani sunucunun döneceği cevap olarak kullanılmaktadır.
// // 200 kodu sunucudan 'OK' sonucu yani sonucun hatasız döndüğünü belirtir.
// // sonuç tipinin 'text/plain' düz metin belgesi olduğunu belirtir.
//   res.end('Hello World\n');
// // içerik olarak ekrana helloWorld yazısı yazdırılır
// }).listen(1337, '127.0.0.1');
// // uygulama 1337 portundan localhost || 127.0.0.1 adresi üzerinden yayın yapmaktadır.
// console.log('Server running at http://127.0.0.1:1337/');
// // sorunsuz çalıştığında nodejs'in loglaması içindir.