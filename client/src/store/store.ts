
//importing relevant modules + functions

import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { persistConfigTypes } from "../types/store.types";
import userReducer from "./user/user.reducer";



const presistConfig : persistConfigTypes = {
  key: "main-root",
  storage,
};

const userReduce = persistReducer(presistConfig, userReducer)

//creating store
export const store = configureStore({
  reducer: {
    currentUser: userReduce,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const Persistor = persistStore(store);

export { Persistor };
// exporting types for dispatch and state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;