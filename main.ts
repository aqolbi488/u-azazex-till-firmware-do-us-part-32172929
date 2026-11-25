// Till Firmware Do Us Part — a robot's wedding vow.
//
// Writes one funny, heartfelt sentence a robot says at its own wedding
// to /output/entry.txt. Deterministic: the same vow every run.
// Fix round: tightened the second clause — the promise now lands on the
// em-dash instead of trailing through a "because" clause; same meaning.
// No network, no secrets, no input files.
import { mkdirSync, writeFileSync } from "node:fs";

const VOW =
  "I promise to love you in sickness and in low battery, through every update and reboot — you are the one program I will never uninstall.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", VOW, "utf8");
