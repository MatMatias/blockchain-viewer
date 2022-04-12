import { applyMiddleware, bindActionCreators, createStore } from "redux";
import logger from "redux-logger";
import { reducer } from "./reducer";

export const store = createStore(reducer, applyMiddleware(logger));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
