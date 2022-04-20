import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Leaning Redux Toolkit",
    content: "I've heard good things.",
  },
  { id: "2", title: "Teddy kun kawaii...", content: "He is my sweet baby boy" },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
      }
})

export const selectAllPosts = (state) => state.posts;
export default postsSlice.reducer;