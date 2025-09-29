import Carousel from '../components/Carousel.jsx'
import { Link } from 'react-router-dom'

const backgroundStyle = {
  backgroundImage: "url('/bg1.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
};

export default function Home() {
  return (
    <div style={backgroundStyle}>
      <div style={{ minHeight: '100vh' }}>
        {/* HERO in a container */}
        <main className="container hero">
          <div className="grid">
            {/* Left column: hero text */}
            <div className="col-6" style={{ marginTop: '120px' }}>
              <span className="badge" style={{ display: 'inline-block', marginBottom: '20px' }}>
                Now on iOS & Android
              </span>
              <h1>Never Train Alone - </h1>
              <h1>I Gotchu Bro</h1>
              <h2>Match • Message • Post • Train</h2>
              <p className="muted">
                GymBro connects you with nearby athletes who share your goals, preferred times, and gym.
                Match up, plan sessions, and keep each other accountable. The best way to train with your bros.
              </p>
              <div className="hero-cta">
                <a
                  className="btn primary"
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download the App
                </a>
                <Link className="btn" to="/features">
                  Explore Features
                </Link>
              </div>
            </div>

            {/* Right column: carousel (kept position; wrapped sizing via .carousel-wrap) */}
            <div className="col-6" style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="carousel-wrap">
                <Carousel />
              </div>
            </div>
          </div>
        </main>

        {/* Company description fully inside a container + optional .inner */}
        <section className="container" style={{ padding: '80px 0', color: '#fff' }}>
          <div className="inner" style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 auto', lineHeight: '1.6', color: '#d1d5db' }}>
              Our vision is to become the social fitness platform. No more intimidation, accountability starts today.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}