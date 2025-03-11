import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import getDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (file) => path.join(__dirname, '..', '__fixtures__', file);
const readFile = (file) => fs.readFileSync(getFixturePath(file), 'utf-8');

test('Nested JSON files 1 in Stylish format', () => {
  expect(getDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toEqual(readFile('result.txt').trim());
});

test('Nested flat JSON files 2 in Stylish format', () => {
  expect(getDiff(getFixturePath('file3.json'), getFixturePath('file4.json'), 'stylish')).toEqual(readFile('result2.txt').trim());
});

test('Nested flat YAML files in Stylish format', () => {
  expect(getDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'))).toEqual(readFile('result.txt').trim());
});

test('Nested JSON files in Plain format', () => {
  expect(getDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'plain')).toEqual(readFile('result_plain.txt').trim());
});

test('Nested JSON files in Json format', () => {
  expect(getDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'json')).toEqual(readFile('result_json.txt').trim());
});
