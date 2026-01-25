import React,{ useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createBooking } from "../features/bookingSlice";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";






const Booking = () => {
  const navigate = useNavigate();

  const { doctorId } = useParams();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.booking);

  // Local state for form fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const today = new Date().toISOString().split("T")[0];
  const now = new Date().toTimeString().slice(0, 5);

  // Manual submit function
  // const submitBooking = (e) => {
  //   e.preventDefault();

  //   dispatch(
  //     createBooking({
  //       doctorId, // from URL
  //       name,
  //       phone,
  //       date,
  //       time,
  //     })
  //   );

  //   // Reset form
  //   setName("");
  //   setPhone("");
  //   setDate("");
  //   setTime("");
  // };



    const submitBooking = async (e) => {
  e.preventDefault();

  try {
    await dispatch(
      createBooking({
        doctorId,
        name,
        phone,
        date,
        time,
      })
    ).unwrap();

    toast.success("Booking created successfully ✅");
    navigate("/"); // 👈 navigate AFTER success

    // Reset form
    setName("");
    setPhone("");
    setDate("");
    setTime("");

  } catch (err) {
    toast.error(err); // conflict / server error
  }
};















































  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl py-4 bg-gray-900 text-white text-center font-bold">
        Book an Appointment
      </h2>

      <form onSubmit={submitBooking} className="p-6">
        {/* Name */}
        <div className="mb-4">
          <label className="block font-bold mb-1">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block font-bold mb-1">Phone</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Enter phone number"
            required
          />
        </div>

        {/* Date */}
        <div className="mb-4">
          <label className="block font-bold mb-1">Date</label>
          <input
            type="date"
            min={today}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        {/* Time */}
        <div className="mb-4">
          <label className="block font-bold mb-1">Time</label>
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          >
            <option value="">Select time</option>
            {Array.from({ length: 48 }, (_, i) => {
              const hours = String(Math.floor(i / 2)).padStart(2, "0");
              const minutes = i % 2 === 0 ? "00" : "30";
              const t = `${hours}:${minutes}`;
              const isPast = date === today && t < now;
              return (
                <option key={t} value={t} disabled={isPast}>
                  {t}
                </option>
              );
            })}
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded text-white font-bold ${
            loading ? "bg-gray-400" : "bg-gray-900 hover:bg-gray-800"
          }`}
        >
          {loading ? "Booking..." : "Book Appointment"}
        </button>

        {error && <p className="text-red-500 text-center mt-3">{error}</p>}
      </form>
    </div>
  );
};

export default Booking;
