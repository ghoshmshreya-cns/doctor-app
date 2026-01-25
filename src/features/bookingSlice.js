import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


/**
 * POST booking data with conflict check
 */
export const createBooking = createAsyncThunk(
    "booking/createBooking",
    async (bookingData, { rejectWithValue }) => {
        try {
            // 1️⃣ Get existing bookings
            const existing = await axios.get("http://localhost:3000/patients");

            // 2️⃣ Check conflict
            const conflict = existing.data.find(
                (booking) =>
                    booking.doctorId === bookingData.doctorId &&
                    booking.date === bookingData.date &&
                    booking.time === bookingData.time
            );

            if (conflict) {

                
                return rejectWithValue(
                    "This doctor is already booked for the selected time."
                );

            }

            // 3️⃣ Create booking
            const response = await axios.post(
                "http://localhost:3000/patients",
                bookingData
            );


         
            return response.data;
          
            

        } catch (error) {

            // toast.error("Something went wrong 😢");
            return rejectWithValue(error.message);
        }
    }
);

const bookingSlice = createSlice({
    name: "booking",
    initialState: {
        bookings: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createBooking.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createBooking.fulfilled, (state, action) => {
                state.loading = false;
                state.bookings.push(action.payload);
            })
            .addCase(createBooking.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default bookingSlice.reducer;
