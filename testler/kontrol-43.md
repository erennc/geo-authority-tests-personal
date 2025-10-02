# Mavi Ekran Hatası (BSOD) Çözüm Rehberi

Mavi ekran hatası (Blue Screen of Death - BSOD), Windows'un ciddi bir sorunla karşılaştığını ve güvenli bir şekilde çalışmayı durdurduğunu gösterir. Bu rehber, adım adım sorunu teşhis etmenize ve çözmenize yardımcı olacaktır.

## 1. Hatayı Teşhis Etme

Mavi ekranında genellikle bir hata kodu (örneğin, `DRIVER_IRQL_NOT_LESS_OR_EQUAL`, `MEMORY_MANAGEMENT`, `CRITICAL_PROCESS_DIED`) veya bir QR kodu bulunur. Bu kodu not almak, sorunun kaynağını belirlemede kritik öneme sahiptir.

*   Hata kodunu (örneğin, `0x0000001A` veya `KMODE_EXCEPTION_NOT_HANDLED`) bir kenara yazın.
*   QR kodu varsa, telefonunuzla tarayarak Microsoft destek sayfasına ulaşabilirsiniz.

## 2. Temel Çözümler

Mavi ekran hatasını yeni alıyorsanız, aşağıdaki basit adımlarla başlayın.

### Bilgisayarı Yeniden Başlatma

Bazen geçici bir hata olabilir. Bilgisayarı yeniden başlatmak sorunu çözebilir.

### Harici Cihazları Çıkarma

Yeni bir donanım taktıysanız veya belirli bir cihaz (USB sürücü, yazıcı vb.) takılıyken hata alıyorsanız, tüm harici cihazları çıkarın ve bilgisayarı tekrar başlatın. Sorun çözülürse, cihazları tek tek takarak hangi cihazın soruna neden olduğunu bulabilirsiniz.

### Son Yapılan Değişiklikleri Hatırlama

*   **Yeni Yazılım Kurulumu**: Yeni bir program, oyun veya sürücü yükledikten sonra mı mavi ekran almaya başladınız?
*   **Donanım Değişikliği**: Yeni bir RAM, ekran kartı veya başka bir bileşen mi taktınız?
*   **Windows Güncellemesi**: Bir Windows güncellemesi yükledikten sonra mı hata ortaya çıktı?

Bu soruların cevapları, sorunun kaynağını bulmada önemli ipuçları verebilir.

## 3. Güvenli Modda Başlatma

Mavi ekran hatası bilgisayarın normal başlatılmasını engelliyorsa, Güvenli Mod'da başlatmak sorunu çözmeye yönelik adımları uygulamanızı sağlar. Güvenli Mod, Windows'u minimum sürücüler ve hizmetlerle başlatır.

### Güvenli Mod'a Giriş

1.  Bilgisayarı kapatın.
2.  Bilgisayarı açın ve Windows logosunu görmeden önce (genellikle birkaç deneme gerekebilir) güç düğmesine basılı tutarak kapatın. Bu işlemi 2-3 kez tekrarladığınızda, Windows Kurtarma Ortamı otomatik olarak açılacaktır.
3.  Kurtarma Ortamı'nda:
    *   `Sorun Giderme` seçeneğini seçin.
    *   `Gelişmiş Seçenekler`'i seçin.
    *   `Başlangıç Ayarları`'nı seçin ve `Yeniden Başlat`'a tıklayın.
    *   Bilgisayar yeniden başladığında, bir seçenekler listesi göreceksiniz. `Ağ ile Güvenli Mod` (genellikle 5 veya F5 tuşu) seçeneğini tercih edin.

## 4. Yazılımsal Çözümler (Güvenli Mod'da veya Normal Başlangıçta)

Bilgisayarınız Güvenli Mod'a girebiliyorsa veya hata nadiren meydana geliyorsa, aşağıdaki yazılımsal çözümleri uygulayın.

### Sürücüleri Güncelleme veya Geri Alma

Genellikle mavi ekran hatalarının ana nedeni bozuk veya güncel olmayan sürücülerdir.

