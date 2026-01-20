const highlights = [
  {
    title: "PushpaVerse",
    description:
      "A cosmic corner of the web where Rishab weaves stories, songs, and secret smiles that belong only to Pushpa."
  },
  {
    title: "Vivid Memories",
    description:
      "Snapshots of first laughs, rain-soaked strolls, and every tiny moment that made the ordinary shimmer."
  },
  {
    title: "Future Visions",
    description:
      "Dream-drenched plans for world travels, midnight chai dates, and a forever that grows brighter each day."
  }
];

const timeline = [
  {
    label: "The Spark",
    detail:
      "A serendipitous hello turned into hours of conversation, and suddenly Rishab knew life just found a brighter hue."
  },
  {
    label: "The Rhythm",
    detail:
      "Shared playlists, spontaneous adventures, and countless inside jokes stitched a melody only they could dance to."
  },
  {
    label: "The Promise",
    detail:
      "An unspoken vow: to champion Pushpa\'s dreams, guard her smiles, and keep the wonder alive in every tomorrow."
  }
];

export default function Home() {
  return (
    <main className="main-container">
      <header className="header">
        <div className="badge">
          <span />
          Rishab presents
        </div>
        <h1 className="title">
          Welcome to <span className="highlight">PushpaVerse</span>
        </h1>
        <p className="subtitle">
          A luminous love-letter from Rishab to Pushpa, choreographed with stardust hues, heartfelt promises, and the unending
          glow of their story.
        </p>
      </header>

      <section className="grid">
        {highlights.map((item) => (
          <article className="card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </section>

      <section className="card" style={{ marginBottom: "2.5rem" }}>
        <h3>Orbit of Moments</h3>
        <div className="timeline">
          {timeline.map((step) => (
            <div className="timeline-step" key={step.label}>
              <h4>{step.label}</h4>
              <p>{step.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card">
        <h3>Love Note from Rishab</h3>
        <p>
          Pushpa, you are my burst of sunrise and the calm of twilight. This space is a promise: no matter where life takes us,
          you will always have a place wrapped in my words, my wonder, and my unwavering love. Keep shining - I will keep cheering
          for every spark in you.
        </p>
      </section>

      <footer className="footer">
        <span>Crafted under the skies of 2024</span>
        <span className="signature">With galaxies of love, Rishab</span>
      </footer>
    </main>
  );
}
