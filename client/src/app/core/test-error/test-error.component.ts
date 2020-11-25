import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.css']
})
export class TestErrorComponent implements OnInit {

  baseUrl = environment.apiUrl;
  validationError : any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  get500Error(){
    this.http.get(this.baseUrl+'buggy/servererror').subscribe(response=>{
      console.log(response);
    },error=>{
      console.log(error);
    });
  }

  get400Error(){
    this.http.get(this.baseUrl+'buggy/servererror').subscribe(response=>{
      console.log(response);
    },error=>{
      console.log(error);
    });
  }

  get400ValidatioError(){
    this.http.get(this.baseUrl + 'products/fortywto').subscribe(response=>{
      console.log(response);
    }, error => {
      console.log(error);
      this.validationError = error.errors.id;
      console.log( this.validationError);
    });
  }

  get404Error(){
    this.http.get(this.baseUrl+'buggy/badrequest').subscribe(response=>{
      console.log(response);
    },error=>{
      console.log(error);
    });
  }

}
