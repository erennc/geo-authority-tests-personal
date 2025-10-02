# SEO Terimleri Sözlüğü

## Canonical URL (Kanonik URL)

Canonical URL, bir web sitesinde aynı veya benzer içeriğe sahip birden fazla URL bulunduğunda, arama motorlarına bu sayfalardan hangisinin "ana" veya "tercih edilen" sürüm olduğunu bildiren URL'dir.

Bu, özellikle e-ticaret sitelerinde filtreleme, sıralama veya farklı parametreler nedeniyle aynı ürün sayfasının birden çok URL'si oluştuğunda ya da bloglarda aynı içeriğin farklı kategorilerde listelenmesi gibi durumlarda ortaya çıkan yinelenen içerik sorununu önlemek için kullanılır. Canonical URL belirterek, arama motorlarının yalnızca tercih edilen sayfayı dizine eklemesi ve diğer kopya sayfalardan gelen link değerini bu ana sayfada birleştirmesi sağlanır.

Bir Canonical URL, genellikle HTML `<head>` bölümünde `rel="canonical"` etiketini kullanarak belirtilir:

```html
<link rel="canonical" href="https://www.example.com/tercih-edilen-sayfa-urlsi/">
```

## Robots.txt

Robots.txt, bir web sitesinin kök dizininde bulunan ve arama motoru tarayıcılarına (botlarına) hangi dizinleri veya dosyaları taramalarına izin verildiğini veya engellendiğini söyleyen bir metin dosyasıdır.

Bu dosya, sitenin belirli bölümlerinin arama motorları tarafından dizine eklenmesini engellemek (örneğin, yönetim paneli sayfaları, kişisel kullanıcı bilgileri içeren sayfalar, test ortamları) veya botların siteye aşırı yüklenmesini önlemek için kullanılır. Robots.txt, bir arama motoru botunun sitenizi ziyaret ettiğinde ilk baktığı dosyalardan biridir. Ancak, bu bir güvenlik önlemi değildir; sadece "iyi niyetli" botları yönlendirir ve dosyayı doğrudan bilen biri yine de engellenen içeriğe erişebilir.

Örnek bir Robots.txt dosyası şöyle görünebilir:

```
User-agent: *
Disallow: /admin/
Disallow: /private/
Disallow: /cgi-bin/
Allow: /public/
```

Yukarıdaki örnekte `User-agent: *` tüm botları ifade ederken, `Disallow:` ile belirtilen dizinler veya dosyalar taranmayacak, `Allow:` ile belirtilenler ise taranabilecektir.