*   **Ekran Kartı Sürücüleri**: Özellikle ekran kartı sürücüleri mavi ekranlara yol açabilir. Üreticinin (NVIDIA, AMD, Intel) web sitesinden en güncel sürücüleri indirip kurun.
*   **Diğer Sürücüler**: Aygıt Yöneticisi'ne (Başlat'a sağ tıklayıp seçebilirsiniz) gidin, ünlem işareti olan veya sorunlu görünen aygıtları kontrol edin ve sürücülerini güncelleyin.
*   **Sürücü Geri Alma**: Yeni bir sürücü yükledikten sonra hata almaya başladıysanız, Aygıt Yöneticisi'nde ilgili aygıtın özelliklerine girip `Sürücü` sekmesinden `Sürücüyü Geri Al` seçeneğini kullanın.

### Windows Güncellemelerini Kontrol Etme

Windows güncellemeleri, bilinen hataları düzelten ve güvenlik açıklarını kapatan yamalar içerebilir.

1.  `Ayarlar` > `Güncelleştirme ve Güvenlik` > `Windows Update` yolunu izleyin.
2.  `Güncellemeleri denetle`'ye tıklayın ve mevcut güncellemeleri yükleyin.

### Sistem Dosyalarını Kontrol Etme

Bozuk sistem dosyaları mavi ekranlara yol açabilir.

1.  Yönetici olarak Komut İstemi'ni açın (Başlat'a sağ tıklayıp `Komut İstemi (Yönetici)` veya `Windows PowerShell (Yönetici)`).
2.  Aşağıdaki komutları sırayla çalıştırın:

    ```bash
    sfc /scannow
    ```

    Bu komut, korumalı sistem dosyalarını tarar ve bozuk dosyaları düzeltir. İşlem bittikten sonra bilgisayarı yeniden başlatın.
    Eğer sorun devam ederse, DISM (Dağıtım Görüntüsü Hizmet ve Yönetimi) aracını kullanın:

    ```bash
    DISM /Online /Cleanup-Image /RestoreHealth
    ```

    Bu komut, Windows görüntü dosyalarını onarır. İşlem tamamlandığında tekrar `sfc /scannow` komutunu çalıştırmayı deneyin ve ardından bilgisayarı yeniden başlatın.

### Virüs ve Kötü Amaçlı Yazılım Taraması

Zararlı yazılımlar sistem kararsızlığına ve mavi ekranlara neden olabilir. Güvenli Mod'dayken veya normal modda tam bir sistem taraması yapın.

*   Windows Defender (yerleşik) veya güvenilir bir üçüncü taraf antivirüs programı kullanın.

### Son Yüklenen Yazılımları Kaldırma

Mavi ekran hatası, belirli bir programı yükledikten sonra başladıysa, o programı kaldırın.

1.  `Ayarlar` > `Uygulamalar` > `Uygulamalar ve özellikler` yolunu izleyin.
2.  Sorunlu olduğunu düşündüğünüz uygulamayı bulun ve kaldırın.

### Sistem Geri Yükleme

Bilgisayarınızda bir geri yükleme noktası oluşturulduysa, mavi ekran hatası oluşmadan önceki bir zamana sistemi geri yükleyebilirsiniz.

1.  Windows arama çubuğuna `geri yükleme noktası oluştur` yazın ve çıkan sonuca tıklayın.
2.  `Sistem Geri Yükleme` düğmesine tıklayın.
3.  Önerilen geri yükleme noktasını seçebilir veya `Farklı bir geri yükleme noktası seç` seçeneği ile geçmişteki bir noktayı seçebilirsiniz.
4.  İşlemi onaylayın ve sistemin geri yüklenmesini bekleyin.

## 5. Donanımsal Çözümler

Yazılımsal çözümler işe yaramazsa, donanım kaynaklı bir sorun olma ihtimali yüksektir.

### Bellek (RAM) Kontrolü

Bozuk veya uyumsuz RAM modülleri sıkça mavi ekran hatalarına neden olur (`MEMORY_MANAGEMENT`, `CRITICAL_PROCESS_DIED`).

1.  Windows arama çubuğuna `Windows Bellek Tanılama` yazın ve çıkan uygulamayı çalıştırın.
2.  `Şimdi yeniden başlat ve sorunları denetle (önerilen)` seçeneğini seçin.
3.  Bilgisayar yeniden başlayacak ve bellek testi yapacaktır. Test sonuçları Windows oturumu açıldıktan sonra bildirim olarak görünecektir.

