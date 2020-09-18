import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Sample from './Sample'
afterEach(cleanup)

test('Item Template data', () => {
  const { getByText } = render(<Sample />);
  const library = getByText('Item Creation', 'Task Type :', 'Task Sub-Type :')
  expect(library).toBeInTheDocument();

})
it('should render the Drop Down value correctly', () => {
  // expect(wrapper.findAllByText('option'). .length).toBe(6);
  //
  // )
  const { getByTestId, getAllByText } = render(<Sample />);
  const todoList = getByTestId('todos');
  expect(todoList.children.length).toBe(6);
  const wrapper = '"';
  // expect(getAllByText("Multiple Choice - Keyed","True/False","Multiple Choice - Scaled", "Multiple Choice - Multiple Selection", "Multi-Part")).toBeInTheDocument();
})

it('Snapshot', () => {

  const { asFragment, getByText } = render(<Sample />);
  // expect(asFragment()).toMatchSnapshot();
})