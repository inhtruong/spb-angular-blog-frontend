import { Component } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.scss'
})
export class StaffComponent {
  menus = [
    {
      name: "Post",
      link: ""
    }, 
    {
      name: "User Management",
      link: "user-management"
    }
  ]
}
