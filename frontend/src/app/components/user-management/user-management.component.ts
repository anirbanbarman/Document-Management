import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {
  users: User[] = []; // List of users
  roles: string[] = ['admin', 'editor', 'viewer']; // Available roles
  originalRoles: Map<string, string> = new Map(); 

  constructor(private userService: UserService,private alertService:AlertService) {}

  ngOnInit(): void {
    // Fetch users from the backend
    this.userService.getUsers().subscribe((users) => {
      this.users = users.map((user) => ({ ...user, isEditing: false }));
    },
  error=>{
    this.alertService.error(error?.error?.message||'This is an error message!');
  });
  }

  // Enable edit mode for a user
  editRole(user: User): void {
    this.originalRoles.set(user.id, user.role); // Save the current role for cancelation
    user.isEditing = true;
  }

  // Save the updated role
  saveRole(user: User): void {
    user.isEditing = false;

    // Call the API to update the user's role
    this.userService.updateUserRole(user.id, user.role).subscribe(() => {
      // alert('Role updated successfully!');
    this.alertService.success("Role updated successfully!"||'This is an error message!');

    });
  }

  // Cancel editing and revert to the original role
  cancelEdit(user: any): void {
    user.role = this.originalRoles.get(user.id) || user.role; // Restore the original role
    user.isEditing = false;
  }

  // Delete a user
  deleteUser(user: User): void {
    this.userService.deleteUser(user.username).subscribe(() => {
    this.alertService.success("Role deleted successfully!"||'This is an error message!');

      this.users = this.users.filter((u) => u !== user);
    },error=>{
      this.alertService.error(error?.error?.message||'This is an error message!');

    });
  }
}
