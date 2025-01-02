export const prompts: any = [
  {
    name: 'crud_name',
    message: 'Crud name in main language (ex. User):',
    validate: (input: string) => {
      // FIXME: check only a-zA-Z
      if (!input) {
        return 'Name is required';
      }
      return true;
    },
  },
  {
    name: 'crud_name_plural',
    message: 'Plural name in main language (ex. Users):',
    validate: (input: string) => {
      // FIXME: check only a-zA-Z
      if (!input) {
        return 'Name is required';
      }
      return true;
    },
  },
  {
    name: 'crud_name_english',
    message: 'Crud name in english (ex. User):',
    validate: (input: string) => {
      // FIXME: check only a-zA-Z
      if (!input) {
        return 'Name is required';
      }
      return true;
    },
  },
  {
    name: 'crud_name_english_plural',
    message: 'Plural name in english (ex. Users):',
    validate: (input: string) => {
      // FIXME: check only a-zA-Z
      if (!input) {
        return 'Name is required';
      }
      return true;
    },
  },
  {
    name: 'name_attribute',
    message: 'Name attribute (ex. name):',
    validate: (input: string) => {
      if (!input) {
        return 'Name attribute is required';
      }
      return true;
    },
  },
  {
    name: 'router_path',
    message: 'Router path (ex. /hr/users):',
    validate: (input: string) => {
      if (!input) {
        return 'Path attribute is required';
      }
      return true;
    },
  },
];
