import fs from 'node:fs';
import path from 'path';
import _ from 'lodash';
import parse from './parsers.js';

const getDiff = (filePath1, filePath2) => {
  const ext1 = path.extname(filePath1);
  const ext2 = path.extname(filePath2);

  const contentPath1 = fs.readFileSync(filePath1);
  const contentPath2 = fs.readFileSync(filePath2);

  const parsedFile1 = parse(ext1, contentPath1);
  const parsedFile2 = parse(ext2, contentPath2);

  const keys1 = Object.keys(parsedFile1);
  const keys2 = Object.keys(parsedFile2);

  const allKeys = _.sortBy(_.union(keys1, keys2));

  const result = allKeys.map((key) => {
    if (!Object.hasOwn(parsedFile2, key)) {
      return ` - ${key}: ${parsedFile1[key]}`;
    }
    if (!Object.hasOwn(parsedFile1, key)) {
      return ` + ${key}: ${parsedFile2[key]}`;
    }
    if (parsedFile1[key] === parsedFile2[key]) {
      return `   ${key}: ${parsedFile1[key]}`;
    }
    return ` - ${key}: ${parsedFile1[key]}\n + ${key}: ${parsedFile2[key]}`;
  });

  return `{\n${result.join('\n')}\n}`;
};

export default getDiff;
