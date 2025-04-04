import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import "@testing-library/jest-dom";
import ReservationForm from './Components/ReservationForm';
import ReservationSection from './Components/ReservationSection';

test('Renders a ReservationForm heading', () => {
  render(<ReservationSection><ReservationForm /></ReservationSection>);
  const headingElement = screen.getByText('Reserve a Table');
  expect(headingElement).toBeInTheDocument();
});

const mockForm = jest.fn();
jest.mock("./ReservationSection", () => (props) => {
  mockForm(props);
  return <mock-ReservationSection />;
});

test('Test if the fetchAPI working', () =>{
  const reservation = render(<ReservationSection><ReservationForm state={state} dispatch={dispatch}/></ReservationSection>);
  expect()
});

