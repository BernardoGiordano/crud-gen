import ejs from 'ejs';
import { AppConfig, BackendTemplateVars, FrontendTemplateVars } from './types';
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
  vars: BackendTemplateVars,
  destination: string
) {
  renderTemplate(config, 'basic-view', vars, destination);
}

export function renderInfoViewTemplate(
  config: AppConfig,
  vars: BackendTemplateVars,
  destination: string
) {
  renderTemplate(config, 'info-view', vars, destination);
}

export function renderCompleteViewTemplate(
  config: AppConfig,
  vars: BackendTemplateVars,
  destination: string
) {
  renderTemplate(config, 'complete-view', vars, destination);
}

export function renderControllerTemplate(
  config: AppConfig,
  vars: BackendTemplateVars,
  destination: string
) {
  renderTemplate(config, 'controller', vars, destination);
}

export function renderServiceTemplate(
  config: AppConfig,
  vars: BackendTemplateVars,
  destination: string
) {
  renderTemplate(config, 'service', vars, destination);
}

export function renderRepositoryTemplate(
  config: AppConfig,
  vars: BackendTemplateVars,
  destination: string
) {
  renderTemplate(config, 'repository', vars, destination);
}

export function renderDtoTemplate(
  config: AppConfig,
  vars: BackendTemplateVars,
  destination: string
) {
  renderTemplate(config, 'dto', vars, destination);
}

export function renderNotFoundExceptionTemplate(
  config: AppConfig,
  vars: BackendTemplateVars,
  destination: string
) {
  renderTemplate(config, 'not-found-exception', vars, destination);
}

export function renderMapperTemplate(
  config: AppConfig,
  vars: BackendTemplateVars,
  destination: string
) {
  renderTemplate(config, 'mapper', vars, destination);
}

export function renderFeModelTemplate(
  config: AppConfig,
  vars: FrontendTemplateVars,
  destination: string
) {
  renderTemplate(config, 'model', vars, destination);
}

export function renderFeFormGroupTemplate(
  config: AppConfig,
  vars: FrontendTemplateVars,
  destination: string
) {
  renderTemplate(config, 'form-group', vars, destination);
}

export function renderFeServiceTemplate(
  config: AppConfig,
  vars: FrontendTemplateVars,
  destination: string
) {
  renderTemplate(config, 'service', vars, destination);
}

export function renderFeMetadataComponentTemplate(
  config: AppConfig,
  vars: FrontendTemplateVars,
  name: string
) {
  renderTemplate(
    config,
    'metadata-ts',
    vars,
    name + '-metadata-tab.component.ts'
  );
  renderTemplate(
    config,
    'metadata-html',
    vars,
    name + '-metadata-tab.component.html'
  );
}

export function renderFeGeneralComponentTemplate(
  config: AppConfig,
  vars: FrontendTemplateVars,
  name: string
) {
  renderTemplate(
    config,
    'general-ts',
    vars,
    name + '-general-tab.component.ts'
  );
  renderTemplate(
    config,
    'general-html',
    vars,
    name + '-general-tab.component.html'
  );
}

export function renderFeListPageTemplate(
  config: AppConfig,
  vars: FrontendTemplateVars,
  name: string
) {
  renderTemplate(config, 'list-ts', vars, name + '.component.ts');
  renderTemplate(config, 'list-html', vars, name + '.component.html');
}

export function renderFeDetailPageTemplate(
  config: AppConfig,
  vars: FrontendTemplateVars,
  name: string
) {
  renderTemplate(config, 'detail-ts', vars, name + '.component.ts');
  renderTemplate(config, 'detail-html', vars, name + '.component.html');
}

export function renderFeRoutingModuleTemplate(
  config: AppConfig,
  vars: FrontendTemplateVars,
  destination: string
) {
  renderTemplate(config, 'routing-module', vars, destination);
}

export function renderFeModuleTemplate(
  config: AppConfig,
  vars: FrontendTemplateVars,
  destination: string
) {
  renderTemplate(config, 'module', vars, destination);
}
