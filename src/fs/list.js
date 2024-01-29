import fs from 'node:fs';

const list = async () => {
  const path = './files';

  if (!fs.existsSync(path)) {
    throw Error('FS operation failed');
  }

  const files = await fs.promises.readdir(path);
  console.log(files);
};

await list();
