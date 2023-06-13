import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpRiderComponent } from './help-rider.component';

describe('HelpRiderComponent', () => {
  let component: HelpRiderComponent;
  let fixture: ComponentFixture<HelpRiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpRiderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpRiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
