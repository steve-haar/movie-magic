import type { Preview } from '@storybook/react';

// Import any required css here
import '@movie-magic/ui-lib/src/styles/main.css';

const preview: Preview = {
  parameters: {
    // Show calls to "on*" arguments (based on user actions) in the Actions panel
    actions: { argTypesRegex: '^on[A-Z].*' },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
