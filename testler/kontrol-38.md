# Javascript ES6 (ECMAScript 2015) ile Gelen Yenilikler

ECMAScript 2015, yaygın olarak ES6 olarak bilinen, JavaScript'e önemli ve büyük yenilikler getiren bir sürümdür. Bu yenilikler, dilin daha modern, okunabilir ve yönetilebilir olmasını sağlamıştır.

## 1. `let` ve `const` Anahtar Kelimeleri (Blok Kapsamı)

ES6 öncesinde sadece `var` anahtar kelimesi vardı ve fonksiyon kapsamına sahipti. `let` ve `const` ile blok kapsamı (block scope) tanıtıldı.

-   **`let`**: Değişken tanımlamak için kullanılır. `var`'dan farklı olarak, tanımlandığı `{}` bloğu içerisinde geçerlidir. Yeniden atanabilir ancak aynı kapsamda yeniden tanımlanamaz.

    ```javascript
    function ornekLet() {
      let x = 10;
      if (true) {
        let x = 20; // Farklı bir x, blok kapsamlı
        console.log(x); // 20
      }
      console.log(x); // 10
    }
    ornekLet();
    ```

-   **`const`**: Sabit değerler tanımlamak için kullanılır. `let` gibi blok kapsamlıdır. Tanımlandığı anda değeri atanmalı ve sonradan değiştirilemez. Nesneler ve diziler için referansı sabittir, içindeki elemanlar değiştirilebilir.

    ```javascript
    const PI = 3.14;
    // PI = 3.14159; // Hata: Assignment to constant variable.

    const KISILER = { ad: "Ali" };
    KISILER.ad = "Veli"; // Geçerli, objenin içeriği değişebilir
    console.log(KISILER.ad); // Veli
    ```

## 2. Arrow Functions (Ok Fonksiyonları)

Daha kısa ve okunabilir fonksiyon sözdizimi sunar. En önemli farklarından biri `this` bağlamını (context) miras almasıdır.

```javascript
// Geleneksel fonksiyon
function topla(a, b) {
  return a + b;
}

// Arrow function
const toplaOk = (a, b) => a + b;
console.log(toplaOk(5, 3)); // 8

// Tek parametre ve tek satırlık gövde
const kareAl = sayi => sayi * sayi;
console.log(kareAl(4)); // 16

// this bağlamı örneği
class Kisi {
  constructor(ad) {
    this.ad = ad;
  }

  selamVerGeleneksel() {
    setTimeout(function() {
      // console.log("Merhaba " + this.ad); // this burada undefined (veya window global objesi)
    }, 100);
  }

  selamVerOk() {
    setTimeout(() => {
      console.log("Merhaba " + this.ad); // this, Kisi sınıfına bağlı
    }, 100);
  }
}

const ali = new Kisi("Ali");
ali.selamVerOk(); // Çıktı: Merhaba Ali (biraz gecikmeli)
```

## 3. Template Literals (Şablon Dizeleri)

