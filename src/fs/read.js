import fs from 'node:fs';

const read = async () => {
  const path = './files/fileToRead.txt';

  if (!fs.existsSync(path)) {
    throw Error('FS operation failed');
  }

  const fileContent = await fs.promises.readFile(path, { encoding: 'utf8' });
  console.log(fileContent);
};

await read();
