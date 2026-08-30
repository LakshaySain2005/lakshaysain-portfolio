import { createFileRoute } from "@tanstack/react-router";
import { ThemeToggle } from "../components/theme-toggle";
import { experience, portfolio, projects, skillRows, socialLinks } from "../data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lakshay Sain — Computer Science Student & Developer" },
      {
        name: "description",
        content:
          "Personal website of Lakshay Sain, a computer science student at Delhi Technological University who builds software, AI projects, and developer tools.",
      },
      { property: "og:title", content: "Lakshay Sain — Computer Science Student & Developer" },
      {
        property: "og:description",
        content:
          "Personal website of Lakshay Sain, a computer science student at Delhi Technological University who builds software, AI projects, and developer tools.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://lakshaysain.dev/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#main-content">
        skip to content
      </a>
      <ThemeToggle />

      <main className="portfolio-main" id="main-content">
        <div className="page-mark" aria-hidden="true">
          ~/lakshay.sain
        </div>

        <header className="identity" aria-labelledby="identity-title">
          <div className="terminal-art" aria-label="A terminal window showing Lakshay's build process">
            <div className="terminal-art__bar" aria-hidden="true">
              <span />
              <span />
              <span />
              <small>build.log</small>
            </div>
            <pre>{`┌──────────────────────────────────────┐
│ lakshay@sain:~$ ./build.sh           │
│ > collecting ideas...                │
│ > [ok] curiosity                     │
│ > [ok] coffee                        │
│ > [ok] shipping                      │
│ > compiling lakshay.dev...           │
│ > done.                              │
│ > _                                  │
└──────────────────────────────────────┘
                  ┌────────────┐
                  │  L A K S H A Y  │
                  └────────────┘`}</pre>
          </div>

          <div className="identity__copy">
            <p className="eyebrow">personal index / 01</p>
            <h1 id="identity-title">hey, i'm lakshay</h1>
            <p className="lead">i like to build things.</p>
            <p>
              i'm a {portfolio.role} at {portfolio.university}. i build software,
              experiment with ai, and spend a probably unhealthy amount of time solving
              programming problems.
            </p>
          </div>
        </header>

        <p className="status-line">
          <span className="status-line__dot" aria-hidden="true" />
          now: {portfolio.status}
        </p>

        <section className="portfolio-section" id="projects" aria-labelledby="projects-title">
          <p className="section-index">02</p>
          <h2 id="projects-title">stuff i've built</h2>
          <div className="entry-list">
            {projects.map((project) => (
              <article className="entry" key={project.name}>
                <div className="entry__heading">
                  <a className="entry__title" href={project.url} target="_blank" rel="noreferrer">
                    {project.name}
                  </a>
                  <span className="entry__label">{project.label}</span>
                </div>
                <p>{project.description}</p>
                <p className="entry__meta">
                  {project.technologies}
                  <span className="entry__action"> · {project.linkLabel}</span>
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="portfolio-section" id="experience" aria-labelledby="experience-title">
          <p className="section-index">03</p>
          <h2 id="experience-title">experience</h2>
          <div className="entry-list">
            {experience.map((item) => (
              <article className="entry" key={`${item.role}-${item.organization}`}>
                <div className="entry__heading">
                  <h3 className="entry__title">{item.role}</h3>
                  <span className="entry__label">{item.organization}</span>
                </div>
                <p>{item.description}</p>
                <p className="entry__meta">{item.technologies}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="portfolio-section" id="skills" aria-labelledby="skills-title">
          <p className="section-index">04</p>
          <h2 id="skills-title">things i use</h2>
          <div className="skill-list">
            {skillRows.map((row) => (
              <p key={row}>{row}</p>
            ))}
          </div>
          <p className="section-note">mostly interested in tools that make the next idea easier to ship.</p>
        </section>

        <section className="portfolio-section" id="elsewhere" aria-labelledby="elsewhere-title">
          <p className="section-index">05</p>
          <h2 id="elsewhere-title">elsewhere</h2>
          <nav className="elsewhere-links" aria-label="Social links">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
            <a href="mailto:hello@lakshaysain.dev">email ↗</a>
          </nav>
          <p className="section-note">links are placeholders for now — the work is the important part.</p>
        </section>

        <footer className="portfolio-footer">
          <p>© 2026 lakshay sain</p>
          <p>built with curiosity + caffeine</p>
        </footer>
      </main>
    </div>
  );
}
