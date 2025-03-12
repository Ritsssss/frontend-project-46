import fs from 'node:fs';
import path from 'path';
import _ from 'lodash';
import parse from './parsers.js';
import formatter from './formatters/index.js';
import iter from './getDiff.js';

function getDiff(filePath1, filePath2, format = 'stylish') {
  const fullPath1 = path.resolve(process.cwd(), '.', '__fixtures__', filePath1);
  const fullPath2 = path.resolve(process.cwd(), '.', '__fixtures__', filePath2);

  const ext1 = path.extname(fullPath1).slice(1);
  const ext2 = path.extname(fullPath2).slice(1);

  const contentPath1 = fs.readFileSync(fullPath1);
  const contentPath2 = fs.readFileSync(fullPath2);

  const object1 = parse(ext1, contentPath1);
  const object2 = parse(ext2, contentPath2);

  const diff = iter(object1, object2);
  return formatter(format)(diff);
}

export default getDiff;
