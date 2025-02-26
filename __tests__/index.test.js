import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import getDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (file) => path.join(__dirname, '..', '__fixtures__', file);
const readFile = (file) => fs.readFileSync(getFixturePath(file), 'utf-8');

test('flat JSON files 1', () => {
  expect(getDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toEqual(readFile('result.txt').trim());
});

test('flat JSON files 2', () => {
  expect(getDiff(getFixturePath('file3.json'), getFixturePath('file4.json'))).toEqual(readFile('result2.txt').trim());
});

test('flat YAML files', () => {
  expect(getDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'))).toEqual(readFile('result.txt').trim());
});
