import { render, screen, fireEvent } from "@testing-library/react";
import ReservationPage from "./ReservationPage";
import { initializeTimes, updateTimes } from "./ReservationPage";
import * as api from "./api"; // ✅ Import module to mock fetchAPI
import { BrowserRouter } from "react-router-dom";
import ReservationForm from "./ReservationForm";



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
describe("ReservationPage heading", () => {
  test("renders the ReservationPage heading", () => {
    render(
      <BrowserRouter>
        <ReservationPage />
      </BrowserRouter>
    );

    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
  });
});

// ✅ Step 4: Form validation tests for ReservationForm
describe("ReservationForm validation behavior", () => {
  const setup = () =>
    render(
      <ReservationForm
        availableTimes={["17:00", "18:00"]}
        dispatch={() => {}}
        submitForm={() => {}}
      />
    );

  test("shows errors when submitting empty form", async () => {
    setup();
    fireEvent.click(screen.getByRole("button", { name: /make your reservation/i }));

    expect(await screen.findByText(/date is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/time is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/guests must be between 1 and 10/i)).toBeInTheDocument();
    expect(await screen.findByText(/occasion is required/i)).toBeInTheDocument();
  });

  test("does not show errors when form is valid", async () => {
    setup();

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2025-10-01" },
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: "17:00" },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "4" },
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: "Birthday" },
    });

    fireEvent.click(screen.getByRole("button", { name: /make your reservation/i }));

    expect(screen.queryByText(/date is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/time is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/guests must be between 1 and 10/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/occasion is required/i)).not.toBeInTheDocument();
  });
});







