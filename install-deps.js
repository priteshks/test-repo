const { execSync } = require('child_process');

try {
    console.log('Installing npm dependencies...');
    execSync('npm install', { stdio: 'inherit' });
    console.log('Dependencies installed successfully.');
} catch (error) {
    console.error('Error installing dependencies:', error);
    process.exit(1);
}
