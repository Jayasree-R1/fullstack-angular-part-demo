import { Component, OnInit } from "@angular/core";
import { UserService } from "../;

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit {
  userList: any = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUserList().subscribe((data) => {
      this.userList = data;
    });
  }
}
