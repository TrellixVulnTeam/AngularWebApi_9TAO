import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatnosciComponent } from './platnosci.component';

describe('PlatnosciComponent', () => {
  let component: PlatnosciComponent;
  let fixture: ComponentFixture<PlatnosciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatnosciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatnosciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
