import { Component, OnInit } from '@angular/core';
import { ClustersService } from 'src/app/services/clusters.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public cloudzones = {};

  constructor(private clustersService: ClustersService) { }

  ngOnInit() {
    this.cloudzones = this.clustersService.getCloudzones();
  }

}

