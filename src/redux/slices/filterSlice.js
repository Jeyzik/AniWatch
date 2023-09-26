import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedGenre: "",
  sortType: "",
  searchValue: "",
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
  },
});

export const { setSelectedGenre, setSortType, setSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;
