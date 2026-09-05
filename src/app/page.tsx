type IconName = "calendar" | "eye" | "close";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="icon-arrow">
      <path d="M4 10h11m-4-4 4 4-4 4" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="icon-play">
      <path d="m7 5 8 5-8 5V5Z" />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="warning-icon">
      <path d="M12 3 2.7 20h18.6L12 3Z" />
      <path d="M12 9v5m0 3.1v.1" />
    </svg>
  );
}

function TimelineIcon({ name }: { name: IconName }) {
  const icon = {
    calendar: (
      <>
        <rect x="6" y="4.5" width="8" height="11" rx="1.5" />
        <path d="M8.2 3.5v3m3.6-3v3m-3 4h2.7" />
      </>
    ),
    eye: (
      <>
        <path d="M3.5 10s2.3-4 6.5-4 6.5 4 6.5 4-2.3 4-6.5 4-6.5-4-6.5-4Z" />
        <circle cx="10" cy="10" r="1.7" />
      </>
    ),
    close: <path d="m6 6 8 8m0-8-8 8" />,
  }[name];

  return (
    <span className="timeline-icon" aria-hidden="true">
      <svg viewBox="0 0 20 20">{icon}</svg>
    </span>
  );
}

function Avatar({ initials, className = "" }: { initials: string; className?: string }) {
  return (
    <span className={`portrait-avatar ${className}`} role="img" aria-label={`${initials} portrait placeholder`}>
      <span>{initials}</span>
    </span>
  );
}

function TextCta({ children, href, dark = false }: { children: React.ReactNode; href: string; dark?: boolean }) {
  return (
    <a className={`button section-button${dark ? " section-button-dark" : ""}`} href={href}>
      {children} <ArrowIcon />
    </a>
  );
}

