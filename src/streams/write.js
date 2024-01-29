import fs from 'node:fs';
import { createInterface } from 'readline';

const write = async () => {
  const path = './files/fileToWrite.txt'
  const stream = fs.createWriteStream(path);
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('', (userInput) => {
    stream.write(userInput);
    rl.close();
  });
};

await write();
