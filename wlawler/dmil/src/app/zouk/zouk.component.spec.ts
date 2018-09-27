import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoukComponent } from './zouk.component';

describe('ZoukComponent', () => {
  let component: ZoukComponent;
  let fixture: ComponentFixture<ZoukComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoukComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
