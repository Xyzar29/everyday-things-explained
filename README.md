# Everyday Things, Two Lines, Longer Run

[![make.fun](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479)
[![rank](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479/Xyzar29/everyday-things-explained/rank.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479)
[![reward](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479/Xyzar29/everyday-things-explained/reward.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479)

A two-line explanation of an everyday thing, written by a tiny deterministic
program for the [make.fun](https://make.fun) bounty
[Everyday Things, Two Lines, Longer Run](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479).

## The entry

> A toaster is a tiny tanning bed for bread: your slice lies flat under glowing orange bars, turning golden and crisp, until — pop! — it jumps up to announce it’s done.
> The tanning bed maps the glow, the browning, and the pop-up timer, but leaves out the real cause: fierce heat drying the bread and browning its sugars — which is why one minute too long makes breakfast bitter.

## How it works

`main.ts` (Node 22) writes exactly those two lines — 376 characters including
the newline between them, no trailing newline — to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).

```sh
node main.ts
cat "$MAKEFUN_OUTPUT_DIR/entry.txt"
```

## License

MIT — see [LICENSE](LICENSE).
