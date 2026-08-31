<!-- BUILT 2026-08-30 16:32 ET -->

# BACKING UP THE DATABASE
## Three copies, and one of them in your hand

---

## WHY THIS ONE MATTERS MORE THAN THE OTHERS

The repos are on GitHub, so the code exists in two places already.

**The database exists in exactly one place.** And it holds the
fails-to-deliver series, the findings with the dates they were identified, the
wire, the 13F work and now the whole ad network. **Some of that is evidence with
timestamps on it.** It should not sit in a single company's account.

**Three copies is the rule.** The live database, a file in R2, and a copy on a
drive you actually hold.

---

## SETTING IT UP

### 1 · Make the bucket

**R2 Object Storage → Create bucket → `overhang-backups`.** Location automatic.

### 2 · Make the worker

Workers & Pages → Create → Worker → **`overhang-backup`**.
Paste `overhang-backup-1a.js`.

**Bindings**
- `OVERHANG` → D1 → overhang
- `BACKUPS` → R2 → overhang-backups

**Secret:** `LOG_KEY`

**Cron:** `0 7 * * 0` — three in the morning Eastern, every Sunday. You now have
room for it; the free plan's five-trigger cap is gone with the paid plan.

### 3 · Take one now

```
https://overhang-backup.realroofers.workers.dev/?action=run&key=YOURKEY
```

It comes back with the filename, how many tables, how many rows and how big.

---

## GETTING IT ONTO YOUR DRIVE

```
?action=list                    every backup, newest first
?action=get&file=NAME           downloads it
```

Open the `get` URL in a browser and it saves as a `.sql` file. **Put it on the
drive you carry.** That is the third copy and it is the only one nobody else
controls.

**Do that monthly at least.** The weekly cron keeps R2 current on its own; the
copy in your hand is the one that needs you.

---

## WHAT THE FILE IS

Plain text. CREATE statements, then INSERT statements, then the indexes and
views. It opens in any editor.

**It restores anywhere, not only into D1:**

```
sqlite3 overhang.db < overhang-2026-08-30.sql
```

That matters. **A backup that can only be read by the thing that failed is not a
backup.** This one opens on your own machine with free software.

---

## ALSO WORTH KNOWING

**Time Travel** is already there — the tab beside Overview in the D1 console. It
keeps a rolling window of about thirty days and can put the database back to any
minute in it. **Good for "I just deleted the wrong rows." Not an archive**,
because it lives in the same account as the thing it is protecting.

**The backup log** is written into the database itself, so
`SELECT * FROM backup_log ORDER BY id DESC LIMIT 10` tells you when the last one
ran without going anywhere near R2.

---

## THE ONE THING TO WATCH

If the database gets very large, the dump has to be read in pages — it already
is, five hundred rows at a time — but a worker still has a time limit.
**If `?action=run` ever times out, that is the signal to split the dump by
table** rather than to ignore it.

Check the size in the response each time. Today it will be small.
