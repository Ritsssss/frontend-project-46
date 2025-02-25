import getDiff from '../src/index.js';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (file) => path.join(__dirname, '..', '__fixtures__', file);
const readFile = (file) => fs.readFileSync(getFixturePath(file), 'utf-8');

const expected1 = readFile('result.txt').trim();
const expected2 = readFile('result2.txt').trim();

test('flat JSON files 1', () => {
    expect(getDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toEqual(expected1);
  });

  test('flat JSON files 2', () => {
    expect(getDiff(getFixturePath('file3.json'), getFixturePath('file4.json'))).toEqual(expected2);
  });