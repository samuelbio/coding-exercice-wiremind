import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitersComponent } from './commiters.component';

describe('CommitersComponent', () => {
  let component: CommitersComponent;
  let fixture: ComponentFixture<CommitersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommitersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
