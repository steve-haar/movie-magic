import { cc, FileUtils, Generator, Options } from '@code-shaper/shaper-utils';
import inquirer from 'inquirer';
// @ts-ignore
import inquirerDirectory from 'inquirer-directory';
import path from 'path';

// Register inquirer prompts
inquirer.registerPrompt('directory', inquirerDirectory);

export const fetchHookGenerator: Generator = {
  id: 'fetch-hook',
  name: 'Fetch Hook',
  description: 'generates a fetch hook',
  generate: generateFetchHook,
};

async function generateFetchHook(inputOptions: Options) {
  const questions = [
    {
      type: 'input',
      name: 'itemName',
      message: 'What are you fetching? (e.g. "Movie" or "Movies")',
    },
    {
      type: 'input',
      name: 'returnType',
      message: 'What is the return type? (e.g. "Movie[]")',
    },
    {
      type: 'directory',
      name: 'parentDir',
      message: 'Parent directory?',
      basePath: '.',
    },
  ];

  const options = await inquirer.prompt(questions, inputOptions);
  const { itemName, parentDir } = options;

  // --------------------------------------------------------------------------
  // Add more options for code generation here
  // --------------------------------------------------------------------------
  // Assume that the item in this generator is the thing we are fetching.
  // Example: itemName = Movies

  // itemNameKebabCase = movies
  options['itemNameKebabCase'] = cc.kebabCase(itemName);

  // itemNameCamelCase = movies
  options['itemNameCamelCase'] = cc.camelCase(itemName);

  // itemNamePascalCase = Movies
  options['itemNamePascalCase'] = cc.pascalCase(itemName);

  // itemNameCapitalCase = Movies
  options['itemNameCapitalCase'] = cc.capitalCase(itemName);

  const { itemNamePascalCase } = options;

  // filename = useMovies (then add extension)
  options['filename'] = `use${itemNamePascalCase}`;

  // hookName = useMovies
  options['hookName'] = `use${itemNamePascalCase}`;
  // --------------------------------------------------------------------------

  const { hookName } = options;

  const srcDir = path.join(__dirname, 'templates');
  const dstDir = parentDir;

  console.log();
  console.log(`Creating ${hookName}...`);

  // Create the hook
  FileUtils.transformFiles(srcDir, dstDir, options);

  console.log();
  console.log('Done.');
  console.log();
  console.log(`You can start using ${hookName} in your app`);
  console.log();

  return Promise.resolve();
}
