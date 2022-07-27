// prompts -> type
// https://github.com/SBoudrias/Inquirer.js/#question

/** @type {import('plop').NodePlopAPI} */
module.exports = function (plop) {
  plop.setHelper('upperSnakeCase', function (text) {
    return text.replace(/[-\s]/g, '_').toUpperCase()
  })

  // component
  plop.setGenerator('c', {
    description: 'Create a component',
    prompts: [
      {
        type: 'list',
        name: 'category',
        message: 'Choose the component type',
        choices: [
          {
            name: 'Primitive component',
            value: 'primitive',
          },
          {
            name: 'Composite component',
            value: 'composite',
          },
          {
            name: 'Smart component',
            value: 'smart',
          },
        ],
      },
      {
        type: 'input',
        name: 'componentName',
        message: 'Type the component name',
      },
    ],
    actions: [
      {
        type: 'add',
        templateFile: './templates/component.hbs',
        path: './src/components/{{ category }}/{{ pascalCase componentName }}/{{ pascalCase componentName }}.tsx',
      },
      {
        type: 'add',
        templateFile: './templates/component-test.hbs',
        path: './src/components/{{ category }}/{{ pascalCase componentName }}/{{ pascalCase componentName }}.test.tsx',
      },
      {
        type: 'add',
        templateFile: './templates/component-scss.hbs',
        path: './src/components/{{ category }}/{{ pascalCase componentName }}/{{ pascalCase componentName }}.module.scss',
      },
    ],
  })

  // API
  plop.setGenerator('api', {
    description: 'Generate API',
    prompts: [
      {
        type: 'input',
        name: 'apiName',
        message: 'Enter the API name',
      },
    ],
    actions: [
      {
        type: 'add',
        templateFile: './templates/api.hbs',
        path: './pages/api/{{ apiName }}.ts',
      },
    ],
  })

  // Service
  plop.setGenerator('service', {
    description: 'Generate Service',
    prompts: [
      {
        type: 'input',
        name: 'serviceName',
        message: 'Enter the Service name',
      },
    ],
    actions: [
      {
        type: 'add',
        templateFile: './templates/service.hbs',
        path: './src/lib/services/{{ serviceName }}.service.ts',
      },
    ],
  })

  // data constant
  plop.setGenerator('constant', {
    description: 'Generate data constant',
    prompts: [
      {
        type: 'input',
        name: 'constantName',
        message: 'Enter the Constant name',
      },
    ],
    actions: [
      {
        type: 'add',
        templateFile: './templates/constant.hbs',
        path: './src/lib/constants/data/{{ constantName }}.ts',
      },
    ],
  })

  // page
  plop.setGenerator('page', {
    description: 'Generate a page',
    prompts: [
      {
        type: 'input',
        name: 'pageName',
        message: 'Enter the Page name',
      },
    ],
    actions: [
      {
        type: 'add',
        templateFile: './templates/page.hbs',
        path: './pages/{{ pageName }}/index.tsx',
      },
      {
        type: 'modify',
        path: './src/lib/constants/page-path.ts',
        pattern: /}/,
        template: `  {{ upperSnakeCase pageName }} = '/{{ pageName }}',
}`,
      },
    ],
  })

  // id page
  plop.setGenerator('page-id', {
    description: 'Generate an ID page',
    prompts: [
      {
        type: 'input',
        name: 'pageName',
        message: 'Enter the Page name',
      },
    ],
    actions: [
      {
        type: 'add',
        templateFile: './templates/page-id.hbs',
        path: './pages/{{ pageName }}/[id].tsx',
      },
      {
        type: 'modify',
        path: './src/lib/constants/page-path.ts',
        pattern: /}/,
        template: `  {{ upperSnakeCase pageName }}_ID = '/{{ pageName }}/[id]',
}`,
      },
    ],
  })
}
