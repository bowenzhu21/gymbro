export default function Footer(){
  return (
    <footer>
      <div className="container row justify-between">
        <div className="row" style={{ gap: 8 }}>
          {/* no filter here */}
          <img
            src="logo.png"
            alt="GymBro logo"
            width="20"
            height="20"
            className="footer-logo"
            decoding="async"
          />
          <strong>GymBro</strong>
        </div>
        <div className="muted">© {new Date().getFullYear()} GymBro. All rights reserved.</div>
      </div>
    </footer>
  )
}