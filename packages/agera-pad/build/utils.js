/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');

const resolve = (dir) => path.resolve(__dirname, '..', dir);

/**
 * 移动文件
 * @param {*} origin
 * @param {*} target
 */
function move(origin, target) {
  fs.rename(resolve(origin), resolve(target), (err) => {
    if (err) {
      throw err;
    }
  });
}

/**
 * 拷贝文件
 * @param {*} origin
 * @param {*} target
 */
function copy(origin, target) {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target);
  }

  fs.readdirSync(origin).forEach((file) => {
    const originFile = path.join(origin, file);
    const targetFile = path.join(target, file);
    const stat = fs.statSync(originFile);
    if (stat.isDirectory()) {
      copy(originFile, targetFile);
    } else if (!fs.existsSync(targetFile)) {
      fs.writeFileSync(targetFile, fs.readFileSync(originFile), { encoding: 'utf8' });
    }
  });
}

/**
 * 文件遍历方法
 * @param filePath 需要遍历的文件路径
 */

function fileDisplay(filePath, callback) {
  // 根据文件路径读取文件，返回文件列表
  fs.readdir(filePath, (err, files) => {
    if (err) {
      // console.warn(err)
    } else {
      // 遍历读取到的文件列表
      files.forEach((filename) => {
        // 获取当前文件的绝对路径
        const filedir = path.join(filePath, filename);
        // 根据文件路径获取文件信息，返回一个fs.Stats对象
        fs.stat(filedir, (eror, stats) => {
          if (eror) {
            // console.warn('获取文件stats失败')
          } else {
            const isFile = stats.isFile(); // 是文件
            const isDir = stats.isDirectory(); // 是文件夹
            if (isFile) {
              callback(filedir);
            } else if (isDir) {
              fileDisplay(filedir, callback); // 递归，如果是文件夹，就继续遍历该文件夹下面的文件
            }
          }
        });
      });
    }
  });
}

const outputPath = 'lib';

module.exports = {
  getAssetsPath(_path = '.') {
    return path.posix.join(outputPath, _path);
  },
  resolve(_path) {
    return _path ? path.resolve(__dirname, _path) : path.resolve(__dirname, '..', outputPath);
  },
  isProduct: ['production', 'prod'].includes(process.env.NODE_ENV),
  env: process.env.NODE_ENV,
  chalkConsole: {
    success: () => {
      console.log(chalk.green('========================================='));
      console.log(chalk.green('========打包成功(build success)!========='));
      console.log(chalk.green('========================================='));
    },
    building: (index, total) => {
      console.log(chalk.blue(`正在打包第${index}/${total}个文件...`));
    },
  },
  fsExistsSync: (_path) => {
    try {
      fs.accessSync(_path, fs.F_OK);
    } catch (e) {
      return false;
    }
    return true;
  },
  move,
  copy,
  fileDisplay,
};
