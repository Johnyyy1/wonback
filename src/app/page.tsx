function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="icon-arrow">
      <path d="M4 10h11m-4-4 4 4-4 4" />
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
    <span className={`portrait-avatar ${className}`} role="img" aria-label={`${initials} demo contact`}>
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
          <div><small>Instagram Reel</small><h3>Behind the scenes</h3><p>Demo activity · This week</p></div>
        </div>
        <a href="#demo-journey">Trace journey <ArrowIcon /></a>
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
          <Avatar initials="PN" className="avatar-mini" />
          <div><strong>Petr Novák</strong><small>Ceramic Premium</small><span>Reel → DM → Booking</span></div>
          <b>9 990 Kč</b>
        </div>
        <div className="attributed-customer">
          <Avatar initials="AK" className="avatar-mini" />
          <div><strong>Anna Králová</strong><small>Paint Correction</small><span>Reel → DM → Booking</span></div>
          <b>8 400 Kč</b>
        </div>
        <div className="attributed-customer">
          <Avatar initials="LE" className="avatar-mini" />
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
            <p className="system-label">Product model / Example workflow</p>
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
            <a href="#how-it-works">How it works</a>
            <a href="#features">Features</a>
            <a href="#demo-journey">Demo journey</a>
          </nav>
          <div className="header-actions">
            <a className="login-link" href="mailto:hello@wonback.com">Email us</a>
            <a className="button button-dark button-small" href="#how-it-works">See product <ArrowIcon /></a>
          </div>
          <details className="mobile-menu">
            <summary aria-label="Open navigation"><span /><span /></summary>
            <nav aria-label="Mobile navigation">
              <a href="#product">Product</a>
              <a href="#how-it-works">How it works</a>
              <a href="#features">Features</a>
              <a href="#demo-journey">Demo journey</a>
              <a href="mailto:hello@wonback.com">Email Wonback</a>
            </nav>
          </details>
        </header>

        <div className="hero-content shell">
          <p className="eyebrow hero-enter hero-enter-2">The lead-to-revenue OS</p>
          <h1 className="hero-enter hero-enter-3">Stop losing customers<br />in your DMs.</h1>
          <p className="hero-copy hero-enter hero-enter-4">
            Wonback finds high-intent conversations, turns them into bookings,
            <br className="desktop-break" /> and shows which Instagram content creates revenue.
          </p>
          <div className="hero-buttons hero-enter hero-enter-5">
            <a className="button button-dark" href="#how-it-works">See how it works <ArrowIcon /></a>
            <a className="button button-outline" href="#demo-journey">Follow demo journey <ArrowIcon /></a>
          </div>
          <div className="product-fit-row hero-enter hero-enter-6">
            <i aria-hidden="true" />
            <span>Built for service businesses selling through Instagram</span>
          </div>
        </div>
      </section>

      <ProductFlow />

      <section className="feature-section recovery" id="features">
        <div className="feature-grid shell">
          <div className="feature-copy" data-reveal="left">
            <p className="chapter-label"><span>01</span> Recovery <i>High-intent signal</i></p>
            <h2>9 990 Kč is about<br />to disappear.</h2>
            <p>
              Petr asked about Ceramic Premium, but the conversation<br className="desktop-break" /> stopped before he booked. Wonback flags the overdue reply<br className="desktop-break" /> and keeps the value, source, and next action in one place.
            </p>
            <TextCta href="#recovery-card">Review at-risk lead</TextCta>
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
              When purchase intent is high, Wonback waits 12 hours,<br className="desktop-break" /> sends a personal DM, and stops the sequence if the lead books.
            </p>
            <TextCta href="#automation-card">Inspect automation</TextCta>
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
              Follow a Reel from its first DM to each booked customer<br className="desktop-break" /> and the revenue recorded against it.
            </p>
            <TextCta href="#analytics-card" dark>Trace Reel revenue</TextCta>
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
              Send a tracked booking link in the conversation. If someone<br className="desktop-break" /> books, Wonback stops the follow-up and records the customer,<br className="desktop-break" /> value, and Reel source.
            </p>
            <TextCta href="#phone">Inspect booking loop</TextCta>
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

      <section className="story demo-journey" id="demo-journey" aria-labelledby="demo-journey-title">
        <div className="demo-journey-shell shell">
          <div className="demo-journey-heading" data-reveal="up">
            <div>
              <p className="chapter-label"><span>05</span> Customer journey <i>Demo journey</i></p>
              <h2 id="demo-journey-title">One conversation.<br />The full journey.</h2>
            </div>
            <p>A product demonstration using the same example lead from first Reel to attributed revenue.</p>
          </div>
          <ol className="journey-rail" aria-label="Demo customer journey for Petr Novák" data-reveal="up">
            <li><small>01 / Instagram Reel</small><strong>Behind the scenes</strong><span>Content source</span></li>
            <li><small>02 / DM</small><strong>“How much is Ceramic Premium?”</strong><span>Incoming question</span></li>
            <li><small>03 / High intent</small><strong>94%</strong><span>Purchase intent</span></li>
            <li><small>04 / Lead</small><strong>Petr Novák</strong><span>9 990 Kč potential</span></li>
            <li><small>05 / Follow-up</small><strong>Sent after 12h</strong><span>Personalized DM</span></li>
            <li><small>06 / Booking</small><strong>Tue 23 · 11:00</strong><span>Ceramic Premium</span></li>
            <li><small>07 / Customer</small><strong>9 990 Kč</strong><span>Revenue recorded</span></li>
            <li><small>08 / Attribution</small><strong>Behind the scenes</strong><span>Revenue credited to Reel</span></li>
          </ol>
        </div>
      </section>

      <footer className="final-cta" id="contact">
        <div className="footer-cta shell" data-reveal="up">
          <h2>See the full path<br />from DM to revenue.</h2>
          <p>Review the example workflow, then tell us how your Instagram sales process works.</p>
          <div className="hero-buttons">
            <a className="button button-light" href="mailto:hello@wonback.com">Email Wonback <ArrowIcon /></a>
            <a className="button button-outline-dark" href="#demo-journey">Review demo journey <ArrowIcon /></a>
          </div>
        </div>
        <div className="footer-bottom shell">
          <div className="footer-brand"><a className="wordmark" href="#product">wonback</a><p>The lead-to-revenue OS.</p><small>© 2026 Wonback. All rights reserved.</small></div>
          <div className="footer-links" id="footer-nav">
            <nav aria-label="Footer navigation"><a href="#product">Product</a><a href="#how-it-works">How it works</a><a href="#features">Features</a><a href="#demo-journey">Demo journey</a></nav>
            <p>Built for service businesses selling through Instagram.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
