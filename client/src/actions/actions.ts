import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { AppState } from "../app/appstate";

export const LOGIN = "LOGIN";

export class Login implements Action {
  readonly type = LOGIN;

  constructor(public payload: AppState) {}
}

export type Actions = Login;
