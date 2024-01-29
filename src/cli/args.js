const parseArgs = () => {
  const args = {};

  for (let i = 2; i < process.argv.length; i += 2) {
    const key = process.argv[i];

    args[key] = process.argv[i + 1];
  }

  const resultArgsString =
    Object.entries(args)
      .map(([key, value]) => `${key} is ${value}`)
      .join(', ');

  console.log(resultArgsString);
};

parseArgs();
