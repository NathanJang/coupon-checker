#!/usr/bin/env node

const minimist = require('minimist');
const args = minimist(process.argv.slice(2));

function help() {
  console.log(`encrypt-key.js: generate coupon hashes
    Usage: node encrypt-key.js --password [string] --key [string]
    Writes to stdout.`);
  process.exit(1);
}

if (args.help || args.h) { help(); }

if (!args.password || !args.key) { help(); }

const _sjcl = require('sjcl');
const result = _sjcl.encrypt(args.password, args.key);

process.stdout.write(result);
