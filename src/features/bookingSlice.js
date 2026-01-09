import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


/**
 * POST booking data
 */
export const createBooking = createAsyncThunk(
    "booking/createBooking",
    async (bookingData, { rejectWithValue }) => {
        try {
            const response = await axios.post("http://localhost:3000/patients", bookingData);
            console.log("res", response)

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
















const bookingSlice = createSlice({
    name: "booking",
    initialState: {
        bookings: [],
        loading: false,
        error: null
    },
    reducers: {},

    extraReducers: (builder) => {
        builder
            // POST booking
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

           

}
});

export default bookingSlice.reducer;
