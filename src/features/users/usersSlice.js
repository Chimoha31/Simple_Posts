import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Atinder Sanghera" },
  { id: "1", name: "Chiho Maekawa" },
  { id: "2", name: "Teddy kun" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
