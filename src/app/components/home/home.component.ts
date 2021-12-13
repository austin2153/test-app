import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Add angular router type
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // navigate to dashboard page
  onLoadDashboard() {
    this.router.navigate(['/dashboard']); // navigate takes route path
  }

}
