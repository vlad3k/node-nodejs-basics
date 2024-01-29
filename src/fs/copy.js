import fs from 'node:fs'

const copy = async () => {
  const pathFrom = './files';
  const pathTo = './files_copy'

  if (!fs.existsSync(pathFrom) || fs.existsSync(pathTo)) {
    throw new Error('FS operation failed');
  }

  await fs.promises.cp(pathFrom, pathTo, { recursive: true });
};

await copy();
