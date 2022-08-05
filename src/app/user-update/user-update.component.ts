import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css'],
})
export class UserUpdateComponent implements OnInit {
  userForm: any;
  user: any = {};
  id: any = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = +params['id'];
      this.getUserDetails(this.id);
    });
  }
  getUserDetails(id: any) {
    this.userService.getUserDetails(id).subscribe((data) => {
      this.user = data;
      this.userForm = this.formBuilder.group({
        firstName: [this.user.firstName, Validators.required],
        lastName: [this.user.lastName, Validators.required],
        qualification: [this.user.qualification, Validators.required],
        address: [this.user.address, Validators.required],
        status: [this.user.status, Validators.required],
      });
    });
  }

  onSubmit() {
    if (this.userForm.value) {
      let data = this.userForm.value;
      data.userId = this.user.userId;
      this.userService.updateUser(this.userForm.value).subscribe((e) => {
        this.router.navigate(['userList']);
      });
    }
  }
}
