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

function RecoveryDecision() {
  return (
    <article className="opportunity-card" id="recovery-card" data-reveal="right">
      <div className="product-card-bar">
        <span>Decision layer / WB-2841</span>
        <span className="live-status live-status-risk"><i /> Action required</span>
      </div>
      <div className="decision-layout">
        <div className="decision-main">
          <div className="conversation-header"><span>Instagram DM</span><time>@petr_novak · 10:42</time></div>
          <div className="conversation-thread" aria-label="Conversation with Petr Novák">
            <div className="conversation-message"><span>Petr</span><p>“How much is Ceramic Premium?”</p></div>
            <div className="conversation-message conversation-message-business"><span>Business</span><p>“9 990 Kč. Want me to send available dates?”</p></div>
            <div className="conversation-message"><span>Petr</span><p>“Yes”</p></div>
          </div>
          <div className="decision-signal">
            <WarningIcon />
            <div><span>Reply overdue</span><strong>3h without response</strong></div>
            <b>9 990 Kč <small>at risk</small></b>
          </div>
          <div className="recommended-action">
            <div><span>Recommended action</span><strong>Send available booking slots</strong></div>
            <a href="#automation">Send follow-up <ArrowIcon /></a>
          </div>
        </div>
        <aside className="decision-context" aria-label="Lead context">
          <span>Lead context</span>
          <dl>
            <div><dt>Source</dt><dd>Reel · Behind the scenes</dd></div>
            <div><dt>Lead</dt><dd>Petr Novák</dd></div>
            <div><dt>Service</dt><dd>Ceramic Premium</dd></div>
            <div><dt>Estimated value</dt><dd>9 990 Kč</dd></div>
            <div><dt>Last activity</dt><dd>3h ago</dd></div>
          </dl>
        </aside>
      </div>
    </article>
  );
}

function AttributionPanel() {
  return (
    <article className="analytics-card" id="analytics-card" data-reveal="right">
      <div className="product-card-bar">
        <span>Attribution / REEL-0412</span>
        <span className="live-status"><i /> Source verified</span>
      </div>
      <div className="analytics-header">
        <div className="post-title">
          <span className="instagram-icon" aria-hidden="true"><i /></span>
          <div><small>Instagram Reel</small><h3>Behind the scenes</h3><p>Posted 12 Apr 2024</p></div>
        </div>
        <a href="#demo">View post <ArrowIcon /></a>
      </div>
      <div className="attribution-path" aria-label="This Reel generated 312 conversations, 78 booking intents, 21 customers and 25,200 Czech koruna in revenue">
        <div className="attribution-step"><strong>312</strong><span>conversations</span></div>
        <div className="attribution-step"><strong>78</strong><span>booking intents</span></div>
        <div className="attribution-step"><strong>21</strong><span>customers</span></div>
        <div className="attribution-step attribution-step-revenue"><strong>25 200 Kč</strong><span>revenue</span></div>
      </div>
      <div className="attributed-list">
        <div className="attributed-list-head"><span>Attributed customers</span><small>21 total · 3 shown</small></div>
        <div className="attributed-customer">
          <Avatar initials="PN" className="avatar-mini avatar-petr" />
          <div><strong>Petr Novák</strong><small>Ceramic Premium</small><span>Reel → DM → Booking</span></div>
          <b>9 990 Kč</b>
        </div>
        <div className="attributed-customer">
          <Avatar initials="AK" className="avatar-mini avatar-anna" />
          <div><strong>Anna Králová</strong><small>Paint Correction</small><span>Reel → DM → Booking</span></div>
          <b>8 400 Kč</b>
        </div>
        <div className="attributed-customer">
          <Avatar initials="LE" className="avatar-mini avatar-lucie" />
          <div><strong>Lucie Eliášová</strong><small>Interior Detail</small><span>Reel → DM → Booking</span></div>
          <b>6 810 Kč</b>
        </div>
      </div>
    </article>
  );
}

