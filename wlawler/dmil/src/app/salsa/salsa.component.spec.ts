import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalsaComponent } from './salsa.component';

describe('SalsaComponent', () => {
  let component: SalsaComponent;
  let fixture: ComponentFixture<SalsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
