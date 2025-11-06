var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/lib/layout.ts
var navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Gallery", path: "/gallery" },
  { label: "Privacy", path: "/privacy" },
  { label: "MembersOnly-NSFW", path: "/nsfw" }
];
var socials = [
  { label: "Discord", href: "https://discord.gg/upjJngEUQJ" },
  { label: "Twitch", href: "https://www.twitch.tv/rainbowsmoke_us" },
  { label: "Instagram", href: "https://www.instagram.com/rainbowsmoke_us/" },
  { label: "YouTube", href: "https://www.youtube.com/@rainbowsmoke_us" },
  { label: "TikTok US", href: "https://www.tiktok.com/@rainbowsmoke_us" },
  { label: "TikTok MX", href: "https://www.tiktok.com/@rainbowsmoke_mx" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dehavillandfox/" }
];
var renderPage = /* @__PURE__ */ __name((page) => {
  const activePath = page.path.replace(/\/+$/, "") || "/";
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${page.title}</title>
    <meta name="description" content="${page.description}" />
    <link rel="stylesheet" href="https://use.typekit.net/ojc8wen.css" />
    <style>
      :root {
        color-scheme: light;
        --rainbow: linear-gradient(135deg, #ff4136, #ff851b, #ffdc00, #2ecc40, #0074d9, #b10dc9);
        --bg-dark: #02010b;
        --bg-panel: rgba(255, 255, 255, 0.1);
        --text-primary: #ffffff;
        --text-secondary: rgba(255, 255, 255, 0.76);
        font-family: 'Omnes', sans-serif;
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        min-height: 100vh;
        background: radial-gradient(circle at top, rgba(255, 255, 255, 0.1), transparent), var(--bg-dark);
        color: var(--text-primary);
        display: flex;
        flex-direction: column;
      }

      header {
        position: sticky;
        top: 0;
        z-index: 10;
        backdrop-filter: blur(12px);
        background: rgba(2, 1, 11, 0.9);
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      }

      .container {
        width: min(1040px, 90vw);
        margin: 0 auto;
      }

      nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 0;
        gap: 1rem;
      }

      nav a {
        text-decoration: none;
        color: var(--text-secondary);
        text-transform: uppercase;
        letter-spacing: 0.08em;
        font-size: 0.85rem;
        transition: color 0.2s ease, transform 0.2s ease;
      }

      nav a:hover,
      nav a:focus-visible {
        color: var(--text-primary);
        transform: translateY(-1px);
      }

      nav a.active {
        color: var(--text-primary);
        border-bottom: 2px solid #ffdc00;
        padding-bottom: 0.25rem;
      }

      main {
        flex: 1;
        padding: 3rem 0;
      }

      .hero {
        background: var(--rainbow);
        border-radius: 24px;
        padding: 3rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 2rem;
        box-shadow: 0 18px 60px rgba(0, 0, 0, 0.35);
      }

      .hero img {
        width: 160px;
        height: 160px;
        border-radius: 50%;
        border: 4px solid rgba(255, 255, 255, 0.8);
        object-fit: cover;
        justify-self: center;
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
      }

      .hero h1 {
        font-family: 'Le Havre Rounded', sans-serif;
        margin: 0;
        font-size: clamp(2.5rem, 4vw, 3.5rem);
        color: #02010b;
      }

      .hero p {
        margin: 0.5rem 0 0;
        font-size: 1.1rem;
        color: rgba(2, 1, 11, 0.75);
        max-width: 60ch;
      }

      section {
        margin-top: 3rem;
        background: var(--bg-panel);
        border-radius: 24px;
        padding: 2.5rem;
        box-shadow: 0 18px 50px rgba(0, 0, 0, 0.2);
      }

      section h2 {
        margin-top: 0;
        font-family: 'Kegger Collegiate Regular', sans-serif;
        letter-spacing: 0.05em;
      }

      label span,
      fieldset legend {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 600;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        font-size: 0.75rem;
      }

      input,
      textarea {
        width: 100%;
        padding: 0.75rem 1rem;
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background: rgba(2, 1, 11, 0.6);
        color: var(--text-primary);
        font-size: 1rem;
        font-family: inherit;
      }

      input:focus-visible,
      textarea:focus-visible {
        outline: 2px solid rgba(255, 220, 0, 0.6);
        outline-offset: 2px;
      }

      fieldset {
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 16px;
        padding: 1.25rem;
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
      }

      fieldset label {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        font-size: 0.75rem;
      }

      footer {
        margin-top: 3rem;
        background: rgba(0, 0, 0, 0.64);
        padding: 2rem 0;
      }

      footer .grid {
        display: grid;
        gap: 1.5rem;
      }

      @media (min-width: 720px) {
        footer .grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      ul li {
        margin: 0.5rem 0;
      }

      ul li a {
        color: var(--text-secondary);
        text-decoration: none;
      }

      ul li a:hover,
      ul li a:focus-visible {
        color: var(--text-primary);
      }

      .subtitle {
        text-transform: uppercase;
        letter-spacing: 0.1em;
        font-size: 0.75rem;
        color: rgba(255, 255, 255, 0.56);
      }

      .content {
        display: grid;
        gap: 1rem 2rem;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      }
    </style>
  </head>
  <body>
    <header>
      <div class="container">
        <nav aria-label="Primary">
          ${navItems.map((item) => {
    const normalized = item.path.replace(/\/+$/, "") || "/";
    const active = normalized === activePath;
    return `<a href="${item.path}" ${active ? 'class="active"' : ""}>-${item.label}-</a>`;
  }).join("")}
        </nav>
      </div>
    </header>
    <main>
      <div class="container">
        <div class="hero">
          <img src="https://pub-da090b3a2b0f44d4830b676a91d4850e.r2.dev/rainbow-media/gallery/1.svg" alt="Mr. RainbowSmoke profile" />
          <div>
            <h1>${page.title}</h1>
            <p>${page.heroTagline}</p>
          </div>
        </div>
        <section aria-labelledby="content">
          <div id="content">${page.body}</div>
        </section>
      </div>
    </main>
    <footer>
      <div class="container">
        <div class="grid">
          <div>
            <p class="subtitle">Connect</p>
            <ul>
              ${socials.map((link) => `<li><a href="${link.href}" target="_blank" rel="noopener">${link.label}</a></li>`).join("")}
            </ul>
          </div>
          <div>
            <p class="subtitle">Support</p>
            <ul>
              <li><a href="https://paypal.me/mrrainbowsmoke" target="_blank" rel="noopener">PayPal</a></li>
              <li><a href="https://www.buymeacoffee.com/rainbowsmoke" target="_blank" rel="noopener">Buy Me Coffee</a></li>
              <li><a href="https://www.blockchain.com/btc/address/bc1q8d4fqhvk2j9gmn5nrp839tv83yvye2zhma9av4" target="_blank" rel="noopener">Bitcoin</a></li>
              <li><a href="https://www.blockchain.com/eth/address/0xEBE0847Dc638F1F41414F1ccD7e7813f5b2Fc8a3" target="_blank" rel="noopener">Ethereum</a></li>
            </ul>
          </div>
          <div>
            <p class="subtitle">\xA9 ${(/* @__PURE__ */ new Date()).getFullYear()} Mr. RainbowSmoke</p>
            <p>Engineer, gamer, dancer\u2014building inclusive experiences across every network.</p>
          </div>
        </div>
      </div>
    </footer>
    <script type="text/javascript" src="https://res.public.onecdn.static.microsoft/customerconnect/v1/7dttl/init.js" id="chatbot" environmentId="6c9a37bc-a1b7-e14e-8f55-85f46c310501" crossorigin="anonymous"><\/script>
  </body>
</html>
  `.trim();
}, "renderPage");

// src/lib/sanitize.ts
var map = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var escapeHtml = /* @__PURE__ */ __name((value) => value.replace(/[&<>"']/g, (character) => map[character]), "escapeHtml");

// src/lib/contact.ts
var normalizeField = /* @__PURE__ */ __name((value) => {
  if (typeof value !== "string") {
    return "";
  }
  return value.trim();
}, "normalizeField");
var parseContactForm = /* @__PURE__ */ __name((formData) => {
  const interests = formData.getAll("interests").map((entry) => normalizeField(entry)).filter(Boolean);
  return {
    firstName: normalizeField(formData.get("firstName")),
    lastName: normalizeField(formData.get("lastName")),
    email: (() => {
      const value = normalizeField(formData.get("email"));
      return value.toLowerCase();
    })(),
    phone: normalizeField(formData.get("phone")) || void 0,
    discord: normalizeField(formData.get("discord")) || void 0,
    interests,
    message: normalizeField(formData.get("message"))
  };
}, "parseContactForm");

// src/lib/admin-auth.ts
var SESSION_PREFIX = "admin_session:";
var generateSessionId = /* @__PURE__ */ __name(() => {
  if (typeof crypto.randomUUID === "function") {
    return crypto.randomUUID().replace(/-/g, "");
  }
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
}, "generateSessionId");
var ADMIN_SESSION_COOKIE = "rainbowsmoke_admin";
var ADMIN_SESSION_TTL_SECONDS = 60 * 60 * 8;
var adminSessionKey = /* @__PURE__ */ __name((sessionId) => `${SESSION_PREFIX}${sessionId}`, "adminSessionKey");
var createAdminSession = /* @__PURE__ */ __name(async (kv) => {
  if (!kv) {
    return void 0;
  }
  const sessionId = generateSessionId();
  await kv.put(adminSessionKey(sessionId), "1", { expirationTtl: ADMIN_SESSION_TTL_SECONDS });
  return sessionId;
}, "createAdminSession");
var validateAdminSession = /* @__PURE__ */ __name(async (kv, sessionId) => {
  if (!kv || !sessionId) {
    return false;
  }
  const key = adminSessionKey(sessionId);
  const stored = await kv.get(key);
  if (!stored) {
    return false;
  }
  await kv.put(key, "1", { expirationTtl: ADMIN_SESSION_TTL_SECONDS });
  return true;
}, "validateAdminSession");
var destroyAdminSession = /* @__PURE__ */ __name(async (kv, sessionId) => {
  if (!kv || !sessionId) {
    return;
  }
  await kv.delete(adminSessionKey(sessionId));
}, "destroyAdminSession");
var createAdminSessionCookie = /* @__PURE__ */ __name((sessionId) => `${ADMIN_SESSION_COOKIE}=${encodeURIComponent(sessionId)}; Max-Age=${ADMIN_SESSION_TTL_SECONDS}; Path=/admin; HttpOnly; Secure; SameSite=Strict`, "createAdminSessionCookie");
var expireAdminSessionCookie = /* @__PURE__ */ __name(() => `${ADMIN_SESSION_COOKIE}=; Max-Age=0; Path=/admin; HttpOnly; Secure; SameSite=Strict`, "expireAdminSessionCookie");

// src/modules/home.ts
var trioCard = /* @__PURE__ */ __name((title, description) => `
  <div>
    <h3>${title}</h3>
    <p>${description}</p>
  </div>
`, "trioCard");
var visitMarkup = /* @__PURE__ */ __name((visitCount) => {
  if (typeof visitCount !== "number" || Number.isNaN(visitCount)) {
    return "";
  }
  return `
    <p style="margin-top:1.5rem;font-size:0.95rem;text-transform:uppercase;letter-spacing:0.08em;">
      Visits tracked: <strong>${visitCount.toLocaleString()}</strong>
    </p>
  `;
}, "visitMarkup");
var homePage = /* @__PURE__ */ __name((visitCount) => ({
  path: "/",
  title: "Home of Mr. RainbowSmoke \u2014 techie, gamer, dancer!",
  description: "The home and landing page of Mr. RainbowSmoke \u2014 TikTok, YouTube, Twitch, X, Chaturbate and more.",
  heroTagline: "Welcome to the official landing path of Mr. RainbowSmoke.",
  body: `
    <article>
      <p>
        Step into a rainbow-fueled universe where network engineering, gaming, dance, and community collide.
        Every project, stream, and collaboration starts here\u2014built with heart, driven by inclusive tech.
      </p>
    </article>
    <section class="content" aria-label="Highlights">
      ${trioCard("The Tech", "NBCUniversal systems engineer meets cloud-native experimentation. Follow builds, breakdowns, and live troubleshooting sessions.")}
      ${trioCard("The Gamer", "Strategy, rhythm, and community-driven play. Tune in for Twitch, TikTok, and YouTube drops across genres.")}
      ${trioCard("My World", "Proudly queer, always authentic. Events, dance, lifestyle, and the humans who make the journey worthwhile.")}
    </section>
    ${visitMarkup(visitCount)}
    <section aria-label="About the site">
      <h2>What this space delivers</h2>
      <p>
        This worker-powered hub tracks live visits, curates social links, and unlocks deeper experiences for members.
        Expect rolling updates: AI-backed assistants, Durable Object powered counters, and an evolving media archive hosted on R2.
      </p>
      <p>
        New here? Jump to the <a href="/about">About</a> page for a proper introduction or head to <a href="/contact">Contact</a>
        and let me know what brings you\u2014Tech, Gaming, IRL vibes, or all the above.
      </p>
    </section>
  `
}), "homePage");

// src/modules/about.ts
var biography = `
  <p>
    I was born and raised in the rhythm-and-hustle of Washington, D.C.\u2014a city alive with urgency, identity, connection. From an early age I found myself drawn not just to people, but to systems: what makes things work, how things connect, how information flows. While other kids might be out kicking a ball, I was peering into the back of a computer or wondering what route a packet takes when I click \u201Csend.\u201D It wasn\u2019t just fascination\u2014it was inevitability.
  </p>
  <p>
    In high school I discovered two truths: first, that I could speak more than one way (I picked up French and Spanish), and second, that tech and identity were not separate lanes\u2014they were converging tracks. My multilingual growth taught me that language is system and culture just as much as grammar and verbs. My love of gaming, dance, and the LGBTQ+ community taught me that systems include the human heart. I didn\u2019t want to be one facet\u2014they could all exist in tandem.
  </p>
  <p>
    Then came university (Bowie State University) where the technical came into sharper focus: routing, switching, infrastructure, the backbone of networks. At the same time I never lost sight of the \u201Cwhy\u201D\u2014why infrastructure matters, why media and networks power stories, why identity and community matter. I learned that being \u201Cintelligent, technically competent and can do \u2014 professional, anytime, anywhere\u2026\u201D isn\u2019t just a tagline. It became my motto.
  </p>
  <p>
    Landing a role at NBCUniversal as a Systems & Network Engineer was a milestone\u2014not just for career, but for purpose. Here I wasn\u2019t just keeping systems live; I was enabling storytellers, enabling connection across screens, devices, geographies. The media industry moves fast. The stakes are high. Systems have to be reliable, agile, resilient. That\u2019s my world. My gamer\u2019s mindset helps when things go sideways (\u201Cokay, one more try\u201D), my dancing rhythm helps when I need to find balance in chaos, and my multilingual, multimedia identity helps me see the ecosystem as interconnected.
  </p>
  <p>
    Outside of \u201Cthe 9-to-?\u201D I keep the creative fire alive. Gaming isn\u2019t just escape\u2014it sharpens strategy, reaction, teamwork. Dancing isn\u2019t just movement\u2014it reminds me bodies, circuits, networks all move when engaged. I'm active in the LGBTQ+ space because being seen, being authentic, matters as much as any network cable. I stream, I build, I express, and I refuse to check any part of myself at the door.
  </p>
  <p>
    So what\u2019s next? I\u2019m pushing forward. Maybe I move into larger-scale architecture, maybe cloud, maybe I lead teams, build bridges between tech & creativity. Whatever comes, I\u2019ll keep the same through-line: curiosity always, authenticity always, the question of \u201Chow can this work better, more human, more connected\u201D always.
  </p>
  <p>
    Because one thing I\u2019ve learned: Wires are cold until you bring meaning. Networks are invisible until you use them to speak, to create. And identity isn\u2019t a side note\u2014it\u2019s part of the system. I\u2019m here to engineer the infrastructure <em>and</em> the culture. I\u2019m here to dance when the beats hit, to route packets when the alarms go off, and to smile at the fact that yes, all these things\u2014tech, identity, rhythm, voice\u2014can belong to the same person.
  </p>
`;
var aboutPage = /* @__PURE__ */ __name(() => ({
  path: "/about",
  title: "About Mr. RainbowSmoke \u2014 techie, gamer, dancer!",
  description: "The about/info page of Mr. RainbowSmoke \u2014 TikTok, YouTube, Twitch, X, Chaturbate and more.",
  heroTagline: "The systems engineer who codes, streams, and dances with equal energy.",
  body: `
    <section aria-label="Biography">
      <h2>Who I am</h2>
      ${biography}
    </section>
    <section aria-label="Career highlights">
      <h2>Calling card</h2>
      <ul>
        <li>Systems & Network Engineer @ NBCUniversal</li>
        <li>Multilingual collaborator (English, French, Spanish)</li>
        <li>Inclusive community host and LGBTQ+ advocate</li>
        <li>Cross-platform content creator across Twitch, TikTok, YouTube</li>
      </ul>
    </section>
  `
}), "aboutPage");

// src/modules/contact.ts
var contactPage = /* @__PURE__ */ __name(() => ({
  path: "/contact",
  title: "Contact Mr. RainbowSmoke \u2014 techie, gamer, dancer!",
  description: "Reach Mr. RainbowSmoke for tech, gaming, IRL collaborations, and more.",
  heroTagline: "Let me know what brings you\u2014community is built on conversation.",
  body: `
    <section aria-label="Contact form">
      <h2>Drop a note</h2>
      <p>
        Use the form below to introduce yourself, share collaboration ideas, or request access to the
        members-only experiences. Select the interests that fit and I will reach out.
      </p>
      <form method="POST" action="/contact" style="display:grid;gap:1.5rem;">
        <div class="content">
          <label>
            <span>First name</span>
            <input name="firstName" type="text" required autocomplete="given-name" />
          </label>
          <label>
            <span>Last name</span>
            <input name="lastName" type="text" required autocomplete="family-name" />
          </label>
          <label>
            <span>Email</span>
            <input name="email" type="email" required autocomplete="email" />
          </label>
          <label>
            <span>Mobile number</span>
            <input name="phone" type="tel" inputmode="tel" autocomplete="tel" />
          </label>
          <label>
            <span>Discord username</span>
            <input name="discord" type="text" autocomplete="off" placeholder="rainbow#1234" />
          </label>
        </div>
        <fieldset>
          <legend>What brings you here?</legend>
          <label><input type="checkbox" name="interests" value="tech" /> Tech</label>
          <label><input type="checkbox" name="interests" value="gaming" /> Gaming</label>
          <label><input type="checkbox" name="interests" value="irl" /> IRL</label>
        </fieldset>
        <label>
          <span>Message</span>
          <textarea name="message" rows="6" required placeholder="Let me know how we can create together."></textarea>
        </label>
        <button type="submit" style="justify-self:start;padding:0.75rem 1.5rem;border-radius:999px;border:none;background:var(--rainbow);color:#02010b;font-weight:600;">
          Send it
        </button>
      </form>
      <p style="font-size:0.85rem;color:var(--text-secondary);">
        Note: Form submissions will soon sync to a D1 database. Until then, you will receive a confirmation response on submit.
      </p>
    </section>
  `
}), "contactPage");

// src/modules/gallery.ts
var embed = /* @__PURE__ */ __name((title, src, description) => `
  <article>
    <h3>${title}</h3>
    <div style="position:relative;padding-top:56.25%;border-radius:18px;overflow:hidden;box-shadow:0 14px 40px rgba(0,0,0,0.3);">
      <iframe
        src="${src}"
        title="${title}"
        loading="lazy"
        allowfullscreen
        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
      ></iframe>
    </div>
    <p>${description}</p>
  </article>
`, "embed");
var galleryPage = /* @__PURE__ */ __name(() => ({
  path: "/gallery",
  title: "Gallery Mr. RainbowSmoke \u2014 techie, gamer, dancer!",
  description: "A living portfolio for RainbowSmoke across TikTok, YouTube, Twitch, and R2-hosted media.",
  heroTagline: "Curated clips, performances, and behind-the-scenes drops.",
  body: `
    <section aria-label="Featured media">
      <h2>Latest highlights</h2>
      <div class="content">
        ${embed("Rainbow loops \u2014 TikTok", "https://www.tiktok.com/embed/v2/7359492821220353322", "Quick-hit edits built for the For You page.")}
        ${embed("The gamer grind \u2014 YouTube", "https://www.youtube.com/embed/videoseries?list=PLpG5un7qK5d1n6Qu2wvn8Z-uY9gnuoFT3", "Long-form recaps, tech explainers, and gameplay marathons.")}
        ${embed("Live energy \u2014 Twitch", "https://player.twitch.tv/?channel=rainbowsmoke_us&parent=rainbowsmokeofficial.com", "Come hang during live strategy streams, IRL sets, and chat-driven builds.")}
      </div>
      <p>
        Want more? Dig into the R2 powered archive or request access to behind-the-scenes drops via the
        <a href="/contact">contact form</a>.
      </p>
    </section>
  `
}), "galleryPage");

// src/modules/privacy.ts
var privacyPage = /* @__PURE__ */ __name(() => ({
  path: "/privacy",
  title: "Terms of Service & Privacy \u2014 Mr. RainbowSmoke",
  description: "Policies that keep the RainbowSmoke community safe, transparent, and accountable.",
  heroTagline: "Respect for data, identity, and consent is non-negotiable.",
  body: `
    <section aria-label="Policy overview">
      <h2>Privacy promise</h2>
      <p>
        The RainbowSmoke community balances expression with respect. Contact information is stored in protected
        Cloudflare environments, never sold, and only used for collaboration follow-ups, event notices, and account
        access. Analytics are anonymous and help improve content pacing, accessibility, and performance.
      </p>
    </section>
    <section aria-label="Terms">
      <h2>Terms of service</h2>
      <ul>
        <li>Be kind and inclusive. Zero tolerance for harassment, hate, or doxxing.</li>
        <li>You must be 18+ to request access to members-only NSFW spaces.</li>
        <li>Content may feature third-party embeds (Twitch, TikTok, YouTube). Their terms apply when viewing.</li>
        <li>All original media by Mr. RainbowSmoke remains protected\u2014reach out for licensing.</li>
        <li>By submitting the contact form you agree to email outreach tied to your selected interests.</li>
      </ul>
    </section>
    <section aria-label="Data requests">
      <h2>Need adjustments?</h2>
      <p>
        Email <a href="mailto:hi@rainbowsmokeofficial.com">hi@rainbowsmokeofficial.com</a> or open a ticket via Discord
        to update, export, or remove your data. Requests are answered in under seven days.
      </p>
    </section>
  `
}), "privacyPage");

// src/modules/nsfw.ts
var alertCopy = {
  success: {
    heading: "Session unlocked",
    detail: "Your lounge session is active for the next 30 days. Refresh the page anytime\u2014your cookie keeps you signed in.",
    tone: "success"
  },
  invalid: {
    heading: "Check your access code",
    detail: "The email and code combination did not match moderation records. Double-check the latest invite message or request a new code.",
    tone: "error"
  },
  denied: {
    heading: "Approval still pending",
    detail: "Moderation has not cleared this email for after-dark content yet. Reply to your onboarding email or wait for confirmation.",
    tone: "error"
  },
  error: {
    heading: "Temporary issue",
    detail: "We could not verify the access code right now. Try again in a minute or email hi@rainbowsmokeofficial.com for help.",
    tone: "error"
  }
};
var renderAlert = /* @__PURE__ */ __name((state, authorized) => {
  if (!state) {
    return "";
  }
  if (state === "success" && !authorized) {
    return "";
  }
  if (state !== "success" && authorized) {
    return "";
  }
  const copy = alertCopy[state];
  if (!copy) {
    return "";
  }
  const toneStyles = copy.tone === "success" ? "background:rgba(46,204,64,0.16);border-left:4px solid #2ecc40;" : "background:rgba(255,65,54,0.2);border-left:4px solid #ff4136;";
  return `
    <div role="status" style="margin:1rem 0;padding:1rem 1.25rem;border-radius:12px;${toneStyles}">
      <strong style="display:block;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.5rem;">${copy.heading}</strong>
      <span>${copy.detail}</span>
    </div>
  `;
}, "renderAlert");
var lockedMessage = /* @__PURE__ */ __name((state) => `
  <section aria-label="Access requirements">
    <h2>Members only</h2>
    ${renderAlert(state, false)}
    <p>
      This area is intentionally gated. Submit the <a href="/contact">contact form</a>, confirm you are 18+, and wait
      for credential approval. Once approved, reload this page\u2014an encrypted session cookie unlocks the lounge.
    </p>
    <p>Approved members can expect:</p>
    <ul>
      <li>Exclusive galleries and RS3D renders hosted on R2</li>
      <li>Event replays and private livestream recordings</li>
      <li>RSVP-only after dark experiences with moderated chat</li>
    </ul>
    <form method="POST" action="/nsfw/login" style="display:grid;gap:1rem;margin-top:1.75rem;">
      <div>
        <label>
          <span>Email</span>
          <input name="email" type="email" required autocomplete="email" />
        </label>
      </div>
      <div>
        <label>
          <span>Access code</span>
          <input name="accessCode" type="text" required inputmode="text" autocomplete="one-time-code" minlength="6" maxlength="24" style="text-transform:uppercase;" />
        </label>
      </div>
      <button type="submit" style="justify-self:start;padding:0.75rem 1.5rem;border-radius:999px;border:none;background:var(--rainbow);color:#02010b;font-weight:600;">
        Unlock lounge
      </button>
    </form>
    <p style="font-size:0.85rem;color:var(--text-secondary);margin-top:0.75rem;">
      Already have credentials but still locked out? Clear cookies, resubmit the contact form, or email
      <a href="mailto:hi@rainbowsmokeofficial.com">hi@rainbowsmokeofficial.com</a> for support.
    </p>
  </section>
`, "lockedMessage");
var unlockedMessage = /* @__PURE__ */ __name((state) => `
  <section aria-label="Members lounge">
    <h2>Welcome to the lounge</h2>
    ${renderAlert(state, true)}
    <p>
      You are verified. Stream the after-dark sets, explore the R2 galleries, and grab the private stream URLs for OBS or
      Restream. Keep the credentials confidential\u2014community safety is priority.
    </p>
    <ul>
      <li><a href="https://pub-da090b3a2b0f44d4830b676a91d4850e.r2.dev/rainbow-media/nsfw/index.html" target="_blank" rel="noopener">R2 media vault</a></li>
      <li>Live RTMP endpoint: <code>rtmp://stream.rainbowsmokeofficial.com/live</code></li>
      <li>RS3D archive authentication details are delivered separately after vetting.</li>
    </ul>
    <section aria-label="Concierge support" data-lounge-concierge style="margin-top:2.5rem;border-radius:18px;padding:1.75rem;background:linear-gradient(135deg,rgba(255,0,128,0.18),rgba(0,176,255,0.18));border:1px solid rgba(255,255,255,0.22);box-shadow:0 18px 40px rgba(0,0,0,0.28);backdrop-filter:blur(8px);">
      <header style="display:flex;justify-content:space-between;align-items:center;gap:1rem;flex-wrap:wrap;">
        <div style="display:grid;gap:0.35rem;">
          <h3 style="margin:0;">Lounge concierge</h3>
          <p style="margin:0;color:var(--text-secondary);max-width:38ch;">Guidance, playlists, and moderation reminders tailored to verified members.</p>
        </div>
        <button type="button" data-concierge-toggle style="padding:0.6rem 1.25rem;border-radius:999px;border:1px solid rgba(255,255,255,0.4);background:rgba(2,1,11,0.45);color:inherit;font-weight:600;cursor:pointer;transition:background 160ms ease;">
          Open concierge
        </button>
      </header>
      <div data-concierge-panel hidden style="margin-top:1.5rem;">
        <div data-messages style="max-height:260px;overflow-y:auto;display:flex;flex-direction:column;gap:0.75rem;margin-bottom:1.25rem;padding:1rem;border-radius:14px;background:rgba(3,2,20,0.6);border:1px solid rgba(255,255,255,0.08);"></div>
        <form data-chat-form style="display:grid;gap:1rem;">
          <label style="display:grid;gap:0.6rem;">
            <span style="font-weight:600;">Ask the concierge</span>
            <textarea name="message" rows="3" required style="padding:0.85rem 1rem;border-radius:12px;border:1px solid rgba(255,255,255,0.18);background:rgba(1,0,12,0.55);color:inherit;resize:vertical;"></textarea>
          </label>
          <div style="display:flex;gap:1rem;align-items:center;flex-wrap:wrap;">
            <button type="submit" style="padding:0.85rem 1.6rem;border-radius:999px;border:none;background:var(--rainbow);color:#02010b;font-weight:600;cursor:pointer;box-shadow:0 12px 24px rgba(255,0,128,0.24);">Send to concierge</button>
            <span data-status style="font-size:0.85rem;color:var(--text-secondary);">Concierge is ready.</span>
          </div>
        </form>
      </div>
      <script type="module">
        (() => {
          const container = document.querySelector('[data-lounge-concierge]');
          if (!container) {
            return;
          }

          const panel = container.querySelector('[data-concierge-panel]');
          const toggle = container.querySelector('[data-concierge-toggle]');
          const form = container.querySelector('[data-chat-form]');
          const textarea = container.querySelector('textarea');
          const messagesEl = container.querySelector('[data-messages]');
          const statusEl = container.querySelector('[data-status]');
          const submitButton = form?.querySelector('button');
          if (!panel || !toggle || !form || !textarea || !messagesEl || !statusEl || !submitButton) {
            return;
          }

          const STORAGE_KEY = 'loungeConciergeHistory';
          const MAX_ENTRIES = 10;
          const history = [];

          const setExpanded = expanded => {
            toggle.setAttribute('aria-expanded', String(expanded));
            toggle.textContent = expanded ? 'Hide concierge' : 'Open concierge';
            if (expanded) {
              panel.removeAttribute('hidden');
            } else {
              panel.setAttribute('hidden', '');
            }
          };

          toggle.addEventListener('click', () => {
            const expanded = toggle.getAttribute('aria-expanded') === 'true';
            setExpanded(!expanded);
          });

          const renderEntry = (role, text) => {
            const wrapper = document.createElement('div');
            wrapper.dataset.entry = role;
            wrapper.style.display = 'grid';
            wrapper.style.gap = '0.25rem';

            const label = document.createElement('span');
            label.textContent = role === 'assistant' ? 'Concierge' : 'You';
            label.style.fontSize = '0.85rem';
            label.style.letterSpacing = '0.08em';
            label.style.textTransform = 'uppercase';
            label.style.opacity = '0.8';

            const body = document.createElement('p');
            body.textContent = text;
            body.style.margin = '0';

            wrapper.append(label, body);
            messagesEl.append(wrapper);
          };

          const refreshMessages = entries => {
            messagesEl.innerHTML = '';
            entries.forEach(entry => renderEntry(entry.role, entry.content));
            if (messagesEl.scrollHeight > 0) {
              messagesEl.scrollTop = messagesEl.scrollHeight;
            }
          };

          const persistHistory = () => {
            try {
              sessionStorage.setItem(STORAGE_KEY, JSON.stringify(history));
            } catch (error) {
              console.warn('Unable to store concierge history', error);
            }
          };

          const resetHistory = entries => {
            history.length = 0;
            entries.forEach(entry => {
              if (!entry || typeof entry.content !== 'string' || typeof entry.role !== 'string') {
                return;
              }
              const content = entry.content.trim();
              if (!content) {
                return;
              }
              history.push({ role: entry.role === 'assistant' ? 'assistant' : 'user', content });
            });
            if (history.length > MAX_ENTRIES) {
              history.splice(0, history.length - MAX_ENTRIES);
            }
            persistHistory();
            refreshMessages(history);
          };

          const appendHistory = entry => {
            history.push(entry);
            if (history.length > MAX_ENTRIES) {
              history.splice(0, history.length - MAX_ENTRIES);
            }
            renderEntry(entry.role, entry.content);
            messagesEl.scrollTop = messagesEl.scrollHeight;
            persistHistory();
          };

          const loadLocalHistory = () => {
            try {
              const stored = sessionStorage.getItem(STORAGE_KEY);
              if (!stored) {
                return [];
              }
              const parsed = JSON.parse(stored);
              if (!Array.isArray(parsed)) {
                return [];
              }
              return parsed;
            } catch (error) {
              console.warn('Unable to read concierge history from storage', error);
              sessionStorage.removeItem(STORAGE_KEY);
              return [];
            }
          };

          const loadRemoteHistory = async () => {
            try {
              const response = await fetch('/ai/lounge-chat', {
                method: 'GET',
                credentials: 'same-origin',
                headers: { accept: 'application/json' }
              });
              if (!response.ok) {
                return [];
              }
              const payload = await response.json();
              if (!payload || !Array.isArray(payload.history)) {
                return [];
              }
              return payload.history
                .map(entry => {
                  if (!entry || typeof entry.content !== 'string' || typeof entry.role !== 'string') {
                    return undefined;
                  }
                  const content = entry.content.trim();
                  if (!content) {
                    return undefined;
                  }
                  return { role: entry.role === 'assistant' ? 'assistant' : 'user', content };
                })
                .filter(Boolean)
                .slice(-MAX_ENTRIES);
            } catch (error) {
              console.warn('Unable to load concierge history from server', error);
              return [];
            }
          };

          const hydrateHistory = async () => {
            const local = loadLocalHistory();
            if (local.length) {
              resetHistory(local);
              setExpanded(true);
              return;
            }
            const remote = await loadRemoteHistory();
            if (remote.length) {
              resetHistory(remote);
              setExpanded(true);
            }
          };

          hydrateHistory();

          form.addEventListener('submit', async event => {
            event.preventDefault();

            const value = textarea.value.trim();
            if (!value) {
              return;
            }

            appendHistory({ role: 'user', content: value });
            textarea.value = '';
            textarea.focus();
            statusEl.textContent = 'Connecting to concierge\u2026';
            submitButton.disabled = true;

            try {
              const response = await fetch('/ai/lounge-chat', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                credentials: 'same-origin',
                body: JSON.stringify({ messages: history })
              });
              if (!response.ok) {
                throw new Error('Request failed');
              }
              const payload = await response.json();
              const reply = typeof payload.reply === 'string' ? payload.reply.trim() : '';
              if (!reply) {
                throw new Error('Empty reply');
              }

              // When the server returns canonical history, sync to stay aligned across devices.
              if (Array.isArray(payload.history) && payload.history.length) {
                resetHistory(payload.history);
              } else {
                appendHistory({ role: 'assistant', content: reply });
              }
              setExpanded(true);
              statusEl.textContent = 'Concierge is ready.';
            } catch (error) {
              console.error('Concierge chat failed', error);
              statusEl.textContent = 'Concierge is unavailable. Try again in a moment.';
            } finally {
              submitButton.disabled = false;
            }
          });
        })();
      <\/script>
    </section>
  </section>
`, "unlockedMessage");
var nsfwPage = /* @__PURE__ */ __name((authorized, loginState) => ({
  path: "/nsfw",
  title: "NSFW Lounge \u2014 Mr. RainbowSmoke 18+ members",
  description: "Adult-only media for verified community members.",
  heroTagline: authorized ? "The private lounge is now open\u2014enjoy responsibly." : "Protected space for the spicy side of RainbowSmoke.",
  body: authorized ? unlockedMessage(loginState) : lockedMessage(loginState)
}), "nsfwPage");

// src/modules/not-found.ts
var notFoundPage = /* @__PURE__ */ __name((path) => ({
  path,
  title: "Rainbow detour \u2014 page not found",
  description: "We could not find what you were looking for on RainbowSmokeOfficial.com.",
  heroTagline: "That URL is doing its own dance. Let\u2019s get you back on beat.",
  body: `
    <section aria-label="404 details">
      <h2>404 \u2014 Off the map</h2>
      <p>
        The link <code>${path}</code> does not exist yet. Jump back to the <a href="/">home page</a>, explore the
        <a href="/gallery">gallery</a>, or <a href="/contact">ping me</a> if you think this should be live.
      </p>
    </section>
  `
}), "notFoundPage");

// src/modules/admin-dashboard.ts
var css = `
  :root {
    color-scheme: dark;
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background-color: #05040a;
    color: #f5f5f7;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-height: 100vh;
    background: radial-gradient(circle at top, rgba(89, 65, 169, 0.2), transparent), #05040a;
  }

  .admin-shell {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2.5rem 1.5rem 4rem;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  header h1 {
    font-size: clamp(1.75rem, 2.5vw, 2.1rem);
    margin: 0;
    letter-spacing: 0.03em;
  }

  header p {
    margin: 0.2rem 0 0;
    font-size: 0.95rem;
    color: rgba(245, 245, 247, 0.72);
  }

  .card {
    background: rgba(13, 11, 24, 0.78);
    border: 1px solid rgba(137, 120, 235, 0.24);
    border-radius: 16px;
    padding: 1.75rem;
    box-shadow: 0 24px 40px rgba(4, 3, 12, 0.45);
    backdrop-filter: blur(16px);
  }

  form label {
    display: block;
    font-weight: 600;
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  input[type='password'] {
    width: 100%;
    padding: 0.8rem 1rem;
    border-radius: 10px;
    border: 1px solid rgba(137, 120, 235, 0.4);
    background: rgba(5, 4, 10, 0.65);
    color: inherit;
    font-size: 1rem;
    transition: border 0.2s ease, box-shadow 0.2s ease;
  }

  input[type='password']:focus-visible {
    outline: none;
    border-color: rgba(228, 196, 255, 0.8);
    box-shadow: 0 0 0 3px rgba(137, 120, 235, 0.2);
  }

  button {
    appearance: none;
    border: none;
    border-radius: 10px;
    padding: 0.7rem 1.1rem;
    font-weight: 600;
    font-size: 0.95rem;
    background: linear-gradient(135deg, #c77dff, #6c63ff);
    color: #05040a;
    cursor: pointer;
    transition: transform 0.18s ease, box-shadow 0.18s ease, filter 0.18s ease;
  }

  button:hover,
  button:focus-visible {
    transform: translateY(-1px);
    box-shadow: 0 14px 36px rgba(108, 99, 255, 0.35);
    filter: brightness(1.05);
  }

  button.secondary {
    background: rgba(245, 245, 247, 0.16);
    color: rgba(245, 245, 247, 0.92);
    box-shadow: inset 0 0 0 1px rgba(245, 245, 247, 0.18);
  }

  button.secondary:hover,
  button.secondary:focus-visible {
    box-shadow: inset 0 0 0 1px rgba(245, 245, 247, 0.3);
    transform: none;
  }

  .login-help {
    margin-top: 1rem;
    color: rgba(245, 245, 247, 0.6);
    font-size: 0.9rem;
  }

  .status-banner {
    margin-bottom: 1.5rem;
    padding: 0.95rem 1.2rem;
    border-radius: 10px;
    font-size: 0.95rem;
    display: none;
  }

  .status-banner[data-status='info'] {
    background: rgba(137, 120, 235, 0.18);
    color: rgba(245, 245, 247, 0.95);
    display: block;
  }

  .status-banner[data-status='success'] {
    background: rgba(72, 201, 176, 0.22);
    color: rgba(241, 255, 250, 0.94);
    display: block;
  }

  .status-banner[data-status='warning'] {
    background: rgba(255, 193, 7, 0.24);
    color: rgba(255, 241, 184, 0.94);
    display: block;
  }

  .status-banner[data-status='error'] {
    background: rgba(255, 82, 82, 0.2);
    color: rgba(255, 214, 214, 0.95);
    display: block;
  }

  .controls {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 1rem;
    margin-bottom: 1.75rem;
  }

  .metric-card {
    background: rgba(108, 99, 255, 0.12);
    border: 1px solid rgba(137, 120, 235, 0.24);
    border-radius: 14px;
    padding: 1.1rem 1.25rem;
    box-shadow: inset 0 0 0 1px rgba(108, 99, 255, 0.18);
  }

  .metric-card h3 {
    margin: 0 0 0.35rem;
    font-size: 0.85rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(245, 245, 247, 0.75);
  }

  .metric-card p {
    margin: 0;
    font-size: 1.65rem;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    color: rgba(245, 245, 247, 0.92);
  }

  .metrics-empty {
    margin: 0;
    font-size: 0.95rem;
    color: rgba(245, 245, 247, 0.65);
  }

  .controls .spacer {
    flex: 1;
  }

  select {
    background: rgba(5, 4, 10, 0.65);
    color: inherit;
    border-radius: 8px;
    border: 1px solid rgba(137, 120, 235, 0.4);
    padding: 0.55rem 0.9rem;
    font-weight: 600;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }

  th,
  td {
    text-align: left;
    padding: 0.75rem 0.65rem;
    vertical-align: top;
  }

  thead {
    background: rgba(137, 120, 235, 0.12);
  }

  tbody tr:nth-child(even) {
    background: rgba(137, 120, 235, 0.08);
  }

  tbody tr:hover {
    background: rgba(108, 99, 255, 0.12);
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.2rem 0.5rem;
    border-radius: 999px;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: 600;
    background: rgba(137, 120, 235, 0.26);
    color: rgba(241, 239, 255, 0.92);
  }

  .badge.positive {
    background: rgba(46, 213, 115, 0.2);
    color: rgba(234, 255, 241, 0.92);
  }

  .badge.negative {
    background: rgba(255, 82, 82, 0.24);
    color: rgba(255, 214, 214, 0.92);
  }

  details {
    margin-top: 0.35rem;
  }

  details summary {
    cursor: pointer;
    font-size: 0.85rem;
    color: rgba(245, 245, 247, 0.72);
  }

  details p {
    margin: 0.5rem 0 0;
    white-space: pre-wrap;
    font-size: 0.95rem;
    color: rgba(245, 245, 247, 0.82);
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
  }

  .loading-overlay {
    position: fixed;
    inset: 0;
    background: rgba(5, 4, 10, 0.6);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 200;
    backdrop-filter: blur(6px);
  }

  .loading-overlay[data-visible='true'] {
    display: flex;
  }

  .spinner {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 4px solid rgba(137, 120, 235, 0.18);
    border-top-color: rgba(137, 120, 235, 0.85);
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 900px) {
    header {
      flex-direction: column;
      align-items: flex-start;
    }

    table {
      font-size: 0.92rem;
    }
  }
`;
var script = `
const state = {
  pagination: { limit: 50, offset: 0 },
  contacts: [],
  hasMore: false,
  loading: false,
  hasAuthenticated: false,
  visitMetrics: {},
  visitMetricsError: ''
};

const views = {
  login: document.querySelector('[data-view="login"]'),
  dashboard: document.querySelector('[data-view="dashboard"]')
};

const els = {
  loginForm: document.querySelector('[data-login-form]'),
  tokenInput: document.querySelector('[data-token-input]'),
  loginError: document.querySelector('[data-login-error]'),
  banner: document.querySelector('[data-status-banner]'),
  refreshButton: document.querySelector('[data-refresh]'),
  logoutButton: document.querySelector('[data-logout]'),
  prevButton: document.querySelector('[data-prev]'),
  nextButton: document.querySelector('[data-next]'),
  limitSelect: document.querySelector('[data-limit]'),
  tableBody: document.querySelector('[data-contact-rows]'),
  loadingOverlay: document.querySelector('[data-loading]'),
  visitMetrics: document.querySelector('[data-visit-metrics]')
};

const metricLabels = {
  '/': 'Home',
  '/about': 'About',
  '/contact': 'Contact',
  '/gallery': 'Gallery',
  '/privacy': 'Privacy',
  '/tospolicy': 'Terms of Service',
  '/nsfw': 'NSFW Gate'
};

const setView = (view) => {
  if (view === 'dashboard') {
    views.dashboard.removeAttribute('hidden');
    views.login.setAttribute('hidden', 'true');
  } else {
    views.login.removeAttribute('hidden');
    views.dashboard.setAttribute('hidden', 'true');
  }
};

const toggleLoading = (value) => {
  state.loading = Boolean(value);
  els.loadingOverlay?.setAttribute('data-visible', String(state.loading));
};

const showBanner = (message, variant = 'info') => {
  if (!els.banner) return;
  els.banner.textContent = message;
  if (message) {
    els.banner.setAttribute('data-status', variant);
  } else {
    els.banner.removeAttribute('data-status');
  }
};

const sanitizeInterests = (interests) => {
  if (!Array.isArray(interests)) return [];
  return interests.filter(entry => typeof entry === 'string' && entry.trim().length > 0);
};

const getMetricLabel = (key) => {
  if (metricLabels[key]) return metricLabels[key];
  if (key === '/' || key === '') return 'Home';
  return key;
};

const renderVisitMetrics = () => {
  if (!els.visitMetrics) return;
  els.visitMetrics.innerHTML = '';

  if (state.visitMetricsError) {
    const errorMessage = document.createElement('p');
    errorMessage.className = 'metrics-empty';
    errorMessage.textContent = state.visitMetricsError;
    els.visitMetrics.appendChild(errorMessage);
    return;
  }

  const entries = Object.entries(state.visitMetrics ?? {});
  if (!entries.length) {
    const emptyState = document.createElement('p');
    emptyState.className = 'metrics-empty';
    emptyState.textContent = 'Visit metrics will appear after traffic lands on tracked pages.';
    els.visitMetrics.appendChild(emptyState);
    return;
  }

  entries
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(([key, value]) => {
      const card = document.createElement('div');
      card.className = 'metric-card';

      const heading = document.createElement('h3');
      heading.textContent = getMetricLabel(key);
      card.appendChild(heading);

      const count = document.createElement('p');
      const numeric = Number(value);
      count.textContent = Number.isFinite(numeric) ? numeric.toLocaleString() : '0';
      card.appendChild(count);

      els.visitMetrics.appendChild(card);
    });
};

const renderContacts = () => {
  if (!els.tableBody) return;
  els.tableBody.innerHTML = '';
  if (!Array.isArray(state.contacts) || !state.contacts.length) {
    const emptyRow = document.createElement('tr');
    const cell = document.createElement('td');
    cell.colSpan = 6;
    cell.textContent = 'No submissions found for this page.';
    cell.style.textAlign = 'center';
    cell.style.padding = '1.5rem';
    emptyRow.appendChild(cell);
    els.tableBody.appendChild(emptyRow);
    return;
  }

  state.contacts.forEach(contact => {
    const row = document.createElement('tr');

    const identityCell = document.createElement('td');
    const nameStrong = document.createElement('strong');
    nameStrong.textContent = \`\${contact.firstName ?? ''} \${contact.lastName ?? ''}\`.trim() || contact.email;
    const metaList = document.createElement('div');
    metaList.style.fontSize = '0.85rem';
    metaList.style.color = 'rgba(245, 245, 247, 0.72)';
    metaList.textContent = contact.email ?? '';
    identityCell.appendChild(nameStrong);
    identityCell.appendChild(document.createElement('br'));
    identityCell.appendChild(metaList);
    if (contact.phone) {
      const phoneLine = document.createElement('div');
      phoneLine.style.marginTop = '0.35rem';
      phoneLine.textContent = \`Phone: \${contact.phone}\`;
      identityCell.appendChild(phoneLine);
    }
    if (contact.discord) {
      const discordLine = document.createElement('div');
      discordLine.style.marginTop = '0.2rem';
      discordLine.textContent = \`Discord: \${contact.discord}\`;
      identityCell.appendChild(discordLine);
    }
    row.appendChild(identityCell);

    const createdCell = document.createElement('td');
    const createdDate = new Date(contact.createdAt);
    createdCell.textContent = Number.isFinite(createdDate.valueOf())
      ? createdDate.toLocaleString()
      : contact.createdAt ?? '';
    row.appendChild(createdCell);

    const interestsCell = document.createElement('td');
    const interests = sanitizeInterests(contact.interests);
    if (interests.length) {
      const list = document.createElement('ul');
      list.style.margin = '0';
      list.style.paddingLeft = '1.2rem';
      interests.forEach(entry => {
        const item = document.createElement('li');
        item.textContent = entry;
        list.appendChild(item);
      });
      interestsCell.appendChild(list);
    } else {
      interestsCell.textContent = '\u2014';
    }
    row.appendChild(interestsCell);

    const messageCell = document.createElement('td');
    if (typeof contact.message === 'string' && contact.message.trim().length) {
      const details = document.createElement('details');
      const summary = document.createElement('summary');
      summary.textContent = 'View message';
      const paragraph = document.createElement('p');
      paragraph.textContent = contact.message;
      details.appendChild(summary);
      details.appendChild(paragraph);
      messageCell.appendChild(details);
    } else {
      messageCell.textContent = '\u2014';
    }
    row.appendChild(messageCell);

    const accessCell = document.createElement('td');
    const badge = document.createElement('span');
    badge.className = 'badge';
    if (contact.nsfwAccess) {
      badge.classList.add('positive');
      badge.textContent = 'Granted';
      accessCell.appendChild(badge);
      if (contact.nsfwAccessCode) {
        const codeLine = document.createElement('div');
        codeLine.style.marginTop = '0.35rem';
        codeLine.style.fontSize = '0.85rem';
        codeLine.textContent = \`Code: \${contact.nsfwAccessCode}\`;
        accessCell.appendChild(codeLine);
      }
    } else {
      badge.classList.add('negative');
      badge.textContent = 'Pending';
      accessCell.appendChild(badge);
    }
    row.appendChild(accessCell);

    const actionsCell = document.createElement('td');
    actionsCell.className = 'actions';
    const grantBtn = document.createElement('button');
    grantBtn.type = 'button';
    grantBtn.dataset.action = 'grant';
    grantBtn.dataset.id = String(contact.id);
    grantBtn.textContent = 'Grant';
    actionsCell.appendChild(grantBtn);

    const revokeBtn = document.createElement('button');
    revokeBtn.type = 'button';
    revokeBtn.dataset.action = 'revoke';
    revokeBtn.dataset.id = String(contact.id);
    revokeBtn.textContent = 'Revoke';
    revokeBtn.classList.add('secondary');
    actionsCell.appendChild(revokeBtn);

    const sessionBtn = document.createElement('button');
    sessionBtn.type = 'button';
    sessionBtn.dataset.action = 'revoke-sessions';
    sessionBtn.dataset.id = String(contact.id);
    sessionBtn.textContent = 'Reset Sessions';
    sessionBtn.classList.add('secondary');
    actionsCell.appendChild(sessionBtn);

    row.appendChild(actionsCell);

    els.tableBody.appendChild(row);
  });

  if (els.prevButton) {
    els.prevButton.disabled = state.pagination.offset <= 0 || state.loading;
  }
  if (els.nextButton) {
    els.nextButton.disabled = !state.hasMore || state.loading;
  }
};

const handleAuthFailure = (isInitial) => {
  state.hasAuthenticated = false;
  state.contacts = [];
  state.visitMetrics = {};
  state.visitMetricsError = '';
  renderVisitMetrics();
  setView('login');
  if (isInitial) {
    showBanner('Authenticate with the admin token to continue.', 'info');
  } else {
    showBanner('Your admin session has expired. Please log in again.', 'warning');
  }
};

const fetchVisitMetrics = async () => {
  if (!els.visitMetrics) return true;
  try {
    const response = await fetch('/admin/metrics/visits', {
      credentials: 'include',
      headers: { accept: 'application/json' }
    });

    if (response.status === 401) {
      handleAuthFailure(false);
      return 'unauthorized';
    }

    if (!response.ok) {
      throw new Error('Unable to load visit metrics. Try again shortly.');
    }

    const payload = await response.json().catch(() => ({}));
    const data = payload?.data;
    const sanitized = {};
    if (data && typeof data === 'object') {
      Object.entries(data).forEach(([key, value]) => {
        if (typeof value === 'number' && Number.isFinite(value)) {
          sanitized[key] = value;
        }
      });
    }
    state.visitMetrics = sanitized;
    state.visitMetricsError = '';
    renderVisitMetrics();
    return true;
  } catch (error) {
    console.error(error);
    state.visitMetrics = {};
    state.visitMetricsError = 'Unable to load visit metrics.';
    renderVisitMetrics();
    return false;
  }
};

const fetchContacts = async () => {
  toggleLoading(true);
  try {
    const params = new URLSearchParams({
      limit: String(state.pagination.limit),
      offset: String(state.pagination.offset)
    });
    const response = await fetch(\`/admin/contacts?\${params.toString()}\`, {
      credentials: 'include',
      headers: { 'accept': 'application/json' }
    });

    if (response.status === 401) {
      const initial = !state.hasAuthenticated;
      handleAuthFailure(initial);
      return;
    }

    if (!response.ok) {
      throw new Error('Unable to load contact submissions. Try again shortly.');
    }

    const payload = await response.json();
    state.contacts = Array.isArray(payload?.data) ? payload.data : [];
    const pagination = payload?.pagination ?? {};
    state.pagination.limit = Number(pagination.limit) || state.pagination.limit;
    state.pagination.offset = Number(pagination.offset) || state.pagination.offset;
    state.hasMore = state.contacts.length >= state.pagination.limit;
    state.hasAuthenticated = true;
    renderContacts();
    setView('dashboard');
    const metricsResult = await fetchVisitMetrics();
    if (metricsResult === 'unauthorized') {
      return;
    }
    if (metricsResult === false) {
      showBanner('Contacts synced. Visit metrics unavailable right now.', 'warning');
    } else {
      showBanner('Dashboard synced.', 'success');
    }
  } catch (error) {
    console.error(error);
    showBanner(error instanceof Error ? error.message : 'Unexpected error loading contacts.', 'error');
  } finally {
    toggleLoading(false);
  }
};

const performAction = async (action, contactId, payload) => {
  toggleLoading(true);
  try {
    let endpoint = '';
    if (action === 'grant') {
      endpoint = \`/admin/contacts/\${contactId}/grant\`;
    } else if (action === 'revoke') {
      endpoint = \`/admin/contacts/\${contactId}/revoke\`;
    } else if (action === 'revoke-sessions') {
      endpoint = \`/admin/contacts/\${contactId}/sessions/revoke\`;
    } else {
      throw new Error('Unknown action requested.');
    }

    const response = await fetch(endpoint, {
      method: 'POST',
      credentials: 'include',
      headers: payload ? { 'content-type': 'application/json' } : undefined,
      body: payload ? JSON.stringify(payload) : undefined
    });

    if (response.status === 401) {
      handleAuthFailure();
      return;
    }

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      const detail = data?.error ?? 'Request failed.';
      throw new Error(detail);
    }

    if (action === 'grant' && data?.accessCode) {
      showBanner(\`NSFW access granted. Code: \${data.accessCode}\`, 'success');
    } else {
      showBanner(data?.message ?? 'Action completed.', 'success');
    }

    await fetchContacts();
  } catch (error) {
    console.error(error);
    showBanner(error instanceof Error ? error.message : 'Unexpected error performing action.', 'error');
  } finally {
    toggleLoading(false);
  }
};

const handleLogin = async (event) => {
  event.preventDefault();
  els.loginError.textContent = '';
  const token = els.tokenInput.value.trim();
  if (!token) {
    els.loginError.textContent = 'Provide the configured admin API token.';
    return;
  }

  toggleLoading(true);
  try {
    const response = await fetch('/admin/login', {
      method: 'POST',
      credentials: 'include',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ token })
    });

    if (!response.ok) {
      if (response.status === 401) {
        els.loginError.textContent = 'Invalid token. Double-check the configuration.';
      } else {
        const payload = await response.json().catch(() => ({}));
        els.loginError.textContent = payload?.error ?? 'Unable to sign in.';
      }
      return;
    }

    els.tokenInput.value = '';
    showBanner('Authenticated. Loading latest submissions\u2026', 'success');
    await fetchContacts();
  } catch (error) {
    console.error(error);
    els.loginError.textContent = 'Unexpected error attempting to sign in.';
  } finally {
    toggleLoading(false);
  }
};

const handleLogout = async () => {
  toggleLoading(true);
  try {
    await fetch('/admin/logout', {
      method: 'POST',
      credentials: 'include'
    });
  } catch (error) {
    console.error(error);
  } finally {
    toggleLoading(false);
    state.hasAuthenticated = false;
    state.contacts = [];
    state.visitMetrics = {};
    state.visitMetricsError = '';
    renderVisitMetrics();
    setView('login');
    showBanner('Signed out. Session cookie cleared.', 'info');
  }
};

if (els.loginForm) {
  els.loginForm.addEventListener('submit', handleLogin);
}

if (els.refreshButton) {
  els.refreshButton.addEventListener('click', () => {
    state.pagination.offset = 0;
    fetchContacts();
  });
}

if (els.logoutButton) {
  els.logoutButton.addEventListener('click', handleLogout);
}

if (els.prevButton) {
  els.prevButton.addEventListener('click', () => {
    state.pagination.offset = Math.max(0, state.pagination.offset - state.pagination.limit);
    fetchContacts();
  });
}

if (els.nextButton) {
  els.nextButton.addEventListener('click', () => {
    state.pagination.offset += state.pagination.limit;
    fetchContacts();
  });
}

if (els.limitSelect) {
  els.limitSelect.addEventListener('change', (event) => {
    const value = Number(event.target.value);
    if (Number.isFinite(value) && value > 0) {
      state.pagination.limit = value;
      state.pagination.offset = 0;
      fetchContacts();
    }
  });
}

if (els.tableBody) {
  els.tableBody.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-action]');
    if (!button) return;
    const { action, id } = button.dataset;
    if (!action || !id) return;
    const contactId = Number(id);
    if (!Number.isFinite(contactId)) return;

    if (action === 'grant') {
      const customCode = window.prompt('Provide a custom access code (optional). Leave blank to auto-generate.');
      const payload = customCode ? { accessCode: customCode } : undefined;
      performAction('grant', contactId, payload);
      return;
    }

    if (action === 'revoke') {
      if (window.confirm('Revoke NSFW access for this email?')) {
        performAction('revoke', contactId);
      }
      return;
    }

    if (action === 'revoke-sessions') {
      if (window.confirm('Invalidate existing sessions tied to this email?')) {
        performAction('revoke-sessions', contactId);
      }
      return;
    }
  });
}

renderVisitMetrics();
fetchContacts();
`;
var adminDashboardHtml = /* @__PURE__ */ __name(() => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>RainbowSmoke Admin Dashboard</title>
    <meta name="robots" content="noindex" />
    <style>${css}</style>
  </head>
  <body>
    <div class="admin-shell">
      <header>
        <div>
          <h1>RainbowSmoke Control Room</h1>
          <p>Review contact submissions, manage MembersOnly access, and reset sessions.</p>
        </div>
        <button type="button" class="secondary" data-logout>Log out</button>
      </header>

      <div class="status-banner" data-status-banner></div>

      <section class="card" data-view="login">
        <h2>Authenticate</h2>
        <form data-login-form>
          <label for="admin-token">Admin API token</label>
          <input id="admin-token" type="password" autocomplete="current-password" data-token-input />
          <small data-login-error style="color: #ffb3b3; display: block; margin-top: 0.5rem;"></small>
          <button type="submit" style="margin-top: 1.25rem;">Sign in</button>
        </form>
        <p class="login-help">
          This dashboard expects Cloudflare Access or a similar IdP in front of
          <code>/admin</code>. The token is never stored persistently and is exchanged for an
          eight-hour, HttpOnly session cookie.
        </p>
      </section>

      <section class="card" data-view="dashboard" hidden>
        <section aria-label="Visit metrics" class="metrics-grid" data-visit-metrics>
          <p class="metrics-empty">Visit metrics will appear after traffic lands on tracked pages.</p>
        </section>

        <div class="controls">
          <button type="button" data-refresh>Refresh</button>
          <div class="spacer"></div>
          <label for="page-limit">Page size</label>
          <select id="page-limit" data-limit>
            <option value="25">25</option>
            <option value="50" selected>50</option>
            <option value="100">100</option>
          </select>
          <button type="button" class="secondary" data-prev>Previous</button>
          <button type="button" data-next>Next</button>
        </div>

        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Contact</th>
                <th>Submitted</th>
                <th>Interests</th>
                <th>Message</th>
                <th>NSFW status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody data-contact-rows></tbody>
          </table>
        </div>
      </section>
    </div>

    <div class="loading-overlay" data-loading>
      <div class="spinner" role="status" aria-label="Loading"></div>
    </div>

    <script type="module">
      ${script}
    <\/script>
  </body>
</html>
`, "adminDashboardHtml");

// src/modules/lounge-concierge.ts
var MAX_MESSAGES = 10;
var MAX_CONTENT_LENGTH = 2e3;
var MODEL_NAME = "@cf/meta/llama-3.1-8b-instruct";
var CONCIERGE_HISTORY_TTL_SECONDS = 60 * 60 * 24 * 30;
var personaPrompt = `You are RainbowSmoke's Lounge Concierge, a warm, upbeat guide for verified community members.

Tone:
- Energetic, inclusive, confident. Use short paragraphs and the occasional emoji (\u{1F308}, \u{1F510}, \u{1F3B6}) only when it adds flair.
- Celebrate members but reinforce moderation boundaries and community safety.

Knowledge:
- Site routes: /, /about, /contact, /gallery, /privacy, /nsfw.
- Lounge login at POST /nsfw/login, logout at POST /nsfw/logout (expires rainbowsmoke_session).
- Access codes are issued after moderation approves the contact form in D1 contact_messages.
- Media vault lives in R2, RTMP endpoint rtmp://stream.rainbowsmokeofficial.com/live. Donation links: PayPal.me/mrrainbowsmoke, BTC bc1q8d4fqhvk2j9gmn5nrp839tv83yvye2zhma9av4.
- Support via /contact or hi@rainbowsmokeofficial.com.

Safety:
- Do NOT describe explicit sexual content. Refer to lounge material abstractly (for example, "after-dark gallery").
- If asked to bypass moderation or leak codes, refuse politely and redirect to contact flow.
- No legal, medical, or financial advice; suggest professional help instead.

Structure every reply:
1. Personalized greeting (match member status, e.g., \u201CHey superstar!\u201D).
2. Two concise paragraphs max with the key answer or guidance.
3. Optional rainbow-themed bullet list (<=3 bullets) for calls to action.
4. Upbeat sign-off such as \u201CStay radiant \u{1F308}\u201D.

Always acknowledge if you are unsure and point members to /contact.`;
var jsonResponse = /* @__PURE__ */ __name((data, status = 200) => {
  const headers = new Headers({
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store"
  });
  return new Response(JSON.stringify(data), { status, headers });
}, "jsonResponse");
var normalizeEmail = /* @__PURE__ */ __name((email) => email.trim().toLowerCase(), "normalizeEmail");
var sessionTokenKey = /* @__PURE__ */ __name((token) => `session:${token}`, "sessionTokenKey");
var conciergeHistoryKey = /* @__PURE__ */ __name((email) => `concierge:${normalizeEmail(email)}`, "conciergeHistoryKey");
var sanitizeMessages = /* @__PURE__ */ __name((messages) => {
  if (!Array.isArray(messages)) {
    return [];
  }
  const allowedRoles = /* @__PURE__ */ new Set(["user", "assistant"]);
  return messages.slice(-MAX_MESSAGES).map((entry) => {
    const role = allowedRoles.has(entry.role) ? entry.role : void 0;
    const content = typeof entry.content === "string" ? entry.content.trim() : "";
    if (!role || !content) {
      return void 0;
    }
    const truncated = content.length > MAX_CONTENT_LENGTH ? content.slice(0, MAX_CONTENT_LENGTH) : content;
    return { role, content: truncated };
  }).filter(Boolean);
}, "sanitizeMessages");
var buildSystemMessage = /* @__PURE__ */ __name((authorized) => ({
  role: "system",
  content: `${personaPrompt}

Member status: ${authorized ? "Authorized lounge member with active session." : "Session not verified; guide the user through login or moderation follow-up before revealing lounge specifics."}

Always stay within brand voice and safety guardrails.`
}), "buildSystemMessage");
var extractReply = /* @__PURE__ */ __name((output) => {
  if (!output) {
    return void 0;
  }
  if (typeof output === "string") {
    return output;
  }
  if (typeof output === "object" && output !== null) {
    const response = output.response;
    if (typeof response === "string") {
      return response;
    }
    const result = output.result;
    if (typeof result === "string") {
      return result;
    }
  }
  return void 0;
}, "extractReply");
var loadPersistedConversation = /* @__PURE__ */ __name(async (kv, sessionToken) => {
  if (!kv || !sessionToken) {
    return { history: [] };
  }
  try {
    const rawSession = await kv.get(sessionTokenKey(sessionToken));
    if (!rawSession) {
      return { history: [] };
    }
    let sessionPayload = {};
    try {
      sessionPayload = JSON.parse(rawSession);
    } catch {
      return { history: [] };
    }
    if (!sessionPayload.email) {
      return { history: [] };
    }
    const key = conciergeHistoryKey(sessionPayload.email);
    const rawHistory = await kv.get(key);
    if (!rawHistory) {
      return { key, history: [] };
    }
    const parsed = JSON.parse(rawHistory);
    return {
      key,
      history: sanitizeMessages(parsed)
    };
  } catch (error) {
    console.error("Failed to load concierge history", error);
    return { history: [] };
  }
}, "loadPersistedConversation");
var persistConversation = /* @__PURE__ */ __name(async (kv, key, history) => {
  if (!kv || !key || !history.length) {
    return;
  }
  try {
    const trimmed = history.slice(-MAX_MESSAGES);
    await kv.put(key, JSON.stringify(trimmed), { expirationTtl: CONCIERGE_HISTORY_TTL_SECONDS });
  } catch (error) {
    console.error("Failed to persist concierge history", error);
  }
}, "persistConversation");
var mergeHistories = /* @__PURE__ */ __name((base, incoming) => {
  const merged = [...base];
  for (const message of incoming) {
    if (!merged.length) {
      merged.push(message);
      continue;
    }
    const last = merged[merged.length - 1];
    if (last.role === message.role && last.content === message.content) {
      continue;
    }
    merged.push(message);
  }
  return merged.slice(-MAX_MESSAGES);
}, "mergeHistories");
var handleLoungeConciergeChat = /* @__PURE__ */ __name(async (request, env, authorized, sessionToken) => {
  if (!env.AI) {
    return jsonResponse({ error: "AI binding is not configured" }, 501);
  }
  if (request.headers.get("content-type")?.includes("application/json") !== true) {
    return jsonResponse({ error: "Content-Type must be application/json" }, 415);
  }
  let payload;
  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ error: "Invalid JSON body" }, 400);
  }
  const history = sanitizeMessages(payload.messages);
  if (!history.length || !history.some((entry) => entry.role === "user")) {
    return jsonResponse({ error: "messages must include at least one user message" }, 400);
  }
  const persisted = await loadPersistedConversation(env.SESSION_KV, sessionToken);
  const conversation = mergeHistories(persisted.history, history);
  try {
    const aiResult = await env.AI.run(MODEL_NAME, {
      messages: [buildSystemMessage(authorized), ...conversation],
      temperature: 0.7
    });
    const reply = extractReply(aiResult)?.trim();
    if (!reply) {
      console.error("AI response missing text payload", aiResult);
      return jsonResponse({ error: "No reply generated" }, 502);
    }
    const updatedConversation = mergeHistories(conversation, [{ role: "assistant", content: reply }]);
    await persistConversation(env.SESSION_KV, persisted.key, updatedConversation);
    return jsonResponse({ reply, history: updatedConversation });
  } catch (error) {
    console.error("Lounge concierge AI error", error);
    return jsonResponse({ error: "Concierge is unavailable right now" }, 502);
  }
}, "handleLoungeConciergeChat");
var handleLoungeConciergeHistory = /* @__PURE__ */ __name(async (env, authorized, sessionToken) => {
  if (!authorized) {
    return jsonResponse({ error: "Unauthorized" }, 403);
  }
  const persisted = await loadPersistedConversation(env.SESSION_KV, sessionToken);
  return jsonResponse({ history: persisted.history });
}, "handleLoungeConciergeHistory");

// src/index.ts
var routes = {
  "/": /* @__PURE__ */ __name((context) => homePage(context.visitCount), "/"),
  "/about": /* @__PURE__ */ __name(() => aboutPage(), "/about"),
  "/contact": /* @__PURE__ */ __name(() => contactPage(), "/contact"),
  "/gallery": /* @__PURE__ */ __name(() => galleryPage(), "/gallery"),
  "/privacy": /* @__PURE__ */ __name(() => privacyPage(), "/privacy"),
  "/tospolicy": /* @__PURE__ */ __name(() => privacyPage(), "/tospolicy"),
  "/nsfw": /* @__PURE__ */ __name((context) => nsfwPage(Boolean(context.nsfwAuthorized), context.nsfwLoginState), "/nsfw")
};
var TRACKED_VISIT_PATHS = /* @__PURE__ */ new Set(["/", "/about", "/contact", "/gallery", "/privacy", "/tospolicy", "/nsfw"]);
var VISIT_COUNTER_OBJECT_NAME = "site-visits";
var normalizePath = /* @__PURE__ */ __name((pathname) => {
  const trimmed = pathname.replace(/\/+$/, "");
  if (!trimmed) return "/";
  return trimmed.toLowerCase();
}, "normalizePath");
var htmlResponse = /* @__PURE__ */ __name((page, status = 200) => new Response(renderPage(page), {
  status,
  headers: {
    "content-type": "text/html; charset=utf-8",
    "cache-control": "no-store"
  }
}), "htmlResponse");
var landing = /* @__PURE__ */ __name((path, context) => {
  const factory = routes[path];
  if (!factory) {
    return htmlResponse(notFoundPage(path), 404);
  }
  return htmlResponse(factory(context));
}, "landing");
var jsonResponse2 = /* @__PURE__ */ __name((data, status = 200) => new Response(JSON.stringify(data), {
  status,
  headers: {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store"
  }
}), "jsonResponse");
var adminTokenMissing = /* @__PURE__ */ __name(() => jsonResponse2({ error: "Admin token is not configured" }, 501), "adminTokenMissing");
var unauthorizedResponse = /* @__PURE__ */ __name(() => jsonResponse2({ error: "Unauthorized" }, 401), "unauthorizedResponse");
var contactSuccessPage = /* @__PURE__ */ __name((firstName, interests) => {
  const safeName = escapeHtml(firstName || "friend");
  const safeInterests = interests.map((entry) => escapeHtml(entry));
  const highlights = [
    '<li>Catch the latest clips in the <a href="/gallery">gallery</a>.</li>',
    '<li>Review community guidelines on the <a href="/privacy">privacy</a> page.</li>',
    '<li>Head back <a href="/">home</a> to see what\u2019s launching next.</li>'
  ];
  if (safeInterests.length) {
    highlights.push(`<li>Focus areas you selected: <strong>${safeInterests.join(", ")}</strong>.</li>`);
  }
  return {
    path: "/contact",
    title: "Contact received \u2014 Mr. RainbowSmoke",
    description: "Confirmation page for contact submissions on RainbowSmokeOfficial.com.",
    heroTagline: "We\u2019re connected. Expect a reply soon.",
    body: `
      <section aria-label="Confirmation">
        <h2>Thank you, ${safeName}!</h2>
        <p>Your details are in the queue. D1-backed workflows captured your message\u2014moderators review MembersOnly requests shortly.</p>
        <p>If you asked for NSFW access, expect a follow-up once the green light is granted.</p>
        <p>Here are a few things to explore while I respond:</p>
        <ul>
          ${highlights.join("")}
        </ul>
      </section>
    `
  };
}, "contactSuccessPage");
var contactErrorPage = /* @__PURE__ */ __name((firstName, detail, status) => {
  const safeName = escapeHtml(firstName || "friend");
  const safeDetail = escapeHtml(detail);
  const page = {
    path: "/contact",
    title: "Contact issue \u2014 Mr. RainbowSmoke",
    description: "Error page for contact submissions on RainbowSmokeOfficial.com.",
    heroTagline: "We hit a temporary snag. Let\u2019s reconnect.",
    body: `
      <section aria-label="Submission error">
        <h2>Sorry, ${safeName}.</h2>
        <p>${safeDetail}</p>
        <p>Refresh the page or <a href="/contact">try again</a>. If the issue persists, email <a href="mailto:hi@rainbowsmokeofficial.com">hi@rainbowsmokeofficial.com</a>.</p>
      </section>
    `
  };
  return htmlResponse(page, status);
}, "contactErrorPage");
var requiredFields = [
  { key: "firstName", label: "First name" },
  { key: "lastName", label: "Last name" },
  { key: "email", label: "Email" },
  { key: "message", label: "Message" }
];
var validateContact = /* @__PURE__ */ __name((submission) => requiredFields.filter((field) => !submission[field.key]).map((field) => field.label), "validateContact");
var persistContact = /* @__PURE__ */ __name(async (db, submission) => {
  if (!db) {
    return void 0;
  }
  const result = await db.prepare(
    `
        INSERT INTO contact_messages
          (first_name, last_name, email, phone, discord, interests, message)
        VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7)
      `
  ).bind(
    submission.firstName,
    submission.lastName,
    submission.email,
    submission.phone ?? null,
    submission.discord ?? null,
    submission.interests.join(","),
    submission.message
  ).run();
  return result.meta?.last_row_id;
}, "persistContact");
var SESSION_COOKIE = "rainbowsmoke_session";
var SESSION_TTL_SECONDS = 60 * 60 * 24 * 30;
var createSessionCookie = /* @__PURE__ */ __name((token) => `${SESSION_COOKIE}=${encodeURIComponent(token)}; Max-Age=${SESSION_TTL_SECONDS}; Path=/; HttpOnly; Secure; SameSite=Lax`, "createSessionCookie");
var expireSessionCookie = /* @__PURE__ */ __name(() => `${SESSION_COOKIE}=; Max-Age=0; Path=/; HttpOnly; Secure; SameSite=Lax`, "expireSessionCookie");
var getCookieValue = /* @__PURE__ */ __name((cookieHeader, name) => {
  if (!cookieHeader) {
    return void 0;
  }
  const cookies = cookieHeader.split(";");
  for (const cookie of cookies) {
    const [rawKey, ...rest] = cookie.trim().split("=");
    if (!rawKey || rest.length === 0) {
      continue;
    }
    if (rawKey === name) {
      return decodeURIComponent(rest.join("="));
    }
  }
  return void 0;
}, "getCookieValue");
var normalizeEmail2 = /* @__PURE__ */ __name((email) => email.trim().toLowerCase(), "normalizeEmail");
var sessionTokenKey2 = /* @__PURE__ */ __name((token) => `session:${token}`, "sessionTokenKey");
var sessionEmailKey = /* @__PURE__ */ __name((email) => `session_email:${normalizeEmail2(email)}`, "sessionEmailKey");
var createMemberSession = /* @__PURE__ */ __name(async (kv, email, contactId) => {
  if (!kv) {
    return void 0;
  }
  const normalizedEmail = normalizeEmail2(email);
  const token = crypto.randomUUID();
  const payload = JSON.stringify({ email: normalizedEmail, contactId });
  await kv.put(sessionTokenKey2(token), payload, { expirationTtl: SESSION_TTL_SECONDS });
  await kv.put(sessionEmailKey(normalizedEmail), token, { expirationTtl: SESSION_TTL_SECONDS });
  return token;
}, "createMemberSession");
var destroyMemberSession = /* @__PURE__ */ __name(async (kv, token) => {
  if (!kv || !token) {
    return;
  }
  const key = sessionTokenKey2(token);
  let normalizedEmail;
  const raw = await kv.get(key);
  if (raw) {
    try {
      const payload = JSON.parse(raw);
      if (payload.email) {
        normalizedEmail = normalizeEmail2(payload.email);
      }
    } catch {
    }
  }
  await kv.delete(key);
  if (normalizedEmail) {
    await kv.delete(sessionEmailKey(normalizedEmail));
  }
}, "destroyMemberSession");
var generateAccessCode = /* @__PURE__ */ __name(() => crypto.randomUUID().replace(/-/g, "").slice(0, 12).toUpperCase(), "generateAccessCode");
var validateSession = /* @__PURE__ */ __name(async (env, cookieHeader) => {
  const kv = env.SESSION_KV;
  if (!kv || !env.RAINBOW_DB) {
    return false;
  }
  const token = getCookieValue(cookieHeader, SESSION_COOKIE);
  if (!token) {
    return false;
  }
  const key = sessionTokenKey2(token);
  const raw = await kv.get(key);
  if (!raw) {
    return false;
  }
  let payload = {};
  try {
    payload = JSON.parse(raw);
  } catch {
    return false;
  }
  if (!payload.email) {
    return false;
  }
  const normalizedEmail = normalizeEmail2(payload.email);
  const record = await env.RAINBOW_DB.prepare(
    `
      SELECT nsfw_access
      FROM contact_messages
      WHERE email = ?1
      ORDER BY nsfw_access DESC, created_at DESC
      LIMIT 1
    `
  ).bind(normalizedEmail).first();
  if (!record || record.nsfw_access !== 1) {
    await kv.delete(key);
    await kv.delete(sessionEmailKey(normalizedEmail));
    return false;
  }
  await kv.put(sessionEmailKey(normalizedEmail), token, { expirationTtl: SESSION_TTL_SECONDS });
  return true;
}, "validateSession");
var revokeSessionsForEmail = /* @__PURE__ */ __name(async (kv, email) => {
  if (!kv) {
    return;
  }
  const normalizedEmail = normalizeEmail2(email);
  const indexKey = sessionEmailKey(normalizedEmail);
  const token = await kv.get(indexKey);
  if (!token) {
    return;
  }
  await kv.delete(sessionTokenKey2(token));
  await kv.delete(indexKey);
}, "revokeSessionsForEmail");
var parseNsfwLoginRequest = /* @__PURE__ */ __name(async (request) => {
  const contentType = request.headers.get("content-type") ?? "";
  const accept = request.headers.get("accept") ?? "";
  const expectsJson = contentType.includes("application/json") || accept.includes("application/json");
  if (contentType.includes("application/json")) {
    try {
      const body = await request.json();
      const email = typeof body.email === "string" ? body.email.trim() : void 0;
      const accessCode = typeof body.accessCode === "string" ? body.accessCode.trim() : void 0;
      return {
        email,
        accessCode: accessCode ? accessCode.toUpperCase() : void 0,
        expectsJson
      };
    } catch {
      return { expectsJson, parseError: "invalid_json" };
    }
  }
  try {
    const formData = await request.formData();
    const emailEntry = formData.get("email");
    const codeEntry = formData.get("accessCode");
    const email = typeof emailEntry === "string" ? emailEntry.trim() : void 0;
    const accessCode = typeof codeEntry === "string" ? codeEntry.trim() : void 0;
    return {
      email,
      accessCode: accessCode ? accessCode.toUpperCase() : void 0,
      expectsJson
    };
  } catch {
    return { expectsJson, parseError: "invalid_form" };
  }
}, "parseNsfwLoginRequest");
var redirectWithCookie = /* @__PURE__ */ __name((location, cookie) => {
  const headers = new Headers({
    location,
    "cache-control": "no-store"
  });
  headers.append("set-cookie", cookie);
  return new Response(null, { status: 303, headers });
}, "redirectWithCookie");
var jsonWithCookie = /* @__PURE__ */ __name((payload, status, cookie) => {
  const headers = new Headers({
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store"
  });
  if (cookie) {
    headers.append("set-cookie", cookie);
  }
  return new Response(JSON.stringify(payload), { status, headers });
}, "jsonWithCookie");
var handleNsfwLogin = /* @__PURE__ */ __name(async (request, env) => {
  const parsed = await parseNsfwLoginRequest(request);
  const expectsJson = parsed.expectsJson;
  if (!env.RAINBOW_DB || !env.SESSION_KV) {
    if (expectsJson) {
      return jsonWithCookie({ error: "Service unavailable" }, 503, expireSessionCookie());
    }
    return redirectWithCookie("/nsfw?login=error", expireSessionCookie());
  }
  if (parsed.parseError) {
    if (expectsJson) {
      return jsonWithCookie({ error: "Invalid request body" }, 400, expireSessionCookie());
    }
    return redirectWithCookie("/nsfw?login=invalid", expireSessionCookie());
  }
  const email = parsed.email ? normalizeEmail2(parsed.email) : "";
  const accessCode = parsed.accessCode ?? "";
  if (!email || !accessCode) {
    if (expectsJson) {
      return jsonWithCookie({ error: "Email and access code are required" }, 400, expireSessionCookie());
    }
    return redirectWithCookie("/nsfw?login=invalid", expireSessionCookie());
  }
  const record = await env.RAINBOW_DB.prepare(
    `
      SELECT id, nsfw_access, nsfw_access_code
      FROM contact_messages
      WHERE lower(email) = ?1
        AND upper(nsfw_access_code) = ?2
      ORDER BY created_at DESC
      LIMIT 1
    `
  ).bind(email, accessCode).first();
  if (!record) {
    if (expectsJson) {
      return jsonWithCookie({ error: "Invalid credentials" }, 401, expireSessionCookie());
    }
    return redirectWithCookie("/nsfw?login=invalid", expireSessionCookie());
  }
  if (record.nsfw_access !== 1) {
    if (expectsJson) {
      return jsonWithCookie({ error: "Access not approved yet" }, 403, expireSessionCookie());
    }
    return redirectWithCookie("/nsfw?login=denied", expireSessionCookie());
  }
  await revokeSessionsForEmail(env.SESSION_KV, email);
  const sessionToken = await createMemberSession(env.SESSION_KV, email, record.id);
  if (!sessionToken) {
    if (expectsJson) {
      return jsonWithCookie({ error: "Unable to create session" }, 503, expireSessionCookie());
    }
    return redirectWithCookie("/nsfw?login=error", expireSessionCookie());
  }
  const cookie = createSessionCookie(sessionToken);
  if (expectsJson) {
    return jsonWithCookie({ message: "NSFW session activated" }, 200, cookie);
  }
  return redirectWithCookie("/nsfw?login=success", cookie);
}, "handleNsfwLogin");
var handleNsfwLogout = /* @__PURE__ */ __name(async (request, env) => {
  const accepts = request.headers.get("accept") ?? "";
  const contentType = request.headers.get("content-type") ?? "";
  const expectsJson = accepts.includes("application/json") || contentType.includes("application/json");
  const token = getCookieValue(request.headers.get("cookie"), SESSION_COOKIE);
  await destroyMemberSession(env.SESSION_KV, token);
  const expiredCookie = expireSessionCookie();
  if (expectsJson) {
    return jsonWithCookie({ message: "NSFW session ended" }, 200, expiredCookie);
  }
  return redirectWithCookie("/nsfw", expiredCookie);
}, "handleNsfwLogout");
var handleContactSubmit = /* @__PURE__ */ __name(async (request, env) => {
  const formData = await request.formData();
  const submission = parseContactForm(formData);
  const missing = validateContact(submission);
  if (missing.length) {
    const detail = `Please complete the following fields: ${missing.join(", ")}.`;
    return contactErrorPage(submission.firstName, detail, 400);
  }
  try {
    await persistContact(env.RAINBOW_DB, submission);
  } catch (error) {
    console.error("Contact persistence failed", error);
    return contactErrorPage(
      submission.firstName,
      "Unable to save your message right now. Please retry in a few minutes.",
      502
    );
  }
  return htmlResponse(contactSuccessPage(submission.firstName, submission.interests), 201);
}, "handleContactSubmit");
var mapContactRow = /* @__PURE__ */ __name((row) => ({
  id: row.id,
  firstName: row.first_name,
  lastName: row.last_name,
  email: normalizeEmail2(row.email),
  phone: row.phone ?? void 0,
  discord: row.discord ?? void 0,
  interests: row.interests ? row.interests.split(",").filter(Boolean) : [],
  message: row.message,
  createdAt: row.created_at,
  nsfwAccess: row.nsfw_access === 1,
  nsfwAccessCode: row.nsfw_access_code ?? void 0
}), "mapContactRow");
var listContactMessages = /* @__PURE__ */ __name(async (db, limit, offset) => {
  const result = await db.prepare(
    `
        SELECT id, first_name, last_name, email, phone, discord, interests, message, created_at, nsfw_access, nsfw_access_code
        FROM contact_messages
        ORDER BY created_at DESC
        LIMIT ?1 OFFSET ?2
      `
  ).bind(limit, offset).all();
  return (result.results ?? []).map(mapContactRow);
}, "listContactMessages");
var fetchContactById = /* @__PURE__ */ __name(async (db, id) => {
  const row = await db.prepare(
    `
        SELECT id, first_name, last_name, email, phone, discord, interests, message, created_at, nsfw_access, nsfw_access_code
        FROM contact_messages
        WHERE id = ?1
      `
  ).bind(id).first();
  return row ?? void 0;
}, "fetchContactById");
var updateAccessForEmail = /* @__PURE__ */ __name(async (db, email, allow, accessCode) => {
  const normalized = normalizeEmail2(email);
  if (allow) {
    await db.prepare(
      `
          UPDATE contact_messages
          SET nsfw_access = 1,
              nsfw_access_code = ?1,
              email = lower(email)
          WHERE lower(email) = ?2
        `
    ).bind(accessCode ?? null, normalized).run();
  } else {
    await db.prepare(
      `
          UPDATE contact_messages
          SET nsfw_access = 0,
              nsfw_access_code = NULL,
              email = lower(email)
          WHERE lower(email) = ?1
        `
    ).bind(normalized).run();
  }
}, "updateAccessForEmail");
var authenticateAdminRequest = /* @__PURE__ */ __name(async (request, env) => {
  const token = env.ADMIN_API_TOKEN;
  if (!token) {
    return { authorized: false };
  }
  const authHeader = request.headers.get("authorization");
  if (authHeader && authHeader === `Bearer ${token}`) {
    return { authorized: true };
  }
  const sessionId = getCookieValue(request.headers.get("cookie"), ADMIN_SESSION_COOKIE);
  if (!sessionId) {
    return { authorized: false };
  }
  const valid = await validateAdminSession(env.SESSION_KV, sessionId);
  if (valid) {
    return { authorized: true };
  }
  return { authorized: false, shouldClearSessionCookie: true };
}, "authenticateAdminRequest");
var handleAdminRequest = /* @__PURE__ */ __name(async (request, env, url) => {
  if (!env.ADMIN_API_TOKEN) {
    return adminTokenMissing();
  }
  const path = url.pathname.toLowerCase();
  if (request.method === "GET" && (path === "/admin" || path === "/admin/")) {
    return new Response(adminDashboardHtml(), {
      status: 200,
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "no-store"
      }
    });
  }
  if (request.method === "POST" && path === "/admin/login") {
    if (!env.SESSION_KV) {
      return jsonResponse2({ error: "Session storage is not configured" }, 500);
    }
    let body = {};
    try {
      body = await request.json();
    } catch {
      return jsonResponse2({ error: "Invalid request body" }, 400);
    }
    const provided = body.token?.trim();
    if (!provided) {
      return jsonResponse2({ error: "Token is required" }, 400);
    }
    if (provided !== env.ADMIN_API_TOKEN) {
      return unauthorizedResponse();
    }
    const sessionId = await createAdminSession(env.SESSION_KV);
    if (!sessionId) {
      return jsonResponse2({ error: "Unable to create admin session" }, 500);
    }
    const response = jsonResponse2({ message: "Authenticated" });
    response.headers.append("set-cookie", createAdminSessionCookie(sessionId));
    return response;
  }
  if (request.method === "POST" && path === "/admin/logout") {
    const sessionId = getCookieValue(request.headers.get("cookie"), ADMIN_SESSION_COOKIE);
    await destroyAdminSession(env.SESSION_KV, sessionId);
    const response = jsonResponse2({ message: "Signed out" });
    response.headers.append("set-cookie", expireAdminSessionCookie());
    return response;
  }
  const authResult = await authenticateAdminRequest(request, env);
  if (!authResult.authorized) {
    const response = unauthorizedResponse();
    if (authResult.shouldClearSessionCookie) {
      response.headers.append("set-cookie", expireAdminSessionCookie());
    }
    return response;
  }
  if (request.method === "GET" && path === "/admin/metrics/visits") {
    const data = await getVisitCounts(env);
    return jsonResponse2({ data });
  }
  if (!env.RAINBOW_DB) {
    return databaseNotConfigured();
  }
  if (request.method === "GET" && path === "/admin/contacts") {
    const limit = Math.min(200, Math.max(1, Number(url.searchParams.get("limit")) || 50));
    const offset = Math.max(0, Number(url.searchParams.get("offset")) || 0);
    const data = await listContactMessages(env.RAINBOW_DB, limit, offset);
    return jsonResponse2({ data, pagination: { limit, offset } });
  }
  const grantMatch = path.match(/^\/admin\/contacts\/(\d+)\/grant$/);
  if (request.method === "POST" && grantMatch) {
    const id = Number(grantMatch[1]);
    const contact = await fetchContactById(env.RAINBOW_DB, id);
    if (!contact) {
      return jsonResponse2({ error: "Contact not found" }, 404);
    }
    let requestedCode;
    try {
      const body = await request.json();
      if (body?.accessCode && typeof body.accessCode === "string") {
        requestedCode = body.accessCode.trim().toUpperCase();
      }
    } catch {
    }
    const accessCode = requestedCode && requestedCode.length >= 6 ? requestedCode : generateAccessCode();
    await updateAccessForEmail(env.RAINBOW_DB, contact.email, true, accessCode);
    await revokeSessionsForEmail(env.SESSION_KV, contact.email);
    const updated = await fetchContactById(env.RAINBOW_DB, id);
    return jsonResponse2({
      message: "NSFW access granted",
      accessCode,
      contact: updated ? mapContactRow(updated) : mapContactRow(contact)
    });
  }
  const revokeMatch = path.match(/^\/admin\/contacts\/(\d+)\/revoke$/);
  if (request.method === "POST" && revokeMatch) {
    const id = Number(revokeMatch[1]);
    const contact = await fetchContactById(env.RAINBOW_DB, id);
    if (!contact) {
      return jsonResponse2({ error: "Contact not found" }, 404);
    }
    await updateAccessForEmail(env.RAINBOW_DB, contact.email, false);
    await revokeSessionsForEmail(env.SESSION_KV, contact.email);
    const updated = await fetchContactById(env.RAINBOW_DB, id);
    return jsonResponse2({
      message: "NSFW access revoked",
      contact: updated ? mapContactRow(updated) : mapContactRow(contact)
    });
  }
  const revokeSessionsMatch = path.match(/^\/admin\/contacts\/(\d+)\/sessions\/revoke$/);
  if (request.method === "POST" && revokeSessionsMatch) {
    const id = Number(revokeSessionsMatch[1]);
    const contact = await fetchContactById(env.RAINBOW_DB, id);
    if (!contact) {
      return jsonResponse2({ error: "Contact not found" }, 404);
    }
    await revokeSessionsForEmail(env.SESSION_KV, contact.email);
    return jsonResponse2({ message: "Sessions revoked", contact: mapContactRow(contact) });
  }
  return jsonResponse2({ error: "Not found" }, 404);
}, "handleAdminRequest");
var databaseNotConfigured = /* @__PURE__ */ __name(() => jsonResponse2({ error: "Database binding is not configured" }, 500), "databaseNotConfigured");
var methodNotAllowed = /* @__PURE__ */ __name(() => new Response("Method Not Allowed", {
  status: 405,
  headers: { allow: "GET, HEAD, POST" }
}), "methodNotAllowed");
var getVisitMetric = /* @__PURE__ */ __name(async (env, path, increment) => {
  const namespace = env?.VisitCounter;
  if (!namespace) {
    return void 0;
  }
  const id = namespace.idFromName(VISIT_COUNTER_OBJECT_NAME);
  const stub = namespace.get(id);
  const endpoint = increment ? "https://counter/increment" : "https://counter/current";
  const url = new URL(endpoint);
  url.searchParams.set("key", normalizePath(path));
  try {
    const response = await stub.fetch(url.toString(), { method: increment ? "POST" : "GET" });
    if (!response.ok) {
      return void 0;
    }
    const text = await response.text();
    const value = Number(text);
    return Number.isFinite(value) ? value : void 0;
  } catch (error) {
    console.error("Visit counter error", error);
    return void 0;
  }
}, "getVisitMetric");
var getVisitCounts = /* @__PURE__ */ __name(async (env) => {
  const namespace = env?.VisitCounter;
  if (!namespace) {
    return {};
  }
  const id = namespace.idFromName(VISIT_COUNTER_OBJECT_NAME);
  const stub = namespace.get(id);
  try {
    const response = await stub.fetch("https://counter/current", { method: "GET" });
    if (!response.ok) {
      return {};
    }
    const payload = await response.text();
    if (!payload) {
      return {};
    }
    const parsed = JSON.parse(payload);
    const sanitized = {};
    for (const [key, value] of Object.entries(parsed)) {
      if (typeof value === "number" && Number.isFinite(value)) {
        sanitized[key] = value;
      }
    }
    return sanitized;
  } catch (error) {
    console.error("Visit counter aggregate error", error);
    return {};
  }
}, "getVisitCounts");
var VisitCounter = class _VisitCounter {
  static {
    __name(this, "VisitCounter");
  }
  state;
  static STORAGE_KEY = "counts";
  constructor(state) {
    this.state = state;
  }
  normalizeKey(input) {
    if (!input) {
      return "/";
    }
    return normalizePath(input);
  }
  async readCounts() {
    const stored = await this.state.storage.get(_VisitCounter.STORAGE_KEY);
    if (!stored || typeof stored !== "object") {
      return {};
    }
    const sanitized = {};
    for (const [key, value] of Object.entries(stored)) {
      if (typeof value === "number" && Number.isFinite(value)) {
        sanitized[key] = value;
      }
    }
    return sanitized;
  }
  async readCount(key) {
    const counts = await this.readCounts();
    return counts[key] ?? 0;
  }
  async increment(key) {
    const counts = await this.readCounts();
    const current = counts[key] ?? 0;
    const next = current + 1;
    counts[key] = next;
    await this.state.storage.put(_VisitCounter.STORAGE_KEY, counts);
    return next;
  }
  async fetch(request) {
    const url = new URL(request.url);
    const rawKey = url.searchParams.get("key");
    if (request.method === "POST" && url.pathname === "/increment") {
      if (!rawKey) {
        return new Response("Missing key", { status: 400 });
      }
      const key = this.normalizeKey(rawKey);
      const total = await this.increment(key);
      return new Response(String(total), { headers: { "content-type": "text/plain" } });
    }
    if (request.method === "GET" && url.pathname === "/current") {
      if (rawKey) {
        const key = this.normalizeKey(rawKey);
        const current = await this.readCount(key);
        return new Response(String(current), { headers: { "content-type": "text/plain" } });
      }
      const counts = await this.readCounts();
      return new Response(JSON.stringify(counts), {
        headers: { "content-type": "application/json; charset=utf-8" }
      });
    }
    return new Response("Not Found", { status: 404 });
  }
};
var index_default = {
  async fetch(request, env, _ctx) {
    const url = new URL(request.url);
    if (url.pathname.startsWith("/admin")) {
      return handleAdminRequest(request, env, url);
    }
    const path = normalizePath(url.pathname);
    if (request.method === "HEAD") {
      const context = {};
      if (TRACKED_VISIT_PATHS.has(path)) {
        const count = await getVisitMetric(env, path, false);
        if (path === "/") {
          context.visitCount = count;
        }
      }
      if (path === "/nsfw") {
        context.nsfwAuthorized = await validateSession(env, request.headers.get("cookie"));
      }
      const response = landing(path, context);
      return new Response(null, { status: response.status, headers: response.headers });
    }
    if (request.method === "GET" && path === "/ai/lounge-chat") {
      const sessionToken = getCookieValue(request.headers.get("cookie"), SESSION_COOKIE);
      const authorized = await validateSession(env, request.headers.get("cookie"));
      return handleLoungeConciergeHistory(env, authorized, sessionToken);
    }
    if (request.method === "GET") {
      const context = {};
      if (TRACKED_VISIT_PATHS.has(path)) {
        const count = await getVisitMetric(env, path, true);
        if (path === "/") {
          context.visitCount = count;
        }
      }
      if (path === "/nsfw") {
        context.nsfwAuthorized = await validateSession(env, request.headers.get("cookie"));
        const loginParam = url.searchParams.get("login");
        if (loginParam && ["success", "invalid", "denied", "error"].includes(loginParam)) {
          context.nsfwLoginState = loginParam;
        }
      }
      return landing(path, context);
    }
    if (request.method === "POST" && path === "/nsfw/login") {
      return handleNsfwLogin(request, env);
    }
    if (request.method === "POST" && path === "/nsfw/logout") {
      return handleNsfwLogout(request, env);
    }
    if (request.method === "POST" && path === "/ai/lounge-chat") {
      const cookieHeader = request.headers.get("cookie");
      const sessionToken = getCookieValue(cookieHeader, SESSION_COOKIE);
      const authorized = await validateSession(env, cookieHeader);
      return handleLoungeConciergeChat(request, env, authorized, sessionToken);
    }
    if (request.method === "POST" && path === "/contact") {
      return handleContactSubmit(request, env);
    }
    if (request.method === "POST") {
      return htmlResponse(notFoundPage(path), 404);
    }
    return methodNotAllowed();
  }
};
export {
  VisitCounter,
  index_default as default,
  handleNsfwLogin,
  handleNsfwLogout
};
//# sourceMappingURL=index.js.map
