import { Component, OnInit } from '@angular/core';

import { RandomService } from '../service/random.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  navItems: any;
  constructor(private randomService: RandomService) { }

  ngOnInit() {
    this.navItems = this.randomService.generateRouteItem();
    console.log(this.navItems);
  }

}
