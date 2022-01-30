
<h1>Kullanımı</h2>

```
Dosya 2 fonksiyondan oluşmaktadır.

1. Fonksiyon belirlediğiniz bir linki kaydetmenizi sağlar.
Örnek: localhost:3000/api/url/save?u=https://www.midordas.xyz
Çıktı: {"code":"JD7ns","url":"https://www.midordas.xyz"}
--
2. Fonksiyon daha önce oluşturulmuş bir link kısaltma kodunu kullanmanızı sağlar.
Örnek: localhost:3000/api/url/get?u=JD7ns
Çıktı: {"code":"JD7ns","url":"https://www.midordas.xyz"}
--
Canlı örneği için www.midordas.xyz/api/url/

```

<p>
<h2>Version</h2>
<img src="https://img.shields.io/badge/1.0-URL_Shortener_API-98cc04.svg?&style=appveyor">

