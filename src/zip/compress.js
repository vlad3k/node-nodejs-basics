import fs from 'node:fs';
import zlib from 'node:zlib';

const compress = async () => {
  const inputFilePath = './files/fileToCompress.txt';
  const outputFilePath = './files/archive.gz';

  const readStream = fs.createReadStream(inputFilePath);
  const writeStream = fs.createWriteStream(outputFilePath);

  const gzipStream = zlib.createGzip();

  readStream.pipe(gzipStream).pipe(writeStream);
};

await compress();
