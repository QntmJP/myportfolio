import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Contact.css'

export default function Contact() {
  const sectionRef = useScrollAnimation()

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      {/* Background decoration */}
      <div className="contact__bg-grid"></div>
      <div className="contact__bg-glow"></div>

      <div className="container">
        <div className="contact__content animate-on-scroll">
          <p className="section-label">Get In Touch</p>
          <h2 className="contact__title">
            期待与你<br />
            <span className="contact__title-accent">共同创造价值</span>
          </h2>
          <p className="contact__desc">
            无论是技术合作、项目咨询还是工作机会，欢迎随时联系我。
            我始终对新的技术挑战和合作机会保持开放态度。
          </p>

          <div className="contact__methods">
            <a href="tel:18974937701" className="contact__method">
              <div className="contact__method-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <span className="contact__method-label">电话</span>
                <span className="contact__method-value">18974937701</span>
              </div>
            </a>

            <a href="mailto:3170773676@qq.com" className="contact__method">
              <div className="contact__method-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <span className="contact__method-label">邮箱</span>
                <span className="contact__method-value">3170773676@qq.com</span>
              </div>
            </a>

            <div className="contact__method">
              <div className="contact__method-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <div>
                <span className="contact__method-label">微信</span>
                <span className="contact__method-value">qjp_it_222</span>
              </div>
            </div>
          </div>

          <div className="contact__cta-row">
            <a href="mailto:3170773676@qq.com" className="contact__cta-btn">
              发送邮件
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M14 2L7 9M14 2l-4 12-3-5-5-3 12-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
