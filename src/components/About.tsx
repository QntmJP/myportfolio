import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './About.css'

const stats = [
  { num: '3+', label: '年开发经验' },
  { num: '5+', label: '核心项目' },
  { num: '15+', label: '技术栈' },
  { num: '100%', label: '项目交付率' },
]

const techTags = [
  'Spring Boot', 'Spring Cloud', 'MyBatis Plus', 'Redis', 'MySQL',
  'Elasticsearch', 'RabbitMQ', 'Vue3', 'Docker', 'Linux',
  'WebSocket', 'Nginx', 'XXL-Job', 'JWT',
]

export default function About() {
  const sectionRef = useScrollAnimation()

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about__grid">
          {/* Left - Avatar & Info */}
          <div className="about__left animate-on-scroll">
            <div className="about__avatar-wrap">
              <div className="about__avatar">
                <div className="about__avatar-placeholder">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
              </div>
              <div className="about__avatar-ring"></div>
              <div className="about__status">
                <span className="about__status-dot"></span>
                离职 - 随时到岗
              </div>
            </div>

            <div className="about__info">
              <h2 className="about__name">强金平</h2>
              <p className="about__role">Java 全栈开发工程师</p>
              <p className="about__location">陕西咸阳 · 期望城市：西安</p>
            </div>

            <div className="about__contact-list">
              <div className="about__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>18974937701</span>
              </div>
              <div className="about__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>3170773676@qq.com</span>
              </div>
              <div className="about__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
                <span>辽宁科技大学 · 计算机科学与技术</span>
              </div>
            </div>
          </div>

          {/* Right - Bio & Stats */}
          <div className="about__right">
            <div className="animate-on-scroll">
              <p className="section-label">About Me</p>
              <h2 className="section-title" style={{ marginBottom: '28px' }}>
                专注于后端的<br />全栈工程师
              </h2>
            </div>

            <div className="animate-on-scroll">
              <p className="about__bio">
                3年Java全栈开发经验，深度参与工业智能巡检、智慧教学管理、智慧校园等多个核心项目的架构设计与开发。
                擅长Spring Cloud微服务架构，熟练掌握Redis集群、ES集群、MySQL主从等中间件的搭建与调优。
                具备独立负责模块开发、系统部署上线的能力，善于利用AI工具提升开发效率。
              </p>
            </div>

            <div className="about__stats-grid animate-on-scroll">
              {stats.map((s) => (
                <div key={s.label} className="about__stat-card">
                  <span className="about__stat-card-num">{s.num}</span>
                  <span className="about__stat-card-label">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="about__tags animate-on-scroll">
              {techTags.map((tag) => (
                <span key={tag} className="about__tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
