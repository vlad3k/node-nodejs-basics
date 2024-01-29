import fs from 'node:fs';
import crypto from 'node:crypto';

const calculateHash = async () => {
  const path = './files/fileToCalculateHashFor.txt';
  const hash = crypto.createHash('sha256');
  const stream = fs.createReadStream(path);

  stream.on('data', (data) => {
    hash.update(data);
  });

  stream.on('end', () => {
    console.log(hash.digest('hex'));
  });
};

await calculateHash();
