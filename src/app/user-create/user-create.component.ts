import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
})
export class UserCreateComponent implements OnInit {
  userForm: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      qualification: ['', Validators.required],
      address: ['', Validators.required],
      status: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.userForm.value) {
      this.userService.saveUser(this.userForm.value).subscribe((e) => {
        this.router.navigate(['userList']);
      });
    }
  }
}
