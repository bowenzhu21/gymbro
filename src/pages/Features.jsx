export default function Features() {
  const features = [
    { title: 'Smart Matching', body: 'Match by goals, experience, gym, and preferred time slots.' },
    { title: 'Chat Built-in', body: 'Message your partners, plan sessions, and share progress.' },
    { title: 'Profiles that Matter', body: 'Show lifts, goals, and schedule — find compatible partners fast.' },
    { title: 'Safety-First', body: 'Report, block, and control who can contact you.' },
    { title: 'Lightweight & Fast', body: 'Built with performance in mind for a snappy experience.' },
    { title: 'Zero-Friction Onboarding', body: 'Create a profile in minutes and start matching.' },
  ];

  const backgroundStyle = {
    backgroundImage: "url('bg3.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };

  return (
    <div style={backgroundStyle}>
      <main className="container" style={{ paddingTop: 48, paddingBottom: 64 }}>
        <header style={{ marginBottom: 16 }}>
          <h1 style={{ margin: 0 }}>Features</h1>
          <p className="muted" style={{ marginTop: 8 }}>
            Everything you need to find reliable training partners.
          </p>
        </header>

        {/* Card grid that flows nicely on mobile */}
        <div
          className="grid"
          style={{
            gap: 16,
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          }}
        >
          {features.map((f) => (
            <div key={f.title} className="panel" style={{ minHeight: 140 }}>
              <h3 style={{ marginTop: 0, marginBottom: 6 }}>{f.title}</h3>
              <p className="muted" style={{ margin: 0 }}>{f.body}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}