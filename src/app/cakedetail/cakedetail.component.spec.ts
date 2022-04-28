import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakedetailComponent } from './cakedetail.component';

describe('CakedetailComponent', () => {
  let component: CakedetailComponent;
  let fixture: ComponentFixture<CakedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CakedetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CakedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
