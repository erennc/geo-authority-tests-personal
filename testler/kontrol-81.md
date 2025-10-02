# Makine Öğrenmesi Algoritmaları

Makine öğrenmesi algoritmaları, verilerden öğrenmek, örüntüleri tanımlamak, tahminler yapmak veya kararlar almak için bilgisayar sistemlerine olanak tanıyan matematiksel modeller ve istatistiksel tekniklerdir. Bu algoritmalar genellikle dört ana kategoriye ayrılır: Gözetimli Öğrenme, Gözetimsiz Öğrenme, Pekiştirmeli Öğrenme ve Derin Öğrenme.

## Gözetimli Öğrenme (Supervised Learning)

Gözetimli öğrenme algoritmaları, etiketli veri kümeleri üzerinde eğitilir. Yani, algoritmanın tahmin etmesi gereken çıktı değişkeni (hedef veya bağımlı değişken) her giriş verisi için mevcuttur. Temel olarak, bir fonksiyonun girişleri çıktılara nasıl eşlediğini öğrenirler.

### Regresyon Algoritmaları

Tahmin edilen çıktının sürekli bir değer olduğu durumlarda kullanılır.

*   **Lineer Regresyon (Linear Regression)**
    *   İki değişken arasındaki doğrusal ilişkiyi modelleyerek bir sürekli çıktıyı tahmin eder.

*   **Lojistik Regresyon (Logistic Regression)**
    *   Çıktının kategorik olduğu ikili sınıflandırma problemleri için kullanılır. Lineer regresyona benzer ancak çıktı olasılıkları için bir sigmoid fonksiyonu kullanır.

### Sınıflandırma Algoritmaları

Tahmin edilen çıktının kategorik bir etiket olduğu durumlarda kullanılır.

*   **Karar Ağaçları (Decision Trees)**
    *   Bir dizi kurala dayalı olarak veriyi sınıflandırmak veya sürekli bir değeri tahmin etmek için ağaç benzeri bir yapı oluşturur.

*   **Rassal Orman (Random Forest)**
    *   Birden fazla karar ağacını bir araya getiren bir topluluk öğrenme (ensemble learning) yöntemidir. Her bir ağaç farklı bir veri alt kümesinde eğitilir ve sonuçlar birleştirilir.

*   **Destek Vektör Makineleri (Support Vector Machines - SVM)**
    *   Veri noktaları arasında en uygun karar sınırını (hiper düzlem) bularak sınıflandırma veya regresyon yapar.

*   **K-En Yakın Komşu (K-Nearest Neighbors - KNN)**
    *   Yeni bir veri noktasını, kendisine en yakın 'k' sayıda komşusunun çoğunluk sınıfına veya ortalama değerine göre sınıflandırır veya tahmin eder.

*   **Naive Bayes**
    *   Bayes teoremine dayanan ve özellikler arasında bağımsızlık varsayımı yapan bir sınıflandırma algoritmasıdır. Özellikle metin sınıflandırma gibi alanlarda etkilidir.

## Gözetimsiz Öğrenme (Unsupervised Learning)

Gözetimsiz öğrenme algoritmaları, etiketsiz veri kümeleri üzerinde çalışır. Algoritmanın görevi, verinin içsel yapısını, örüntülerini veya gizli gruplarını keşfetmektir.

### Kümeleme Algoritmaları

Veri noktalarını benzerliklerine göre gruplara ayırır.

*   **K-Ortalamalar (K-Means Clustering)**
    *   Veri noktalarını önceden belirlenmiş 'k' sayıda kümeye ayırır. Her küme bir merkez (centroid) ile temsil edilir.

*   **Hiyerarşik Kümeleme (Hierarchical Clustering)**
    *   Verileri hiyerarşik bir yapıda kümeleyerek bir dendrogram oluşturur. İki ana yaklaşımı vardır: Aglomeratif (birleştirici) ve Bölücü (divisive).

