import fs from 'node:fs';
import zlib from 'node:zlib';

const decompress = async () => {
  const inputFilePath = './files/archive.gz';
  const outputFilePath = './files/fileToCompress.txt';

  const readStream = fs.createReadStream(inputFilePath);

  const writeStream = fs.createWriteStream(outputFilePath);

  const gunzipStream = zlib.createGunzip();

  readStream.pipe(gunzipStream).pipe(writeStream);
};

await decompress();
