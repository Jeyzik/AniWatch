import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
  },
});

export const { setSelectedGenre, setSortType, setSearchValue, setCurrentPage } =
  filterSlice.actions;

export default filterSlice.reducer;
