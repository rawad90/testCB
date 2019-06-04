import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecProtocolsComponent } from './selec-protocols.component';

describe('SelecProtocolsComponent', () => {
  let component: SelecProtocolsComponent;
  let fixture: ComponentFixture<SelecProtocolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecProtocolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecProtocolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
