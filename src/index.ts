import { description, version } from '../package.json';
import { Command } from 'commander';
import { AppConfig, ProgramOptions, Survey } from './types';
import { readFileSync } from 'fs';
import { parse } from 'ini';
import inquirer from 'inquirer';
import { prompts } from './survey';
import { createBackendCrud, createFrontendCrud } from './program';

async function main(args: string[]) {
  const program = new Command()
    .name('crud-gen')
    .version(version)
    .description(description)
    .option('-t, --type <type>', 'Type of the project (be or fe)', 'be')
    .option('-c, --config <path>', 'Path to the config file', './crud-gen.ini')
    .parse(args);

  const options = program.opts() as ProgramOptions;
  const config = parse(readFileSync(options.config, { encoding: 'utf-8' }));
  const answers = await inquirer.prompt(prompts);
  if (options.type === 'fe') {
    createFrontendCrud(options, config as AppConfig, answers! as Survey);
  } else {
    createBackendCrud(options, config as AppConfig, answers! as Survey);
  }
}

main(process.argv);
