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

export interface TemplateVars {
  modules_base_package: string;
  crud_name_lowercase: string;
  models_base_package: string;
  crud_name_capitalized: string;
  name_attribute_capitalized: string;
  basic_view_class_name: string;
  info_view_class_name: string;
  complete_view_class_name: string;
  controllers_base_package: string;
  principal_package: string;
  principal_class: string;
  crud_name_uppercase: string;
  crud_name_capitalized_plural: string;
  crud_name_lowercase_plural: string;
  controller_class_name: string;
  repositories_base_package: string;
  service_class_name: string;
  name_attribute_lowercase: string;
}
