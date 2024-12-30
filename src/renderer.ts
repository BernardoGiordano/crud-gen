import ejs from 'ejs';
import { AppConfig, TemplateVars } from './types';
import * as fs from 'node:fs';
import path from 'node:path';

function renderTemplate(
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
  vars: TemplateVars,
  destination: string
) {
  renderTemplate(config, 'basic-view', vars, destination);
}

export function renderInfoViewTemplate(
  config: AppConfig,
  vars: TemplateVars,
  destination: string
) {
  renderTemplate(config, 'info-view', vars, destination);
}

export function renderCompleteViewTemplate(
  config: AppConfig,
  vars: TemplateVars,
  destination: string
) {
  renderTemplate(config, 'complete-view', vars, destination);
}

export function renderControllerTemplate(
  config: AppConfig,
  vars: TemplateVars,
  destination: string
) {
  renderTemplate(config, 'controller', vars, destination);
}

export function renderServiceTemplate(
  config: AppConfig,
  vars: TemplateVars,
  destination: string
) {
  renderTemplate(config, 'service', vars, destination);
}

export function renderRepositoryTemplate(
  config: AppConfig,
  vars: TemplateVars,
  destination: string
) {
  renderTemplate(config, 'repository', vars, destination);
}

export function renderDtoTemplate(
  config: AppConfig,
  vars: TemplateVars,
  destination: string
) {
  renderTemplate(config, 'dto', vars, destination);
}

export function renderNotFoundExceptionTemplate(
  config: AppConfig,
  vars: TemplateVars,
  destination: string
) {
  renderTemplate(config, 'not-found-exception', vars, destination);
}

export function renderMapperTemplate(
  config: AppConfig,
  vars: TemplateVars,
  destination: string
) {
  renderTemplate(config, 'mapper', vars, destination);
}
