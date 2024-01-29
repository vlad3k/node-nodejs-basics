const parseEnv = () => {
   const varPrefix = 'RSS_';
   const rssVariables =
     Object.entries(process.env)
       .filter(([varName]) => varName.includes(varPrefix))
       .map(([key, value]) => `${key}=${value}`)
       .join('; ');

   console.log(rssVariables);
};

parseEnv();