function ProductFlow() {
  return (
    <section className="product-flow" id="how-it-works" aria-labelledby="product-flow-title">
      <div className="shell">
        <div className="flow-heading" data-reveal="up">
          <div>
            <p className="system-label">Product model / Live journey</p>
            <h2 id="product-flow-title">How Wonback works</h2>
          </div>
          <p>One connected system from the first comment to the revenue it creates.</p>
        </div>

        <ol className="flow-rail" aria-label="Instagram lead-to-revenue journey" data-reveal="up">
          <li className="flow-node flow-node-content">
            <div className="flow-node-top"><span>01 / Reel</span><time>10:41</time></div>
            <div className="flow-object-title">
              <span className="instagram-icon flow-instagram" aria-hidden="true"><i /></span>
              <strong>Behind the scenes</strong>
            </div>
            <p><b>312</b> conversations</p>
          </li>
          <li className="flow-node flow-node-message">
            <div className="flow-node-top"><span>02 / DM</span><time>10:42</time></div>
            <blockquote>“How much is Ceramic Premium?”</blockquote>
            <p>@petr_novak</p>
          </li>
          <li className="flow-node flow-node-intent">
            <div className="flow-node-top"><span>03 / Intent</span><time>+0.4s</time></div>
            <span className="flow-status flow-status-green">Detected</span>
            <strong className="flow-score">94%</strong>
            <p>Purchase intent</p>
          </li>
          <li className="flow-node flow-node-lead">
            <div className="flow-node-top"><span>04 / Lead</span><time>10:42</time></div>
            <strong>Petr Novák</strong>
            <p>Ceramic Premium</p>
            <b>9 990 Kč potential</b>
          </li>
          <li className="flow-node flow-node-followup">
            <div className="flow-node-top"><span>05 / Follow-up</span><time>22:42</time></div>
            <strong>After 12 hours</strong>
            <p>Personalized DM</p>
            <span className="flow-status flow-status-sent">Sent</span>
          </li>
          <li className="flow-node flow-node-booking">
            <div className="flow-node-top"><span>06 / Booking</span><time>22:46</time></div>
            <strong>Ceramic Premium</strong>
            <p>Tue 23 · 11:00</p>
            <span className="flow-status flow-status-green">Confirmed</span>
          </li>
          <li className="flow-node flow-node-revenue">
            <div className="flow-node-top"><span>07 / Revenue</span><time>Paid</time></div>
            <strong>9 990 Kč</strong>
            <p>Attributed to Reel</p>
            <span className="flow-source">Source verified</span>
          </li>
        </ol>
      </div>
    </section>
  );
}

