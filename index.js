const core = require('@actions/core');

try {
  // Get the log message from the environment variable
  const input = process.env.LOG_MESSAGE;
  if (!input) {
    throw new Error('LOG_MESSAGE environment variable is not set.');
  }
  const reversedMessage = input.split('').reverse().join('');
  console.log(`Reversed Message: ${reversedMessage}`);
} catch (error) {
  core.setFailed(error.message);
}