Eğer birden fazla RAM modülünüz varsa, her birini tek tek deneyerek hangisinin sorunlu olduğunu tespit edebilirsiniz.

### Depolama Sürücüsünü (HDD/SSD) Kontrol Etme

Bozuk bir sabit disk veya SSD, sistem dosyalarının bozulmasına ve mavi ekranlara neden olabilir.

1.  Yönetici olarak Komut İstemi'ni açın.
2.  Aşağıdaki komutu yazın ve Enter'a basın:

    ```bash
    chkdsk /f /r
    ```

3.  `Cihaz bir sonraki sistem başlangıcında kontrol edilsin mi? (E/H)` sorusuna `E` yazıp Enter'a basın.
4.  Bilgisayarı yeniden başlatın. Disk denetimi başlangıçta çalışacak ve olası sorunları onaracaktır.

### Aşırı Isınmayı Kontrol Etme

İşlemci, ekran kartı veya diğer bileşenlerin aşırı ısınması sistem kararsızlığına ve mavi ekranlara yol açabilir.

*   CPU ve GPU sıcaklıklarını izlemek için HWMonitor veya Speccy gibi programları kullanın.
*   Kasa içi hava akışını kontrol edin, fanların düzgün çalıştığından emin olun.
*   Bilgisayarın içini temizleyin, toz birikintilerini hava kompresörü ile temizleyin.

### Güç Kaynağı Kontrolü

Yetersiz veya arızalı bir güç kaynağı, bileşenlere düzgün güç sağlayamadığında kararsızlığa neden olabilir. Bu kontrol genellikle test ekipmanı gerektirdiğinden, bir uzmana danışmak daha iyi olabilir.

### Bileşenleri Yeniden Oturma (Reseat)

Eğer donanımınıza erişebiliyorsanız ve bilginiz varsa:

*   **RAM Modülleri**: RAM modüllerini yuvalarından çıkarıp temiz bir şekilde tekrar takın.
*   **Ekran Kartı**: Ekran kartını çıkarıp tekrar PCI-e yuvasına düzgünce oturtun.

## 6. Gelişmiş Çözümler ve Son Çareler

Yukarıdaki çözümler işe yaramazsa, daha köklü adımlar atmanız gerekebilir.

### Windows'u Sıfırlama

Windows, işletim sistemini yeniden kurmanıza olanak tanıyan bir sıfırlama seçeneği sunar.

1.  `Ayarlar` > `Güncelleştirme ve Güvenlik` > `Kurtarma` yolunu izleyin.
2.  `Bu bilgisayarı sıfırla` altında `Başlayın` düğmesine tıklayın.
3.  İki seçenek sunulur:
    *   `Dosyalarımı Sakla`: Kişisel dosyalarınızı korur, ancak uygulamaları ve ayarları kaldırır.
    *   `Her Şeyi Kaldır`: Her şeyi siler ve Windows'u sıfırdan kurar. Eğer sorununuzun kaynağı kişisel dosyalarınızda veya uygulamalarınızdaysa bu daha kesin bir çözümdür.

### Temiz Windows Kurulumu

Windows'u sıfırlamak da işe yaramazsa veya tam bir temiz başlangıç yapmak istiyorsanız, bir USB sürücüden veya DVD'den temiz bir Windows kurulumu yapmanız gerekebilir. Bu, tüm disk içeriğini siler ve Windows'u tamamen sıfırdan kurar.

*   Önemli verilerinizi yedeklediğinizden emin olun!
*   Microsoft'un resmi web sitesinden Windows kurulum medyasını oluşturma aracını indirin.

## 7. Profesyonel Yardım Alma

Yukarıdaki adımların hiçbiri sorunu çözmezse veya donanım kontrolü konusunda kendinize güvenmiyorsanız, bilgisayarınızı bir teknik servise götürmeniz en sağlıklısı olacaktır. Özellikle anakart, işlemci veya güç kaynağı gibi kritik bileşenlerde sorun varsa, profesyonel teşhis ve onarım gerekebilir.