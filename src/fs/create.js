import fs from 'node:fs';

const create = async () => {
  const path = './files/fresh.txt';

  if (fs.existsSync('./files/fresh.txt')) {
    throw new Error('FS operation failed');
  }

  await fs.promises.writeFile(path, 'I am fresh and young');
};

await create();
