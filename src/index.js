import fs from 'node:fs';
import path from 'path';
import _ from 'lodash';
import parse from './parsers.js';
import formatter from '../formatters/index.js';

function getDiff(filePath1, filePath2, format = 'stylish') {
  const fullPath1 = path.resolve(process.cwd(), filePath1);
  const fullPath2 = path.resolve(process.cwd(), filePath2);

  const ext1 = path.extname(fullPath1);
  const ext2 = path.extname(fullPath2);

  const contentPath1 = fs.readFileSync(fullPath1);
  const contentPath2 = fs.readFileSync(fullPath2);

  const object1 = parse(ext1, contentPath1);
  const object2 = parse(ext2, contentPath2);

  const iter = (data1, data2) => {
    const keys1 = Object.keys(data1);
    const keys2 = Object.keys(data2);
    const allKeys = _.sortBy(_.union(keys1, keys2));

    const result = allKeys.map((key) => {
      if (_.isObject(data1[key]) && _.isObject(data2[key])) {
        return { key, type: 'nested', children: iter(data1[key], data2[key]) };
      }
      if (!Object.hasOwn(data2, key)) {
        return { key, type: 'removed', value: data1[key] };
      }
      if (!Object.hasOwn(data1, key)) {
        return { key, type: 'added', value: data2[key] };
      }
      if (data1[key] === data2[key]) {
        return { key, type: 'unchanged', value: data2[key] };
      }
      return {
        key, type: 'updated', oldValue: data1[key], newValue: data2[key],
      };
    });
    return result;
  };
  const diff = iter(object1, object2);
  return formatter(format)(diff);
}

export default getDiff;
