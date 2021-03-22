import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eswar1Component } from './eswar1.component';

describe('Eswar1Component', () => {
  let component: Eswar1Component;
  let fixture: ComponentFixture<Eswar1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Eswar1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Eswar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
