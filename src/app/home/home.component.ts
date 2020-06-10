import { Component, OnInit } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle';
import { RandomService } from '../service/random.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  navItems: any;
  constructor(private randomService: RandomService, private bnIdle: BnNgIdleService, private router: Router) { }

  ngOnInit() {
    this.navItems = this.randomService.generateRouteItem();
    console.log(this.navItems);
    this.bnIdle.startWatching(300).subscribe((isTimedOut: boolean) => {
      if (isTimedOut) {
        this.router.navigate(['/login']);
      }
    });
  }

}
