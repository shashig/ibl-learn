import * as fs from 'fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

//Set this based on where this file currently is. 
// . refers to current directory
// .. refers to parent directory
const __project_root_dir = fileURLToPath(new URL('.', import.meta.url));

//Once you have a reference directory, you can use path.join to refer to directory and files
//path.join can take any number of arguments
const DATA_DIR = path.join(__project_root_dir, 'data');
const ACCOUNT_DESCRIBE_FILE = path.join(DATA_DIR, 'Account.describe.json');

console.log(__project_root_dir);
console.log(DATA_DIR);
console.log(ACCOUNT_DESCRIBE_FILE);
