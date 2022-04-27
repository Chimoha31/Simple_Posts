import { createSlice, nanoid } from "@reduxjs/toolkit"; //nanoid() => uuid()のようにランダムでidを生成してくれる

const initialState = [
  {
    id: "1",
    title: "Leaning Redux Toolkit",
    content: "I've heard good things.",
  },
  { id: "2", title: "Teddy kun kawaii...", content: "He is my sweet baby boy" },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
