import { Link, NavLink } from 'react-router-dom'

export default function Navbar(){
  return (
    <header>
      <div className="container">
        <nav>
          <Link to="/" className="brand">
            <img src="/logo.png" alt="Logo" />
            <span>GymBro</span>
          </Link>
          <div className="navlinks">
            <NavLink to="/features">Features</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <a className="btn primary" href="https://apps.apple.com" target="_blank" rel="noreferrer">Get the App</a>
          </div>
        </nav>
      </div>
    </header>
  )
}