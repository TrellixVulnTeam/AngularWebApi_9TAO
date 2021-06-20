import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDaniaComponent } from './add-dania.component';

describe('AddDaniaComponent', () => {
  let component: AddDaniaComponent;
  let fixture: ComponentFixture<AddDaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDaniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
