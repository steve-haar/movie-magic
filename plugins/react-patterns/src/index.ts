import {
  Options,
  Plugin,
  Generator,
  GeneratorMap,
  selectGenerator,
} from '@code-shaper/shaper-utils';
import { fetchHookGenerator } from './fetchHookGenerator';

const generators: GeneratorMap = {};

function registerGenerator(generator: Generator) {
  const { id } = generator;
  generators[id] = generator;
}

// ----- Register Generators Here -----
registerGenerator(fetchHookGenerator);

const reactPatternsPlugin: Plugin = {
  id: '@movie-magic/react-patterns',
  name: 'React Patterns',
  description: 'generates React Patterns artifacts',
  run: async (inputOptions: Options) => {
    const generator = await selectGenerator(generators, inputOptions);
    if (!generator) {
      return Promise.resolve();
    }

    return generator.generate(inputOptions);
  },
};

export default reactPatternsPlugin;
