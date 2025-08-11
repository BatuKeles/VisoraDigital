import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const nameInputRef = useRef(null);
  const formRef = useRef(null);

  // EmailJS konfigürasyonu - Bu değerleri EmailJS dashboard'unuzdan alacaksınız
  const EMAILJS_CONFIG = {
    SERVICE_ID: "visora_gmail_service",      // EmailJS'de oluşturduğunuz service ID
    TEMPLATE_ID: "template_bsjyr1i",  // EmailJS'de oluşturduğunız template ID  
    PUBLIC_KEY: "tGsjLmaWCoe78lMLU"           // EmailJS'den alacağınız public key - GEÇİCİ DEVRE DIŞI
  };

  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, [EMAILJS_CONFIG.PUBLIC_KEY]);

  // URL'de #contact varsa otomatik focus
  useEffect(() => {
    if (window.location.hash === '#contact' && nameInputRef.current) {
      setTimeout(() => {
        nameInputRef.current.focus();
      }, 500);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // EmailJS template parametreleri
      const templateParams = {
        from_name: formData.name || 'İsim belirtilmedi',
        from_email: formData.email || 'Email belirtilmedi',
        phone: formData.phone || 'Belirtilmedi',
        service: formData.service || 'Belirtilmedi',
        message: formData.message || 'Mesaj belirtilmedi',
        reply_to: formData.email,
        to_email: 'visoradigital34@gmail.com',
        website_url: 'https://visoradigital.com',
        formatted_date: new Date().toLocaleString('tr-TR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      // EmailJS ile email gönder
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('Email başarıyla gönderildi:', result);
      
      setSubmitStatus({ 
        type: 'success', 
        message: 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.' 
      });
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });

    } catch (error) {
      console.error('Email gönderme hatası:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Mesaj gönderilemedi. Lütfen tekrar deneyin veya doğrudan bize ulaşın.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setSubmitStatus({ type: '', message: '' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'E-posta',
      info: 'visoradigital34@gmail.com',
      link: 'mailto:visoradigital34@gmail.com'
    },
    {
      icon: '📱',
      title: 'Telefon',
      info: '+90 (542) 413 06 18',
      link: 'tel:+905424130618'
    },
    {
      icon: '📍',
      title: 'Adres',
      info: 'İstanbul, Kartal',
      link: 'https://maps.google.com'
    },
    {
      icon: '🕐',
      title: 'Çalışma Saatleri',
      info: '7/24 Online Destek',
      link: null
    }
  ];

  const services = [
    'Web Tasarım ve Geliştirme',
    'Mobil Uygulama Geliştirme',
    'Dijital Pazarlama',
    'SEO Optimizasyonu',
    'Sosyal Medya Yönetimi',
    'Grafik Tasarım',
    'Baskı ve Tabela',
    'E-ticaret Çözümleri',
    'Kurumsal Kimlik Tasarımı',
    'İçerik Üretimi'
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <h2>Proje Teklifi Alın</h2>
          <p>Hayalinizdeki dijital projeyi birlikte hayata geçirelim</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-info-card">
              <h3>Bize Ulaşın</h3>
              <p>Projelerinizi konuşmak ve size en uygun çözümü sunmak için buradayız.</p>
              
              <div className="contact-items">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-item">
                    <span className="contact-icon">{item.icon}</span>
                    <div className="contact-text">
                      <h4>{item.title}</h4>
                      {item.link ? (
                        <a href={item.link} target={item.link.includes('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                          {item.info}
                        </a>
                      ) : (
                        <p>{item.info}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="social-links">
                <h4>Sosyal Medya</h4>
                <div className="social-icons">
                  <a href="https://www.instagram.com/visoradigital/" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                    <span>📷</span>
                  </a>
                  <a href="https://www.linkedin.com/company/visoradigital/posts/?feedView=all" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <span>💼</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <div className="contact-form-card">
              {!isSubmitted ? (
                <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                  <div className="form-header">
                    <h3>Projenizi Anlatan</h3>
                    <p>Formu doldurarak size özel bir teklif alabilirsiniz</p>
                  </div>

                  {submitStatus.message && (
                    <div className={`form-status ${submitStatus.type}`}>
                      <p>{submitStatus.message}</p>
                      {submitStatus.type === 'error' && (
                        <div className="fallback-contact">
                          <p>Alternatif iletişim yolları:</p>
                          <a href="mailto:visoradigital34@gmail.com">visoradigital34@gmail.com</a>
                          <a href="tel:+905424130618">+90 (542) 413 06 18</a>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Ad Soyad *</label>
                      <input
                        ref={nameInputRef}
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Adınız ve soyadınız"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">E-posta *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="ornek@email.com"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Telefon</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+90 5XX XXX XX XX"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="service">Hizmet Türü</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Hizmet seçin</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Proje Detayları *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Projeniz hakkında detaylı bilgi verin (hedefler, beklentiler, zaman çizelgesi vb.)"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className={`submit-btn ${isLoading ? 'loading' : ''}`}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span className="loading-spinner"></span>
                        Gönderiliyor...
                      </>
                    ) : (
                      'Teklif Talep Et'
                    )}
                  </button>
                </form>
              ) : (
                <div className="success-message">
                  <div className="success-icon">🎉</div>
                  <h3>Teşekkürler!</h3>
                  <p>Mesajınız başarıyla alındı. Ekibimiz en kısa sürede sizinle iletişime geçecek.</p>
                  <div className="success-details">
                    <p><strong>📧 E-posta:</strong> visoradigital34@gmail.com</p>
                    <p><strong>📱 Telefon:</strong> +90 (542) 413 06 18</p>
                    <p><strong>⏰ Yanıt Süresi:</strong> 2-4 saat içinde</p>
                  </div>
                  <button onClick={resetForm} className="new-message-btn">
                    <span>✉️</span>
                    Yeni Mesaj Gönder
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="contact-cta">
          <div className="cta-content">
            <h3>Acil mi? Hemen Arayın!</h3>
            <p>Projeleriniz için acil destek gerekiyorsa, doğrudan telefon ile ulaşabilirsiniz.</p>
            <a href="tel:+905424130618" className="cta-phone">
              <span className="phone-icon">📞</span>
              <span>+90 (542) 413 06 18</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
