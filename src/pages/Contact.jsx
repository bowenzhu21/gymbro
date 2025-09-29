import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body = Object.fromEntries(fd.entries());

    const formspree = import.meta.env.VITE_FORMSPREE_ENDPOINT || '';
    if (formspree) {
      try {
        const res = await fetch(formspree, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: fd,
        });
        if (res.ok) setStatus("Thanks! We'll be in touch soon.");
        else setStatus('Sorry, there was a problem. Try again or email us directly.');
      } catch {
        setStatus('Sorry, there was a problem. Try again or email us directly.');
      }
    } else {
      const mailto = `mailto:bowenzhu66@gmail.com?subject=${encodeURIComponent(
        'GymBro contact: ' + (body.subject || '')
      )}&body=${encodeURIComponent(body.message || '')}`;
      window.location.href = mailto;
    }
    e.currentTarget.reset();
  }

  const backgroundStyle = {
    backgroundImage: "url('/bg3.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };

  return (
    <div style={backgroundStyle}>
      <main className="container" style={{ paddingTop: 48, paddingBottom: 64 }}>
        <header style={{ marginBottom: 16 }}>
          <h1 style={{ margin: 0 }}>Contact</h1>
          <p className="muted" style={{ marginTop: 8 }}>
            Questions, feedback, or partnerships? Reach out below.
          </p>
        </header>

        {/* Form in a centered panel for better readability on mobile */}
        <div className="panel" style={{ maxWidth: 820, margin: '0 auto' }}>
          <form className="grid" onSubmit={handleSubmit} style={{ gap: 16 }}>
            <div className="col-6">
              <label className="muted">Your Name</label>
              <input name="name" className="input" required />
            </div>
            <div className="col-6">
              <label className="muted">Email</label>
              <input name="email" type="email" className="input" required />
            </div>
            <div className="col-12">
              <label className="muted">Subject</label>
              <input name="subject" className="input" />
            </div>
            <div className="col-12">
              <label className="muted">Message</label>
              <textarea name="message" className="input" rows="6" required />
            </div>

            <div className="col-12 row justify-between mt-3">
              <button className="btn primary" type="submit">Send</button>
              <a className="btn ghost" href="mailto:bowenzhu66@gmail.com">Email directly</a>
            </div>

            {status && (
              <div className="col-12 mt-3" role="status" aria-live="polite">
                {status}
              </div>
            )}
          </form>
        </div>
      </main>
    </div>
  );
}