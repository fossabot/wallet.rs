const { promisify } = require('util');
const build = promisify(require('electron-build-env'));

build(['npm', 'run', 'build:neon'], {
    electron: process.env.CURRENT_ELECTRON_VERSION,
}).then(() => process.exit(0));
