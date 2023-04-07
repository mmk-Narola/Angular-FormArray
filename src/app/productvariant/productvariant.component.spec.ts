import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductvariantComponent } from './productvariant.component';

describe('ProductvariantComponent', () => {
  let component: ProductvariantComponent;
  let fixture: ComponentFixture<ProductvariantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductvariantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductvariantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
