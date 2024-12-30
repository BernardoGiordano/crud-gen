import { AppConfig, ProgramOptions, Survey } from './types';
import {
  renderBasicViewTemplate,
  renderCompleteViewTemplate,
  renderControllerTemplate,
  renderInfoViewTemplate,
  renderServiceTemplate,
} from './renderer';
import { capitalizeFirstLetter, createDirectoryIfNotExists } from './utils';

export function createCrud(
  options: ProgramOptions,
  config: AppConfig,
  survey: Survey
) {
  // console.log('Creating CRUD');
  // console.log('Options', options);
  // console.log('Config', config);
  // console.log('Survey', survey);

  const modules_base_package = config.project.modules_base_package;
  const models_base_package = config.project.models_base_package;
  const repositories_base_package = config.project.repositories_base_package;
  const crud_name_lowercase = survey.crud_name.toLowerCase();
  const crud_name_uppercase = survey.crud_name.toUpperCase();
  const crud_name_capitalized = capitalizeFirstLetter(crud_name_lowercase);
  const name_attribute_capitalized = capitalizeFirstLetter(
    survey.name_attribute.toLowerCase()
  );
  const crud_name_lowercase_plural = survey.crud_name_plural.toLowerCase();
  const crud_name_capitalized_plural = capitalizeFirstLetter(
    crud_name_lowercase_plural
  );
  const basic_view_class_name = crud_name_capitalized + 'BasicView';
  const info_view_class_name = crud_name_capitalized + 'InfoView';
  const complete_view_class_name = crud_name_capitalized + 'CompleteView';
  const controller_class_name = crud_name_capitalized + 'Controller';
  const service_class_name = crud_name_capitalized + 'Service';

  // 1. create base package if it doesn't exist
  const base_package_path = `${config.project.base_path}/${config.project.modules_base_path}`;
  const package_path = `${base_package_path}/${crud_name_lowercase}`;
  createDirectoryIfNotExists(package_path);

  // 2. create vos
  const vo_path = `${package_path}/vo`;
  createDirectoryIfNotExists(vo_path);

  renderBasicViewTemplate(
    config,
    {
      modules_base_package: modules_base_package,
      crud_name_lowercase: crud_name_lowercase,
      models_base_package: models_base_package,
      crud_name_capitalized: crud_name_capitalized,
      name_attribute_capitalized: name_attribute_capitalized,
      view_class_name: basic_view_class_name,
    },
    `${vo_path}/${basic_view_class_name}.java`
  );

  renderInfoViewTemplate(
    config,
    {
      modules_base_package: modules_base_package,
      crud_name_lowercase: crud_name_lowercase,
      models_base_package: models_base_package,
      crud_name_capitalized: crud_name_capitalized,
      view_class_name: info_view_class_name,
    },
    `${vo_path}/${info_view_class_name}.java`
  );

  renderCompleteViewTemplate(
    config,
    {
      modules_base_package: modules_base_package,
      crud_name_lowercase: crud_name_lowercase,
      models_base_package: models_base_package,
      crud_name_capitalized: crud_name_capitalized,
      view_class_name: complete_view_class_name,
    },
    `${vo_path}/${complete_view_class_name}.java`
  );

  // 3. create controller
  const controllers_base_path = config.project.controllers_base_path;
  const controllers_base_package = config.project.controllers_base_package;
  const principal_package = config.project.principal_package;
  const principal_class = config.project.principal_class;
  renderControllerTemplate(
    config,
    {
      controllers_base_package: controllers_base_package,
      principal_package: principal_package,
      principal_class: principal_class,
      modules_base_package: modules_base_package,
      crud_name_lowercase: crud_name_lowercase,
      crud_name_capitalized: crud_name_capitalized,
      crud_name_uppercase: crud_name_uppercase,
      crud_name_capitalized_plural: crud_name_capitalized_plural,
      crud_name_lowercase_plural: crud_name_lowercase_plural,
      controller_class_name: controller_class_name,
    },
    `${config.project.base_path}/${controllers_base_path}/${controller_class_name}.java`
  );

  // 4. create service
  renderServiceTemplate(
    config,
    {
      modules_base_package: modules_base_package,
      crud_name_lowercase: crud_name_lowercase,
      models_base_package: models_base_package,
      crud_name_capitalized: crud_name_capitalized,
      repositories_base_package: repositories_base_package,
      principal_package: principal_package,
      principal_class: principal_class,
      service_class_name: service_class_name,
      name_attribute_capitalized: name_attribute_capitalized,
      crud_name_capitalized_plural: crud_name_capitalized_plural,
    },
    `${package_path}/${service_class_name}.java`
  );
}
