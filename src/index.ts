import { description, version } from '../package.json';
import { Command } from 'commander';
import { AppConfig, ProgramOptions, Survey } from './types';
import { readFileSync } from 'fs';
import { parse } from 'ini';
import inquirer from 'inquirer';
import { prompts } from './survey';
import { createCrud } from './program';

async function main(args: string[]) {
  const program = new Command()
    .name('crud-gen')
    .version(version)
    .description(description)
    .option(
      '-c, --config <path>',
      'Path to the configuration file',
      './crud-gen.ini'
    )
    .parse(args);

  const options = program.opts() as ProgramOptions;
  const config = parse(readFileSync(options.config, { encoding: 'utf-8' }));
  const answers = await inquirer.prompt(prompts);
  createCrud(options, config as AppConfig, answers! as Survey);
}

main(process.argv);
