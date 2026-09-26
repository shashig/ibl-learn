import { execSync } from 'child_process';

const execShellCommand = (command) => {
  let result;
  try {
    // Execute the command. Returns a Buffer; use toString() to read it as text
    const buffer = execSync(command, { maxBuffer: 50 * 1024 * 1024 });
    result = buffer.toString();
    if (result !== '') {
      try {
        result = JSON.parse(result);
      } catch (e) {
        console.error('Could not parse to JSON');
      }
      
    }
  } catch (execError) {
    // When any row fails, sf CLI exits with status 1. 
    // We catch it here and check if it printed JSON to stdout.
    if (execError.stdout) {
      result = JSON.parse(execError.stdout.toString());
    } else {
      // This handles real system execution failures (e.g., CLI not installed)
      throw execError;
    }
  }
  return result;
}

//Running SF CLI query command
const QUERY = 'select id, name from Account limit 1';
const SF_QUERY_COMMAND = `sf data query --query "${QUERY}" --target-org ibl-devdigi --json`
const result = execShellCommand(SF_QUERY_COMMAND);
console.log(JSON.stringify(result));

//Running a simple ls command
const lsResult = execShellCommand('ls');
console.log(lsResult);