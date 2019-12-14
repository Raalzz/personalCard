"use strict";

// Pull in our modules
const chalk = require("chalk");
const boxen = require("boxen");
const fs = require("fs");
const path = require("path");

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round"
};

// Text + chalk definitions
const data = {
  name: chalk.red.bold("               Rahul Sawant"),
  handle: chalk.red.bold("raalzz"),
  work: chalk.green("Frontend Developer at Antstack"),
  twitter: chalk.green("https://twitter.com/") + chalk.cyan("raalzz"),
  npm: chalk.green("https://npmjs.com/") + chalk.cyan("raalzz"),
  github: chalk.green("https://github.com/") + chalk.cyan("Raalzz"),
  linkedin: chalk.green("https://linkedin.com/in/") + chalk.cyan("raalzz"),
  web: chalk.cyan("https://raalzz.com"),
  npx: chalk.green("npx") + " " + chalk.green.bold("@raalzz/card"),
  labelWork: chalk.magenta.bold("       Work", chalk.blue.bold(":")),
  labelTwitter: chalk.magenta.bold("    Twitter", chalk.blue.bold(":")),
  labelnpm: chalk.magenta.bold("        npm", chalk.blue.bold(":")),
  labelGitHub: chalk.magenta.bold("     GitHub", chalk.blue.bold(":")),
  labelLinkedIn: chalk.magenta.bold("   LinkedIn", chalk.blue.bold(":")),
  labelWeb: chalk.magenta.bold("        Web", chalk.blue.bold(":"))
  // labelCard: chalk.magenta.bold("       Card", chalk.blue.bold(":"))
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${data.name} / ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const npming = `${data.labelnpm}  ${data.npm}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading + // data.name + data.handle
  newline +
  newline + // Add one whole blank line
  working +
  newline + // data.labelWork + data.work
  twittering +
  newline + // data.labelTwitter + data.twitter
  npming +
  newline + // data.labelnpm + data.npm
  githubing +
  newline + // data.labelGitHub + data.github
  linkedining +
  newline + // data.labelLinkedIn + data.linkedin
  webing;

fs.writeFileSync(
  path.join(__dirname, "bin/output"),
  chalk.red(boxen(output, options))
);
