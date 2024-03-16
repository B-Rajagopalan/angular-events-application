import { Injectable } from '@angular/core';

declare let toastr:any; //global reference to access toastr library

@Injectable()
export class ToastrService {
    success(message: string, title?:string) {
       toastr.success(message,title)
    }
    info(message: string, title?: string) {
        toastr.info(message,title)
    }
    warning(message: string, title?: string) {
        toastr.warning(title,message)  //passing as a 2nd argument has some bold effect on the message (refer toastr library)
    }
    error(message: string, title?: string) {
        toastr.error(title,message)
    }
}