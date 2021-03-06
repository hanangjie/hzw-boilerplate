
const openBrowser = require('react-dev-utils/openBrowser');

const child_process = require('child_process');
const webpack = require('webpack');
const chalk = require('chalk');
const WebpackDevServer = require('webpack-dev-server');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const config = require("./config/webpack.config.dev");


const { port = 9999, host = '127.0.0.1', protocol = 'http' } = config.devServer;
config.entry.index = [
  `${require.resolve('webpack-dev-server/client/')}?http://${host}:${port}`,
  require.resolve('webpack/hot/only-dev-server.js'),
  config.entry.index
]
const compiler = webpack(config);



function start() {
  const p = child_process.fork(`${__dirname}/runServer`, process.argv.slice(2));
  p.on('message', (data) => {
    if (data === 'RESTART') {
      p.kill('SIGINT');
      start();
    }
  });
}

if (!process.send) {
  start();
} else {
  runDevServer();
}


compiler.plugin('invalid', () => {
  // clearConsole();
  console.log(chalk.yellow('Compiling...'));
});
compiler.plugin('done', (stats) => {
  clearConsole();
  const json = stats.toJson({}, true);
  const messages = formatWebpackMessages(json);
  const isSuccessful = !messages.errors.length && !messages.warnings.length;
  
  if (isSuccessful) {
    clearConsole();
    if (stats.stats) {
      console.log(chalk.green('Compiled successfully'));
    } else {
      console.log(chalk.green(`Compiled successfully in ${(json.time / 1000).toFixed(1)}s!`));
    }
  }
  
});
function runDevServer() {
  const devServer = new WebpackDevServer(compiler, config.devServer);
  devServer.listen(port, host, (err) => {
    if (err) {
      return console.log(err);
    }
    clearConsole();
    process.send('READY');
    console.log('Starting the development server...');
    
    openBrowser(`${protocol}://${host}:${port}/`);
  });
}


function clearConsole() {
  process.stdout.write(
    process.platform === 'win32' ? '\x1Bc' : '\x1B[2J\x1B[3J\x1B[H'
  );
}