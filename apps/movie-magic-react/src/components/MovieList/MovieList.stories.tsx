import type { Meta, StoryObj } from '@storybook/react';
import { MovieList } from './MovieList';

const meta = {
  title: 'Components/MovieList',
  component: MovieList,
  tags: ['autodocs'],
  argTypes: {
    movies: {
      description: 'A list of movies',
    },
  },
} satisfies Meta<typeof MovieList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic = {
  args: {
    movies: [
      {
        name: 'The Shawshank Redemption',
        year: 1994,
        rating: 9.3,
      },
      {
        name: 'The Godfather',
        year: 1972,
        rating: 9.2,
      },
      {
        name: 'The Godfather: Part II',
        year: 1974,
        rating: 9.0,
      },
    ],
  },
} satisfies Story;
