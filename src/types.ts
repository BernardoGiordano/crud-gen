export interface ProgramOptions {
  config: string;
}

export type AppConfig = {
  project: {
    base_path: string;
    modules_base_path: string;
    modules_base_package: string;
    models_base_path: string;
    models_base_package: string;
    controllers_base_path: string;
    controllers_base_package: string;
    principal_class: string;
    principal_package: string;
    repositories_base_path: string;
    repositories_base_package: string;
  };
  templates: {
    base_path: string;
  };
};

export type Survey = {
  crud_name: string;
  crud_name_plural: string;
  name_attribute: string;
};

export interface BasicViewTemplateVars {
  modules_base_package: string;
  crud_name_lowercase: string;
  models_base_package: string;
  crud_name_capitalized: string;
  name_attribute_capitalized: string;
  view_class_name: string;
}

export interface InfoViewTemplateVars {
  modules_base_package: string;
  crud_name_lowercase: string;
  models_base_package: string;
  crud_name_capitalized: string;
  view_class_name: string;
}

export interface CompleteViewTemplateVars {
  modules_base_package: string;
  crud_name_lowercase: string;
  models_base_package: string;
  crud_name_capitalized: string;
  view_class_name: string;
}

export interface ControllerTemplateVars {
  controllers_base_package: string;
  principal_package: string;
  principal_class: string;
  modules_base_package: string;
  crud_name_lowercase: string;
  crud_name_capitalized: string;
  crud_name_uppercase: string;
  crud_name_capitalized_plural: string;
  crud_name_lowercase_plural: string;
  controller_class_name: string;
}

export interface ServiceTemplateVars {
  modules_base_package: string;
  crud_name_lowercase: string;
  models_base_package: string;
  crud_name_capitalized: string;
  repositories_base_package: string;
  principal_package: string;
  principal_class: string;
  service_class_name: string;
  name_attribute_capitalized: string;
  crud_name_capitalized_plural: string;
}