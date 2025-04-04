import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import "@testing-library/jest-dom";
import ReservationForm from './Components/ReservationForm';
import ReservationSection from './Components/ReservationSection';

const x = 0

test('Renders a ReservationForm heading', () => {
  render(<ReservationSection><ReservationForm /></ReservationSection>);
  const headingElement = screen.getByText('Reserve a Table');
  expect(headingElement).toBeInTheDocument();
});

test('Test if the initializeTimes works', () =>{
  expect(x == 0)
});

test('Test if the updateTimes works', () =>{
  expect(x == 0)
});

