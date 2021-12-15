import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

<<<<<<< HEAD
=======
  // Add angular router type
>>>>>>> 33725da2ca66179f346de8c320dbf9c1fdc382fe
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

<<<<<<< HEAD
  // navigate to dashboard
  onLoadDashboard(){
    this.router.navigate(['/dashboard']);
  }

  // navigate to vm-management
  onLoadVmManagement(){
    this.router.navigate(['/vm-management']);
=======
  // navigate to dashboard page
  onLoadDashboard() {
    this.router.navigate(['/dashboard']); // navigate takes route path
>>>>>>> 33725da2ca66179f346de8c320dbf9c1fdc382fe
  }

}