function AnalyticsChart() {
  return (
    <div className="chart-wrap" aria-label="Revenue from this reel rose to 25,200 Czech koruna before a small decline">
      <svg className="analytics-chart" viewBox="0 0 620 144" role="img" aria-hidden="true" preserveAspectRatio="none">
        <defs>
          <linearGradient id="chart-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#13865c" stopOpacity=".22" />
            <stop offset="1" stopColor="#13865c" stopOpacity=".035" />
          </linearGradient>
        </defs>
        <path className="chart-gridline" d="M0 121H620" />
        <path className="chart-gridline" d="M0 66H620" />
        <path className="chart-area" d="M0 120 C36 113 62 104 98 99 C132 94 155 94 193 91 C233 89 256 84 292 77 C326 70 338 62 360 51 C386 38 395 31 419 31 C451 31 460 26 492 21 C522 15 535 29 568 38 C588 45 600 49 620 55 L620 121 L0 121 Z" />
        <path className="chart-line" pathLength="1" d="M0 120 C36 113 62 104 98 99 C132 94 155 94 193 91 C233 89 256 84 292 77 C326 70 338 62 360 51 C386 38 395 31 419 31 C451 31 460 26 492 21 C522 15 535 29 568 38 C588 45 600 49 620 55" />
        {["98,99", "155,94", "233,89", "292,77", "338,62", "386,38", "451,31", "492,21", "568,38"].map((point) => {
          const [cx, cy] = point.split(",");
          return <circle key={point} className="chart-dot" cx={cx} cy={cy} r="3.3" />;
        })}
      </svg>
      <div className="chart-tooltip">
        <strong>25 200 Kč</strong>
        <span>from this content</span>
      </div>
      <div className="chart-dates" aria-hidden="true">
        <span>Apr 10</span><span>Apr 12</span><span>Apr 14</span><span>Apr 16</span><span>Apr 18</span><span>Apr 20</span>
      </div>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="phone" aria-label="Appointment booking screen">
      <div className="phone-edge" aria-hidden="true" />
      <div className="phone-screen">
        <div className="phone-status">
          <b>9:41</b>
          <span>▮▮ ◓</span>
        </div>
        <div className="dynamic-island" aria-hidden="true" />
        <h3>Book your appointment</h3>
        <div className="service-row">
          <span className="service-thumb" aria-hidden="true" />
          <span>
            <b>Ceramic Premium</b>
            <small>60 min · 9 990 Kč</small>
          </span>
        </div>
        <div className="booking-slots">
          <button type="button"><span>Mon 22</span><b>9:00</b></button>
          <button type="button" className="selected"><span>Tue 23</span><b>11:00</b></button>
          <button type="button"><span>Wed 24</span><b>14:00</b></button>
          <button type="button"><span>Thu 25</span><b>16:00</b></button>
        </div>
        <button type="button" className="continue-button">Continue</button>
        <div className="home-indicator" aria-hidden="true" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero" id="product">
        <div className="hero-planet" aria-hidden="true" />
        <div className="hero-lines" aria-hidden="true" />

        <header className="site-header shell hero-enter hero-enter-1">
          <a className="wordmark" href="#product" aria-label="Wonback home">wonback</a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#product">Product</a>
            <a href="#pricing">Pricing</a>
            <a href="#stories">Stories</a>
            <a href="#blog">Blog</a>
          </nav>
          <div className="header-actions">
            <a className="login-link" href="#login">Log in</a>
            <a className="button button-dark button-small" href="#start">Start free <ArrowIcon /></a>
          </div>
          <details className="mobile-menu">
            <summary aria-label="Open navigation"><span /><span /></summary>
            <nav aria-label="Mobile navigation">
              <a href="#product">Product</a>
              <a href="#pricing">Pricing</a>
              <a href="#stories">Stories</a>
              <a href="#blog">Blog</a>
              <a href="#start">Start free</a>
            </nav>
          </details>
        </header>

        <div className="hero-content shell">
          <p className="eyebrow hero-enter hero-enter-2">The lead-to-revenue OS</p>
          <h1 className="hero-enter hero-enter-3">Stop losing customers<br />in your DMs.</h1>
          <p className="hero-copy hero-enter hero-enter-4">
            Wonback finds high-intent conversations, turns them into bookings,
            <br className="desktop-break" /> and shows which content actually makes you money.
          </p>
          <div className="hero-buttons hero-enter hero-enter-5">
            <a className="button button-dark" href="#start">Start free <ArrowIcon /></a>
            <a className="button button-outline" href="#demo"><PlayIcon /> Watch 2-minute demo</a>
          </div>
          <div className="trust-row hero-enter hero-enter-6" aria-label="Trusted by more than 200 service businesses">
            <div className="avatar-stack" aria-hidden="true"><span>JM</span><span>AK</span><span>PN</span><span>LE</span></div>
            <span>Trusted by 200+ service businesses</span>
          </div>
        </div>
      </section>

      <section className="feature-section recovery" id="pricing">
        <div className="light-arc light-arc-one" aria-hidden="true" />
        <div className="feature-grid shell">
          <div className="feature-copy" data-reveal="left">
            <h2>9 990 Kč is about<br />to disappear.</h2>
            <p>
              Petr showed high buying intent but didn’t complete<br className="desktop-break" /> a booking. Wonback spots these opportunities<br className="desktop-break" /> automatically — so you can follow up at the right time<br className="desktop-break" /> and turn interest into revenue.
            </p>
            <TextCta href="#recovery-card">Recover this lead</TextCta>
          </div>

          <article className="opportunity-card" id="recovery-card" data-reveal="right">
            <div className="opportunity-header">
              <div className="person-title">
                <Avatar initials="PN" className="avatar-petr" />
                <div><h3>Petr Novák</h3><p>Ceramic Premium</p></div>
              </div>
              <div className="risk-badge"><WarningIcon /><span><strong>9 990 Kč</strong><small>at risk</small></span></div>
            </div>
            <div className="timeline">
              <div className="timeline-row"><TimelineIcon name="calendar" /><span>Opened booking page</span><time>3h ago</time></div>
              <div className="timeline-row"><TimelineIcon name="eye" /><span>Viewed pricing</span><time>3h ago</time></div>
              <div className="timeline-row"><TimelineIcon name="close" /><span>No booking completed</span><time>—</time></div>
            </div>
          </article>
        </div>
      </section>

      <section className="feature-section attribution" id="attribution">
        <div className="analysis-grid" aria-hidden="true" />
        <div className="analysis-arc" aria-hidden="true" />
        <div className="feature-grid shell">
          <div className="feature-copy feature-copy-dark" data-reveal="left">
            <h2>This Reel made<br />25 200 Kč.</h2>
            <p>
              See exactly which content drives real revenue.<br className="desktop-break" /> Wonback tracks the full journey from view to customer<br className="desktop-break" /> — so you can create more of what works.
            </p>
            <TextCta href="#analytics-card" dark>Explore content analytics</TextCta>
          </div>

          <article className="analytics-card" id="analytics-card" data-reveal="right">
            <div className="analytics-header">
              <div className="post-title">
                <span className="instagram-icon" aria-hidden="true"><i /></span>
                <div><h3>Reel · Behind the scenes</h3><p>Posted 12 Apr 2024</p></div>
              </div>
              <a href="#demo">View post <ArrowIcon /></a>
            </div>
            <div className="metrics-row">
              <div><strong>542</strong><span>views</span></div>
              <div><strong>312</strong><span>conversations</span></div>
              <div><strong>78</strong><span>bookings</span></div>
              <div><strong>21</strong><span>customers</span></div>
              <div className="revenue-metric"><strong>25 200 Kč</strong><span>revenue</span></div>
            </div>
            <AnalyticsChart />
          </article>
        </div>
      </section>

      <section className="feature-section bookings" id="bookings">
        <div className="light-arc light-arc-two" aria-hidden="true" />
        <div className="feature-grid shell">
          <div className="feature-copy" data-reveal="left">
            <h2>Turn conversations<br />into bookings.</h2>
            <p>
              Share tracked booking links, let clients book on their<br className="desktop-break" /> own, and use automatic follow-ups to nudge the ones<br className="desktop-break" /> who don’t. Less manual work, more revenue.
            </p>
            <TextCta href="#phone">See how bookings work</TextCta>
          </div>
          <div className="phone-stage" id="phone" data-reveal="right">
            <PhoneMockup />
            <div className="phone-note" aria-hidden="true">From DM<br />to booked client.<br />Automatically.</div>
            <svg className="phone-arrow" viewBox="0 0 130 80" aria-hidden="true">
              <path pathLength="1" d="M123 4C111 50 85 68 27 64" />
              <path pathLength="1" d="m39 54-13 10 13 8" />
            </svg>
          </div>
        </div>
      </section>

      <section className="story" id="stories">
        <div className="story-glow" aria-hidden="true" />
        <div className="story-shell shell">
          <div className="story-person" data-reveal="left">
            <Avatar initials="JB" className="avatar-jakub" />
            <div><blockquote>“We recovered 6 bookings<br />we would have otherwise lost.”</blockquote><p>Jakub, Get Studio, Prague</p></div>
          </div>
          <div className="story-metrics" data-reveal="right">
            <div><strong>28 700 Kč</strong><span>recovered</span></div>
            <div><strong>+37%</strong><span>more bookings</span></div>
            <div><strong>3.4x</strong><span>higher lead-to-customer<br />conversion</span></div>
          </div>
        </div>
      </section>

      <footer className="final-cta" id="blog">
        <div className="footer-planet" aria-hidden="true" />
        <div className="footer-lines" aria-hidden="true" />
        <div className="footer-cta shell" id="start" data-reveal="up">
          <h2>Your next customer<br />is already in your DMs.</h2>
          <p>Start free today. Connect in under 2 minutes. Disconnect anytime.</p>
          <div className="hero-buttons" id="demo">
            <a className="button button-light" href="mailto:hello@wonback.com">Start free <ArrowIcon /></a>
            <a className="button button-outline-dark" href="#product"><PlayIcon /> Watch demo</a>
          </div>
        </div>
        <div className="footer-bottom shell">
          <div className="footer-brand"><a className="wordmark" href="#product">wonback</a><p>The lead-to-revenue OS.</p><small>© 2024 Wonback. All rights reserved.</small></div>
          <div className="footer-links" id="footer-nav">
            <nav aria-label="Footer navigation"><a href="#product">Product</a><a href="#pricing">Pricing</a><a href="#stories">Stories</a><a href="#blog">Blog</a></nav>
            <p>Built for service businesses.</p>
          </div>
        </div>
        <span id="login" className="anchor-target" aria-hidden="true" />
      </footer>
    </main>
  );
}
