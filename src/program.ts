import { AppConfig, ProgramOptions, Survey } from './types';
import {renderBasicViewTemplate, renderCompleteViewTemplate, renderInfoViewTemplate} from './renderer';
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
  const crud_name_lowercase = survey.crud_name.toLowerCase();
  const crud_name_capitalized = capitalizeFirstLetter(crud_name_lowercase);
  const name_attribute_capitalized = capitalizeFirstLetter(
    survey.name_attribute.toLowerCase()
  );
  const basic_view_class_name = crud_name_capitalized + 'BasicView';
  const info_view_class_name = crud_name_capitalized + 'InfoView';
  const complete_view_class_name = crud_name_capitalized + 'CompleteView';

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
}
