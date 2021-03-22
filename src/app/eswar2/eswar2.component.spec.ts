import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eswar2Component } from './eswar2.component';

describe('Eswar2Component', () => {
  let component: Eswar2Component;
  let fixture: ComponentFixture<Eswar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Eswar2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Eswar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
