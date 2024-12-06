// index.js
const core = require('@actions/core');

try {
  const input = core.getInput('log-message');
  const reversedMessage = input.split('').reverse().join('');
  console.log(`Reversed Message: ${reversedMessage}`);
} catch (error) {
  core.setFailed(error.message);
}
