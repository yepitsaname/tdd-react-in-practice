import { render, screen } from '@testing-library/react';
import App from './App';

test('As a Chef, I want to store my recipes so that I can keep track of them.', () => {
  render(<App />);

  let recipeHeader = screen.getByText('My Recipes');
  expect(recipeHeader).toBeInTheDocument();

  let recipeList = screen.getByText('There are no recipes to list.');
  expect(recipeList).toBeInTheDocument();

  expect(recipeHeader.compareDocumentPosition(recipeList)).toBe(4);
});
