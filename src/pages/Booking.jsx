import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createBooking } from "../features/bookingSlice";

const Booking = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.booking);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm();

  const today = new Date().toISOString().split("T")[0];
  const now = new Date().toTimeString().slice(0, 5);
  const selectedDate = watch("date");

  const onSubmit = (data) => {
    dispatch(createBooking(data));
    reset();
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl py-4 bg-gray-900 text-white text-center font-bold">
        Book an Appointment
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="p-6">
        {/* Name */}
        <div className="mb-4">
          <label className="block font-bold mb-1">Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            className="w-full border rounded px-3 py-2"
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block font-bold mb-1">Phone</label>
          <input
            type="tel"
            {...register("phone", { required: "Phone is required" })}
            className="w-full border rounded px-3 py-2"
            placeholder="Enter phone number"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        {/* Date */}
        <div className="mb-4">
          <label className="block font-bold mb-1">Date</label>
          <input
            type="date"
            min={today}
            {...register("date", { required: "Date is required" })}
            className="w-full border rounded px-3 py-2"
          />
          {errors.date && (
            <p className="text-red-500 text-sm">{errors.date.message}</p>
          )}
        </div>

        {/* Time */}
        <div className="mb-4">
          <label className="block font-bold mb-1">Time</label>
          <input
            type="time"
            min={selectedDate === today ? now : undefined}
            {...register("time", {
              required: "Time is required",
              validate: (value) =>
                selectedDate !== today || value >= now || "Time cannot be in the past"
            })}
            className="w-full border rounded px-3 py-2"
          />
          {errors.time && (
            <p className="text-red-500 text-sm">{errors.time.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded text-white font-bold
            ${loading ? "bg-gray-400" : "bg-gray-900 hover:bg-gray-800"}`}
        >
          {loading ? "Booking..." : "Book Appointment"}
        </button>

        {error && (
          <p className="text-red-500 text-center mt-3">{error}</p>
        )}
      </form>
    </div>
  );
};

export default Booking;
