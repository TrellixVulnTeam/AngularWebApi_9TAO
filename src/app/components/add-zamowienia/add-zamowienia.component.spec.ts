import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddZamowieniaComponent } from './add-zamowienia.component';

describe('AddZamowieniaComponent', () => {
  let component: AddZamowieniaComponent;
  let fixture: ComponentFixture<AddZamowieniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddZamowieniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddZamowieniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
