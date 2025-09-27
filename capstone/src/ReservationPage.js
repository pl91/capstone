import { useReducer } from "react";
import ReservationForm from "./ReservationForm";

// 🔧 Static list of available times — can be made dynamic later
const seededTimes = [
  "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
];

// 🔁 Reducer function — updates availableTimes based on selected date
export function updateTimes(state, action) {
  const selectedDate = action.date;
  console.log("Selected date: from updateTimes reducer function", selectedDate);

  // 🧠 Placeholder logic: always return full list for now
  // Later: filter based on selectedDate or fetch from API
  return seededTimes;
}

// 🧪 Initializer function — sets initial availableTimes
export function initializeTimes() {
  return seededTimes;
}

export default function ReservationPage() {
  // 🧠 useReducer replaces useState for better control over time slot logic
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <main className="ReservationPage my-5">
      <h1 className="text-center my-5 display-4 ll-text-dark-green">
        Reserve a Table
      </h1>

      {/* 🧩 Pass both availableTimes and dispatch to ReservationForm */}
      <ReservationForm availableTimes={availableTimes} dispatch={dispatch} />
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