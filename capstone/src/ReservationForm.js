import { useForm } from "react-hook-form";

function ReservationForm({ availableTimes, dispatch, submitForm }) { // ✅ Added submitForm to props
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // ✅ Updated submit handler — calls submitForm with validated data
  const onSubmit = (data) => {
    console.log("Form data:", data);
    submitForm(data); // 🔗 Pass form data to parent handler
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* 📅 Date selection — dispatches selected date to reducer */}
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        aria-invalid={errors.date ? "true" : "false"} // ✅ ARIA: marks input as invalid if there's an error
        aria-describedby="res-date-error" // ✅ ARIA: links to error message
        {...register("date", { required: true })}
        onChange={(e) => {
          const selectedDate = e.target.value;
          dispatch({ type: "UPDATE_TIMES", date: selectedDate });
        }}
      />
      {errors.date && (
        <span id="res-date-error" role="alert">
          Date is required
        </span>
      )}

      {/* ⏰ Time selection — dynamically renders availableTimes */}
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        aria-invalid={errors.time ? "true" : "false"} // ✅ ARIA
        aria-describedby="res-time-error" // ✅ ARIA
        {...register("time", { required: true })}
        disabled={!Array.isArray(availableTimes) || availableTimes.length === 0}
      >
        <option value="">Select a time</option>
        {Array.isArray(availableTimes) && availableTimes.length > 0 ? (
          availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))
        ) : (
          <option disabled>No times available</option>
        )}
      </select>
      {errors.time && (
        <span id="res-time-error" role="alert">
          Time is required
        </span>
      )}

      {/* 👥 Number of guests */}
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        placeholder="1"
        min="1"
        max="10"
        aria-invalid={errors.guests ? "true" : "false"} // ✅ ARIA
        aria-describedby="guests-error" // ✅ ARIA
        {...register("guests", { required: true, min: 1, max: 10 })}
      />
      {errors.guests && (
        <span id="guests-error" role="alert">
          Guests must be between 1 and 10
        </span>
      )}

      {/* 🎉 Occasion selection */}
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        aria-invalid={errors.occasion ? "true" : "false"} // ✅ ARIA
        aria-describedby="occasion-error" // ✅ ARIA
        {...register("occasion", { required: true })}
      >
        <option value="">Select occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      {errors.occasion && (
        <span id="occasion-error" role="alert">
          Occasion is required
        </span>
      )}

      {/* ✅ Submit button */}
      <input type="submit" value="Make Your reservation" />

      {/* 🧠 Accessibility Note:
          ARIA attributes were added to inputs and error messages to improve screen reader support.
          This includes aria-invalid, aria-describedby, and role="alert" for dynamic validation feedback.
      */}
    </form>
  );
}

export default ReservationForm;