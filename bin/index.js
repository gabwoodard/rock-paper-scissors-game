#!/usr/bin/env node
import { program } from "commander";
import gameState from "../src/lib/state.js";
import { showMainMenu } from "../src/lib/gameLogic.js";

program
  .name("rockpaperscissors")
  .description("Play Rock–Paper–Scissors in your terminal.")
  .version("1.0.0");

(async () => {
  try {
    await showMainMenu(gameState);
  } catch (err) {
    console.error("Unexpected error:", err?.message || err);
    process.exit(1);
  }
})();

program.parse(process.argv);
