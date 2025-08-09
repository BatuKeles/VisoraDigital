import React from 'react';
import './ServiceModal.css';

const ServiceModal = ({ onClose, service }) => {
  // Service kontrolünü hook'lardan sonra yapalım
  if (!service) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const isWebDesign = service.category === 'Web Tasarım ve Geliştirme';
  const isDigitalMarketing = service.category === 'Dijital Pazarlama';
  const isSocialMedia = service.category === 'Sosyal Medya';
  const isGraphicDesign = service.category === 'Grafik Tasarım';
  const isAppDevelopment = service.category === 'Uygulama Geliştirme';
  const isPrintPromotion = service.category === 'Baskı ve Tabela';

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        
        <div className="modal-header">
          <div className="modal-icon-wrapper" style={{background: service.gradient}}>
            <img src={service.image} alt={service.category} className="modal-icon-img" />
          </div>
          <h2 className="modal-title">{service.category}</h2>
        </div>

        <div className="modal-body">
          <div className="modal-services">
            <h3>Sunduğumuz Hizmetler</h3>
            <ul className="modal-services-list">
              {service.services.map((item, idx) => (
                <li key={idx} className="modal-service-item">{item}</li>
              ))}
            </ul>
          </div>

          <div className="modal-details">
            <h3>Detaylı Bilgi</h3>
            <p className="modal-description">
              {isWebDesign 
                ? "Web Tasarım ve Geliştirme alanında uzman ekibimizle birlikte, modern teknolojiler kullanarak en kaliteli hizmeti sunuyoruz. Projelerinizi baştan sona profesyonel bir şekilde yönetiyoruz."
                : isDigitalMarketing
                ? "Dijital Pazarlama alanında deneyimli ekibimizle birlikte, markanızın dijital varlığını güçlendiriyoruz. Hedef kitlenize ulaşarak satışlarınızı artıracak stratejiler geliştiriyoruz."
                : isSocialMedia
                ? "Sosyal Medya yönetimi alanında profesyonel ekibimizle birlikte, markanızın sosyal medya varlığını güçlendiriyoruz. Yaratıcı içerikler ve etkili stratejilerle takipçi kitlenizi büyütüyoruz."
                : isGraphicDesign
                ? "Grafik Tasarım alanında yaratıcı ekibimizle birlikte, markanızın görsel kimliğini en profesyonel şekilde tasarlıyoruz. Logo tasarımından kurumsal kimlik çalışmalarına, sosyal medya görsellerinden baskı tasarımlarına kadar tüm grafik ihtiyaçlarınızı karşılıyoruz."
                : isAppDevelopment
                ? "Uygulama Geliştirme alanında uzman ekibimizle birlikte, her platform için modern ve kullanıcı dostu uygulamalar geliştiriyoruz. iOS, Android, Windows ve oyun projelerinizi profesyonel olarak hayata geçiriyoruz."
                : isPrintPromotion
                ? "Baskı ve Tabela alanında deneyimli ekibimizle birlikte, markanızın görünürlüğünü artıracak fiziksel materyaller üretiyoruz. Kaliteli baskı ürünleri ve tabela çözümleriyle markanızı öne çıkarıyoruz."
                : `${service.category} alanında uzman ekibimizle birlikte, modern teknolojiler kullanarak en kaliteli hizmeti sunuyoruz. Projelerinizi baştan sona profesyonel bir şekilde yönetiyoruz.`
              }
            </p>
          </div>

          {/* isPrintPromotion && !isRatingSubmitted && (
            <div className="modal-ratings">
              <h3>Aklınızdakini Bizimle Paylaşın</h3>
              <p className="rating-description">
                Baskı ve tabela projenizdeki önceliklerinizi değerlendirin. Her kriterin size göre önem derecesini yıldızlayarak belirtin.
              </p>
              <div className="ratings-grid">
                {getPrintPromotionRatings().map((item, index) => (
                  <div key={index} className="rating-item interactive-rating">
                    <div className="rating-info">
                      <div className="rating-label">{item.label}</div>
                      <div className="rating-description-small">{item.description}</div>
                    </div>
                    <div className="rating-stars">
                      {renderInteractiveStars(item.label, userRatings[item.label])}
                    </div>
                    <div className="rating-value">
                      {userRatings[item.label] > 0 && (
                        <span className="current-rating">
                          {userRatings[item.label]}/5
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="project-description-section">
                <h4>Baskı ve Tabela İhtiyaçlarınızı Paylaşın</h4>
                <p className="project-description-hint">
                  Baskı ve tabela ihtiyaçlarınız hakkında bize detaylı bilgi verin. Bu bilgiler size daha uygun ve kaliteli çözümler sunmamızda yardımcı olacaktır.
                </p>
                <textarea
                  className="project-description-textarea"
                  placeholder="Örneğin: Kartvizit ve broşür bastırmak istiyorum, logo tasarımı da olsun, 1000 adet, mat kağıt, promosyon kalem de eklenir mi, kurumsal kimlik paketi..."
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  maxLength={500}
                  rows={4}
                />
                <div className="character-count">
                  <small>{projectDescription.length}/500 karakter</small>
                </div>
              </div>
              
              <div className="rating-actions">
                <button 
                  className="btn-submit-rating"
                  onClick={submitRating}
                  disabled={Object.values(userRatings).every(rating => rating === 0) && projectDescription.trim() === ''}
                >
                  Değerlendirimi Gönder
                </button>
                <div className="rating-note">
                  <small>* En az bir değerlendirme yapın veya baskı ihtiyaçlarınızı paylaşın</small>
                </div>
              </div>
            </div>
          ) */}

          {/* isPrintPromotion && isRatingSubmitted && (
            <div className="modal-ratings submitted">
              <div className="rating-success">
                <span className="success-icon">🖨️</span>
                <h3>Teşekkürler!</h3>
                <p>Baskı ve tabela değerlendirmeniz başarıyla alındı. Bu bilgiler projenizi hazırlarken dikkate alınacaktır.</p>
                
                {projectDescription.trim() && (
                  <div className="submitted-project-description">
                    <h4>Paylaştığınız Baskı ve Tabela İhtiyaçları:</h4>
                    <div className="project-description-box">
                      <p>"{projectDescription}"</p>
                    </div>
                  </div>
                )}
                
                <div className="submitted-ratings">
                  {getPrintPromotionRatings().map((item, index) => (
                    <div key={index} className="submitted-rating-item">
                      <span className="rating-label">{item.label}:</span>
                      <span className="rating-value">{userRatings[item.label]}/5</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) */}

          {/* isAppDevelopment && !isRatingSubmitted && (
            <div className="modal-ratings">
              <h3>Aklınızdakini Bizimle Paylaşın</h3>
              <p className="rating-description">
                Uygulama geliştirme projenizdeki önceliklerinizi değerlendirin. Her kriterin size göre önem derecesini yıldızlayarak belirtin.
              </p>
              <div className="ratings-grid">
                {getAppDevelopmentRatings().map((item, index) => (
                  <div key={index} className="rating-item interactive-rating">
                    <div className="rating-info">
                      <div className="rating-label">{item.label}</div>
                      <div className="rating-description-small">{item.description}</div>
                    </div>
                    <div className="rating-stars">
                      {renderInteractiveStars(item.label, userRatings[item.label])}
                    </div>
                    <div className="rating-value">
                      {userRatings[item.label] > 0 && (
                        <span className="current-rating">
                          {userRatings[item.label]}/5
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="project-description-section">
                <h4>Uygulama Projenizi Paylaşın</h4>
                <p className="project-description-hint">
                  Geliştirmek istediğiniz uygulama hakkında bize detaylı bilgi verin. Bu bilgiler size daha uygun teknoloji çözümleri sunmamızda yardımcı olacaktır.
                </p>
                <textarea
                  className="project-description-textarea"
                  placeholder="Örneğin: E-ticaret mobil uygulaması istiyorum, kullanıcı girişi olsun, ödeme sistemi, push notification, iOS ve Android'de çalışsın, modern tasarım..."
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  maxLength={500}
                  rows={4}
                />
                <div className="character-count">
                  <small>{projectDescription.length}/500 karakter</small>
                </div>
              </div>
              
              <div className="rating-actions">
                <button 
                  className="btn-submit-rating"
                  onClick={submitRating}
                  disabled={Object.values(userRatings).every(rating => rating === 0) && projectDescription.trim() === ''}
                >
                  Değerlendirimi Gönder
                </button>
                <div className="rating-note">
                  <small>* En az bir değerlendirme yapın veya uygulama projenizi paylaşın</small>
                </div>
              </div>
            </div>
          ) */}

          {/* isAppDevelopment && isRatingSubmitted && (
            <div className="modal-ratings submitted">
              <div className="rating-success">
                <span className="success-icon">📱</span>
                <h3>Teşekkürler!</h3>
                <p>Uygulama geliştirme değerlendirmeniz başarıyla alındı. Bu bilgiler projenizi planlarken dikkate alınacaktır.</p>
                
                {projectDescription.trim() && (
                  <div className="submitted-project-description">
                    <h4>Paylaştığınız Uygulama Projesi:</h4>
                    <div className="project-description-box">
                      <p>"{projectDescription}"</p>
                    </div>
                  </div>
                )}
                
                <div className="submitted-ratings">
                  {getAppDevelopmentRatings().map((item, index) => (
                    <div key={index} className="submitted-rating-item">
                      <span className="rating-label">{item.label}:</span>
                      <span className="rating-value">{userRatings[item.label]}/5</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) */}

          {/* isGraphicDesign && !isRatingSubmitted && (
            <div className="modal-ratings">
              <h3>Aklınızdakini Bizimle Paylaşın</h3>
              <p className="rating-description">
                Grafik tasarım projenizdeki önceliklerinizi değerlendirin. Her kriterin size göre önem derecesini yıldızlayarak belirtin.
              </p>
              <div className="ratings-grid">
                {getGraphicDesignRatings().map((item, index) => (
                  <div key={index} className="rating-item interactive-rating">
                    <div className="rating-info">
                      <div className="rating-label">{item.label}</div>
                      <div className="rating-description-small">{item.description}</div>
                    </div>
                    <div className="rating-stars">
                      {renderInteractiveStars(item.label, userRatings[item.label])}
                    </div>
                    <div className="rating-value">
                      {userRatings[item.label] > 0 && (
                        <span className="current-rating">
                          {userRatings[item.label]}/5
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="project-description-section">
                <h4>Prodüksiyon Projenizi Paylaşın</h4>
                <p className="project-description-hint">
                  Grafik tasarım projenizdeki hedefleriniz ve tasarım vizyonunuz hakkında bize detaylı bilgi verin. Bu bilgiler size daha özgün ve etkili tasarım çözümleri sunmamızda yardımcı olacaktır.
                </p>
                <textarea
                  className="project-description-textarea"
                  placeholder="Örneğin: Ürün tanıtım videosu çektirmek istiyorum, 2-3 dakikalık olsun, modern ve dinamik, drone çekimleri, müzikli montaj, sosyal medyada kullanacağım..."
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  maxLength={500}
                  rows={4}
                />
                <div className="character-count">
                  <small>{projectDescription.length}/500 karakter</small>
                </div>
              </div>
              
              <div className="rating-actions">
                <button 
                  className="btn-submit-rating"
                  onClick={submitRating}
                  disabled={Object.values(userRatings).every(rating => rating === 0) && projectDescription.trim() === ''}
                >
                  Değerlendirimi Gönder
                </button>
                <div className="rating-note">
                  <small>* En az bir değerlendirme yapın veya prodüksiyon projenizi paylaşın</small>
                </div>
              </div>
            </div>
          ) */}

          {/* isGraphicDesign && isRatingSubmitted && (
            <div className="modal-ratings submitted">
              <div className="rating-success">
                <span className="success-icon">🎬</span>
                <h3>Teşekkürler!</h3>
                <p>Grafik tasarım değerlendirmeniz başarıyla alındı. Bu bilgiler projenizi tasarlarken dikkate alınacaktır.</p>
                
                {projectDescription.trim() && (
                  <div className="submitted-project-description">
                    <h4>Paylaştığınız Prodüksiyon Projesi:</h4>
                    <div className="project-description-box">
                      <p>"{projectDescription}"</p>
                    </div>
                  </div>
                )}
                
                <div className="submitted-ratings">
                  {getGraphicDesignRatings().map((item, index) => (
                    <div key={index} className="submitted-rating-item">
                      <span className="rating-label">{item.label}:</span>
                      <span className="rating-value">{userRatings[item.label]}/5</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) */}

          {/* isSocialMedia && !isRatingSubmitted && (
            <div className="modal-ratings">
              <h3>Aklınızdakini Bizimle Paylaşın</h3>
              <p className="rating-description">
                Sosyal medya stratejinizdeki önceliklerinizi değerlendirin. Her kriterin size göre önem derecesini yıldızlayarak belirtin.
              </p>
              <div className="ratings-grid">
                {getSocialMediaRatings().map((item, index) => (
                  <div key={index} className="rating-item interactive-rating">
                    <div className="rating-info">
                      <div className="rating-label">{item.label}</div>
                      <div className="rating-description-small">{item.description}</div>
                    </div>
                    <div className="rating-stars">
                      {renderInteractiveStars(item.label, userRatings[item.label])}
                    </div>
                    <div className="rating-value">
                      {userRatings[item.label] > 0 && (
                        <span className="current-rating">
                          {userRatings[item.label]}/5
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="project-description-section">
                <h4>Sosyal Medya Hedeflerinizi Paylaşın</h4>
                <p className="project-description-hint">
                  Sosyal medya hedefleriniz ve içerik tercihleriniz hakkında bize detaylı bilgi verin. Bu bilgiler size daha etkili sosyal medya stratejileri sunmamızda yardımcı olacaktır.
                </p>
                <textarea
                  className="project-description-textarea"
                  placeholder="Örneğin: Instagram'da aktif olmak istiyorum, günlük 2-3 post, hedef kitlem gençler, yaratıcı tasarımlar, story'lerde kampanyalar, aylık 20.000 takipçi hedefi..."
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  maxLength={500}
                  rows={4}
                />
                <div className="character-count">
                  <small>{projectDescription.length}/500 karakter</small>
                </div>
              </div>
              
              <div className="rating-actions">
                <button 
                  className="btn-submit-rating"
                  onClick={submitRating}
                  disabled={Object.values(userRatings).every(rating => rating === 0) && projectDescription.trim() === ''}
                >
                  Değerlendirimi Gönder
                </button>
                <div className="rating-note">
                  <small>* En az bir değerlendirme yapın veya sosyal medya hedeflerinizi paylaşın</small>
                </div>
              </div>
            </div>
          ) */}

          {/* isSocialMedia && isRatingSubmitted && (
            <div className="modal-ratings submitted">
              <div className="rating-success">
                <span className="success-icon">📱</span>
                <h3>Teşekkürler!</h3>
                <p>Sosyal medya değerlendirmeniz başarıyla alındı. Bu bilgiler içerik stratejinizi oluştururken dikkate alınacaktır.</p>
                
                {projectDescription.trim() && (
                  <div className="submitted-project-description">
                    <h4>Paylaştığınız Sosyal Medya Hedefleri:</h4>
                    <div className="project-description-box">
                      <p>"{projectDescription}"</p>
                    </div>
                  </div>
                )}
                
                <div className="submitted-ratings">
                  {getSocialMediaRatings().map((item, index) => (
                    <div key={index} className="submitted-rating-item">
                      <span className="rating-label">{item.label}:</span>
                      <span className="rating-value">{userRatings[item.label]}/5</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) */}

          {/* isDigitalMarketing && !isRatingSubmitted && (
            <div className="modal-ratings">
              <h3>Aklınızdakini Bizimle Paylaşın</h3>
              <p className="rating-description">
                Dijital pazarlama stratejinizdeki önceliklerinizi değerlendirin. Her kriterin size göre önem derecesini yıldızlayarak belirtin.
              </p>
              <div className="ratings-grid">
                {getDigitalMarketingRatings().map((item, index) => (
                  <div key={index} className="rating-item interactive-rating">
                    <div className="rating-info">
                      <div className="rating-label">{item.label}</div>
                      <div className="rating-description-small">{item.description}</div>
                    </div>
                    <div className="rating-stars">
                      {renderInteractiveStars(item.label, userRatings[item.label])}
                    </div>
                    <div className="rating-value">
                      {userRatings[item.label] > 0 && (
                        <span className="current-rating">
                          {userRatings[item.label]}/5
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="project-description-section">
                <h4>Pazarlama Hedeflerinizi Paylaşın</h4>
                <p className="project-description-hint">
                  Dijital pazarlama hedefleriniz ve beklentileriniz hakkında bize detaylı bilgi verin. Bu bilgiler size daha etkili stratejiler sunmamızda yardımcı olacaktır.
                </p>
                <textarea
                  className="project-description-textarea"
                  placeholder="Örneğin: E-ticaret mağazamın satışlarını artırmak istiyorum, hedef kitlem 25-45 yaş arası, sosyal medyada aktif olmak istiyorum, aylık bütçem 5000 TL..."
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  maxLength={500}
                  rows={4}
                />
                <div className="character-count">
                  <small>{projectDescription.length}/500 karakter</small>
                </div>
              </div>
              
              <div className="rating-actions">
                <button 
                  className="btn-submit-rating"
                  onClick={submitRating}
                  disabled={Object.values(userRatings).every(rating => rating === 0) && projectDescription.trim() === ''}
                >
                  Değerlendirimi Gönder
                </button>
                <div className="rating-note">
                  <small>* En az bir değerlendirme yapın veya pazarlama hedeflerinizi paylaşın</small>
                </div>
              </div>
            </div>
          ) */}

          {/* isDigitalMarketing && isRatingSubmitted && (
            <div className="modal-ratings submitted">
              <div className="rating-success">
                <span className="success-icon">📈</span>
                <h3>Teşekkürler!</h3>
                <p>Pazarlama değerlendirmeniz başarıyla alındı. Bu bilgiler stratejinizi oluştururken dikkate alınacaktır.</p>
                
                {projectDescription.trim() && (
                  <div className="submitted-project-description">
                    <h4>Paylaştığınız Pazarlama Hedefleri:</h4>
                    <div className="project-description-box">
                      <p>"{projectDescription}"</p>
                    </div>
                  </div>
                )}
                
                <div className="submitted-ratings">
                  {getDigitalMarketingRatings().map((item, index) => (
                    <div key={index} className="submitted-rating-item">
                      <span className="rating-label">{item.label}:</span>
                      <span className="rating-value">{userRatings[item.label]}/5</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) */}

          {/* isWebDesign && !isRatingSubmitted && (
            <div className="modal-ratings">
              <h3>Aklınızdakini Bizimle Paylaşın</h3>
              <p className="rating-description">
                Web tasarım projenizdeki önceliklerinizi değerlendirin. Her kriterin size göre önem derecesini yıldızlayarak belirtin.
              </p>
              <div className="ratings-grid">
                {getWebDesignRatings().map((item, index) => (
                  <div key={index} className="rating-item interactive-rating">
                    <div className="rating-info">
                      <div className="rating-label">{item.label}</div>
                      <div className="rating-description-small">{item.description}</div>
                    </div>
                    <div className="rating-stars">
                      {renderInteractiveStars(item.label, userRatings[item.label])}
                    </div>
                    <div className="rating-value">
                      {userRatings[item.label] > 0 && (
                        <span className="current-rating">
                          {userRatings[item.label]}/5
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="project-description-section">
                <h4>Proje Fikrinizi Paylaşın</h4>
                <p className="project-description-hint">
                  Aklınızdaki proje hakkında bize detaylı bilgi verin. Bu bilgiler size daha özelleştirilmiş çözümler sunmamızda yardımcı olacaktır.
                </p>
                <textarea
                  className="project-description-textarea"
                  placeholder="Örneğin: E-ticaret sitesi istiyorum, ana renkler mavi-beyaz olsun, modern tasarım tercih ediyorum, mobil uyumlu olmalı..."
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  maxLength={500}
                  rows={4}
                />
                <div className="character-count">
                  <small>{projectDescription.length}/500 karakter</small>
                </div>
              </div>
              
              <div className="rating-actions">
                <button 
                  className="btn-submit-rating"
                  onClick={submitRating}
                  disabled={Object.values(userRatings).every(rating => rating === 0) && projectDescription.trim() === ''}
                >
                  Değerlendirimi Gönder
                </button>
                <div className="rating-note">
                  <small>* En az bir değerlendirme yapın veya proje fikrinizi paylaşın</small>
                </div>
              </div>
            </div>
          ) */}

          {/* isWebDesign && isRatingSubmitted && (
            <div className="modal-ratings submitted">
              <div className="rating-success">
                <span className="success-icon">✅</span>
                <h3>Teşekkürler!</h3>
                <p>Değerlendirmeniz başarıyla alındı. Bu bilgiler projenizi planlarken dikkate alınacaktır.</p>
                
                {projectDescription.trim() && (
                  <div className="submitted-project-description">
                    <h4>Paylaştığınız Proje Fikri:</h4>
                    <div className="project-description-box">
                      <p>"{projectDescription}"</p>
                    </div>
                  </div>
                )}
                
                <div className="submitted-ratings">
                  {getWebDesignRatings().map((item, index) => (
                    <div key={index} className="submitted-rating-item">
                      <span className="rating-label">{item.label}:</span>
                      <span className="rating-value">{userRatings[item.label]}/5</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) */}

          {!isWebDesign && !isDigitalMarketing && !isSocialMedia && !isGraphicDesign && !isAppDevelopment && !isPrintPromotion && (
            <div className="modal-features">
              <div className="feature-item">
                <span className="feature-icon">⚡</span>
                <span>Hızlı Teslimat</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🎯</span>
                <span>Kaliteli Çözümler</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">💡</span>
                <span>Yaratıcı Tasarım</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🔧</span>
                <span>Sürekli Destek</span>
              </div>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button className="btn-quote" style={{background: '#4ECDC4'}}>
            Ücretsiz Teklif Al
          </button>
          <button className="btn-contact" onClick={onClose}>
            İletişime Geç
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
