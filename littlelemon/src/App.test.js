import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import "@testing-library/jest-dom";
import ReservationForm from './Commponents/ReservationForm';

test('Renders a ReservationForm heading', () => {
  render(<ReservationForm />);
  const headingElement = screen.getByText('Reserve a Table');
  expect(headingElement).toBeInTheDocument();
});

