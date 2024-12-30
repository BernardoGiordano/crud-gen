export const prompts: any = [
  {
    name: 'crud_name',
    message: 'Crud name (ex. User):',
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
];
