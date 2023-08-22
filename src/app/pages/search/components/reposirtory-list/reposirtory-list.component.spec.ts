import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposirtoryListComponent } from './reposirtory-list.component';

describe('ReposirtoryListComponent', () => {
  let component: ReposirtoryListComponent;
  let fixture: ComponentFixture<ReposirtoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReposirtoryListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReposirtoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
