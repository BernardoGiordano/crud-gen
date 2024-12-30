import ejs from 'ejs';
import {AppConfig, ServiceTemplateVars} from './types';
import * as fs from 'node:fs';
import path from 'node:path';
import {
  BasicViewTemplateVars,
  CompleteViewTemplateVars,
  ControllerTemplateVars,
  InfoViewTemplateVars
} from './types';

export function renderTemplate(
  config: AppConfig,
  templateName: string,
  vars: object,
  destination: string
) {
  if (fs.existsSync(destination)) {
    console.warn(`File ${destination} already exists. Skipping.`);
    return;
  }

  const templatePath = path.join(
    config.templates.base_path,
    `${templateName}.template`
  );
  const template = fs.readFileSync(templatePath, { encoding: 'utf-8' });
  const renderedTemplate = ejs.render(template, vars);
  fs.writeFileSync(destination, renderedTemplate);
}

export function renderBasicViewTemplate(
  config: AppConfig,
  vars: BasicViewTemplateVars,
  destination: string
) {
  renderTemplate(config, 'basic-view', vars, destination);
}

export function renderInfoViewTemplate(
  config: AppConfig,
  vars: InfoViewTemplateVars,
  destination: string
) {
  renderTemplate(config, 'info-view', vars, destination);
}

export function renderCompleteViewTemplate(
  config: AppConfig,
  vars: CompleteViewTemplateVars,
  destination: string
) {
  renderTemplate(config, 'complete-view', vars, destination);
}

export function renderControllerTemplate(
  config: AppConfig,
  vars: ControllerTemplateVars,
  destination: string
) {
  renderTemplate(config, 'controller', vars, destination);
}

export function renderServiceTemplate(
  config: AppConfig,
  vars: ServiceTemplateVars,
  destination: string
) {
  renderTemplate(config, 'service', vars, destination);
}
