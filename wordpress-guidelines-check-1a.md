<!-- BUILT 2026-08-29 15:02 ET -->

# THE PLUGIN AGAINST THE GUIDELINES
## Read together, 29 August 2026

Guidelines read in full: **7** (tracking) and **8** (external code). The rest
checked against what we built. Where I am working from the index rather than the
full text, it says so.

---

## THE TWO THAT DECIDE IT

### 8 · Plugins may not send executable code via third-party systems

**Read in full. We pass, and the guideline says so directly:**

> *"Externally loading code from documented services is permitted, however all
> communication must be made as securely as possible."*

We load one script, `https://adhotbox.com/box.js`, over HTTPS, from a documented
service. What that guideline actually forbids is serving plugin updates from
somewhere other than WordPress.org, installing premium versions, calling CDNs
for anything but fonts, and using iframes for admin pages. **We do none of
them.**

### 7 · Plugins may not track users without their consent

**This is the one that could have killed it, and the answer is in the same
guideline.** Listed among prohibited things:

> *"Third-party advertisement mechanisms which track usage and/or views."*

That is literally the business. But:

> *"An exception to this policy is Software as a Service... By installing,
> activating, registering, and configuring plugins that utilize those services,
> consent is granted for those systems."*

**We are inside the exception, and by construction rather than by luck.** The
plugin does nothing until somebody registers at adhotbox.com and pastes a key.
No key means no script enqueued, no request made, no markup output. Install,
activate, register, configure — the exact path named.

**What the guideline additionally requires**, and what was missing until today:

> *"Documentation on how any user data is collected, and used, should be
> included in the plugin's readme, preferably with a clearly stated privacy
> policy."*

**Fixed.** The readme now carries a "What data is sent, and by whom" section
listing every field, plus what arrives in the connection and is discarded, plus
what is never collected. `privacy.html` is written and linked from the readme,
the plugin header and the settings screen.

---

## THE REST

| # | Guideline | Where we stand |
|---|---|---|
| 1 | GPL v2 compatible | **Pass.** GPLv2-or-later, declared in the header and the readme. |
| 2 | Developer responsible for contents | **Pass.** One author, one service. |
| 3 | Stable version available | **Pass** on submission. |
| 4 | Code mostly human readable | **Pass.** Nothing minified or obfuscated. |
| 5 | Trialware not permitted | **Pass, and worth understanding.** Trialware is a plugin that expires or is crippled until paid. Ours never expires and is never crippled — it is the free client for a paid service, which is guideline 6, not 5. |
| 6 | Software as a Service permitted | **This is our lane.** A real service with real functionality, documented, with terms and a privacy policy. |
| 9 | Nothing illegal, dishonest or offensive | **Pass**, and the banned-category list is published rather than implied. |
| 10 | No external links or credits without permission | **Pass.** The advertisements *are* external links — that is what the publisher installed the plugin to do, and nothing appears until they place a slot themselves. No credit link, no footer badge, no "powered by". |
| 11 | Do not hijack the admin dashboard | **Fixed today.** The one notice is now dismissible, remembers being dismissed per user, and only appears on the Plugins screen — not the dashboard. |
| 12 | Readmes must not spam | **Pass.** Five honest tags, no keyword stuffing, no affiliate links. |
| 13 | Use WordPress default libraries | **Pass.** No jQuery, no bundled framework, no web fonts of its own. |
| 14 | Avoid frequent commits | Applies after release. |
| 15 | Increment version each release | Applies after release. |
| 16 | Complete plugin at submission | **Pass.** It works the moment a key is entered. |
| 17 | Respect trademarks and project names | **Pass.** "AdHotBox" is ours and the name does not begin with "WordPress" or "WooCommerce". |

---

## WHAT WAS CHANGED TODAY

1. **Readme rewritten** with a third-party-service declaration, the exact script
   URL, every field sent, what is discarded, what is never collected, and what
   it costs — including that the ten dollars is not refundable.
2. **`privacy.html` written** and linked from the readme, the plugin header and
   the settings screen.
3. **The admin notice made dismissible**, per user, and moved off the dashboard.
4. **A "What this connects to" section added to the settings screen**, so a
   publisher reads it where they are actually configuring it rather than only in
   a readme they may never open.

---

## WHAT STILL HAS TO EXIST BEFORE SUBMITTING

- **`terms.html`.** Linked in three places and not yet written.
- **The three screenshots** the readme names, as `assets/screenshot-1.png` and so on.
- **A support email that a person answers**, published on adhotbox.com.
- **`box.js` must be live at `https://adhotbox.com/box.js`** before review — a
  reviewer will fetch it.
- **Read guidelines 5, 6, 10 and 12 in full**, rather than from the index as
  above. Those four are the ones a service-backed plugin gets held to hardest,
  and my summaries of them are from the titles.

---

## THE HONEST RISK

**A reviewer may still balk at an advertising network**, however clean the
implementation. Ad plugins get more scrutiny than most because most of them
deserve it.

**The defence is the design, and it is real:** the plugin does nothing without a
key, sets no cookie, stores no identifier, builds no profile, and the publisher
approves every advertiser by hand. That is a stronger privacy position than the
plugin any of these reviewers use themselves.

**If it is refused, ask why and fix it.** A first refusal is normal and is not
the end of it.