Dizeleri daha esnek bir şekilde tanımlamak için backtick (`` ` ``) karakteri kullanılır. Dize içinde değişkenleri `$ { }` sözdizimi ile kolayca kullanmaya ve çok satırlı dizeler oluşturmaya olanak tanır.

```javascript
const ad = "Ayşe";
const soyad = "Yılmaz";
const yas = 30;

// Geleneksel yöntem
const mesajGeleneksel = "Merhaba, benim adım " + ad + " " + soyad + " ve " + yas + " yaşındayım.";
console.log(mesajGeleneksel);

// Template Literals ile
const mesajEs6 = `Merhaba, benim adım ${ad} ${soyad} ve ${yas} yaşındayım.`;
console.log(mesajEs6);

// Çok satırlı dize
const cokSatirli = `Bu bir
çok satırlı
dizedir.`;
console.log(cokSatirli);
```

## 4. Destructuring Assignment (Yıkıcı Atama)

Dizilerden veya nesnelerden değerleri daha kısa bir sözdizimiyle çıkarmaya olanak tanır.

-   **Nesne Yıkıcı Atama**

    ```javascript
    const kullanici = {
      isim: "Can",
      yas: 25,
      sehir: "Ankara"
    };

    // Geleneksel yöntem
    // const isim = kullanici.isim;
    // const yas = kullanici.yas;

    // Yıkıcı Atama ile
    const { isim, yas } = kullanici;
    console.log(isim); // Can
    console.log(yas); // 25

    // Farklı isimle atama
    const { sehir: yasadigiYer } = kullanici;
    console.log(yasadigiYer); // Ankara
    ```

-   **Dizi Yıkıcı Atama**

    ```javascript
    const renkler = ["kırmızı", "yeşil", "mavi"];

    // Geleneksel yöntem
    // const birinciRenk = renkler[0];
    // const ikinciRenk = renkler[1];

    // Yıkıcı Atama ile
    const [birinciRenk, ikinciRenk, ucuncuRenk] = renkler;
    console.log(birinciRenk); // kırmızı
    console.log(ikinciRenk); // yeşil

    // Kalan elemanları toplama (Rest elemanı ile)
    const [ilk, ...kalanlar] = renkler;
    console.log(ilk); // kırmızı
    console.log(kalanlar); // ["yeşil", "mavi"]
    ```

## 5. Default Parameters (Varsayılan Parametreler)

Fonksiyon parametrelerine, çağrıldığında bir değer belirtilmediğinde kullanılacak varsayılan değerler atamaya olanak tanır.

```javascript
// ES6 öncesi
function selamlaEski(isim) {
  isim = isim === undefined ? "Misafir" : isim;
  console.log(`Merhaba ${isim}!`);
}
selamlaEski(); // Merhaba Misafir!
selamlaEski("Deniz"); // Merhaba Deniz!

// ES6 ile varsayılan parametreler
function selamla(isim = "Misafir") {
  console.log(`Merhaba ${isim}!`);
}
selamla(); // Merhaba Misafir!
selamla("Deniz"); // Merhaba Deniz!
```

## 6. Rest Parametreleri ve Spread Operatörü (`...`)

-   **Rest Parametreleri (`...`)**: Bir fonksiyona geçirilen kalan argümanları bir dizi olarak toplar. Yıkıcı atamada da kullanılabilir (yukarıdaki dizi örneği).

    ```javascript
    function toplaTumSayilari(...sayilar) {
      return sayilar.reduce((toplam, sayi) => toplam + sayi, 0);
    }
    console.log(toplaTumSayilari(1, 2, 3)); // 6
    console.log(toplaTumSayilari(10, 20, 30, 40)); // 100
    ```

-   **Spread Operatörü (`...`)**: Bir dizinin veya yinelenebilir (iterable) bir nesnenin elemanlarını ayrı ayrı "yaymak" için kullanılır.

    ```javascript
    const dizi1 = [1, 2, 3];
    const dizi2 = [4, 5, 6];

    // Dizileri birleştirme
    const birlesikDizi = [...dizi1, ...dizi2, 7, 8];
    console.log(birlesikDizi); // [1, 2, 3, 4, 5, 6, 7, 8]

    // Nesneleri birleştirme
    const obj1 = { ad: "Zeynep", yas: 28 };
    const obj2 = { sehir: "İzmir", meslek: "Mühendis" };
    const birlesikObje = { ...obj1, ...obj2, eposta: "zeynep@example.com" };
    console.log(birlesikObje);
    // { ad: 'Zeynep', yas: 28, sehir: 'İzmir', meslek: 'Mühendis', eposta: 'zeynep@example.com' }

    // Fonksiyona dizi elemanlarını ayrı argümanlar olarak geçirme
    const sayilar = [10, 20, 30];
    console.log(Math.max(...sayilar)); // 30
    ```

## 7. Classes (Sınıflar)

JavaScript'te kalıtım ve nesne tabanlı programlamayı daha okunabilir ve anlaşılır hale getirmek için sözdizimsel şeker (syntactic sugar) olarak sınıflar tanıtıldı. Aslında prototype tabanlı kalıtımın üzerine inşa edilmiştir.

```javascript
class Kisi {
  constructor(ad, soyad) {
    this.ad = ad;
    this.soyad = soyad;
  }

  tamAdGetir() {
    return `${this.ad} ${this.soyad}`;
  }
}

class Ogrenci extends Kisi {
  constructor(ad, soyad, ogrenciNo) {
    super(ad, soyad); // Üst sınıfın constructor'ını çağırır
    this.ogrenciNo = ogrenciNo;
  }

  bilgiGetir() {
    return `${this.tamAdGetir()} (${this.ogrenciNo})`;
  }
}

const ogrenci1 = new Ogrenci("Mert", "Demir", "12345");
console.log(ogrenci1.tamAdGetir()); // Mert Demir
console.log(ogrenci1.bilgiGetir()); // Mert Demir (12345)
```

## 8. Modules (Modüller)

JavaScript kodunu ayrı dosyalarda düzenlemeyi ve bu dosyaları kolayca birbirine bağlamayı sağlayan standart bir modül sistemi getirildi (`import` ve `export`). Bu, kodu daha düzenli, bakımı kolay ve yeniden kullanılabilir hale getirir.

-   **`export` (bir dosyada `matematik.js` adında)**

    ```javascript
    // matematik.js
    export const PI = 3.14159;

    export function topla(a, b) {
      return a + b;
    }

    // Varsayılan dışa aktarma
    export default function carp(a, b) {
      return a * b;
    }
    ```

-   **`import` (başka bir dosyada `app.js` adında)**

    ```javascript
    // app.js
    import { PI, topla } from './matematik.js';
    import carpVarsayilan from './matematik.js'; // Varsayılan dışa aktarmayı istediğiniz isimle alabilirsiniz

    console.log(PI); // 3.14159
    console.log(topla(5, 2)); // 7
    console.log(carpVarsayilan(5, 2)); // 10
    ```

## 9. Promises (Sözler)

Asenkron işlemleri daha kolay yönetmek için tanıtılan bir yapıdır. Özellikle callback hell (geri çağırma cehennemi) olarak bilinen karmaşık iç içe geçmiş asenkron fonksiyon yapılarının önüne geçer. Bir Promise, asenkron bir işlemin nihai başarı (resolved) veya başarısızlık (rejected) durumunu temsil eder.

```javascript
const veriyiGetir = new Promise((resolve, reject) => {
  // Asenkron bir işlem simüle edelim
  setTimeout(() => {
    const basarili = true;
    if (basarili) {
      resolve("Veri başarıyla çekildi!");
    } else {
      reject("Veri çekme hatası oluştu.");
    }
  }, 2000); // 2 saniye sonra
});

veriyiGetir
  .then(mesaj => {
    console.log(mesaj); // Veri başarıyla çekildi! (2 sn sonra)
  })
  .catch(hata => {
    console.error(hata);
  });
```

## 10. Iterators ve Generators

-   **Iterators (Yineleyiciler)**: Bir nesnenin elemanları üzerinde adım adım gezinti yapmayı sağlayan bir arayüzdür. `for...of` döngüsü gibi yapılar iteratörleri kullanır.
-   **Generators (Üreteçler)**: `function*` sözdizimi ile tanımlanan özel fonksiyonlardır. `yield` anahtar kelimesini kullanarak fonksiyonun yürütülmesini duraklatıp daha sonra devam ettirebilirler. Bu sayede sonsuz diziler veya büyük veri kümeleri üzerinde bellek dostu şekilde çalışmak mümkün olur.

    ```javascript
    function* sayac(limit) {
      for (let i = 0; i <= limit; i++) {
        yield i;
      }
    }

    const uretici = sayac(3);
    console.log(uretici.next().value); // 0
    console.log(uretici.next().value); // 1
    console.log(uretici.next().value); // 2
    console.log(uretici.next().value); // 3
    console.log(uretici.next().done);  // true
    ```

## 11. Yeni Koleksiyonlar (Set, Map, WeakSet, WeakMap)

-   **`Set`**: Benzersiz değerlerin bir listesini tutar. Tekrar eden değerleri otomatik olarak eler.
-   **`Map`**: Anahtar-değer çiftlerini saklar, ancak anahtar olarak herhangi bir veri tipini (nesneler dahil) kullanmaya olanak tanır.
-   **`WeakSet` ve `WeakMap`**: `Set` ve `Map`'in "zayıf" versiyonlarıdır. Anahtarlar veya değerler bir başka referansa sahip olmadığında otomatik olarak çöp toplayıcı tarafından temizlenebilir. Bu, bellek yönetiminde faydalıdır.

```javascript
// Set örneği
const setim = new Set([1, 2, 2, 3]);
console.log(setim); // Set(3) {1, 2, 3}

// Map örneği
const mapim = new Map();
mapim.set('ad', 'Müge');
mapim.set(1, 'sayı');
console.log(mapim.get('ad')); // Müge
```