import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {
  navItems = [];
  constructor() { }

  generateRouteItem() {
    this.navItems = [];
    for (let i = 1; i <= 6; i++) {
      let navId = Math.floor((Math.random() * 10000) + 1);
      let navLabel = "Route " + i;
      this.navItems.push({ navId, navLabel })
    }
    return this.navItems;
  }
}
