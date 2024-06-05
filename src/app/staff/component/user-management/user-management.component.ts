import { RoleService } from './../../../core/service/role.service';
import { Component } from '@angular/core';
import { Role } from '../../../core/interface/role';
import { User } from '../../../core/interface/user';
import { UserService } from '../../../core/service/user.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss',
  providers: [MessageService],
})
export class UserManagementComponent {

  roles!: Role[];

  users!: User[];

  isVisible: boolean = false;

  isEdit: boolean = false;

  user!: User;

  constructor(
    private roleService: RoleService,
    private userService: UserService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getRoles();
    this.getUsers();
  }

  /**
   * Retrieves the roles from the role service and updates the local roles array.
   *
   * @return {void} No return value.
   */
  getRoles() {
    this.roleService.getRoles().subscribe({
        next: (roles) => {
            this.roles = roles;
        },
        error: (error) => {
            console.log(error);
            
        }
    })
  }

  /**
   * Retrieves the users from the user service and updates the local users array.
   *
   * @return {void} No return value.
   */
  getUsers() {
    this.userService.getUsers().subscribe({
        next: (users) => {
            this.users = users;
        },
        error: (error) => {
            console.log(error);
            
        }
    })
  }

  /**
   * Returns the name of the role with the given ID from the list of roles.
   *
   * @param {number} roleId - The ID of the role to find.
   * @return {string | undefined} The name of the role, or undefined if no role with the given ID is found.
   */
  getRole(roleId: number) {
    return this.roles.find(role => role.id == roleId)?.name;
  }

  /**
   * Opens a dialog for editing a user.
   *
   * @param {any} user - The user object to be edited.
   * @return {void} This function does not return anything.
   */
  openDialogEdit(user: any) {
    this.isEdit = true;
    this.isVisible = true;
    this.user = {...user};
  }



  /**
   * Opens a dialog for creating a new user.
   *
   * @return {void} This function does not return anything.
   */
  openDialogNew() {
    this.isEdit = false;
    this.isVisible = true;

    // Create a new user object with default values for active and roleId.
    this.user = {
      roleId: 1,
      active: true
    }
  };

  /**
   * Saves the user data. If the user has an ID, it updates the user details.
   * Otherwise, it creates a new user.
   *
   * @return {void} This function does not return anything.
   */
  save() {
    if(this.user.id) {
      // update
      this.userService.update(this.user.id, this.user).subscribe({
        next: (id) => {
          this.isVisible = false; // close dialog
          const index = this.users.findIndex(user => user.id == this.user.id);
          if (index != -1) {
            this.users[index] = this.user;
          }
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User updated successfully' });
        },
        error: (error) => {
          console.log(error);
        }
      });
    } else {
      // create
      this.userService.create(this.user).subscribe({
        next: (id) => {
          this.user.id = id;
          this.isVisible = false; // close dialog
          this.users.push({
            ...this.user,
            id: id
          }); // add to table
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User created successfully' });
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }
}
