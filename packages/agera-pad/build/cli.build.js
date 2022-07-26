/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
const { run } = require('runjs');
const rimraf = require('rimraf');
const { libList } = require('./lib-list');
const {
  getAssetsPath, chalkConsole, resolve, move, fileDisplay,
} = require('./utils');

function build(output, input, index, len) {
  chalkConsole.building(index + 1, len);
  run(
    `vue-cli-service build --target lib --no-clean  --name index --dest ${getAssetsPath(output !== 'index' ? output : '.')} ${input}`,
  );
}

// 删除多余文件
function rimrafDemo(outputPath) {
  const output = outputPath !== 'index' ? `./${outputPath}/demo.html` : './demo.html';
  rimraf(getAssetsPath(output), () => {
    // todo
  });
}

const pkgLen = libList.length;
libList.forEach((item, index) => {
  build(item.output, item.input, index, pkgLen);
  rimrafDemo(item.output);
});

// 重命名common文件
fileDisplay(getAssetsPath(), (file) => {
  const reg = /.common/;
  if (reg.test(file)) {
    file = `../${file}`;
    move(resolve(file), resolve(file.replace(reg, '')));
  }
});

chalkConsole.success();
