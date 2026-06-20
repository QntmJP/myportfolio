import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Skills.css'

const skillCategories = [
  {
    title: '后端核心',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    skills: [
      { name: 'Spring Boot / Spring Cloud', level: 95 },
      { name: 'MyBatis / MyBatis Plus', level: 90 },
      { name: 'Spring Security + JWT', level: 88 },
      { name: 'Java 基础与并发', level: 90 },
    ],
  },
  {
    title: '中间件 & 数据库',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    skills: [
      { name: 'Redis 集群 / 主从 / 哨兵', level: 92 },
      { name: 'MySQL 主从 / 读写分离', level: 88 },
      { name: 'Elasticsearch 集群', level: 85 },
      { name: 'RabbitMQ 消息队列', level: 85 },
    ],
  },
  {
    title: '前端 & 工程化',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    skills: [
      { name: 'Vue3 + Element Plus', level: 85 },
      { name: 'ECharts 数据可视化', level: 88 },
      { name: 'Linux 运维部署', level: 82 },
      { name: 'Nginx 负载均衡', level: 80 },
    ],
  },
  {
    title: '综合能力',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    skills: [
      { name: 'AI 辅助开发 (Cursor/TRAE)', level: 90 },
      { name: '系统架构设计', level: 82 },
      { name: 'Git 版本管理', level: 90 },
      { name: '接口设计 & 文档编写', level: 88 },
    ],
  },
]

export default function Skills() {
  const sectionRef = useScrollAnimation()

  return (
    <section className="skills" id="skills" ref={sectionRef}>
      <div className="container">
        <div className="animate-on-scroll">
          <p className="section-label">Tech Stack</p>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>
            技术能力
          </h2>
          <p className="section-desc" style={{ marginBottom: '64px' }}>
            以后端Java为核心，覆盖微服务架构、中间件运维、前端开发与工程化部署的完整技术体系。
          </p>
        </div>

        <div className="skills__grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skills__card animate-on-scroll">
              <div className="skills__card-header">
                <div className="skills__card-icon">{cat.icon}</div>
                <h3 className="skills__card-title">{cat.title}</h3>
              </div>

              <div className="skills__card-list">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="skills__item">
                    <div className="skills__item-info">
                      <span className="skills__item-name">{skill.name}</span>
                      <span className="skills__item-level">{skill.level}%</span>
                    </div>
                    <div className="skills__bar">
                      <div
                        className="skills__bar-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
