import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Projects.css'

const projects = [
  {
    title: '和生智汇智能巡检平台',
    period: '2025.05 - 2026.03',
    company: '西安育新创联教育科技',
    desc: '为工业场景构建机械狗智能巡检系统，支持设备远程调度、巡检任务自动规划、异常智能识别、数据实时回传与分析，实现巡检工作自动化、智能化、可视化管理。',
    tags: ['Spring Boot', 'Spring Security', 'Redis集群', 'MySQL主从', 'Elasticsearch', 'RabbitMQ', 'WebSocket', 'Vue3'],
    highlights: ['多角色JWT认证与权限控制', 'OSS多媒体数据管理', 'Redis集群会话/设备状态缓存', 'RabbitMQ任务分发解耦', '数据可视化报表开发'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
  },
  {
    title: '智慧教学管理与服务平台',
    period: '2024.07 - 2025.04',
    company: '西安理工大学',
    desc: '聚焦高校课程教学、作业管理与学习资源数字化，打通"课程-作业-学习-资源"全链路，支持PDF资源检索高亮阅读、文生图辅助理解等功能。',
    tags: ['Spring Boot', 'MyBatis Plus', 'Redis集群', 'XXL-Job', 'ECharts', 'POI', 'Spring Validate', 'Vue3'],
    highlights: ['PDF文本提取与关键词高亮检索', '文生图API集成辅助教学', 'ECharts多维度教学数据报表', 'Redis缓存热门资源索引'],
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
  },
  {
    title: '智慧校园综合管理系统',
    period: '2023.07 - 2024.05',
    company: '杭州电子科技大学',
    desc: '覆盖师生管理、课程教学、在线学习全场景的智慧校园系统，打通教学管理各环节数据壁垒，为师生提供高效便捷的教学与学习服务。',
    tags: ['Spring Cloud Alibaba', 'MyBatis Plus', 'Redis集群', 'Elasticsearch', 'RabbitMQ', 'WebSocket', 'ECharts', 'Vue'],
    highlights: ['知识图谱构建与向量检索', 'WebSocket实时师生聊天室', 'AI大模型个性化学习报告', 'Spring Security多角色权限控制'],
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80',
  },
]

export default function Projects() {
  const sectionRef = useScrollAnimation()

  return (
    <section className="projects" id="projects" ref={sectionRef}>
      <div className="container">
        <div className="animate-on-scroll">
          <p className="section-label">Selected Projects</p>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>
            精选项目
          </h2>
          <p className="section-desc" style={{ marginBottom: '64px' }}>
            从工业智能巡检到智慧校园，每个项目都代表了不同领域的技术挑战与解决方案。
          </p>
        </div>

        <div className="projects__list">
          {projects.map((project, idx) => (
            <div key={idx} className="projects__card animate-on-scroll">
              <div className="projects__card-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="projects__card-image-overlay"></div>
                <div className="projects__card-period">{project.period}</div>
              </div>

              <div className="projects__card-body">
                <div className="projects__card-meta">
                  <span className="projects__card-company">{project.company}</span>
                </div>

                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-desc">{project.desc}</p>

                <div className="projects__card-highlights">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="projects__card-highlight">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="projects__card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="projects__card-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
