import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin=false;




  constructor(private formBuilder: FormBuilder,private  router :Router) { 


  }
  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  onSubmit(){
console.log("value--"+this.loginForm.value);
let data=this.loginForm.value;
if(data.email=="satyach8189@gmail.com" && data.password=="welcome"){
  this.router.navigate(['userList']);
}else{
  this.invalidLogin=true;
}
   
  }
}
