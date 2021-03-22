import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysignComponent } from './mysign.component';

describe('MysignComponent', () => {
  let component: MysignComponent;
  let fixture: ComponentFixture<MysignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MysignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
