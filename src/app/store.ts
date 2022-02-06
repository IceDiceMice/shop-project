import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import bookmark from '../features/bookmark/bookmarkSlice';
export const store = configureStore({
  reducer: {
    bookmark
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
