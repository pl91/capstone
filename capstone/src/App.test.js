import { render, screen } from '@testing-library/react';
import ReservationPage from './ReservationPage';
import { initializeTimes, updateTimes } from './ReservationPage';

describe('initializeTimes', () => {
  it('should return the seeded list of times', () => {
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const result = initializeTimes();
    expect(result).toEqual(expectedTimes);
  });
});

describe('updateTimes', () => {
  it('should return the same seeded times regardless of date', () => {
    const initialState = ["17:00", "18:00", "19:00"];
    const action = { type: "UPDATE_TIMES", date: "2025-10-01" };

    const result = updateTimes(initialState, action);
    expect(result).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
  });
});



test('Renders the ReservationPage heading', () => {
    render(<ReservationPage />);
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
})
