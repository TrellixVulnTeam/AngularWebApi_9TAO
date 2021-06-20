import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKlienciComponent } from './add-klienci.component';

describe('AddKlienciComponent', () => {
  let component: AddKlienciComponent;
  let fixture: ComponentFixture<AddKlienciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddKlienciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKlienciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
