import * as fs from 'node:fs';

export function capitalizeFirstLetter(val: string) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export function createDirectoryIfNotExists(directory: string) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }
}
