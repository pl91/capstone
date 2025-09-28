import { useReducer } from "react";
import { useNavigate } from "react-router-dom"; // 🧭 Add navigation hook
import ReservationForm from "./ReservationForm";

import { fetchAPI, submitAPI } from "./api";

// 🔁 Reducer function — updates availableTimes based on selected date
export function updateTimes(state, action) {
  const selectedDate = new Date(action.date);
  console.log("Selected date: from updateTimes reducer function", selectedDate);

  return fetchAPI(selectedDate); // ✅ fetch available times for selected date
}

// 🧪 Initializer function — sets availableTimes for today's date
export function initializeTimes() {
  const today = new Date();
  return fetchAPI(today); // ✅ use same import as reducer
}

export default function ReservationPage() {
  const navigate = useNavigate(); // 🧭 enables programmatic navigation

  // 🧠 useReducer replaces useState for better control over time slot logic
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  // ✅ Step 2A: Define submitForm function and wire to submitAPI
  const submitForm = (formData) => {
    const success = submitAPI(formData); // 🔗 call simulated API
    if (success) {
      navigate("/confirmed"); // 🧭 redirect to confirmation page
    }
  };

  return (
    <main className="ReservationPage my-5">
      <h1 className="text-center my-5 display-4 ll-text-dark-green">
        Reserve a Table
      </h1>

      {/* 🧩 Pass availableTimes, dispatch, and submitForm to ReservationForm */}
      <ReservationForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm} // ✅ Step 2B: pass down to child
      />
    </main>
  );
}
















//  OLD CODE

// import { useState } from "react";
// import ReservationForm from "./ReservationForm";

// export default function ReservationPage() {
//   const [availableTimes, setAvailableTimes] = useState([
//     "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
//   ]);

//   return (
//     <main className="ReservationPage my-5">
//       <h1 className="text-center my-5 display-4 ll-text-dark-green">
//         Reserve a Table
//       </h1>
//       <ReservationForm availableTimes={availableTimes} />
//     </main>
//   );
// }