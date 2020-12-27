import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {

  busyRequestConst = 0;

  constructor(private spinnerService:NgxSpinnerService) { }

  busy(){
    this.busyRequestConst ++;
    this.spinnerService.show(undefined,{
      type:'pacman',
      bdColor :'rgba(255,255,255,0.7)',
      color:'#22222'
    });
  }

  idle (){
    this.busyRequestConst--;
    if(this.busyRequestConst<=0){
      this.busyRequestConst = 0;
      this.spinnerService.hide();
    }
  }  
}
