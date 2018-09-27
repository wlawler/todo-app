import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BachataComponent } from './bachata.component';

describe('BachataComponent', () => {
  let component: BachataComponent;
  let fixture: ComponentFixture<BachataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BachataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BachataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
