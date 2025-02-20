import { readFileSync } from 'node:fs';
import fs from 'node:fs';
import path from 'path';

const getDiff = (filePath1, filePath2) => {
  const ext1 = path.extname(filePath1);
  const ext2 = path.extname(filePath2);

  if (ext1 === '.json' && ext2 === '.json') {

    const contentPath1 = fs.readFileSync(filePath1);
    const contentPath2 = fs.readFileSync(filePath2);

    const parsedFile1 = JSON.parse(contentPath1);
    const parsedFile2 = JSON.parse(contentPath2);

    return `File 1: ${JSON.stringify(parsedFile1)}\nFile 2: ${JSON.stringify(parsedFile2)}`;  
  }
  else return `Check the files' format`;
}

export default getDiff;
