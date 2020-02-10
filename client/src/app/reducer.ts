import { Action } from "@ngrx/store";
import { AppState } from "./appstate";
import * as Actions from "../actions/actions";

const initialState: AppState = {
  loggedIn: false
};

export function Reducer(state = initialState, action: Actions.Actions) {
  console.log(action.type, state);
  switch (action.type) {
    case "LOGIN":
      return { ...state, loggedIn: true };
    default:
      return state;
  }
}
