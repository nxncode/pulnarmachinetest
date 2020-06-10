import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle';
@Component({
  selector: 'app-randomfields',
  templateUrl: './randomfields.component.html',
  styleUrls: ['./randomfields.component.css']
})
export class RandomfieldsComponent implements OnInit {
  n: number = 0;
  inputArray = ['input', 'combo', 'input', 'combo', 'input', 'combo'];
  resultantArray = [];

  constructor(private route: ActivatedRoute, private bnIdle: BnNgIdleService, private router: Router) {
    this.route.params.subscribe(params => {
      this.paramsChange(params.n);
    });
  }

  ngOnInit() {
    this.bnIdle.startWatching(300).subscribe((isTimedOut: boolean) => {
      if (isTimedOut) {
        this.router.navigate(['../login']);
      }
    });
  }

  paramsChange(n) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let n = parseInt(params.get('n'));
      this.n = n;
    })
    this.resultantArray = [];
    for (let i = 0; i < this.n * 2; i++) {
      let inputType = this.inputArray[Math.floor(Math.random() * 5) + 1];
      this.resultantArray.push({ type: inputType, ngModData: '' });
    }
  }

  submitData() {
    let dataFromForm = [];
    for (let i = 0; i < this.n * 2; i++) {
      console.log(this.resultantArray[i].ngModData)
    }
  }

  resetData() {
    for (let i = 0; i < this.n * 2; i++) {
      this.resultantArray[i].ngModData = '';
    }
  }

}
