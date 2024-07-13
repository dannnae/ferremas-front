import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaDetailComponent } from './factura-detail.component';

describe('FacturaComponent', () => {
  let component: FacturaDetailComponent;
  let fixture: ComponentFixture<FacturaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
