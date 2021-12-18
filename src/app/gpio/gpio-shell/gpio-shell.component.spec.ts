import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpioShellComponent } from './gpio-shell.component';

describe('GpioShellComponent', () => {
  let component: GpioShellComponent;
  let fixture: ComponentFixture<GpioShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpioShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpioShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
