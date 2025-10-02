Yeni dosya eklerken adlandırmayı sabitle: Markdown dosyalarını ilk oluştururken küçük harf kullan (kontrol-h1-...). Adını sonradan sadece harf dönüşümü yapacaksan mutlaka git mv -f EskiAd.md yeniad.md komutuyla değiştir; Explorer üzerinden değiştirmek Git’e yansımaz.

Build dizinini temizle: Yapılandırmayı veya dosya adlarını değiştirdiğinde, önce _site klasörünü sil (Remove-Item _site -Recurse -Force), ardından npx eleventy ile sıfırdan üret. Böylece Vercel’e eski yollar gönderilmez.

Vercel build’ini takip et: Vercel’de manuel çıktı yüklemiyorsan build command = npx eleventy ve output directory = _site olduğundan emin ol. Lokalde çalıştırdığın aynı komutu orada da görmen gerekiyor.