function AutomationPanel() {
  return (
    <article className="automation-card" id="automation-card" data-reveal="right">
      <div className="product-card-bar">
        <span>Automation / WB-0127</span>
        <span className="live-status"><i /> Active</span>
      </div>
      <div className="automation-layout">
        <div className="sequence-list">
          <div className="sequence-step sequence-step-complete">
            <span className="sequence-marker">01</span>
            <div><small>Trigger · 10:42</small><strong>High intent detected</strong><p>Purchase confidence above 85%</p></div>
          </div>
          <div className="sequence-step sequence-step-complete">
            <span className="sequence-marker">02</span>
            <div><small>Wait</small><strong>12 hours</strong><p>Stop if a booking is completed</p></div>
          </div>
          <div className="sequence-step sequence-step-current">
            <span className="sequence-marker">03</span>
            <div><small>Instagram DM · 22:42</small><strong>Personalized follow-up</strong><p>“Hi Petr — want me to hold Tuesday at 11:00?”</p></div>
            <span className="delivery-status">Sent</span>
          </div>
        </div>
        <div className="automation-result">
          <div className="result-label"><span>Sequence result</span><time>22:46</time></div>
          <span className="result-check" aria-hidden="true">✓</span>
          <strong>Lead recovered</strong>
          <p>Petr booked Ceramic Premium four minutes after the follow-up.</p>
          <div className="result-value"><span>Recovered revenue</span><b>9 990 Kč</b></div>
        </div>
      </div>
    </article>
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

      <ProductFlow />

      <section className="feature-section recovery" id="pricing">
        <div className="feature-grid shell">
          <div className="feature-copy" data-reveal="left">
            <p className="chapter-label"><span>01</span> Recovery <i>High-intent signal</i></p>
            <h2>9 990 Kč is about<br />to disappear.</h2>
            <p>
              Petr showed high buying intent but didn’t complete<br className="desktop-break" /> a booking. Wonback spots these opportunities<br className="desktop-break" /> automatically — so you can follow up at the right time<br className="desktop-break" /> and turn interest into revenue.
            </p>
            <TextCta href="#recovery-card">Recover this lead</TextCta>
          </div>

          <RecoveryDecision />
        </div>
      </section>

      <section className="feature-section automation" id="automation">
        <div className="feature-grid shell">
          <div className="feature-copy" data-reveal="left">
            <p className="chapter-label"><span>02</span> Automation <i>12-hour recovery</i></p>
            <h2>Follow up before<br />the lead goes cold.</h2>
            <p>
              Wonback starts the right follow-up when buying intent is<br className="desktop-break" /> high, pauses when a customer books, and keeps every<br className="desktop-break" /> conversation personal — without manual chasing.
            </p>
            <TextCta href="#automation-card">Explore automations</TextCta>
          </div>
          <AutomationPanel />
        </div>
      </section>

      <section className="feature-section attribution" id="attribution">
        <div className="analysis-grid" aria-hidden="true" />
        <div className="feature-grid shell">
          <div className="feature-copy feature-copy-dark" data-reveal="left">
            <p className="chapter-label chapter-label-dark"><span>03</span> Attribution <i>Content revenue</i></p>
            <h2>This Reel made<br />25 200 Kč.</h2>
            <p>
              See exactly which content drives real revenue.<br className="desktop-break" /> Wonback tracks the full journey from view to customer<br className="desktop-break" /> — so you can create more of what works.
            </p>
            <TextCta href="#analytics-card" dark>Explore content analytics</TextCta>
          </div>

          <AttributionPanel />
        </div>
      </section>

      <section className="feature-section bookings" id="bookings">
        <div className="feature-grid shell">
          <div className="feature-copy" data-reveal="left">
            <p className="chapter-label"><span>04</span> Bookings <i>Conversation closed</i></p>
            <h2>Turn conversations<br />into bookings.</h2>
            <p>
              Share tracked booking links, let clients book on their<br className="desktop-break" /> own, and use automatic follow-ups to nudge the ones<br className="desktop-break" /> who don’t. Less manual work, more revenue.
            </p>
            <TextCta href="#phone">See how bookings work</TextCta>
          </div>
          <div className="phone-stage" id="phone" data-reveal="right">
            <PhoneMockup />
            <div className="booking-confirmation">
              <div className="confirmation-head"><span>Booking / WB-2841</span><time>22:46</time></div>
              <span className="confirmation-status"><i /> Closed loop complete</span>
              <strong>Ceramic Premium</strong>
              <p>Petr Novák · Tue 23 · 11:00</p>
              <ol className="closed-loop" aria-label="Closed-loop booking attribution">
                <li><span>Booking confirmed</span><b>22:46</b></li>
                <li><span>Customer created</span><b>Petr Novák</b></li>
                <li><span>Revenue recorded</span><b>9 990 Kč</b></li>
                <li><span>Source</span><b>Reel · Behind the scenes</b></li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="story" id="stories">
        <div className="story-shell shell">
          <div className="story-person" data-reveal="left">
            <Avatar initials="JB" className="avatar-jakub" />
            <div><span className="story-label">Customer journey / 30 days</span><blockquote>“We recovered 6 bookings<br />we would have otherwise lost.”</blockquote><p>Jakub, Get Studio, Prague</p></div>
          </div>
          <div className="story-metrics" data-reveal="right">
            <div><strong>28 700 Kč</strong><span>recovered</span></div>
            <div><strong>+37%</strong><span>more bookings</span></div>
            <div><strong>3.4x</strong><span>higher lead-to-customer<br />conversion</span></div>
          </div>
        </div>
      </section>

      <footer className="final-cta" id="blog">
        <div className="footer-cta shell" id="start" data-reveal="up">
          <h2>Your next customer<br />is already in your DMs.</h2>
          <p>Start free today. Connect in under 2 minutes. Disconnect anytime.</p>
          <div className="hero-buttons" id="demo">
            <a className="button button-light" href="mailto:hello@wonback.com">Start free <ArrowIcon /></a>
            <a className="button button-outline-dark" href="#product"><PlayIcon /> Watch demo</a>
          </div>
        </div>
        <div className="footer-bottom shell">
          <div className="footer-brand"><a className="wordmark" href="#product">wonback</a><p>The lead-to-revenue OS.</p><small>© 2026 Wonback. All rights reserved.</small></div>
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
