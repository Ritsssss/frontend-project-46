#!/usr/bin/env node

import { Command } from 'commander';
import path from 'node:path';
import getDiff from '../src/index.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0', '-V, --version', 'output the version number')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format', 'stylish')
  .action((filepath1, filepath2, options) => {
    const diff = getDiff(filepath1, filepath2, options.format);
    console.log(diff);
  });

program.parse();
