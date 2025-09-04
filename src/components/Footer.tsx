import { Facebook, Instagram, MessageCircle, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full bg-white text-gray-800 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        {/* Ana içerik grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Sol kolon - Logo + İletişim + Sosyal medya */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="text-3xl font-bold text-blue-600">
                  Logonuz
                </div>
              </div>
            </div>

            {/* İletişim bilgileri + Sosyal medya */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">İletişim</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div className="text-gray-600 text-sm">
                    <p>Örnek Mahallesi</p>
                    <p>Örnek Sokak</p>
                    <p>Örnek Şehir / Türkiye</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <a 
                    href="mailto:info@isletmeadi.com"
                    className="text-gray-600 text-sm hover:text-blue-600 transition-colors"
                  >
                    info@isletmeadi.com
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <a 
                    href="tel:05050359990"
                    className="text-gray-600 text-sm hover:text-blue-600 transition-colors"
                  >
                    0 (505) 035 99 90
                  </a>
                </div>

                {/* Sosyal medya butonları */}
                <div className="pt-2">
                  <div className="flex space-x-4">
                    <a
                      href="https://www.instagram.com/izmirsesisitme/#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.facebook.com/izmirsesisitme/?locale=tr_TR"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a
                      href="https://api.whatsapp.com/send/?phone=05050359990&text=Merhabalar+bilgi+almak+istiyorum&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                    >
                      <img src="/whatsapp_logo.png" alt="WhatsApp" className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* İkinci kolon - Şubelerimiz */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Şubelerimiz</h3>
            <div className="space-y-4">
              <a
                href="https://izmirses.com.tr/iletisim/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 text-sm hover:text-blue-600 transition-colors"
              >
                Alsancak Şubesi
              </a>
              <a
                href="https://izmirses.com.tr/iletisim/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 text-sm hover:text-blue-600 transition-colors"
              >
                Gaziemir Şubesi
              </a>
            </div>
          </div>

          {/* Üçüncü kolon - Hızlı erişim */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Hızlı Erişim</h3>
            <div className="space-y-4">
              <a
                href="https://izmirses.com.tr/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 text-sm hover:text-blue-600 transition-colors"
              >
                Anasayfa
              </a>
              <a
                href="https://izmirses.com.tr/faydali-bilgiler/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 text-sm hover:text-blue-600 transition-colors"
              >
                Faydalı Bilgiler
              </a>
              <a
                href="https://izmirses.com.tr/hakkimizda/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 text-sm hover:text-blue-600 transition-colors"
              >
                Hakkımızda
              </a>
              <a
                href="https://izmirses.com.tr/hizmetlerimiz/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 text-sm hover:text-blue-600 transition-colors"
              >
                Hizmetlerimiz
              </a>
              <a
                href="https://izmirses.com.tr/kulak-arkasi-isitme-cihazlari/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 text-sm hover:text-blue-600 transition-colors"
              >
                Kulak Arkası İşitme Cihazları
              </a>
              <a
                href="https://izmirses.com.tr/kulak-ici-isitme-cihazlari/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 text-sm hover:text-blue-600 transition-colors"
              >
                Kulak İçi İşitme Cihazları
              </a>
              <a
                href="https://izmirses.com.tr/randevu-al/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 text-sm hover:text-blue-600 transition-colors"
              >
                Randevu Alın
              </a>
              <a
                href="https://izmirses.com.tr/iletisim/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 text-sm hover:text-blue-600 transition-colors"
              >
                İletişim
              </a>
            </div>
          </div>

          {/* Dördüncü kolon - Uzun açıklama */}
          <div className="space-y-4">
            <p className="text-gray-600 text-sm leading-relaxed">
              "İşletme Adı" olarak, işitme sağlığınızı önemsiyor, hayat kalitenizi artırmak için en yeni teknolojilere sahip işitme cihazlarını sizlerle buluşturuyoruz. Uzman ekibimizle ücretsiz işitme testi, kişiye özel çözümler ve satış sonrası destekle daima yanınızdayız. Duyduğunuz her an daha anlamlı, her ses daha net olsun diye buradayız!
            </p>
          </div>
        </div>

        {/* Alt çizgi */}
        <div className="border-t border-gray-200 w-full mb-6"></div>
        
        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            © 2025 İzyGrow. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};
