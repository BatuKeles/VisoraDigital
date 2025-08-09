 # EmailJS Kurulum ve Konfigürasyon Rehberi

## 1. EmailJS Hesabı Oluşturma

1. https://www.emailjs.com/ adresine gidin
2. "Sign Up" ile ücretsiz hesap oluşturun
3. Email adresinizi doğrulayın

## 2. Email Servis Konfigürasyonu

1. Dashboard'da "Email Services" bölümüne gidin
2. "Add New Service" butonuna tıklayın
3. Gmail'i seçin ve aşağıdaki bilgileri girin:
   - Service ID: `visora_gmail_service` (özel isim verin)
   - Gmail hesabınızla bağlantı kurun: `visoradigital34@gmail.com`

## 3. Email Template Oluşturma

1. "Email Templates" bölümüne gidin
2. "Create New Template" butonuna tıklayın
3. Template ID: `visora_contact_template`
4. Aşağıdaki template'i kullanın:

```
Subject: Yeni Proje Teklifi - {{from_name}}

Merhaba,

Visora Digital ({{website_url}}) web sitesindeki iletişim formundan yeni bir proje teklifi aldınız.

👤 İsim: {{from_name}}
📧 E-posta: {{from_email}}
📱 Telefon: {{phone}}
🎯 Hizmet Türü: {{service}}

📝 Proje Detayları:
{{message}}

---
Bu mesaj otomatik olarak {{website_url}} adresinden gönderilmiştir.
Tarih: {{formatted_date}}

Müşteriye yanıt vermek için: {{reply_to}}
```

## 4. Public Key Alma

1. "Account" -> "General" bölümüne gidin
2. "Public Key" değerini kopyalayın

## 5. Kod Konfigürasyonu

Contact.js dosyasında aşağıdaki değerleri değiştirin:

```javascript
// EmailJS konfigürasyonu - Bu değerleri EmailJS dashboard'unuzdan alın
const SERVICE_ID = "visora_gmail_service";      // Adım 2'deki Service ID
const TEMPLATE_ID = "visora_contact_template";   // Adım 3'teki Template ID  
const PUBLIC_KEY = "YOUR_PUBLIC_KEY_HERE";       // Adım 4'teki Public Key

// Bu satırları Contact.js'de güncelleyin:
emailjs.init(PUBLIC_KEY);

const result = await emailjs.send(
  SERVICE_ID,
  TEMPLATE_ID,
  templateParams,
  PUBLIC_KEY
);
```

## 6. Gmail Güvenlik Ayarları

Gmail hesabınızda:
1. 2-Step Verification aktif olmalı
2. App Password oluşturun
3. EmailJS'de bu App Password'u kullanın

## 7. Test Etme

1. Web sitenizde contact formunu doldurun
2. EmailJS dashboard'da "Logs" bölümünden gönderim durumunu kontrol edin
3. visoradigital34@gmail.com adresinde email gelip gelmediğini kontrol edin

## 8. Aylık Limit

Ücretsiz plan:
- Ayda 200 email
- Upgrade için: https://www.emailjs.com/pricing

## Sorun Giderme

- CORS hatası alırsanız: EmailJS dashboard'da domain'inizi whitelist'e ekleyin
- Email gelmiyorsa: Gmail spam klasörünü kontrol edin
- Template hatası: Template parametrelerinin doğru yazıldığından emin olun

## Güvenlik Notu

Public Key frontend'de görünür olacak, bu normal bir durumdur. 
Sensitive bilgiler için backend entegrasyonu gerekir.