*   **DBSCAN (Density-Based Spatial Clustering of Applications with Noise)**
    *   Yoğunluğa dayalı bir kümeleme algoritmasıdır. Yoğun bölgeleri kümeler olarak tanımlar ve seyrek bölgeleri gürültü olarak işaretler.

### Boyut İndirgeme Algoritmaları

Veri setindeki özellik sayısını azaltarak karmaşıklığı düşürürken önemli bilgiyi korumaya çalışır.

*   **Temel Bileşen Analizi (Principal Component Analysis - PCA)**
    *   Orijinal özelliklerin doğrusal kombinasyonlarından oluşan yeni, bağımsız özellikler (temel bileşenler) oluşturarak veri boyutunu azaltır.

### Birliktelik Kuralı Öğrenmesi (Association Rule Learning)

Veri setindeki öğeler arasındaki ilişkileri veya birliktelikleri bulur.

*   **Apriori**
    *   Birlikte sıkça görülen öğe kümelerini (sık öğe kümeleri) ve bu kümeler arasındaki birliktelik kurallarını bulmak için kullanılır.

## Pekiştirmeli Öğrenme (Reinforcement Learning)

Pekiştirmeli öğrenme, bir ajanın belirli bir ortamda, deneme-yanılma yoluyla, ödülleri maksimize edecek şekilde kararlar almasını öğrenmesini sağlar. Ajan, eylemlerinin sonuçlarına göre "ödül" veya "ceza" alır.

*   **Q-Öğrenme (Q-Learning)**
    *   Bir ajanın belirli bir durumda hangi eylemi yapması gerektiğini öğrenmesini sağlayan modelden bağımsız bir pekiştirmeli öğrenme algoritmasıdır. "Q-tablosu" adı verilen bir tablo kullanarak optimal politikayı öğrenir.

*   **SARSA (State-Action-Reward-State-Action)**
    *   Q-Öğrenmeye benzer ancak bir sonraki eylemin de mevcut politikaya göre seçildiği "on-policy" bir algoritmadır.

## Derin Öğrenme (Deep Learning)

Derin öğrenme, yapay sinir ağlarının birden çok katmanını kullanarak karmaşık örüntüleri öğrenen makine öğrenmesinin bir alt alanıdır. Özellikle büyük veri kümeleri ve karmaşık yapısal olmayan veriler (görüntü, ses, metin) için güçlüdür.

*   **Yapay Sinir Ağları (Artificial Neural Networks - ANN) / Çok Katmanlı Algılayıcılar (Multi-Layer Perceptrons - MLP)**
    *   İnsan beyninin yapısından esinlenerek tasarlanmış temel derin öğrenme modelidir. Bir giriş katmanı, bir veya daha fazla gizli katman ve bir çıkış katmanından oluşur.

*   **Evrişimli Sinir Ağları (Convolutional Neural Networks - CNN)**
    *   Özellikle görüntü ve video verileri için tasarlanmış derin öğrenme mimarileridir. Evrişim katmanları, havuzlama katmanları ve tam bağlı katmanlardan oluşur.

*   **Tekrarlayan Sinir Ağları (Recurrent Neural Networks - RNN)**
    *   Dizisel verileri (metin, konuşma, zaman serileri) işlemek için tasarlanmıştır. Önceki adımlardaki bilgiyi hatırlayabilirler.

    *   **Uzun Kısa Süreli Bellek (Long Short-Term Memory - LSTM)**
        *   RNN'lerin bir varyantıdır ve uzun süreli bağımlılıkları öğrenmede ve korumada daha etkilidir, RNN'lerdeki kaybolan gradyan (vanishing gradient) sorununu çözer.

    *   **Gated Recurrent Unit (GRU)**
        *   LSTM'ye benzer ancak daha az parametreye sahip, daha basit bir mimaridir.

*   **Üretken Çekişmeli Ağlar (Generative Adversarial Networks - GAN)**
    *   İki sinir ağının (üretici ve ayırıcı) birbiriyle rekabet ettiği bir çerçevedir. Üretici gerçekçi veriler oluşturmaya çalışırken, ayırıcı üretilen veriler ile gerçek verileri ayırt etmeye çalışır.