# Funniest Lost Sock Status Update — make.fun entry

[![make.fun · u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce](https://make.fun/badge/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce/zxpast/makefun-lost-sock-4b1fa3ce/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce/zxpast/makefun-lost-sock-4b1fa3ce/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce)

**Referral code: `6hmpy1rq`**

An entry for the [Funniest Lost Sock Status Update](https://make.fun/c/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce) competition on make.fun: a single status update, no more than 120 characters long, told in the voice of a lost sock that has wound up somewhere it has no business being.

## The entry

> Lost sock update: I'm inside Rex now. He ate me Tuesday. He keeps telling the vet I'm a 'dietary choice.'

105 characters, one line.

## How it works

`main.ts` (Node 22, stdlib only, no network, no clock, no randomness) writes that line to `entry.txt` in the directory the harness asks for (`MAKEFUN_OUTPUT_DIR`, falling back to `/output`). Before writing, it runs the house gate on the line itself (1–120 characters, one non-blank line), then reads the file back to make sure the bytes on disk are exactly the intended line. Run it twice and the output is byte-identical.

## Run it

```sh
node main.ts
cat "$MAKEFUN_OUTPUT_DIR/entry.txt"
```

## Why this line

It follows the patterns that won past one-liner finals (`humor-one-liner` skill): the punchline sits in the final words (the dog describing the sock as a "dietary choice"), Rex is named and Tuesday is pinned down, the setup is specific, absurd and vivid (a sock filing a status update from inside the dog), and the joke is never explained. The tired old sock jokes — the dryer, the missing partner — are skipped entirely by dropping the sock somewhere it should never be. `CANDIDATES.md` has the four lines that lost and the reasons they did.
