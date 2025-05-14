import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchLatestNews } from "../../api/news";

export const fetchArticles = createAsyncThunk("articles/fetch", async () => {
  console.log("Fetching articles...");
  const response = await fetchLatestNews();
  return response;
});

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    list: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default articlesSlice.reducer;
