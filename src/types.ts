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
  };
  templates: {
    base_path: string;
  };
};

export type Survey = {
  crud_name: string;
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