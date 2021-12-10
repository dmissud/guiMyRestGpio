import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpiopinsComponent } from './gpiopins.component';

describe('GpiopinsComponent', () => {
  let component: GpiopinsComponent;
  let fixture: ComponentFixture<GpiopinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpiopinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpiopinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
