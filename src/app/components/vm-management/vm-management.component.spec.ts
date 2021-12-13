import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmManagementComponent } from './vm-management.component';

describe('VmManagementComponent', () => {
  let component: VmManagementComponent;
  let fixture: ComponentFixture<VmManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VmManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VmManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
