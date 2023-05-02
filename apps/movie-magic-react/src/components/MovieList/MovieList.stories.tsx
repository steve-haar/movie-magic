import type { Meta, StoryObj } from '@storybook/react';
import { MovieList } from './MovieList';

const meta = {
  title: 'Components/MovieList',
  component: MovieList,
  tags: ['autodocs'],
} satisfies Meta<typeof MovieList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MovieListStory: Story = {
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
};
