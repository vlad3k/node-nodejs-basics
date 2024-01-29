import { promises as fsPromises } from 'node:fs';
import process from 'node:process';

const read = async () => {
  const path = './files/fileToRead.txt';
  const stream = (await fsPromises.open(path)).createReadStream();
  stream.pipe(process.stdout);
  stream.on('end', () => {
    process.stdout.write('\n');
  });
};

await read();
