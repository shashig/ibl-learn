import * as fs from 'fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

//Set this based on where this file currently is. 
// . refers to current directory
// .. refers to parent directory
const __project_root_dir = fileURLToPath(new URL('.', import.meta.url));

//Once you have a reference directory, you can use path.join to refer to directory 
// and files. path.join can take any number of arguments
const DATA_DIR = path.join(__project_root_dir, 'data');
const ACCOUNT_DESCRIBE_FILE = path.join(DATA_DIR, 'Account.describe.json');

//use fs.readFileSync to get the file's contents
const fileContent = fs.readFileSync(ACCOUNT_DESCRIBE_FILE, 'utf-8');

//Use JSON.parse to get a JSON object that you can work with easily 
const acctDescribe = JSON.parse(fileContent);

//For example, we can see how many properties there are and 
// print one property name and value
console.log('Number of properties:', Object.keys(acctDescribe).length);
const somePropName = Object.keys(acctDescribe)[15];
console.log(`${somePropName}: ${acctDescribe[somePropName]}`);

