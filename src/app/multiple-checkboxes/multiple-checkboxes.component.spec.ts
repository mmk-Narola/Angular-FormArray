import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleCheckboxesComponent } from './multiple-checkboxes.component';

describe('MultipleCheckboxesComponent', () => {
  let component: MultipleCheckboxesComponent;
  let fixture: ComponentFixture<MultipleCheckboxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleCheckboxesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleCheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
