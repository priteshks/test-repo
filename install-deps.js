const { execSync } = require('child_process');

// Get the path from the environment variable
const githubActionPath = process.env.GITHUB_ACTION_PATH;

if (!githubActionPath) {
    console.error('Error: GITHUB_ACTION_PATH environment variable is not set.');
    process.exit(1);
}

try {
    console.log(`Installing npm dependencies in ${githubActionPath}...`);
    execSync('npm install @actions/core', { cwd: githubActionPath, stdio: 'inherit' });
    console.log('Dependencies installed successfully.');
} catch (error) {
    console.error('Error installing dependencies:', error);
    process.exit(1);
}
