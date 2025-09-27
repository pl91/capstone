import { render, screen } from "@testing-library/react";
import ReservationPage from "./ReservationPage";
import { initializeTimes, updateTimes } from "./ReservationPage";
import * as api from "./api"; // ✅ Import module to mock fetchAPI

// ✅ Step 1: Mock fetchAPI for initializeTimes
describe("initializeTimes", () => {
  it("should return the seeded list of times", () => {
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    jest.spyOn(api, "fetchAPI").mockReturnValue(expectedTimes); // ✅ Mock fetchAPI

    const result = initializeTimes();
    expect(result).toEqual(expectedTimes); // ✅ Assert expected output
  });
});

// ✅ Step 2: Mock fetchAPI for updateTimes
describe("updateTimes", () => {
  it("should return the seeded times for a given date", () => {
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    jest.spyOn(api, "fetchAPI").mockReturnValue(expectedTimes); // ✅ Mock fetchAPI

    const initialState = ["17:00", "18:00", "19:00"];
    const action = { type: "UPDATE_TIMES", date: "2025-10-01" }; // ✅ Valid date string

    const result = updateTimes(initialState, action);
    expect(result).toEqual(expectedTimes); // ✅ Assert reducer output
  });
});

// ✅ Step 3: Render test for ReservationPage heading
test("Renders the ReservationPage heading", () => {
  render(<ReservationPage />);
  const headingElement = screen.getByText("Reserve a Table");
  expect(headingElement).toBeInTheDocument(); // ✅ Assert heading is rendered
});