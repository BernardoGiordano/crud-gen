import {
  AppConfig,
  BackendTemplateVars,
  FrontendTemplateVars,
  ProgramOptions,
  Survey,
} from './types';
import {
  renderBasicViewTemplate,
  renderCompleteViewTemplate,
  renderControllerTemplate,
  renderDtoTemplate,
  renderFeDetailPageTemplate,
  renderFeFormGroupTemplate,
  renderFeGeneralComponentTemplate,
  renderFeListPageTemplate,
  renderFeMetadataComponentTemplate,
  renderFeModelTemplate,
  renderFeModuleTemplate,
  renderFeRoutingModuleTemplate,
  renderFeServiceTemplate,
  renderInfoViewTemplate,
  renderMapperTemplate,
  renderNotFoundExceptionTemplate,
  renderRepositoryTemplate,
  renderServiceTemplate,
} from './renderer';
import { capitalizeFirstLetter, createDirectoryIfNotExists } from './utils';
import path from 'node:path';

export function createBackendCrud(
  options: ProgramOptions,
  config: AppConfig,
  survey: Survey
) {
  const modules_base_package = config.project.modules_base_package;
  const models_base_package = config.project.models_base_package;
  const repositories_base_package = config.project.repositories_base_package;
  const repositories_base_path = config.project.repositories_base_path;
  const controllers_base_path = config.project.controllers_base_path;
  const controllers_base_package = config.project.controllers_base_package;
  const principal_package = config.project.principal_package;
  const principal_class = config.project.principal_class;
  const crud_name_lowercase = survey.crud_name.toLowerCase();
  const crud_name_uppercase = survey.crud_name.toUpperCase();
  const crud_name_capitalized = capitalizeFirstLetter(crud_name_lowercase);

  const name_attribute_lowercase =
    survey.name_attribute.charAt(0).toLowerCase() +
    survey.name_attribute.slice(1);

  const name_attribute_capitalized = capitalizeFirstLetter(
    name_attribute_lowercase
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

  const base_package_path = path.join(
    config.project.base_path,
    config.project.modules_base_path
  );
  const package_path = path.join(base_package_path, crud_name_lowercase);
  const vo_path = path.join(package_path, 'vo');
  const exception_path = path.join(package_path, 'exception');

  const templateVars: BackendTemplateVars = {
    modules_base_package: modules_base_package,
    crud_name_lowercase: crud_name_lowercase,
    models_base_package: models_base_package,
    crud_name_capitalized: crud_name_capitalized,
    name_attribute_capitalized: name_attribute_capitalized,
    name_attribute_lowercase: name_attribute_lowercase,
    basic_view_class_name: basic_view_class_name,
    info_view_class_name: info_view_class_name,
    complete_view_class_name: complete_view_class_name,
    controllers_base_package: controllers_base_package,
    principal_package: principal_package,
    principal_class: principal_class,
    crud_name_uppercase: crud_name_uppercase,
    crud_name_capitalized_plural: crud_name_capitalized_plural,
    crud_name_lowercase_plural: crud_name_lowercase_plural,
    controller_class_name: controller_class_name,
    repositories_base_package: repositories_base_package,
    service_class_name: service_class_name,
  };

  // 1. create base package if it doesn't exist
  createDirectoryIfNotExists(package_path);

  // 2. create vos
  createDirectoryIfNotExists(vo_path);

  renderBasicViewTemplate(
    config,
    templateVars,
    path.join(vo_path, `${basic_view_class_name}.java`)
  );

  renderInfoViewTemplate(
    config,
    templateVars,
    path.join(vo_path, `${info_view_class_name}.java`)
  );

  renderCompleteViewTemplate(
    config,
    templateVars,
    path.join(vo_path, `${complete_view_class_name}.java`)
  );

  // 3. create controller
  renderControllerTemplate(
    config,
    templateVars,
    path.join(
      config.project.base_path,
      controllers_base_path,
      `${controller_class_name}.java`
    )
  );

  // 4. create service
  renderServiceTemplate(
    config,
    templateVars,
    path.join(package_path, `${service_class_name}.java`)
  );

  // 5. create repository
  renderRepositoryTemplate(
    config,
    templateVars,
    path.join(
      config.project.base_path,
      repositories_base_path,
      `${crud_name_capitalized}Repository.java`
    )
  );

  // 6. create dto
  renderDtoTemplate(
    config,
    templateVars,
    path.join(package_path, `${crud_name_capitalized}Dto.java`)
  );

  // 7. create exception directory if it doesn't exist
  createDirectoryIfNotExists(exception_path);

  // 8. create exceptions
  renderNotFoundExceptionTemplate(
    config,
    templateVars,
    path.join(exception_path, `${crud_name_capitalized}NotFoundException.java`)
  );

  // 9. create mapper
  renderMapperTemplate(
    config,
    templateVars,
    path.join(package_path, `${crud_name_capitalized}Mapper.java`)
  );
}

export function createFrontendCrud(
  options: ProgramOptions,
  config: AppConfig,
  survey: Survey
) {
  const modules_base_path = config.project.modules_base_path;
  const modules_base_package = config.project.modules_base_package;
  const crud_name_lowercase = survey.crud_name.toLowerCase();
  const crud_name_uppercase = survey.crud_name.toUpperCase();
  const crud_name_capitalized = capitalizeFirstLetter(crud_name_lowercase);

  const name_attribute_lowercase =
    survey.name_attribute.charAt(0).toLowerCase() +
    survey.name_attribute.slice(1);

  const name_attribute_capitalized = capitalizeFirstLetter(
    name_attribute_lowercase
  );
  const crud_name_lowercase_plural = survey.crud_name_plural.toLowerCase();
  const crud_name_capitalized_plural = capitalizeFirstLetter(
    crud_name_lowercase_plural
  );
  const crud_name_english_lowercase = survey.crud_name_english.toLowerCase();
  const crud_name_english_capitalized = capitalizeFirstLetter(
    crud_name_english_lowercase
  );
  const crud_name_english_plural_lowercase =
    survey.crud_name_english_plural.toLowerCase();
  const crud_name_english_plural_capitalized = capitalizeFirstLetter(
    crud_name_english_plural_lowercase
  );

  const base_package_path = path.join(
    config.project.base_path,
    config.project.modules_base_path
  );
  const package_path = path.join(
    base_package_path,
    crud_name_english_plural_lowercase
  );
  const components_path = path.join(package_path, 'components');
  const forms_path = path.join(package_path, 'forms');
  const pages_path = path.join(package_path, 'pages');
  const services_path = path.join(package_path, 'services');
  const model_path = path.join(package_path, 'model');

  const templateVars: FrontendTemplateVars = {
    modules_base_package: modules_base_package,
    crud_name_lowercase: crud_name_lowercase,
    crud_name_capitalized: crud_name_capitalized,
    name_attribute_capitalized: name_attribute_capitalized,
    name_attribute_lowercase: name_attribute_lowercase,
    crud_name_uppercase: crud_name_uppercase,
    crud_name_capitalized_plural: crud_name_capitalized_plural,
    crud_name_lowercase_plural: crud_name_lowercase_plural,
    crud_name_english_lowercase: crud_name_english_lowercase,
    crud_name_english_capitalized: crud_name_english_capitalized,
    crud_name_english_plural_lowercase: crud_name_english_plural_lowercase,
    crud_name_english_plural_capitalized: crud_name_english_plural_capitalized,
    router_path: survey.router_path,
  };

  // 1. create base directories if they don't exist
  createDirectoryIfNotExists(package_path);
  createDirectoryIfNotExists(components_path);
  createDirectoryIfNotExists(forms_path);
  createDirectoryIfNotExists(pages_path);
  createDirectoryIfNotExists(services_path);
  createDirectoryIfNotExists(model_path);

  // 2. create model
  renderFeModelTemplate(
    config,
    templateVars,
    path.join(model_path, `${crud_name_english_plural_lowercase}.model.ts`)
  );

  // 3. create form-group
  renderFeFormGroupTemplate(
    config,
    templateVars,
    path.join(forms_path, `${crud_name_english_lowercase}.form-group.ts`)
  );

  // 4. create service
  renderFeServiceTemplate(
    config,
    templateVars,
    path.join(services_path, `${crud_name_english_plural_lowercase}.service.ts`)
  );

  // 5. create metadata tab component
  const metadata_component_path = path.join(
    components_path,
    `${crud_name_english_lowercase}-metadata-tab`
  );
  createDirectoryIfNotExists(metadata_component_path);

  renderFeMetadataComponentTemplate(
    config,
    templateVars,
    path.join(metadata_component_path, crud_name_english_lowercase)
  );

  // 6. create general tab component
  const general_component_path = path.join(
    components_path,
    `${crud_name_english_lowercase}-general-tab`
  );
  createDirectoryIfNotExists(general_component_path);

  renderFeGeneralComponentTemplate(
    config,
    templateVars,
    path.join(general_component_path, crud_name_english_lowercase)
  );

  // 7. create list page
  const list_page_path = path.join(
    pages_path,
    crud_name_english_plural_lowercase
  );
  createDirectoryIfNotExists(list_page_path);

  renderFeListPageTemplate(
    config,
    templateVars,
    path.join(list_page_path, crud_name_english_plural_lowercase)
  );

  // 8. create detail page
  const detail_page_path = path.join(pages_path, crud_name_english_lowercase);
  createDirectoryIfNotExists(detail_page_path);

  renderFeDetailPageTemplate(
    config,
    templateVars,
    path.join(detail_page_path, crud_name_english_lowercase)
  );

  // 9. create modules
  renderFeRoutingModuleTemplate(
    config,
    templateVars,
    path.join(
      package_path,
      `${crud_name_english_plural_lowercase}-routing.module.ts`
    )
  );

  renderFeModuleTemplate(
    config,
    templateVars,
    path.join(package_path, `${crud_name_english_plural_lowercase}.module.ts`)
  );
}
