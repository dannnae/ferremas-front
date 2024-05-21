import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerramientasManualesComponent } from './herramientas-manuales.component';

describe('HerramientasManualesComponent', () => {
  let component: HerramientasManualesComponent;
  let fixture: ComponentFixture<HerramientasManualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerramientasManualesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerramientasManualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
