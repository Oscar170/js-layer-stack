const path = require('path');
const { lstatSync, readdirSync } = require('fs');

const basePath = path.resolve(__dirname, '../', 'packages');
const packages = readdirSync(basePath).filter(name =>
  lstatSync(path.join(basePath, name)).isDirectory()
);

module.exports = ({ config }) => {
  Object.assign(config.resolve.alias, {
    ...packages.reduce(
      (acc, name) => ({
        ...acc,
        [`@my-awesome-project/${name}`]: path.join(basePath, name),
      }),
      {}
    ),
  });

  return config;
};
