import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallclaimComponent } from './viewallclaim.component';

describe('ViewallclaimComponent', () => {
  let component: ViewallclaimComponent;
  let fixture: ComponentFixture<ViewallclaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallclaimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewallclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
