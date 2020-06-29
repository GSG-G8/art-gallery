const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const lessVariables = require('./lessVariables');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: lessVariables,
  })
);
