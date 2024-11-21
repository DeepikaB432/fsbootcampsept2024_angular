import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADDEmployeeComponent } from './addemployee.component';

describe('ADDEmployeeComponent', () => {
  let component: ADDEmployeeComponent;
  let fixture: ComponentFixture<ADDEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ADDEmployeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ADDEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
