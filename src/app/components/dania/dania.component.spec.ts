import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaniaComponent } from './dania.component';

describe('DaniaComponent', () => {
  let component: DaniaComponent;
  let fixture: ComponentFixture<DaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
