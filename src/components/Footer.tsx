import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__left">
            <a href="#" className="footer__logo">
              <span className="footer__logo-bracket">&lt;</span>
              QJP
              <span className="footer__logo-bracket"> /&gt;</span>
            </a>
            <p className="footer__tagline">Full-Stack Developer · Java</p>
          </div>

          <div className="footer__right">
            <p className="footer__copy">
              &copy; {year} 强金平. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
