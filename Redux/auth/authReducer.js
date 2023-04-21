import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  // Имя слайса
  name: "auth",
  // Начальное состояние редюсера слайса
  initialState: {
    userId: null,
    nickname: null,
  },
  // Объект редюсеров
  reducers: {
    // addTask(state, action) {},
    // deleteTask(state, action) {},
    // toggleCompleted(state, action) {},
  },
});

// Генераторы экшенов
// const { addTask, deleteTask, toggleCompleted } = authSlice.actions;
// Редюсер слайса
// const authReducer = authSlice.reducer;