/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const glob = require('glob');
const packageJsonInfo = require('../package.json');

const packageName = packageJsonInfo.name;
const setMPA = () => {
  const entry = [];
  const entryFiles = glob.sync(path.join(__dirname, '../packages/*/index.ts'));
  Object.keys(entryFiles).forEach((index) => {
    const entryFile = entryFiles[index];
    const reg = new RegExp(`${packageName}/packages/(.*)/index.ts`);
    const match = entryFile.match(reg);
    const pageName = match && match[1];
    const obj = {
      input: entryFile,
      output: pageName,
      moduleName: pageName,
    };
    entry.push(obj);
  });
  entry.push({
    input: path.join(__dirname, '../packages/index.ts'),
    output: 'index',
    moduleName: 'index',
  });
  return entry;
};

const libList = setMPA();

module.exports = { libList };
