import { render, screen } from '@testing-library/react';
import '@testing-library/dom';
import App from './App';

import userEvent from '@testing-library/user-event'

test('As a Chef, I want to store my recipes so that I can keep track of them.', () => {
  render(<App />);

  let recipeHeader = screen.getByText('My Recipes');
  expect(recipeHeader).toBeInTheDocument();

  let recipeList = screen.getByText('There are no recipes to list.');
  expect(recipeList).toBeInTheDocument();

  expect(recipeHeader.compareDocumentPosition(recipeList)).toBe(4);
});

test('Contains an add recipe button', ()=>{
  render(<App />);

  let recipeHeader = screen.getByText('My Recipes');
  let button = screen.getByRold('button', {name: 'Add Recipe'});

  expect(button).toBeInTheDocument();
  expect(recipeHeader.compareDocumentPosition(button)).toBe(4);
});

test('Contains an add recipe button that when clicked opens a form', async () => {
  render(<App />);

  let button = screen.getByRole('button', {name: 'Add Recipe'});
  userEvent.click(button);

  let form = await screen.findByRole('form', undefined, {timeout:3000});

  expect(form).toBeInTheDocument();
  expect(screen.getByRole('textbox', {name: /Recipe name/i})).toBeInTheDocument();
  expect(screen.getByRole('textbox', {name: /instructions/i})).toBeInTheDocument();

  button = screen.queryByRole('button', {name: 'Add Recipe'});
  expect(button).toBeNull();
});