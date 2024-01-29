import fs from 'node:fs';

const rename = async () => {
  const path = './files/wrongFilename.txt';
  const newPath = './files/properFilename.md';

  if (!fs.existsSync(path) || fs.existsSync(newPath)) {
    throw Error('FS operation failed');
  }

  await fs.promises.rename(path, newPath);
};

await rename();
