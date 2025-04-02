import { render, screen } from '@testing-library/react';
import React from 'react';
import ReservationForm from './Commponents/ReservationForm';

test('Renders a ReservationForm heading', () => {
  render(<ReservationForm />);
  const headingElement = screen.getByText('Reserve a table');
  expect(headingElement).toBeInTheDocument();
});

test('')
