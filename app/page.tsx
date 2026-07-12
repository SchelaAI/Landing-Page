import SchelaScripts from "@/components/SchelaScripts";

export default function Home() {
  return (
    <>
      <SchelaScripts />
      {/* ============ NAV ============ */}
      <nav className="nav" id="nav">
        <div className="wrap nav-inner">
          <div className="brand">
            <div className="logomark" style={{ fontWeight: "450" }}>S</div>
            <span className="wordmark" style={{ fontWeight: "450" }}>Schela</span>
          </div>
          <div className="nav-links" style={{ fontWeight: "450" }}>
            <a href="#product" style={{ fontWeight: "450" }}>Product</a>
            <a href="#features" style={{ fontWeight: "450" }}>Features</a>
            <a href="#how-it-works" style={{ fontWeight: "450" }}>How It Works</a>
            <span className="nav-links-pricing soon" style={{ fontWeight: "450" }}>Pricing (Soon)</span>
          </div>
          <div className="nav-right" style={{ fontWeight: "450" }}>
            <a href="#" className="btn btn-ghost" style={{ fontWeight: "450" }}>Sign in</a>
            <a href="#early-access" className="btn btn-primary nav-cta-pulse" style={{ fontWeight: "450" }}>Join Early Access</a>
            <button className="hamburger" id="hamburgerBtn" aria-label="Open menu" style={{ fontWeight: "450" }}>
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* ============ MOBILE MENU ============ */}
      <div className="mobile-menu" id="mobileMenu">
        <div className="mobile-menu-top">
          <div className="brand">
            <div className="logomark">S</div>
            <span className="wordmark">Schela</span>
          </div>
          <button className="mobile-close" id="mobileCloseBtn" aria-label="Close menu">
            <span className="material-symbols-rounded">close</span>
          </button>
        </div>
        <div className="mobile-links">
          <a href="#product" className="mm-link" style={{ fontWeight: "450" }}>Product</a>
          <a href="#features" className="mm-link" style={{ fontWeight: "450" }}>Features</a>
          <a href="#how-it-works" className="mm-link" style={{ fontWeight: "450" }}>How It Works</a>
          <a className="soon" style={{ fontWeight: "450" }}>Pricing (Soon)</a>
        </div>
        <div className="mobile-menu-actions">
          <a href="#" className="btn btn-ghost">Sign in</a>
          <a href="#early-access" className="btn btn-primary">Join Early Access</a>
        </div>
      </div>

      {/* ============ HERO ============ */}
      <header className="hero" id="product">
        <div className="hero-bg-glow"></div>
        <div className="wrap hero-inner">
          <span className="building-badge blink-slow"><span className="building-dot"></span>BUILDING</span>
     
          <h1 aria-label="Stop chasing. Start hiring.">
            <span className="hero-line" id="heroLine1" aria-hidden="true"></span><br />
            <span className="hero-line" id="heroLine2" aria-hidden="true">
              <span id="heroStart"></span><span className="accent" id="heroAccent"></span>
            </span>
          </h1>
          <p className="hero-sub">Schela's AI reaches out to candidates, books interview slots, sends reminders, and handles rescheduling — across WhatsApp and Email, automatically.</p>
          <div className="hero-ctas">
            <a href="#early-access" className="btn btn-primary btn-lg">Join Early Access</a>
            <a href="#how-it-works" className="btn btn-ghost btn-lg">See how it works</a>
          </div>

          <div className="hero-visual">
            <div className="hero-mock-frame">
              <div className="hero-mock-bar"><span></span><span></span><span></span></div>
              <img className="hero-mock-img" id="dashboardImg" src="/hero-dashboard.jpg" alt="Schela recruiter dashboard showing today's interviews, AI activity, and pending actions" />
            </div>
            <div className="floating-card fc-confirmed">
              <div className="check"><span className="material-symbols-rounded">check</span></div>
              <div>
                <div className="fc-title">Schela confirmed Priya's interview</div>
                <div className="fc-sub">via WhatsApp · 2m ago</div>
              </div>
            </div>
            <div className="floating-card fc-wave">
              <div className="wave-bars"><span></span><span></span><span></span><span></span><span></span></div>
              <div>
                <div className="fc-title">AI activity — live</div>
                <div className="fc-sub">24 actions today</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ============ LOGO STRIP ============ */}
      <section className="logo-strip">
        <div className="wrap">
          <p className="logo-strip-label">Built for recruiters at</p>
        </div>
        <div className="marquee">
          <div className="marquee-track" id="marqueeTrack">
            <span className="marquee-item">Recruitment Agencies</span>
            <span className="marquee-item">Staffing Companies</span>
            <span className="marquee-item">Executive Search Firms</span>
            <span className="marquee-item">Talent Acquisition Teams</span>
            <span className="marquee-item">Startup Hiring Teams</span>
            <span className="marquee-item">Enterprise Hiring Teams</span>
            <span className="marquee-item">RPO (Recruitment Process Outsourcing) Firms</span>
          </div>
        </div>
      </section>

      {/* ============ PROBLEM ============ */}
      <section className="section-pad" id="features">
        <div className="wrap">
          <div className="section-head left">
            <span className="eyebrow-pill">THE PROBLEM</span>
            <h2>Scheduling is a full-time job<br />it shouldn't be.</h2>
            <p>The back-and-forth, the missed follow-ups, the no-shows — hours your best recruiters will never get back.</p>
          </div>
          <div className="stats-card">
            <div className="stats-grid" id="statsGrid">
              <div className="stat-card" style={{ "--stat-accent": "#E4572E" }}>
                <div className="stat-num">47<span className="suffix">/wk</span></div>
                <div className="stat-title">Follow-ups per recruiter</div>
                <div className="stat-label">Chasing candidates across channels eats 3–4 hours of every working day.</div>
              </div>
              <div className="stat-card" style={{ "--stat-accent": "#E4572E" }}>
                <div className="stat-num">34<span className="suffix">%</span></div>
                <div className="stat-title">Interviews rescheduled 1+ times</div>
                <div className="stat-label">Each reschedule triggers 5–8 new messages and cascades across calendars.</div>
              </div>
              <div className="stat-card" style={{ "--stat-accent": "#E4572E" }}>
                <div className="stat-num">28<span className="suffix">%</span></div>
                <div className="stat-title">Industry no-show rate</div>
                <div className="stat-label">Interviewers block time, prep, and show up. Candidates don't. Velocity collapses.</div>
              </div>
              <div className="stat-card" style={{ "--stat-accent": "#E4572E" }}>
                <div className="stat-num">4.2<span className="suffix">d</span></div>
                <div className="stat-title">Average days to confirm a slot</div>
                <div className="stat-label">By then, top candidates have accepted competing offers.</div>
              </div>
              <div className="stat-card" style={{ "--stat-accent": "#E4572E" }}>
                <div className="stat-num">60<span className="suffix">%</span></div>
                <div className="stat-title">Of recruiter time is admin</div>
                <div className="stat-label">Your best people doing logistics instead of closing candidates.</div>
              </div>
              <div className="stat-card" style={{ "--stat-accent": "#E4572E" }}>
                <div className="stat-num">3<span className="suffix">x</span></div>
                <div className="stat-title">More drop-off with slow scheduling</div>
                <div className="stat-label">Speed wins. Candidates accept faster offers while you're playing phone tag.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FEATURES ============ */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-head left" style={{ marginBottom: "76px" }}>
            <span className="eyebrow-pill">FEATURES</span>
            <h2>Everything needed to schedule<br />at agency scale.</h2>
            <p>Built for teams running hundreds of interviews a week — not a handful.</p>
          </div>

          <div className="features-row">
            <div className="feature-copy">
              <span className="feature-eyebrow">Whatsapp scheduling</span>
              <h3>Candidates reply 8× faster on WhatsApp.</h3>
              <p>No app download, no login — just a conversation they're already having. Schela's AI handles the entire flow, from outreach to confirmation, natively inside WhatsApp.</p>
            </div>
            <div className="feature-mock">
              <div className="feature-mock-frame">
                <div className="feature-mock-bar"><span></span><span></span><span></span></div>
                <div className="mock-list">
                  <div className="mock-row">
                    <div className="mock-row-icon i-green"><span className="material-symbols-rounded">chat_bubble</span></div>
                    <div className="mock-row-text">WhatsApp → Priya Kapoor</div>
                    <span className="mock-badge">Delivered</span>
                  </div>
                  <div className="mock-row">
                    <div className="mock-row-icon i-violet"><span className="material-symbols-rounded">mail</span></div>
                    <div className="mock-row-text">Email → Arjun Sharma</div>
                    <span className="mock-badge">Opened</span>
                  </div>
                  <div className="mock-row">
                    <div className="mock-row-icon i-amber"><span className="material-symbols-rounded">sms</span></div>
                    <div className="mock-row-text">SMS fallback → Neha Rathore</div>
                    <span className="mock-badge">Sent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="features-row">
            <div className="feature-mock">
              <div className="feature-mock-frame">
                <div className="feature-mock-bar"><span></span><span></span><span></span></div>
                <div className="mock-cal">
                  <div className="mock-cal-head">
                    <span>June 2026</span>
                    <div className="mock-cal-nav"><span className="material-symbols-rounded">chevron_left</span><span className="material-symbols-rounded">chevron_right</span></div>
                  </div>
                  <div className="mock-cal-grid">
                    <div className="cal-dow">MO</div><div className="cal-dow">TU</div><div className="cal-dow">WE</div><div className="cal-dow">TH</div><div className="cal-dow">FR</div><div className="cal-dow">SA</div><div className="cal-dow">SU</div>
                    <div className="cal-day">9</div><div className="cal-day">10</div><div className="cal-day range">11</div><div className="cal-day range">12</div><div className="cal-day range">13</div><div className="cal-day">14</div><div className="cal-day">15</div>
                    <div className="cal-day range">16</div><div className="cal-day selected">17</div><div className="cal-day range">18</div><div className="cal-day range">19</div><div className="cal-day range">20</div><div className="cal-day">21</div><div className="cal-day">22</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="feature-copy">
              <span className="feature-eyebrow">Calendar sync</span>
              <h3>Real-time availability, zero double bookings.</h3>
              <p>Two-way sync with Google Calendar and Outlook means candidates only ever see slots that are actually free — across every interviewer, every team, every time zone.</p>
            </div>
          </div>

          <div className="features-row">
            <div className="feature-copy">
              <span className="feature-eyebrow">Automated reminders</span>
              <h3>No-shows drop the moment you turn this on.</h3>
              <p>Configurable sequences at 24h, 2h, and 15m before the interview. If a candidate hasn't confirmed, the AI escalates across channels automatically.</p>
            </div>
            <div className="feature-mock">
              <div className="feature-mock-frame">
                <div className="feature-mock-bar"><span></span><span></span><span></span></div>
                <div className="mock-tl">
                  <div className="mock-tl-row">
                    <div className="mock-tl-dotcol"><div className="mock-tl-dot" style={{ background: "var(--emerald)" }}></div><div className="mock-tl-line"></div></div>
                    <div><div className="mock-tl-title">Interview confirmed</div><div className="mock-tl-sub">Jun 14 · All parties notified</div></div>
                  </div>
                  <div className="mock-tl-row">
                    <div className="mock-tl-dotcol"><div className="mock-tl-dot" style={{ background: "var(--emerald)" }}></div><div className="mock-tl-line"></div></div>
                    <div><div className="mock-tl-title">24h reminder sent</div><div className="mock-tl-sub">Jun 16 · WhatsApp + Email</div></div>
                  </div>
                  <div className="mock-tl-row">
                    <div className="mock-tl-dotcol"><div className="mock-tl-dot" style={{ background: "var(--violet)" }}></div><div className="mock-tl-line"></div></div>
                    <div><div className="mock-tl-title">2h reminder — sending soon</div><div className="mock-tl-sub">Jun 17 · WhatsApp</div></div>
                  </div>
                  <div className="mock-tl-row">
                    <div className="mock-tl-dotcol"><div className="mock-tl-dot" style={{ background: "var(--ink4)" }}></div></div>
                    <div><div className="mock-tl-title muted">15m reminder</div><div className="mock-tl-sub">Jun 17 · SMS fallback</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="features-row">
            <div className="feature-mock">
              <div className="feature-mock-frame">
                <div className="feature-mock-bar"><span></span><span></span><span></span></div>
                <div className="mock-chart">
                  <div className="mock-bar-col"><div className="mock-bar" style={{ height: "58%" }}></div><span className="mock-bar-label">Mon</span></div>
                  <div className="mock-bar-col"><div className="mock-bar" style={{ height: "74%" }}></div><span className="mock-bar-label">Tue</span></div>
                  <div className="mock-bar-col"><div className="mock-bar" style={{ height: "48%" }}></div><span className="mock-bar-label">Wed</span></div>
                  <div className="mock-bar-col"><div className="mock-bar" style={{ height: "100%" }}></div><span className="mock-bar-label">Thu</span></div>
                  <div className="mock-bar-col"><div className="mock-bar" style={{ height: "68%" }}></div><span className="mock-bar-label">Fri</span></div>
                  <div className="mock-bar-col"><div className="mock-bar" style={{ height: "38%" }}></div><span className="mock-bar-label">Sat</span></div>
                  <div className="mock-bar-col"><div className="mock-bar" style={{ height: "24%" }}></div><span className="mock-bar-label">Sun</span></div>
                </div>
              </div>
            </div>
            <div className="feature-copy">
              <span className="feature-eyebrow">Recruiter analytics</span>
              <h3>See exactly what's working.</h3>
              <p>Time-to-schedule, response rates, no-show trends, and team performance — all in one live dashboard built for recruiters, not data analysts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TIME SAVED CALCULATOR ============ */}
      <section className="section-pad" style={{ background: "var(--surface2)" }}>
        <div className="wrap">
          <div className="section-head left" style={{ marginBottom: "52px" }}>
            <span className="eyebrow-pill">TIME SAVED</span>
            <h2>How much time will<br />Schela give back?</h2>
            <p>Move the sliders to see exactly how many hours your team gets back each month.</p>
          </div>

          <div className="tsc-card">
            <div className="tsc-head">
              <span className="tsc-head-title">Time savings calculator</span>
              <span className="tsc-head-badge" id="tscBadge">55.3h saved / month</span>
            </div>
            <div className="tsc-body">
              <div className="tsc-controls">
                <div className="tsc-slider-row">
                  <div className="tsc-slider-top">
                    <span className="tsc-slider-label">Interviews per week</span>
                    <span className="tsc-slider-value" id="tscInterviewsVal">30</span>
                  </div>
                  <input type="range" className="tsc-range" id="tscInterviews" min="5" max="100" value="30" step="1" />
                  <p className="tsc-caption">Across all recruiters and roles</p>
                </div>
                <div className="tsc-slider-row">
                  <div className="tsc-slider-top">
                    <span className="tsc-slider-label">Coordination minutes per interview</span>
                    <span className="tsc-slider-value" id="tscCoordVal">25m</span>
                  </div>
                  <input type="range" className="tsc-range" id="tscCoord" min="5" max="60" value="25" step="1" />
                  <p className="tsc-caption">Outreach, back-and-forth, confirmation</p>
                </div>
                <div className="tsc-slider-row">
                  <div className="tsc-slider-top">
                    <span className="tsc-slider-label">Reschedule rate</span>
                    <span className="tsc-slider-value" id="tscReschedVal">30%</span>
                  </div>
                  <input type="range" className="tsc-range" id="tscResched" min="0" max="60" value="30" step="1" />
                  <p className="tsc-caption">% of interviews needing rescheduling</p>
                </div>
              </div>
              <div className="tsc-result">
                <div className="tsc-result-num"><span id="tscHours">55.3</span><span className="unit">h</span></div>
                <div className="tsc-result-label">saved per month</div>
                <div className="tsc-result-sub">≈ <span id="tscDays">6.9</span> full working days back every month</div>
                <a href="#early-access" className="btn btn-primary tsc-result-btn">Reclaim this time →</a>
              </div>
            </div>
            <p className="tsc-footnote">Estimates based on industry-reported averages. Actual results measured after deployment.</p>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section id="how-it-works">
        <div className="wrap" style={{ paddingTop: "64px" }}>
          <div className="section-head left" style={{ marginBottom: "0" }}>
            <span className="eyebrow-pill">HOW IT WORKS</span>
            <h2>Add a candidate.<br />AI handles everything else.</h2>
            <p>The full coordination loop — outreach, booking, reminders, rescheduling — runs automatically.</p>
          </div>
        </div>

        <div className="hiw-scroll" id="hiwScroll">
          <div className="hiw-sticky">
            <div className="wrap hiw-grid">
              <div className="hiw-steps" id="hiwSteps">
                <div className="hiw-step active" data-step="0">
                  <div className="hiw-step-num">01</div>
                  <div>
                    <div className="hiw-step-title">Add the candidate</div>
                    <div className="hiw-step-desc">Drop a candidate in via ATS sync, CSV, or manually. Schela picks it up and begins coordination within seconds.</div>
                  </div>
                </div>
                <div className="hiw-step" data-step="1">
                  <div className="hiw-step-num">02</div>
                  <div>
                    <div className="hiw-step-title">AI reaches out on their channel</div>
                    <div className="hiw-step-desc">The AI contacts candidates on WhatsApp or Email — whichever gets the best response. Instant, personalized, no recruiter needed.</div>
                  </div>
                </div>
                <div className="hiw-step" data-step="2">
                  <div className="hiw-step-num">03</div>
                  <div>
                    <div className="hiw-step-title">Candidate selects a slot</div>
                    <div className="hiw-step-desc">Candidates pick from real-time slots synced to interviewer calendars. One tap. No login, no app, zero friction.</div>
                  </div>
                </div>
                <div className="hiw-step" data-step="3">
                  <div className="hiw-step-num">04</div>
                  <div>
                    <div className="hiw-step-title">Everyone gets confirmed instantly</div>
                    <div className="hiw-step-desc">Calendar invites, video links, and confirmations go to all parties immediately. Recruiter only sees the outcome.</div>
                  </div>
                </div>
                <div className="hiw-step" data-step="4">
                  <div className="hiw-step-num">05</div>
                  <div>
                    <div className="hiw-step-title">AI follows through, always</div>
                    <div className="hiw-step-desc">Automatic reminders at 24h, 2h, and 15m. Cancellations trigger re-coordination without anyone lifting a finger.</div>
                  </div>
                </div>
              </div>

              <div className="hiw-panel-wrap">
                <div className="hiw-panel">
                  <div className="hiw-panel-bar">
                    <div className="hiw-panel-dots"><span></span><span></span><span></span></div>
                    <span className="hiw-panel-tab" id="hiwPanelTab">01 · add-candidate</span>
                  </div>
                  <div className="hiw-panel-body">
                    {/* Frame 0 */}
                    <div className="hiw-frame show" data-frame="0">
                      <div className="hiw-frame-label">2 candidates added</div>
                      <div className="hiw-cand-row">
                        <div className="hiw-avatar" style={{ background: "var(--violet)" }}>PK</div>
                        <div className="hiw-cand-info"><div className="hiw-cand-name">Priya Kapoor</div><div className="hiw-cand-sub">Product Manager · priya@gmail.com</div></div>
                        <span className="hiw-tag hiw-tag-green">Added</span>
                      </div>
                      <div className="hiw-cand-row">
                        <div className="hiw-avatar" style={{ background: "var(--emerald)" }}>AS</div>
                        <div className="hiw-cand-info"><div className="hiw-cand-name">Arjun Sharma</div><div className="hiw-cand-sub">Senior SDE · arjun@corp.com</div></div>
                        <span className="hiw-tag hiw-tag-green">Added</span>
                      </div>
                      <div className="hiw-ai-bar"><span className="material-symbols-rounded">bolt</span>AI starting coordination for 2 candidates…</div>
                    </div>
                    {/* Frame 1 */}
                    <div className="hiw-frame" data-frame="1">
                      <div className="hiw-frame-label">Reaching out</div>
                      <div className="hiw-cand-row">
                        <div className="hiw-avatar" style={{ background: "var(--emerald)" }}><span className="material-symbols-rounded" style={{ fontSize: "18px" }}>chat_bubble</span></div>
                        <div className="hiw-cand-info"><div className="hiw-cand-name">WhatsApp → Priya Kapoor</div><div className="hiw-cand-sub">Message delivered · 2 slots offered</div></div>
                        <span className="hiw-tag hiw-tag-green">Sent</span>
                      </div>
                      <div className="hiw-cand-row">
                        <div className="hiw-avatar" style={{ background: "var(--blue)" }}><span className="material-symbols-rounded" style={{ fontSize: "18px" }}>mail</span></div>
                        <div className="hiw-cand-info"><div className="hiw-cand-name">Email → Arjun Sharma</div><div className="hiw-cand-sub">Opened · awaiting reply</div></div>
                        <span className="hiw-tag hiw-tag-blue">Opened</span>
                      </div>
                      <div className="hiw-ai-bar"><span className="material-symbols-rounded">psychology</span>Personalized outreach — no recruiter needed.</div>
                    </div>
                    {/* Frame 2 */}
                    <div className="hiw-frame" data-frame="2">
                      <div className="hiw-frame-label">Priya picked a slot</div>
                      <div className="hiw-slot-grid">
                        <span className="hiw-slot">Mon 10:00</span>
                        <span className="hiw-slot picked">Tue 11:00 ✓</span>
                        <span className="hiw-slot">Wed 15:00</span>
                        <span className="hiw-slot">Thu 09:30</span>
                      </div>
                      <div className="hiw-cand-row" style={{ marginTop: "4px" }}>
                        <div className="hiw-avatar" style={{ background: "var(--violet)" }}>PK</div>
                        <div className="hiw-cand-info"><div className="hiw-cand-name">Tue, 11:00 AM confirmed</div><div className="hiw-cand-sub">Synced to interviewer calendar · one tap</div></div>
                        <span className="hiw-tag hiw-tag-green">Confirmed</span>
                      </div>
                    </div>
                    {/* Frame 3 */}
                    <div className="hiw-frame" data-frame="3">
                      <div className="hiw-frame-label">Confirmed — all parties notified</div>
                      <div className="hiw-check-row"><div className="hiw-check"><span className="material-symbols-rounded">check</span></div>Calendar invite sent to candidate & panel</div>
                      <div className="hiw-check-row"><div className="hiw-check"><span className="material-symbols-rounded">check</span></div>Video link generated & attached</div>
                      <div className="hiw-check-row"><div className="hiw-check"><span className="material-symbols-rounded">check</span></div>Confirmation delivered on WhatsApp</div>
                      <div className="hiw-ai-bar" style={{ background: "var(--emerald-tint)", color: "var(--emerald)" }}><span className="material-symbols-rounded">task_alt</span>Recruiter only sees the outcome.</div>
                    </div>
                    {/* Frame 4 */}
                    <div className="hiw-frame" data-frame="4">
                      <div className="hiw-frame-label">Reminders scheduled</div>
                      <div className="hiw-mini-tl">
                        <div className="hiw-mini-row"><div className="hiw-mini-dot" style={{ background: "var(--violet)" }}></div><div className="hiw-mini-text">T-24h reminder <span className="m">· WhatsApp</span></div></div>
                        <div className="hiw-mini-row"><div className="hiw-mini-dot" style={{ background: "var(--violet)" }}></div><div className="hiw-mini-text">T-2h reminder <span className="m">· WhatsApp</span></div></div>
                        <div className="hiw-mini-row"><div className="hiw-mini-dot" style={{ background: "var(--amber)" }}></div><div className="hiw-mini-text">T-15m reminder <span className="m">· SMS fallback</span></div></div>
                      </div>
                      <div className="hiw-ai-bar" style={{ background: "var(--amber-tint)", color: "var(--amber)" }}><span className="material-symbols-rounded">autorenew</span>Cancellation → auto re-coordination.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ INTEGRATIONS ============ */}
      <section className="section-pad" style={{ background: "var(--surface2)" }}>
        <div className="wrap">
          <div className="section-head left" style={{ marginBottom: "52px" }}>
            <span className="eyebrow-pill">INTEGRATIONS</span>
            <h2>
              Works with your
              <br />
              existing stack.
            </h2>
            <p>
              Native connectors for the tools your team already uses. Up and running in under 30 minutes.
            </p>
          </div>
          <div className="integ-grid" id="integGrid">
            <div className="integ-card">
              <div className="integ-icon">
                <img width={48} height={48} src="https://img.icons8.com/color/48/google-calendar--v2.png" alt="Google Calendar" />
              </div>
              <div className="integ-name">Google Cal</div>
              <div className="integ-cat">Calendar</div>
            </div>
            <div className="integ-card" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <div className="integ-icon" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img
                  width={48}
                  height={48}
                  src="https://d1myhw8pp24x4f.cloudfront.net/software_logo/1560953968_Zoho%20Recruit_mid.png"
                  alt="Zoho Recruit Logo by Brandfetch"
                  style={{ display: "block", margin: "0 auto" }}
                />
              </div>
              <div className="integ-name" style={{ textAlign: "center" }}>Zoho Recruit</div>
              <div className="integ-cat" style={{ textAlign: "center" }}>ATS</div>
            </div>
            <div className="integ-card">
              <div className="integ-icon">
                <img width={48} height={48} src="https://assets-global.website-files.com/62fe5b9ef9e612fe4fed7ff1/63bf4122ced9145885a65b12_g-icon-green.png" alt="Greenhouse" />
              </div>
              <div className="integ-name">Greenhouse</div>
              <div className="integ-cat">ATS</div>
            </div>
      
            <div className="integ-card">
              <div className="integ-icon">
                <img width={48} height={48} src="https://img.icons8.com/fluency/48/microsoft-outlook-2025.png" alt="Microsoft Outlook" />
              </div>
              <div className="integ-name">Outlook</div>
              <div className="integ-cat">Calendar</div>
            </div>
            <div className="integ-card">
              <div className="integ-icon">
                <img width={48} height={48} src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="WhatsApp" />
              </div>
              <div className="integ-name">WhatsApp</div>
              <div className="integ-cat">Messaging</div>
            </div>
            <div className="integ-card">
              <div className="integ-icon" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img width={48} height={48} src="https://img.icons8.com/fluency/48/zoom.png" alt="Zoom" />
              </div>
              <div className="integ-name">Zoom</div>
              <div className="integ-cat">Video</div>
            </div>
            <div className="integ-card">
              <div
                className="integ-icon"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  width={36}
                  height={36}
                  src="https://www.vectorlogo.zone/logos/leverco/leverco-icon.svg"
                  alt="Lever"
                  style={{ display: "block", margin: "0 auto", maxWidth: "36px", maxHeight: "36px", objectFit: "contain" }}
                />
          
              </div>
        
              <div className="integ-name">Lever</div>
              <div className="integ-cat">ATS</div>
            </div>
            <div className="integ-card">
              <div className="integ-icon" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img width={48} height={48} src="https://img.icons8.com/color/48/google-meet--v1.png" alt="Google Meet" />
              </div>
              <div className="integ-name">Google Meet</div>
              <div className="integ-cat">Video</div>
            </div>
            <div className="integ-card">
              <div className="integ-icon" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img width={48} height={48} src="https://img.icons8.com/ios/50/more.png" alt="More integrations" />
              </div>
              <div className="integ-name">And many more</div>
              <div className="integ-cat">Custom</div>
            </div>
          </div>
        </div>
      </section>
 

      {/* ============ ASK SCHELA ============ */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Ask Schela</span>
            <h2>Ask anything about your pipeline.</h2>
            <p>Schela knows your scheduling data. Ask in plain English, get instant answers.</p>
          </div>
          <div className="ask-grid">
            <div>
              <div className="prompt-card"><div className="prompt-icon"><span className="material-symbols-rounded">person_search</span></div><div className="prompt-text">Which candidates haven't responded in 48 hours?</div></div>
              <div className="prompt-card"><div className="prompt-icon"><span className="material-symbols-rounded">timer</span></div><div className="prompt-text">What's my average time-to-schedule this month?</div></div>
              <div className="prompt-card"><div className="prompt-icon"><span className="material-symbols-rounded">trending_down</span></div><div className="prompt-text">Why did no-shows spike last week?</div></div>
              <div className="prompt-card"><div className="prompt-icon"><span className="material-symbols-rounded">bolt</span></div><div className="prompt-text">Which channel gets the fastest replies?</div></div>
            </div>
            <div className="ask-panel" id="askPanel"></div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="section-pad" style={{ background: "var(--surface2)" }}>
        <div className="wrap">
          <div className="section-head left" style={{ marginBottom: "48px" }}>
            <span className="eyebrow-pill">FAQ</span>
            <h2>Common questions.</h2>
            <p>Anything else — our team replies within the hour.</p>
          </div>
          <div className="faq-grid" id="faqGrid">
            <div className="faq-item open">
              <button className="faq-header">
                <span className="faq-question">Does Schela integrate with our ATS?</span>
                <span className="faq-icon"></span>
              </button>
              <div className="faq-body-wrap"><div className="faq-body-inner">
                <p className="faq-answer">Yes. Native connectors for Greenhouse, Lever, Workday, SAP SuccessFactors, and Zoho Recruit. REST API and CSV import cover everything else. Most teams are live in under 30 minutes.</p>
              </div></div>
            </div>
            <div className="faq-item">
              <button className="faq-header">
                <span className="faq-question">How does WhatsApp scheduling work?</span>
                <span className="faq-icon"></span>
              </button>
              <div className="faq-body-wrap"><div className="faq-body-inner">
                <p className="faq-answer">Candidates get a message from your branded number. They tap to pick a slot — no download, no login. The full flow takes under 2 minutes and works on any phone.</p>
              </div></div>
            </div>
            <div className="faq-item">
              <button className="faq-header">
                <span className="faq-question">What if a candidate doesn't respond?</span>
                <span className="faq-icon"></span>
              </button>
              <div className="faq-body-wrap"><div className="faq-body-inner">
                <p className="faq-answer">Schela escalates automatically: WhatsApp → Email → SMS. You configure the sequence once, and it runs without any recruiter involvement.</p>
              </div></div>
            </div>
            <div className="faq-item">
              <button className="faq-header">
                <span className="faq-question">Is candidate data private and secure?</span>
                <span className="faq-icon"></span>
              </button>
              <div className="faq-body-wrap"><div className="faq-body-inner">
                <p className="faq-answer">All data is encrypted in transit and at rest. Candidate data is never shared or used to train models — full stop.</p>
              </div></div>
            </div>
            <div className="faq-item">
              <button className="faq-header">
                <span className="faq-question">How long does onboarding take?</span>
                <span className="faq-icon"></span>
              </button>
              <div className="faq-body-wrap"><div className="faq-body-inner">
                <p className="faq-answer">Schela is built for same-day setup. Calendar and ATS connections are guided, and every early access partner gets a dedicated onboarding session with the founding team.</p>
              </div></div>
            </div>
            <div className="faq-item">
              <button className="faq-header">
                <span className="faq-question">Can we white-label this under our brand?</span>
                <span className="faq-icon"></span>
              </button>
              <div className="faq-body-wrap"><div className="faq-body-inner">
                <p className="faq-answer">Yes — your brand name in messages, your number for voice, custom from-addresses. Popular with executive search firms and RPO providers that want a premium candidate experience.</p>
              </div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="cta-section" id="early-access">
        <div className="cta-glow"></div>
        <div className="cta-grain"></div>
        <div className="wrap cta-inner" style={{ fontWeight: "600" }}>
          <h2 style={{ fontWeight: "600" }}>Hire Faster. <span style={{ color: "#C4B5FD", fontWeight: "600" }}>Stop Chasing.</span></h2>
          <p style={{ fontWeight: "600" }}>Join early access and let Schela run your interview coordination.</p>
          <div className="cta-btns">
            <a href="#" className="btn btn-dark btn-lg" style={{ fontWeight: "600" }}>Join Early Access</a>
            <a href="#how-it-works" className="btn btn-ghost-dark btn-lg" style={{ fontWeight: "600" }}>See how it works</a>
          </div>
          <p className="cta-foot" style={{ fontWeight: "600" }}>Every early access member gets a dedicated onboarding session with the founding team.</p>
        </div>
      </section>

      {/* ============ SCHELA WORDMARK SHOWCASE ============ */}
      <section className="wordmark-section">
        <div className="wordmark-glow"></div>
        <div className="wrap">
          <span className="wordmark-tag">The AI Recruiting Coordinator</span>
          <div className="wordmark-big">SCHELA</div>
          <div className="wordmark-underline"></div>
          <p className="wordmark-sub">Building the future of interview coordination — one thread at a time.</p>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="footer">
        <div className="wrap footer-inner">
          <div className="brand">
            <div className="logomark">S</div>
            <span className="footer-copy">© 2026 Schela. All rights reserved.</span>
          </div>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
            <a href="https://www.linkedin.com/company/schela/">LinkedIn</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </footer>

      {/* ============ JOIN EARLY ACCESS MODAL ============ */}
      <div className="jm-overlay" id="jmOverlay" aria-hidden="true">
        <div className="jm-modal" role="dialog" aria-modal="true" aria-labelledby="jmHeadline">
          <button type="button" className="jm-close" id="jmClose" aria-label="Close">
            <span className="material-symbols-rounded">close</span>
          </button>

          <div id="jmFormWrap">
            <div className="jm-header">
              <div className="jm-logo-row"><div className="logomark">S</div></div>
              <span className="jm-badge">COMING SOON</span>
              <h2 className="jm-headline" id="jmHeadline">Be first when we launch.</h2>
              <p className="jm-subline">Schela isn't live yet. Leave your details — we'll reach out personally when beta opens.</p>
            </div>

            <form id="jmForm" noValidate>
              <div className="jm-field" id="jmField-name">
                <label className="jm-label" htmlFor="jmName">Full Name</label>
                <input className="jm-input" type="text" id="jmName" name="name" placeholder="Jane Cooper" autoComplete="name" />
                <p className="jm-error-msg">Please enter your full name.</p>
              </div>

              <div className="jm-field" id="jmField-email">
                <label className="jm-label" htmlFor="jmEmail">Email</label>
                <input className="jm-input" type="email" id="jmEmail" name="email" placeholder="jane@company.com" autoComplete="email" />
                <p className="jm-error-msg" id="jmEmailError">Please enter a valid email address.</p>
              </div>

              <div className="jm-field" id="jmField-role">
                <label className="jm-label" htmlFor="jmRole">Role</label>
                <input className="jm-input" type="text" id="jmRole" name="role" placeholder="Recruiter, TA Lead, Founder…" autoComplete="organization-title" />
                <p className="jm-error-msg">Please enter your role.</p>
              </div>

              <div className="jm-field" id="jmField-company">
                <label className="jm-label" htmlFor="jmCompany">Company <span style={{ color: "var(--ink4)", fontWeight: "400" }}>(optional)</span></label>
                <input className="jm-input" type="text" id="jmCompany" name="company" placeholder="Acme Talent Partners" autoComplete="organization" />
              </div>

              <div className="jm-field" id="jmField-teamsize">
                <label className="jm-label">Team Size</label>
                <div className="jm-chip-group jm-teamsize" id="jmTeamSize">
                  <button type="button" className="jm-chip" data-value="Solo">Solo</button>
                  <button type="button" className="jm-chip" data-value="2–5">2–5</button>
                  <button type="button" className="jm-chip" data-value="6–20">6–20</button>
                  <button type="button" className="jm-chip" data-value="20+">20+</button>
                </div>
                <p className="jm-error-msg">Please select a team size.</p>
              </div>

              <div className="jm-field" id="jmField-channels">
                <label className="jm-label">How do you reach candidates today?</label>
                <div className="jm-chip-group" id="jmChannels">
                  <button type="button" className="jm-chip jm-chip-whatsapp" data-value="WhatsApp">
                    <span className="material-symbols-rounded">chat_bubble</span>WhatsApp
                  </button>
                  <button type="button" className="jm-chip jm-chip-email" data-value="Email">
                    <span className="material-symbols-rounded">mail</span>Email
                  </button>
                  <button type="button" className="jm-chip jm-chip-sms" data-value="SMS">
                    <span className="material-symbols-rounded">sms</span>SMS
                  </button>
                  <button type="button" className="jm-chip jm-chip-voice" data-value="Voice Call">
                    <span className="material-symbols-rounded">call</span>Voice Call
                  </button>
                </div>
                <p className="jm-error-msg">Please select at least one channel.</p>
              </div>

              <button type="submit" className="jm-submit" id="jmSubmit">
                <span className="jm-btn-text">Notify Me at Launch →</span>
                <span className="jm-btn-loading"><span></span><span></span><span></span></span>
              </button>
              <p className="jm-submit-error" id="jmSubmitError" hidden>Something went wrong. Please try again.</p>
              <p className="jm-fineprint">No spam · Personal outreach only when beta is ready</p>
            </form>
          </div>

          <div className="jm-success" id="jmSuccess">
            <div className="jm-success-icon"><span className="material-symbols-rounded">check</span></div>
            <h2 className="jm-success-headline">You're on the list.</h2>
            <p className="jm-success-sub">We'll reach out personally — not an automated email.</p>
          </div>
        </div>
      </div>
    </>
  );
}
