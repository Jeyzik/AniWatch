import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  selectedGenre: "",
  sortType: "",
  searchValue: "",
  currentPage: 1,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSelectedGenre(state, action) {
      state.selectedGenre = action.payload;
    },
    setSortType(state, action) {
      state.sortType = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      state.selectedGenre = action.payload.selectedGenre;
      state.sortType = action.payload.sortType;
      state.currentPage = action.payload.currentPage;
    },
  },
});

export const {
  setSelectedGenre,
  setSortType,
  setSearchValue,
  setCurrentPage,
  setFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
