import { Link, NavLink } from 'react-router-dom'

export default function Navbar(){
  return (
    <header>
      <div className="container">
        <nav>
          <Link to="/" className="brand">
            {/* keep relative path so it works with Vite base on GitHub Pages */}
            <img src="logo.png" alt="Logo" style={{ height: '40px' }} />
            <span className="brand-text">GymBro</span>
          </Link>
          <div className="navlinks">
            <NavLink to="/features">Features</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <a className="btn primary" href="https://apps.apple.com" target="_blank" rel="noreferrer">
              Get App
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}