import fs from 'node:fs';

const remove = async () => {
  const path = './files/fileToRemove.txt';

  if (!fs.existsSync(path)) {
    throw Error('FS operation failed');
  }

  await fs.promises.unlink(path);
};

await remove();
