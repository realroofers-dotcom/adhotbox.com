<!-- BUILT 2026-08-30 16:10 ET -->

# EMAIL — what to switch on
## Cloudflare Email Service, on the Workers Paid plan

**You were right and I was wrong.** I was about to send you to sign up for Resend
and pay for a second service. The paid plan you just bought includes outbound
email: **3,000 a month, one binding, one call, no second API key.**

---

## THE THREE THINGS TO DO

### 1 · Onboard the sending domain

**Compute → Email Service → Sending → add `adhotbox.com`.**

It gives you DNS records — DKIM and the rest. Your DNS is already in Cloudflare
so it is copy-paste into the same zone, and verification is usually minutes.

**Until this is done it can only send to addresses you have verified in Email
Routing.** That is enough to test with — send yourself the signup email and read
it — but nobody else will receive anything.

**Watch the SPF record.** If Email Routing is already on that domain for
receiving, you may end up with two SPF lines fighting. There can only be one.
Paste both here and I will merge them.

### 2 · Add the binding

Worker `adhotbox` → **Settings → Bindings → Add → Email** (or "Send email").
**Variable name: `EMAIL`.** No restriction attribute — it needs to reach
publishers and advertisers, not just you.

### 3 · Decide the from-address

The worker is set to **`hello@adhotbox.com`**. Change the `FROM` line at the top
of the email section if you want something else.

**Not `noreply@`.** Every email says *reply to this and a person will answer*,
and that should be true.

---

## WHAT IT SENDS

| When | To | What |
|---|---|---|
| Somebody signs up on `start.html` | them | The five steps, and the honest paragraph about the network being new |
| You approve a **site** | the publisher | Their **publisher key**, the two-line snippet, and a link to their desk |
| You approve an **advertiser** | them | That they are in, what happens next, and that they are only charged for placements that run |
| `?action=notify` | every publisher with advertisers waiting | *3 waiting.* One button to their desk |

**`?action=notify` is manual on purpose.** Run it when there is actually
something to look at. On the paid plan you now have room for a cron if you want
it nightly — you were capped at five triggers before and the paid plan lifts
that, which also unblocks the queue worker.

---

## THE RULE BUILT INTO IT

**No email failure ever breaks what somebody was doing.** Every send is wrapped.
If the domain is not onboarded, or the quota is spent, the signup still works,
the approval still happens, and the reason comes back in the response as `why`.

Codes worth recognising: **`E_SENDER_DOMAIN_NOT_AVAILABLE`** means step 1 is not
done. **`E_SENDER_NOT_VERIFIED`** means the from-address is not verified.

---

## TESTING IT

1. Verify your own Gmail as a destination address in Email Routing.
2. Put that address into the form on `start.html`.
3. Read what arrives. **You are the first person to get it, so read it as one.**

Then onboard the domain and it will reach anybody.
