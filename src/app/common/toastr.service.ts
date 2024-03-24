import { InjectionToken } from '@angular/core';

//dependency injection
//using toastr each time gives a different object so no conflicts can happen
export const TOASTR_TOKEN = new InjectionToken<Toastr>('toastr');

//model object for toastr (just for intellisense)
export interface Toastr {
    success(msg: string, title?: string): void;
    info(msg: string, title?: string): void;
    warning(msg: string, title?: string): void;
    error(msg: string, title?: string): void;
}