import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // navigate to dashboard
  onLoadDashboard(){
    this.router.navigate(['/dashboard']);
  }

  // navigate to vm-management
  onLoadVmManagement(){
    this.router.navigate(['/vm-management']);
  }

}
