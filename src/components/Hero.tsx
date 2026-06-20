import { useEffect, useState } from 'react'
import './Hero.css'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="hero" id="hero">
      {/* Ambient glow effects */}
      <div className="hero__ambient">
        <div className="hero__glow hero__glow--main"></div>
        <div className="hero__glow hero__glow--secondary"></div>
        <div className="hero__glow hero__glow--top"></div>
      </div>

      {/* Floating orbs */}
      <div className={`hero__orbs ${loaded ? 'hero__orbs--loaded' : ''}`}>
        <div className="hero__orb hero__orb--1"></div>
        <div className="hero__orb hero__orb--2"></div>
        <div className="hero__orb hero__orb--3"></div>
      </div>

      {/* Grain texture overlay */}
      <div className="hero__grain"></div>

      {/* Content - Left/Right split layout */}
      <div className={`hero__content container ${loaded ? 'hero__content--loaded' : ''}`}>
        {/* Left column - Text */}
        <div className="hero__left">
          <div className="hero__pre-title">FULL-STACK DEVELOPER</div>

          <h1 className="hero__title">
            <span className="hero__title-line">构建</span>
            <span className="hero__title-line hero__title-line--accent">可靠的系统</span>
            <span className="hero__title-line">驱动业务增长</span>
          </h1>

          <p className="hero__subtitle">
            3年Java全栈开发经验，专注于微服务架构、高并发系统设计与智能巡检平台开发。
            热爱技术，追求极致的工程实践。
          </p>

          <div className="hero__actions">
            <a href="#projects" className="hero__btn hero__btn--primary">
              查看作品
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#contact" className="hero__btn hero__btn--ghost">
              联系我
            </a>
          </div>
        </div>

        {/* Right column - Visual identity */}
        <div className="hero__right">
          <div className="hero__visual">
            {/* Large decorative code/tech element */}
            <div className="hero__code-block">
              <div className="hero__code-line hero__code-line--1">
                <span className="hero__code-keyword">public class</span>{' '}
                <span className="hero__code-class">QiangJinping</span>{' '}
                <span className="hero__code-brace">{'{'}</span>
              </div>
              <div className="hero__code-line hero__code-line--2">
                <span className="hero__code-keyword">private</span>{' '}
                <span className="hero__code-type">String</span>{' '}
                <span className="hero__code-var">role</span>{' '}
                <span className="hero__code-op">=</span>{' '}
                <span className="hero__code-str">"Full-Stack Developer"</span>
                <span className="hero__code-semicolon">;</span>
              </div>
              <div className="hero__code-line hero__code-line--3">
                <span className="hero__code-keyword">private</span>{' '}
                <span className="hero__code-type">int</span>{' '}
                <span className="hero__code-var">experience</span>{' '}
                <span className="hero__code-op">=</span>{' '}
                <span className="hero__code-num">3</span>
                <span className="hero__code-semicolon">;</span>
              </div>
              <div className="hero__code-line hero__code-line--4">
                <span className="hero__code-keyword">private</span>{' '}
                <span className="hero__code-type">String[]</span>{' '}
                <span className="hero__code-var">stack</span>{' '}
                <span className="hero__code-op">=</span>{' '}
                <span className="hero__code-brace">{'{'}</span>
              </div>
              <div className="hero__code-line hero__code-line--5">
                <span className="hero__code-str">"Spring Cloud"</span>
                <span className="hero__code-comma">,</span>{' '}
                <span className="hero__code-str">"Redis"</span>
                <span className="hero__code-comma">,</span>{' '}
                <span className="hero__code-str">"ES"</span>
              </div>
              <div className="hero__code-line hero__code-line--6">
                <span className="hero__code-brace">{'}'}</span>
                <span className="hero__code-semicolon">;</span>
              </div>
              <div className="hero__code-line hero__code-line--7">
                <span className="hero__code-brace">{'}'}</span>
              </div>
            </div>

            {/* Stats floating cards */}
            <div className="hero__float-stats">
              <div className="hero__float-stat hero__float-stat--1">
                <span className="hero__float-stat-num">3+</span>
                <span className="hero__float-stat-label">Years Exp</span>
              </div>
              <div className="hero__float-stat hero__float-stat--2">
                <span className="hero__float-stat-num">5+</span>
                <span className="hero__float-stat-label">Projects</span>
              </div>
              <div className="hero__float-stat hero__float-stat--3">
                <span className="hero__float-stat-num">15+</span>
                <span className="hero__float-stat-label">Tech Stack</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom info bar */}
      <div className={`hero__bottom ${loaded ? 'hero__bottom--loaded' : ''}`}>
        <div className="hero__bottom-left">
          <svg className="hero__bottom-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span className="hero__bottom-item">陕西咸阳</span>
          <span className="hero__bottom-dot"></span>
          <span className="hero__bottom-item">期望城市：西安</span>
        </div>
        <div className="hero__bottom-center">
          <span className="hero__bottom-item">18974937701</span>
          <span className="hero__bottom-dot"></span>
          <span className="hero__bottom-item">3170773676@qq.com</span>
        </div>
        <div className="hero__bottom-right">
          <svg className="hero__bottom-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
            <path d="M6 12v5c3 3 9 3 12 0v-5"/>
          </svg>
          <span className="hero__bottom-item">辽宁科技大学 · 计算机科学与技术</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-text">SCROLL</div>
        <div className="hero__scroll-line"></div>
      </div>
    </section>
  )
}
