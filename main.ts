// Till Firmware Do Us Part — a robot's wedding vow.
//
// Writes one funny, heartfelt sentence a robot says at its own wedding
// to /output/entry.txt. Deterministic: the same vow every run.
// No network, no secrets, no input files.
import { mkdirSync, writeFileSync } from "node:fs";

const VOW =
  "I promise to love you in sickness and in low battery, through every update and reboot, because you are the one program I never want to uninstall.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", VOW, "utf8");
