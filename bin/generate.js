#!/usr/bin/env node
/* jshint node: true */

require('babel-core/register');
const minimist = require('minimist');
const args = minimist(process.argv.slice(2));

function help() {
  console.log(`generate.js: generate coupon hashes
    Usage: node generate.js --from [number] --to [number] --key [string]
    Writes to stdout.`);
  process.exit(1);
}

if (args.help || args.h) { help(); }

if ((typeof args.from !== 'number') || (typeof args.to !== 'number') || (!args.key)) { help(); }

const hmac = require('../app/utils/hmac').default;
const _sjcl = require('sjcl');
var results = [];

for (var i = args.from; i <= args.to; i++) {
  var hex = i.toString(16);
  switch (hex.length) {
    case 1:
      hex = '00' + hex;
      break;
    case 2:
      hex = '0' + hex;
      break;
    default:
      break;
  }
  var couponId = '10' + hex;
  var hash = hmac(_sjcl, args.key, couponId);
  results.push({ id: couponId, hash: hash });
}

process.stdout.write(JSON.stringify(results, true, 2));
