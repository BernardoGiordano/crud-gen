import ejs from 'ejs';
import {AppConfig, BasicViewTemplateVars, CompleteViewTemplateVars, InfoViewTemplateVars} from './types';
import * as fs from 'node:fs';
import path from 'node:path';

export function renderBasicViewTemplate(
  config: AppConfig,
  vars: BasicViewTemplateVars,
  destination: string
) {
  if (fs.existsSync(destination)) {
    console.warn(`File ${destination} already exists. Skipping.`);
    return;
  }

  const template = fs.readFileSync(
    path.join(config.templates.base_path, 'basic-view.template'),
    { encoding: 'utf-8' }
  );
  const renderedTemplate = ejs.render(template, vars);
  fs.writeFileSync(destination, renderedTemplate);
}

export function renderInfoViewTemplate(
  config: AppConfig,
  vars: InfoViewTemplateVars,
  destination: string
) {
  if (fs.existsSync(destination)) {
    console.warn(`File ${destination} already exists. Skipping.`);
    return;
  }

  const template = fs.readFileSync(
    path.join(config.templates.base_path, 'info-view.template'),
    { encoding: 'utf-8' }
  );
  const renderedTemplate = ejs.render(template, vars);
  fs.writeFileSync(destination, renderedTemplate);
}

export function renderCompleteViewTemplate(
  config: AppConfig,
  vars: CompleteViewTemplateVars,
  destination: string
) {
  if (fs.existsSync(destination)) {
    console.warn(`File ${destination} already exists. Skipping.`);
    return;
  }

  const template = fs.readFileSync(
    path.join(config.templates.base_path, 'complete-view.template'),
    { encoding: 'utf-8' }
  );
  const renderedTemplate = ejs.render(template, vars);
  fs.writeFileSync(destination, renderedTemplate);
}
