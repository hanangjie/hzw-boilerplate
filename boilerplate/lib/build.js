
const child_process = require('child_process');
const webpack = require('webpack');
const chalk = require('chalk');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const config = require("./config/webpack.config.prod");


const compiler = webpack(config);

compiler.plugin('done', (stats) => {
  // clearConsole();
  const json = stats.toJson({}, true);
  const messages = formatWebpackMessages(json);
  const isSuccessful = !messages.errors.length && !messages.warnings.length;
  
  if (isSuccessful) {
    // clearConsole();
    if (stats.stats) {
      console.log(chalk.green('Compiled successfully'));
    } else {
      console.log(chalk.green(`Compiled successfully in ${(json.time / 1000).toFixed(1)}s!`));
    }
  }else {
    console.log(chalk.green(`Compiled error${(json.time / 1000).toFixed(1)}s!`));
  }
});

compiler.run((err) => {
  if(err) {
    console.log(err);
    process.exit(1);
  }
  console.log('编译成功');
})

function clearConsole() {
  process.stdout.write(
    process.platform === 'win32' ? '\x1Bc' : '\x1B[2J\x1B[3J\x1B[H'
  );
}