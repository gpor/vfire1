export default function(plop) {
  plop.setGenerator('table model', {
    description: 'table and row model',
    prompts: [
      {
        type: 'input',
        name: 'rowName',
        message: 'row name ?',
      },
      {
        type: 'input',
        name: 'tableName',
        message: 'table name ?',
      },
    ],
    actions: [{
      type: 'add',
      path: 'src/model/{{ properCase tableName }}.js',
      templateFile: 'plop-templates/tableModel.hbs',
    }],
  });
  plop.setGenerator('vue', {
    description: 'vue boilerplate',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name ?',
      },
    ],
    actions: [{
      type: 'add',
      path: 'src/components/{{ properCase name }}.vue',
      templateFile: 'plop-templates/vue.hbs',
    }],
  });
}
