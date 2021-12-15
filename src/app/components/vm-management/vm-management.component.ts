import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServersService } from 'src/app/services/servers.service';

@Component({
  selector: 'app-vm-management',
  templateUrl: './vm-management.component.html',
  styleUrls: ['./vm-management.component.css']
})
export class VmManagementComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(
    private serversService: ServersService,
    private router: Router
    ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onRealod(){
    this.router.navigate(['/vm-management']);
  }

}
