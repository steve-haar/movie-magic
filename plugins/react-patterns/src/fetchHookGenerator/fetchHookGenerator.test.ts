import plugin from '../index';

describe('fetchHookGenerator', () => {
  test('should create a new fetchHook from templates', async () => {
    // suppress console logs
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(console, 'log').mockImplementation(() => {});

    await plugin.run({
      generator: 'fetch-hook',
      itemName: 'Movies',
      returnType: 'Movie[]',
      parentDir: 'test-output/fetch-hook',
    });

    // TODO: Compare test-output with expected-output
    expect(true).toBeTruthy();

    // restore console logs
    jest.restoreAllMocks();
  });
});
