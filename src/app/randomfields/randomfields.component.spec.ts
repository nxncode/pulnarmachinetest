import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomfieldsComponent } from './randomfields.component';

describe('RandomfieldsComponent', () => {
  let component: RandomfieldsComponent;
  let fixture: ComponentFixture<RandomfieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomfieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomfieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
